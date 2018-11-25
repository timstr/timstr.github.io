import * as React from "react";

export interface SoundCloudPlayerProps {
    readonly trackid: string;
    readonly width: number;
    readonly height: number;
}

export const SoundCloudPlayer = (props: SoundCloudPlayerProps) => (
    <iframe
        className="soundcloudplayer"
        width={props.width}
        height={props.height}
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${
            props.trackid
        }&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
    />
);
