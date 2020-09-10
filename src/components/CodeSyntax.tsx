import * as React from "react";

interface ChildProps {
    children: React.ReactNode;
}

export const CodeSnippet = (props: ChildProps) => (
    <div className="codesnippet">
        {/* prettier-ignore */}
        <code><pre>{props.children}</pre></code>
    </div>
);
