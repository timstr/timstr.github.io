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
        return (
            <img
                className={
                    "lazyimage" +
                    (this.props.className ? " " + this.props.className : "")
                }
                src={this.props.src}
                width={this.props.width}
                height={this.props.height}
                onLoad={this.handleLoad}
                style={{ opacity: this.state.loaded ? 1 : 0 }}
            />
        );
    }
}
