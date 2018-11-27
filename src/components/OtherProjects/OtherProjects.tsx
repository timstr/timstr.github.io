import * as React from "react";
import { TabMenu } from "../Common/TabMenu";
import { Color } from "../../interfaces/Color";
import { TimsGUI } from "./TimsGUI";
import { GibberishGenerators } from "./GibberishGenerators";
import { RandomThings } from "./RandomThings";
import { PlatformerGame } from "./PlatformerGame";

export const OtherProjects = () => (
    <TabMenu
        tabColor={new Color("#DDDD22")}
        contentColor={new Color("#FFFF66")}
        backgroundColor={new Color("#FFFFFF")}
    >
        {() => [
            {
                title: "Tim's GUI",
                render: () => <TimsGUI />,
            },
            {
                title: "Platformer Game",
                render: () => <PlatformerGame />,
            },
            {
                title: "Gibberish Generators",
                render: () => <GibberishGenerators />,
            },
            {
                title: "Random Things",
                render: () => <RandomThings />,
            },
        ]}
    </TabMenu>
);
