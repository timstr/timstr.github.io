import * as React from "react";
import { StaticTabMenuStack } from "./StaticTabMenu";
import { Color } from "../interfaces/Color";
import { LocalPath } from "../localpath";

interface MainProps {
    readonly currentTab: LocalPath;
    readonly children: React.ReactNode;
}

const someNiceColours: Color[] = [
    new Color("#626289"),
    new Color("#FFFFFF"),
    new Color("#DDDDDD"),
    new Color("#FFFFFF"),
    new Color("#DDDDDD"),
];

export const Main = (props: MainProps) => (
    <>
        <div className="backdrop" />
        <div className="maincontainer">
            <div className="mainbody">
                <h1 className="mainheader">Tim's Portfolio</h1>
                <StaticTabMenuStack
                    currentTab={props.currentTab}
                    colours={someNiceColours}
                    children={props.children}
                />
            </div>
        </div>
    </>
);
