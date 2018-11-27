import * as React from "react";
import { TabMenu } from "./TabMenu";
import { Color } from "../interfaces/Color";

const GifList = ["flying", "gooflow", "fovsilliness", "orbit"];

const GifImage = (props: { image: string }) => (
    <a
        href={`img/${props.image}.gif`}
        target="_blank"
        rel="noopener noreferrer"
    >
        <img className="coolgif" src={`img/${props.image}.gif`} />
    </a>
);

export const CoolGifs = () => (
    <TabMenu
        tabColor={new Color("#DDDD22")}
        contentColor={new Color("#FFFF66")}
        backgroundColor={new Color("#FFFFFF")}
        tabs={GifList.map((name, index) => ({
            title: `Cool gif #${index + 1}`,
            render: () => <GifImage image={name} />,
        }))}
    />
);
