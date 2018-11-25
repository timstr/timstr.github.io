import * as React from "react";

export interface YouTubePlayerProps {
    // YouTube identifier for the video
    readonly ytid: string;
    readonly width: number;
    readonly height: number;
}

/**
 * Wraps a YouTube embedded video player
 */
export const YouTubePlayer = (props: YouTubePlayerProps) => (
    <iframe
        className="youtubeplayer"
        width={props.width}
        height={props.height}
        src={`https://www.youtube.com/embed/${
            props.ytid
        }?autoplay=1&origin=http://timstr.github.io&rel=0`}
        frameBorder={0}
    />
);
