import { forwardRef, useLayoutEffect, useRef, useState } from "react";
import { Mixin, useFlyoutMixin, useFocusStateMixin, useScrollableMixin } from "brew-js-react";
import { classNames, combineRef, useAsync, useMemoizedFunction } from "zeta-dom-react";
import { MatchableItem, MatchedItem, fuzzyMatch, useMenuKeystrokeMixin } from "@misonou/react-app-utils";
import { TextInput, TextInputProps } from ".";
import { startPositioning } from "@misonou/react-css-utils";

export interface Suggestion<T = any> extends MatchableItem<T> {
}

export interface SuggestionBaseProps<T extends Suggestion> {
    /**
     * Specifies maximum number of items to be shown in suggestion list.
     */
    showCount?: number;
    /**
     * Specifies whether to show all suggestions when input box is empty.
     */
    alwaysShowSuggestions?: boolean;
    /**
     * Specifies whether to show unmatched suggestions.
     */
    alwaysShowAllSuggestions?: boolean;
    /**
     * Specifies whether to show relevant suggestions first.
     */
    sortByRelevancy?: boolean;
    /**
     * Specifies items that are already selected.
     */
    selectedValues?: readonly (T extends MatchableItem<infer U> ? U : any)[];
    /**
     * Returns suggestions based on user input.
     * @param text User input.
     * @param signal An `AbortSignal` object.
     */
    getSuggestions?: (text: string, signal: AbortSignal) => readonly T[] | Promise<readonly T[]>;
    /**
     * Overrides default rendering for suggestion.
     * @param item Item to be rendered.
     */
    renderItem?: (item: MatchedItem<T>) => React.ReactNode;
}

export interface SuggestionListProps<T extends Suggestion> extends SuggestionBaseProps<T> {
    suggestions: readonly T[];
    excludes?: readonly T['value'][];
    inputText: string;
    loading: boolean;
    onSelect: (item: MatchedItem<T>) => void;
}

export function SuggestionList<T extends Suggestion>(props: SuggestionListProps<T>) {
    let suggestions: MatchedItem<T>[] = [];
    let sortByRelevancy = props.sortByRelevancy ?? true;
    if (props.inputText) {
        suggestions = fuzzyMatch(props.suggestions, props.inputText, {
            sortByRelevancy: sortByRelevancy,
            returnAll: props.alwaysShowAllSuggestions
        });
    } else if (props.alwaysShowSuggestions) {
        suggestions = props.suggestions.map(v => ({ ...v, formattedText: v.displayText }));
        if (sortByRelevancy) {
            suggestions.sort((a, b) => a.displayText.localeCompare(b.displayText));
        }
    }
    if (props.excludes) {
        suggestions = suggestions.filter(v => !props.excludes!.includes(v.value));
    }
    if (props.showCount) {
        suggestions.splice(props.showCount);
    }
    return (
        <>
            <div {...Mixin.use(Mixin.scrollableTarget, 'zui-suggestion-picker-list')}>
                {suggestions.map((v, i) => (
                    <button key={i} tabIndex={-1} type="button" className={classNames('zui-suggestion-picker-item', { selected: props.selectedValues?.includes(v.value) })} onClick={() => props.onSelect(v)}>
                        {props.renderItem ?
                            props.renderItem(v) :
                            <span dangerouslySetInnerHTML={{ __html: v.formattedText }}></span>}
                    </button>
                ))}
            </div>
            {props.loading ?
                <></> :
                suggestions.length === 0 && props.inputText &&
                <div className="zui-suggestion-picker-list-empty">No result</div>}
        </>
    );
}

export interface SuggestionsProps<T extends Suggestion> extends Omit<TextInputProps, 'name' | 'value' | 'onChange'>, SuggestionBaseProps<T> {
    /**
     * Specifies a list of suggestions.
     * {@link SuggestionBaseProps.getSuggestions} will not be invoked if suggestions are given.
     */
    suggestions?: readonly T[];
    /**
     * Exclues items to in suggestion list.
     */
    excludes?: readonly T['value'][];
    /**
     * Specifies behavior when a suggestion item is selected.
     */
    updateInputOnSelect?: 'clear' | 'complete';
    /**
     * Sets text in input.
     */
    inputText?: string;
    /**
     * Sets debounce time in milliseconds for calling {@link SuggestionBaseProps.getSuggestions}.
     * Default is 250.
     */
    debounce?: number;
    /**
     * Specifies action when a suggestion item is selected.
     */
    onSelect?: (item: MatchedItem<T>) => void;
    /**
     * Specifies action when input text changed.
     */
    onTextChange?: (value: string) => void;
}

export const Suggestions = forwardRef<HTMLElement, SuggestionsProps<any>>((props, ref) => {
    const containerRef = useRef<HTMLElement>(null);
    const scrollable = useScrollableMixin({ direction: 'y-only' });
    const onSelectedItem = useMemoizedFunction((v: MatchedItem<any>) => {
        props.onSelect?.(v);
        if (props.updateInputOnSelect === 'clear') {
            onTextChange('');
        } else if (props.updateInputOnSelect === 'complete') {
            onTextChange(v.displayText);
        }
    });
    const onTextChange = (value: string) => {
        if (flyout.visible) {
            state.refresh();
        }
        setInputText(value);
        props.onTextChange?.(value);
    };
    const [inputText, setInputText] = useState(props.inputText || '');
    const menuKeystroke = useMenuKeystrokeMixin('.zui-suggestion-picker-item');
    const focusState = useFocusStateMixin();
    const flyout = useFlyoutMixin({ initialFocus: false, closeOnBlur: false });

    const [suggestions, state] = useAsync(async (signal) => {
        return props.suggestions || ((inputText || props.alwaysShowSuggestions) && await props.getSuggestions?.(inputText, signal)) || [];
    }, false, props.debounce ?? 250);

    useLayoutEffect(() => {
        setInputText(props.inputText || '');
    }, [props.inputText]);

    useLayoutEffect(() => {
        setTimeout(() => {
            scrollable.scrollToElement('.selected', 'center', 'center');
        });
    }, [suggestions]);

    useLayoutEffect(() => {
        return flyout.whenVisible(() => {
            state.refresh();
            return startPositioning(flyout.element!, containerRef.current!, 'left bottom', {
                strategy: 'flip',
                basisHeight: 300,
                scrollToFit: true
            });
        });
    }, []);

    return (
        <div {...Mixin.use(combineRef(ref, containerRef), focusState, menuKeystroke, flyout.toggle.on('focus'), 'zui-field zui-picker-input')}>
            <TextInput {...props}
                autoComplete="off" value={inputText} onChange={onTextChange} />
            <div {...Mixin.use(flyout, scrollable, 'zui-suggestion-picker')}>
                <SuggestionList {...props} inputText={inputText} loading={state.loading} onSelect={onSelectedItem} suggestions={suggestions || []} />
            </div>
        </div>
    );
}) as (<T extends Suggestion>(props: SuggestionsProps<T> & React.RefAttributes<HTMLElement>) => JSX.Element);
