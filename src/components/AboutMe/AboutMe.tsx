import * as React from "react";
import { TabMenu } from "../Common/TabMenu";
import { Color } from "../../interfaces/Color";
import { Intro } from "./Intro";
import { MySkills } from "./MySkills";

export const AboutMe = () => (
    <TabMenu
        contentColor={new Color("#f8ffd0")}
        backgroundColor={new Color("#ffffff")}
    >
        {() => [
            {
                title: "Intro",
                render: () => <Intro />,
            },
            {
                title: "My Skills",
                render: () => <MySkills />,
            },
        ]}
    </TabMenu>
);
