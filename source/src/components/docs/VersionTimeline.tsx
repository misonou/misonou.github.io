import { useMemo } from "react";
import versions from "src/data/versions.json";
import { classNames } from "zeta-dom-react";

interface VersionTimelineProps {
    module: string;
}

export function VersionTimeline(props: React.PropsWithChildren<VersionTimelineProps>) {
    const finalProps = useMemo(() => {
        const ul = props.children as JSX.Element;
        const { children, ...rootProps } = ul.props;
        const allVersions = Object.keys((versions as any)[props.module] || {});

        const versionList = ul.props.children.filter((v: any) => v.type === 'li');
        const firstVersion = versionList[0].props.children[0].props.children;
        const lastVersion = versionList.slice(-1)[0].props.children[0].props.children;
        const lastestVersion = allVersions.slice(-1)[0];
        return {
            rootProps: rootProps,
            versionList: versionList,
            firstVersion: firstVersion === allVersions[0] ? null : allVersions[0],
            lastVersion: lastVersion === lastestVersion ? null : lastestVersion
        };
    }, []);
    return (
        <div className={classNames('app-docs-timeline', { 'has-dimmed': !!finalProps.lastVersion })}>
            <ul {...finalProps.rootProps}>
                {/* {finalProps.firstVersion &&
                    <li className="dimmed"></li>} */}
                {finalProps.versionList}
                {finalProps.lastVersion &&
                    <li className="dimmed"><strong>{finalProps.lastVersion}</strong> Latest</li>}
            </ul>
        </div>
    );
}
