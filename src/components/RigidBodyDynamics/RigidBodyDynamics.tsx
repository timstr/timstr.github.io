import * as React from "react";
import { YouTubePlayer } from "../Common/YouTubePlayer";
import { TabMenu } from "../Common/TabMenu";
import { Color } from "../../interfaces/Color";

/**
 * TODO:
 *  - explanation, organize into sections
 *  - cite papers
 *  - platformer game
 *  - screenshots
 *  - videos
 *  - implementation details
 *  - github link
 */

export const RigidBodyDynamics = () => (
    <>
        <h1>Rigid Body Dynamics</h1>
        <TabMenu
            contentColor={new Color("#dddddd")}
            backgroundColor={new Color("#ffffff")}
            children={[
                {
                    title: "Circle Box Stacking",
                    render: () => <YouTubePlayer ytid="Q2xi2WWNEec" width={1000} height={700} />,
                },
                {
                    title: "Box Chain",
                    render: () => <YouTubePlayer ytid="obQryJWjAwg" width={1000} height={700} />,
                },
                {
                    title: "Friction Demo",
                    render: () => <YouTubePlayer ytid="7c5AEtKV_Nk" width={1000} height={700} />,
                },
                {
                    title: "Frictionless Boxes",
                    render: () => <YouTubePlayer ytid="XrJb-_ypHHw" width={1000} height={700} />,
                },
                {
                    title: "Circle Pile",
                    render: () => <YouTubePlayer ytid="uXgi76ymtG4" width={1000} height={700} />,
                },
            ]}
        />
    </>
);
