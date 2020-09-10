import * as React from "react";
import { Color, linearMix } from "../interfaces/Color";
import { TabMenuItem } from "./TabMenuItem";

export interface TabProps {
    readonly title: string;
    readonly render: () => React.ReactNode;
}

type TabList = ReadonlyArray<TabProps>;

type TabListGenerator = (gotoTab: (tab: string) => void) => TabList;

export interface DynamicTabMenuProps {
    readonly contentColor: Color;
    readonly backgroundColor: Color;
    readonly children: TabList | TabListGenerator;
}

interface DynamicTabMenuState {
    readonly title: string;
    readonly content: React.ReactNode;
    readonly tabs: ReadonlyArray<TabProps>;
}

export class DynamicTabMenu extends React.Component<
    DynamicTabMenuProps,
    DynamicTabMenuState
> {
    constructor(props: DynamicTabMenuProps) {
        super(props);
        let tabs =
            typeof props.children === "function"
                ? props.children(this.onSelectTab)
                : props.children;
        let currentTab = tabs[0];
        this.state = {
            title: currentTab.title,
            content: currentTab.render(),
            tabs,
        };
    }

    private onSelectTab = (tab: string) => {
        const theTab = this.state.tabs.find((t) => t.title === tab);
        if (theTab === undefined) {
            throw new Error("Whoops, not sure what happened there");
        } else {
            this.setState({ title: theTab.title, content: theTab.render() });
        }
    };

    render() {
        const tabColor = linearMix(
            this.props.backgroundColor,
            this.props.contentColor,
            0.5
        );
        const lighter = linearMix(tabColor, new Color("#fff"), 0.5);
        return (
            <div
                className="tabmenu"
                style={{
                    backgroundColor: this.props.backgroundColor.toHexString(),
                }}
            >
                <div className="tabmenu-list">
                    {this.state.tabs.map((t) => (
                        <TabMenuItem
                            key={t.title}
                            active={t.title === this.state.title}
                            title={t.title}
                            color={tabColor}
                            hoverColor={lighter}
                            activeColor={this.props.contentColor}
                            onClick={() => this.onSelectTab(t.title)}
                        />
                    ))}
                </div>
                <div
                    key={this.state.title}
                    className="tab-content"
                    style={{
                        backgroundColor: this.props.contentColor.toHexString(),
                    }}
                >
                    {this.state.content || "Please select a tab"}
                </div>
            </div>
        );
    }
}
