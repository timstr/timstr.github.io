import * as React from "react";

interface TabItemProps {
    readonly active: boolean;
    readonly title: string;
    onClick(): void;
}

const TabItem = (props: TabItemProps) => (
    <div
        className={props.active ? "tabmenuitem-active" : "tabmenuitem"}
        onClick={props.onClick}
    >
        <span className="tabmenuitem-title">{props.title}</span>
    </div>
);

export interface TabProps {
    readonly title: string;
    readonly render: () => React.ReactNode;
}

export interface TabMenuProps {
    readonly tabs: ReadonlyArray<TabProps>;
}

interface TabMenuState {
    readonly title: string | null;
    readonly content: React.ReactNode | null;
}

export class TabMenu extends React.Component<TabMenuProps, TabMenuState> {
    constructor(props: TabMenuProps) {
        super(props);
        let currentTab: TabProps | null = null;
        if (props.tabs.length > 0) {
            currentTab = props.tabs[0];
        }
        this.state = {
            title: currentTab.title,
            content: currentTab.render()
        };
    }

    private onSelectTab = (tab: string) => {
        const theTab = this.props.tabs.find(t => t.title === tab);
        if (theTab === undefined) {
            this.setState({ title: null, content: null });
        } else {
            this.setState({ title: theTab.title, content: theTab.render() });
        }
    };

    render() {
        return (
            <>
                <div className="tabmenu-list">
                    {this.props.tabs.map(t => (
                        <TabItem
                            key={t.title}
                            active={t.title === this.state.title}
                            title={t.title}
                            onClick={() => this.onSelectTab(t.title)}
                        />
                    ))}
                </div>
                <div className="tab-content">
                    {this.state.content || "Please select a tab"}
                </div>
            </>
        );
    }
}
