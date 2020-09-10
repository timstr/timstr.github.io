import * as React from "react";
import { LocalPath, makePathFileName } from "../localpath";

interface ExternalLinkProps {
    dst: string;
    children?: React.ReactNode;
}

export const Link = (props: ExternalLinkProps) => (
    <a href={props.dst} target="_blank" rel="noopener noreferrer">
        {props.children}
    </a>
);

interface LocalLinkProps {
    dst: LocalPath;
    children?: React.ReactNode;
}

export const LocalLink = (props: LocalLinkProps) => (
    <a href={makePathFileName(props.dst)}>{props.children}</a>
);
