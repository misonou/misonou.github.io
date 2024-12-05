import { useRouteState } from "brew-js-react";
import { Button, FieldColumn } from "src/components/controls";
import { SyntaxHighlight } from "src/components/docs";
import { app } from "src/init";

export default function Component() {
    // useRouteState will trigger component update
    // when history storage is restored
    const [value, setValue] = useRouteState('example', 1);

    return (
        <FieldColumn columns="1fr 1fr">
            <div>
                <p>{`Current value is ${value}`}</p>
                <Button
                    label="Increment"
                    onClick={() => app.snapshot() && setValue(v => v + 1)} />
            </div>
            <SyntaxHighlight
                source={JSON.stringify(app.historyStorage.current, null, 4)}
                language="json" />
        </FieldColumn>
    );
}
