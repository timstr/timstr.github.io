import * as React from "react";
import { Color } from "../../interfaces/Color";

interface TabItemProps {
    readonly color: Color;
    readonly hoverColor?: Color;
    readonly activeColor?: Color;
    readonly active: boolean;
    readonly title: string;
    onClick(): void;
}

interface TabItemState {
    readonly hover: boolean;
}

class TabItem extends React.Component<TabItemProps, TabItemState> {
    constructor(props: TabItemProps) {
        super(props);
        this.state = {
            hover: false,
        };
    }

    private startHover = () => {
        this.setState({ hover: true });
    };
    private stopHover = () => {
        this.setState({ hover: false });
    };

    render() {
        let color: Color = this.props.color;
        if (this.props.active && this.props.activeColor) {
            color = this.props.activeColor;
        } else if (this.state.hover && this.props.hoverColor) {
            color = this.props.hoverColor;
        }

        const style: React.CSSProperties = {
            backgroundColor: color.toHexString(),
        };
        return (
            <div
                className={
                    this.props.active ? "tabmenuitem-active" : "tabmenuitem"
                }
                style={style}
                onClick={this.props.onClick}
                onMouseEnter={this.startHover}
                onMouseLeave={this.stopHover}
            >
                <span className="tabmenuitem-title">{this.props.title}</span>
            </div>
        );
    }
}

export interface TabProps {
    readonly title: string;
    readonly render: () => React.ReactNode;
}

export interface TabMenuProps {
    readonly tabColor: Color;
    readonly contentColor: Color;
    readonly backgroundColor: Color;
    readonly children: (
        gotoTab: (tab: string) => void
    ) => ReadonlyArray<TabProps>;
}

interface TabMenuState {
    readonly title: string | null;
    readonly content: React.ReactNode | null;
    readonly tabs: ReadonlyArray<TabProps>;
}

export class TabMenu extends React.Component<TabMenuProps, TabMenuState> {
    constructor(props: TabMenuProps) {
        super(props);
        let currentTab: TabProps | null = null;
        let tabs = props.children(this.onSelectTab);
        if (tabs.length > 0) {
            currentTab = tabs[0];
        }
        this.state = {
            title: currentTab.title,
            content: currentTab.render(),
            tabs,
        };
    }

    private onSelectTab = (tab: string) => {
        const theTab = this.state.tabs.find(t => t.title === tab);
        if (theTab === undefined) {
            this.setState({ title: null, content: null });
        } else {
            this.setState({ title: theTab.title, content: theTab.render() });
        }
    };

    render() {
        const lighter = this.props.tabColor.clone();
        lighter.red *= 1.2;
        lighter.green *= 1.2;
        lighter.blue *= 1.2;
        return (
            <div
                className="tabmenu"
                style={{
                    backgroundColor: this.props.backgroundColor.toHexString(),
                }}
            >
                <div className="tabmenu-list">
                    {this.state.tabs.map(t => (
                        <TabItem
                            key={t.title}
                            active={t.title === this.state.title}
                            title={t.title}
                            color={this.props.tabColor}
                            hoverColor={lighter}
                            activeColor={this.props.contentColor}
                            onClick={() => this.onSelectTab(t.title)}
                        />
                    ))}
                </div>
                <div
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
