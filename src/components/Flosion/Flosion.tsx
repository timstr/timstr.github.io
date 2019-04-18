import * as React from "react";
import { TabMenu } from "../Common/TabMenu";
import { Color } from "../../interfaces/Color";
import { AboutFlosion } from "./AboutFlosion";
import { HowItWorks } from "./HowItWorks";
import { Examples } from "./Examples";
import { Implementation } from "./Implementation";
import { SongGallery } from "./SongGallery";

export const Flosion = () => (
    <TabMenu backgroundColor={new Color("#fff")} contentColor={new Color("#dddddd")}>
        {[
            { title: "About", render: () => <AboutFlosion /> },
            { title: "How It Works", render: () => <HowItWorks /> },
            { title: "Implementation", render: () => <Implementation /> },
            { title: "Examples", render: () => <Examples /> },
            { title: "Song Gallery", render: () => <SongGallery /> },
        ]}
    </TabMenu>
);
