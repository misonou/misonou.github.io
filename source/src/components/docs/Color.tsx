export function Color(props: { code: string }) {
    return (
        <span className="app-docs-color">
            <i style={{ backgroundColor: props.code }}></i>
            <code>{props.code}</code>
        </span>
    )
}
