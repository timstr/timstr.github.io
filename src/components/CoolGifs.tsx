import * as React from "react";
import { TabMenu } from "./Common/TabMenu";
import { Color } from "../interfaces/Color";
import { LazyImage } from "./Common/LazyImage";
import { Link } from "./Common/Link";

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
    <Link dst={`fractals/${props.image}.gif`}>
        <LazyImage className="coolgif" src={`fractals/${props.image}.gif`} />
    </Link>
);

export const CoolGifs = () => (
    <TabMenu contentColor={new Color("#5fce84")} backgroundColor={new Color("#99FFBB")}>
        {() =>
            GifList.map(gif => ({
                title: gif.title,
                render: () => <GifImage image={gif.name} />,
            }))
        }
    </TabMenu>
);
