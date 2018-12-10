import * as React from "react";

interface ChildProps {
    children: React.ReactNode;
}

export const CodeSnippet = (props: ChildProps) =>
    // prettier-ignore
    <div className="codesnippet"><code><pre>{props.children}</pre></code></div>;

export const KeyWord = (props: ChildProps) => (
    <span className="code-keyword">{props.children}</span>
);

export const Type = (props: ChildProps) => <span className="code-type">{props.children}</span>;

export const Name = (props: ChildProps) => <span className="code-name">{props.children}</span>;

export const Comment = (props: ChildProps) => (
    <span className="code-comment">{props.children}</span>
);
