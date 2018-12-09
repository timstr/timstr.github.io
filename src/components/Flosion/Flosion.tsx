import * as React from "react";
import { TabMenu } from "../Common/TabMenu";
import { Color } from "../../interfaces/Color";
import { About } from "./About";
import { HowItWorks } from "./HowItWorks";
import { Examples } from "./Examples";

/**
 * TODO:
 *  - lots of explanation, by topic
 *  - brief history?
 *  - screenshots
 *  - sample sounds
 *  - github link
 *  - executable download?
 */

export const Flosion = () => (
    <TabMenu
        backgroundColor={new Color("#fff")}
        contentColor={new Color("#bbf")}
    >
        {() => [
            { title: "About", render: () => <About /> },
            { title: "How It Works", render: () => <HowItWorks /> },
            { title: "Examples", render: () => <Examples /> },
        ]}
    </TabMenu>
);
