export function Inline(props: { children: () => JSX.Element }) {
    return <props.children />;
}
