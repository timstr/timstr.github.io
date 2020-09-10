import * as React from "react";
import { Color } from "../interfaces/Color";
import { LazyImage } from "./LazyImage";
import { Link } from "./Link";
import { DynamicTabMenu } from "./DynamicTabMenu";

interface GifProps {
    name: string;
    title: string;
}

const GifList: GifProps[] = [
    { name: "flying", title: "Flying" },
    { name: "gooflow", title: "Flowing Goo" },
    { name: "fovsilliness", title: "Negative Field-of-View" },
    { name: "orbit", title: "Orbit" },
];

const GifImage = (props: { image: string }) => (
    <Link dst={`static/img/fractals/${props.image}.gif`}>
        <LazyImage
            className="coolgif"
            src={`static/img/fractals/${props.image}.gif`}
        />
    </Link>
);

export const CoolGifs = () => (
    <DynamicTabMenu
        contentColor={new Color("#cccccc")}
        backgroundColor={new Color("#dddddd")}
    >
        {GifList.map((gif) => ({
            title: gif.title,
            render: () => <GifImage image={gif.name} />,
        }))}
    </DynamicTabMenu>
);
