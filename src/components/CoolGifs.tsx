import * as React from "react";
import { TabMenu } from "./Common/TabMenu";
import { Color } from "../interfaces/Color";
import { LazyImage } from "./Common/LazyImage";
import { Link } from "./Common/Link";

// TODO: repurpose this code for the fractals page

const GifList = ["flying", "gooflow", "fovsilliness", "orbit"];

const GifImage = (props: { image: string }) => (
    <Link dst={`img/${props.image}.gif`}>
        <LazyImage className="coolgif" src={`img/${props.image}.gif`} />
    </Link>
);

export const CoolGifs = () => (
    <TabMenu
        contentColor={new Color("#FFFF66")}
        backgroundColor={new Color("#FFFFFF")}
    >
        {() =>
            GifList.map((name, index) => ({
                title: `Cool gif #${index + 1}`,
                render: () => <GifImage image={name} />,
            }))
        }
    </TabMenu>
);
