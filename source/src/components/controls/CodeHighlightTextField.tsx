import { themes } from "prism-react-renderer";
import React, { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { setClass } from "zeta-dom/domUtil";
import { TextField, TextFieldProps, useFormField, useRefInitCallback } from "zeta-dom-react";
import { each, setTimeout } from "zeta-dom/util";
import dom, { insertText } from "zeta-dom/dom";
import { Mixin } from "brew-js-react";
import { useUndoableInputMixin } from "@misonou/react-app-utils";
import { app } from "src/init";
import { useDetachedRoot } from "src/util";
import { HighlightWrapper } from "src/util/prism";

export interface CodeHighlightTextFieldProps extends TextFieldProps {
    language: string;
}

export function CodeHighlightTextField(props: CodeHighlightTextFieldProps) {
    const { value, error, setValue, elementRef } = useFormField(TextField, props);

    const render = useCallback((code: string) => {
        return (<HighlightWrapper code={code} language={props.language} theme={themes[app.codeTheme]} />);
    }, [props.language, app.codeTheme]);

    return (
        <div ref={elementRef} className="zui-field zui-code-highlight-field">
            {props.label &&
                <div className="zui-field-label">{props.label}</div>}
            <CodeHighlightInput value={value} onChange={setValue} onRender={render} />
            {error &&
                <div className="zui-field-error">{error}</div>}
        </div>
    );
}

interface CodeHighlightInputProps {
    value: string;
    onChange: (value: string) => void;
    onRender: (value: string) => React.ReactNode;
}

function CodeHighlightInput(props: CodeHighlightInputProps) {
    const { value, onChange, onRender } = props;
    const undoableInput = useUndoableInputMixin(props.value);
    const textareaRef = useRefInitCallback(initTextAreaEvent);
    const rendererRoot = useDetachedRoot();
    const cancelRef = useRef(() => { });

    useEffect(() => {
        return undoableInput.onChange(onChange);
    }, [onChange]);

    useEffect(() => {
        setRenderState(true);
        rendererRoot.render(onRender(value)).then(() => setRenderState(false));
    }, [value, onRender]);

    return (
        <div className="zui-code-highlight-field-outline">
            <div className="zui-code-highlight-field-code is-fallback">{value}</div>
            <div className="zui-code-highlight-field-code is-highlight" ref={rendererRoot.ref}></div>
            <textarea {...Mixin.use(textareaRef, undoableInput)} onScroll={syncScroll} autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" />
        </div>
    );

    function setRenderState(rendering: boolean, isDeferred = false) {
        cancelRef.current();
        if (rendering && !isDeferred) {
            cancelRef.current = setTimeout(() => {
                setRenderState(true, true);
            });
            return;
        }
        if (!rendering) {
            syncScroll();
        }
        setClass(undoableInput.elements()[0].parentElement!, { rendering });
    }

    function syncScroll() {
        const textarea = undoableInput.elements()[0];
        const container = textarea.parentElement!;
        each(container.querySelectorAll('.zui-code-highlight-field-code'), (i, v) => {
            v.scrollTo(textarea.scrollLeft, textarea.scrollTop);
        });
    }

    function initTextAreaEvent(self: HTMLTextAreaElement) {
        const EOL = '\n';
        const closingChars: Record<string, string> = {
            '"': '"',
            '{': '}',
            '[': ']'
        };
        let firstFocused = true;

        function getIndent(v: string) {
            return /^ {0,2}/.exec(v)![0].length;
        }

        function setSelectionRange(start: number, end = start) {
            self.setSelectionRange(start, end);
            return true;
        }

        dom.on(self, 'focusin', () => {
            if (firstFocused) {
                self.setSelectionRange(0, 0);
                self.scrollTo(0, 0);
                firstFocused = false;
            }
        });
        dom.on(self, 'textInput', e => {
            const { value, selectionStart, selectionEnd } = self;
            switch (e.data) {
                case '"':
                case '{':
                case '[':
                    let ch = closingChars[e.data];
                    if (selectionStart !== selectionEnd) {
                        let selectedText = value.slice(selectionStart, selectionEnd);
                        insertText(self, e.data + selectedText + ch);
                        return setSelectionRange(selectionStart + 1, selectionEnd + 1);
                    }
                    if (value[selectionStart] !== e.data) {
                        insertText(self, e.data + ch);
                        return setSelectionRange(selectionStart + 1);
                    }
                case '}':
                case ']':
                    if (value[selectionStart] === e.data) {
                        return setSelectionRange(selectionStart + 1);
                    }
            }
        });
        dom.on(self, 'keystroke', e => {
            const { value, selectionStart, selectionEnd } = self;
            switch (e.data) {
                case 'enter': {
                    let lineStart = value.lastIndexOf(EOL, selectionStart - 1) + 1;
                    let indent = EOL + (/^ */.exec(value.slice(lineStart))![0]);
                    if (/[{[]\s*$/.test(value.slice(0, selectionStart))) {
                        insertText(self, indent + '  ' + indent);
                        return setSelectionRange(selectionStart + indent.length + 2);
                    }
                    return insertText(self, indent);
                }
                case 'tab': {
                    let lineStart = value.lastIndexOf(EOL, selectionStart - 1) + 1;
                    let lineToEnd = value.slice(lineStart, selectionEnd);
                    if (selectionStart === selectionEnd && /\S/.test(lineToEnd)) {
                        return insertText(self, '  ');
                    }
                    let newValue = lineToEnd.split(EOL).map(v => '  '.slice(getIndent(v) % 2) + v).join(EOL);
                    let newStart = selectionStart + 2 - (getIndent(lineToEnd) % 2);
                    setSelectionRange(lineStart, selectionEnd);
                    insertText(self, newValue);
                    return setSelectionRange(newStart, lineStart + newValue.length);
                }
                case 'shiftTab': {
                    let lineStart = value.lastIndexOf(EOL, selectionStart - 1) + 1;
                    let lineToEnd = value.slice(lineStart, selectionEnd);
                    let newValue = lineToEnd.split(EOL).map(v => v.slice(getIndent(v))).join(EOL);
                    let newStart = Math.max(lineStart, selectionStart - getIndent(lineToEnd));
                    setSelectionRange(lineStart, selectionEnd);
                    insertText(self, newValue);
                    return setSelectionRange(newStart, lineStart + newValue.length);
                }
            }
        });
    }
}
