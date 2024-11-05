import { useCallback, useEffect, useRef, useState } from "react";
import { combineFn, deepFreeze, is, setTimeoutOnce } from "zeta-dom/util";
import { containsOrEquals, scrollIntoView, toPlainRect } from "zeta-dom/domUtil";
import { classNames, combineRef, domEventRef, partial, useObservableProperty } from "zeta-dom-react";
import { TextInput } from "src/components/controls";
import dom, { focus } from "zeta-dom/dom";
import { FaSearch } from "react-icons/fa";
import { app } from "src/init";

const cssHighlights = (CSS as any).highlights;
const Highlight = (window as any).Highlight;
const isHighlightSupported = !!cssHighlights;
const emptyState = deepFreeze({
    hits: [] as Range[],
    index: -1
});

function highlightRange(range: Range) {
    const node = range.commonAncestorContainer;
    cssHighlights.set('find-text-current', new Highlight(range));
    scrollIntoView(is(node, Element) || node.parentElement!, toPlainRect(range.getBoundingClientRect()).expand(50));
}

function clearHighlight() {
    cssHighlights.delete('find-text');
    cssHighlights.delete('find-text-current');
}

function findHits(input: HTMLInputElement) {
    const { selectionStart, selectionEnd, selectionDirection } = input;
    const hits = [];
    let previous: Range | undefined;
    while ((window as any).find(input.value)) {
        var range = window.getSelection()?.getRangeAt(0)!;
        if (!containsOrEquals(input, range.commonAncestorContainer)) {
            range = range.cloneRange();
            // handle a bug that window.find will stuck at a particular position
            if (previous && !previous.compareBoundaryPoints(0, range)) {
                break;
            }
            hits.push(range);
            previous = range;
        }
    }
    clearHighlight();
    if (hits[0]) {
        cssHighlights.set('find-text', new Highlight(...hits));
    }
    input.setSelectionRange(selectionStart, selectionEnd, selectionDirection || 'forward');
    return hits;
}

function PageSearchImpl() {
    const textSearchEnabled = useObservableProperty(app, 'textSearchEnabled');
    const ref = useRef<HTMLLabelElement>(null);
    const [{ hits, index }, setState] = useState(emptyState);

    const findByText = useCallback(() => {
        const hits = findHits(ref.current!.querySelector('input')!);
        setState(hits[0] ? { hits, index: 0 } : emptyState);
    }, []);

    useEffect(() => {
        if (hits[index]) {
            highlightRange(hits[index]);
        }
    }, [hits, index]);

    useEffect(() => {
        return combineFn(
            clearHighlight,
            dom.on('ctrlF', e => {
                focus(ref.current!);
                e.handled();
            })
        );
    }, []);

    return (
        <div id="app-content-search" className={classNames({ active: textSearchEnabled })}>
            <TextInput ref={combineRef(ref, domEventRef({ enter: traverse, shiftEnter: traverse, focusin, focusout }))}
                icon={FaSearch} placeholder="Search in page"
                onChange={() => setTimeoutOnce(findByText)} />
        </div>
    );

    function focusin() {
        app.textSearchEnabled = true;
        if (ref.current!.querySelector('input')!.value) {
            findByText();
        }
    }

    function focusout() {
        app.textSearchEnabled = false;
        setState(emptyState);
        clearHighlight();
    }

    function traverse(e: Zeta.ZetaEvent) {
        if (hits[0]) {
            partial(setState)('index', (index + (e.type === 'enter' ? 1 : hits.length - 1)) % hits.length);
        }
    }
}

export function PageSearch() {
    return isHighlightSupported ? <PageSearchImpl /> : null;
}
