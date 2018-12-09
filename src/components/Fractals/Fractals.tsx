import * as React from "react";
import { TabMenu } from "../Common/TabMenu";
import { Color } from "../../interfaces/Color";
import { AboutFractals } from "./AboutFractals";
import { FractalGallery } from "./FractalGallery";

export const Fractals = () => (
    <TabMenu
        contentColor={new Color("#99FFBB")}
        backgroundColor={new Color("#FFFFFF")}
    >
        {gotoTab => [
            {
                title: "About",
                render: () => (
                    <AboutFractals gotoGallery={() => gotoTab("Gallery")} />
                ),
            },
            {
                title: "Gallery",
                render: () => <FractalGallery />,
            },
        ]}
    </TabMenu>
);
