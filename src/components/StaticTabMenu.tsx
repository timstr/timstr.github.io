import * as React from "react";
import { Color, linearMix } from "../interfaces/Color";
import { TabMenuItem } from "./TabMenuItem";
import {
    LocalPath,
    getPathHeadName,
    getPathSiblings,
    pathContains,
} from "../localpath";
import { LocalLink } from "./Link";

type StaticTabMenuProps = {
    readonly tabs: LocalPath[];
    readonly contentColor: Color;
    readonly backgroundColor: Color;
    readonly currentTab: LocalPath;
    readonly children?: React.ReactNode;
};

const StaticTabMenu = (props: StaticTabMenuProps) => {
    const tabColor = linearMix(props.backgroundColor, props.contentColor, 0.5);
    const lighter = linearMix(tabColor, new Color("#fff"), 0.5);

    const makeTabItem = (tab: LocalPath) => {
        const name = getPathHeadName(tab);
        return (
            <LocalLink dst={tab} key={name}>
                <TabMenuItem
                    active={pathContains(props.currentTab, tab)}
                    title={name}
                    color={tabColor}
                    hoverColor={lighter}
                    activeColor={props.contentColor}
                    onClick={() => {}}
                />
            </LocalLink>
        );
    };

    return (
        <div
            className="tabmenu"
            style={{
                backgroundColor: props.backgroundColor.toHexString(),
            }}
        >
            <div className="tabmenu-list">
                {props.tabs.map((tabName) => makeTabItem(tabName))}
            </div>
            <div
                className="tab-content"
                style={{
                    backgroundColor: props.contentColor.toHexString(),
                }}
            >
                {props.children}
            </div>
        </div>
    );
};

interface StaticTabMenuStackProps {
    readonly currentTab: LocalPath;
    readonly colours: Color[];
    readonly children: React.ReactNode;
}

export const StaticTabMenuStack = (
    props: StaticTabMenuStackProps
): JSX.Element => {
    const tabGroups = getPathSiblings(props.currentTab);
    let node = props.children;
    const getColour = (i: number) => props.colours[i % props.colours.length];
    let colorIdx = tabGroups.length;
    let prevColor = getColour(colorIdx);
    for (let group of tabGroups.reverse()) {
        colorIdx = colorIdx - 1;
        const color = getColour(colorIdx);
        node = (
            <StaticTabMenu
                backgroundColor={color}
                contentColor={prevColor}
                currentTab={props.currentTab}
                tabs={group}
            >
                {node}
            </StaticTabMenu>
        );
        prevColor = color;
    }
    return <>{node}</>;
};
