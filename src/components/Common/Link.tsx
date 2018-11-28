import * as React from "react";

interface Props {
    dst: string;
    children?: React.ReactNode;
}

export const Link = (props: Props) => (
    <a href={props.dst} target="_blank" rel="noopener noreferrer">
        {props.children}
    </a>
);
