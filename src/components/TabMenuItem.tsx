import * as React from "react";
import { Color } from "../interfaces/Color";

interface TabMenuItemProps {
    readonly color: Color;
    readonly hoverColor?: Color;
    readonly activeColor?: Color;
    readonly active: boolean;
    readonly title: string;
    onClick(): void;
}

interface TabMenuItemState {
    readonly hover: boolean;
}

// TODO: make tabitem enter active state when focus is gained i.e via pressing tab key
export class TabMenuItem extends React.Component<
    TabMenuItemProps,
    TabMenuItemState
> {
    constructor(props: TabMenuItemProps) {
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
