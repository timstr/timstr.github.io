import * as React from "react";

interface LazyImageProps {
    readonly src: string;
    readonly className?: string;
    readonly width?: number;
    readonly height?: number;
}

interface LazyImageState {
    readonly loaded: boolean;
}

export class LazyImage extends React.Component<LazyImageProps, LazyImageState> {
    constructor(props: LazyImageProps) {
        super(props);
        this.state = {
            loaded: false,
        };
    }

    private handleLoad = () => {
        this.setState({ loaded: true });
    };

    render() {
        const extraClass = this.props.className
            ? " " + this.props.className
            : "";
        return (
            <div className="lazyimage-container">
                <img
                    key={this.props.src}
                    className={"lazyimage" + extraClass}
                    src={"/static/img/" + this.props.src}
                    width={this.props.width}
                    height={this.props.height}
                    onLoad={this.handleLoad}
                    style={{ opacity: this.state.loaded ? 1 : 0 }}
                />
                {this.state.loaded ? null : (
                    <div className="lazyimage-loading">Loading...</div>
                )}
            </div>
        );
    }
}
