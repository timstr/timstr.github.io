import * as React from "react";
import { Color } from "../interfaces/Color";
import { Flosion } from "./Flosion/Flosion";
import { RigidBodyDynamics } from "./RigidBodyDynamics/RigidBodyDynamics";
import { CellularAutomata } from "./CellularAutomata/CellularAutomata";
import { OtherProjects } from "./OtherProjects/OtherProjects";
import { TabMenu } from "./Common/TabMenu";
import { Fractals } from "./Fractals/Fractals";
import { AboutMe } from "./AboutMe/AboutMe";

export const Main = () => (
    <>
        <div className="backdrop" />
        <div className="maincontainer">
            <div className="mainbody">
                <h1 className="mainheader">Tim's Portfolio</h1>
                <TabMenu contentColor={new Color("#ffffff")} backgroundColor={new Color("#626289")}>
                    {[
                        {
                            title: "About Me",
                            render: () => <AboutMe />,
                        },
                        {
                            title: "Flosion",
                            render: () => <Flosion />,
                        },
                        {
                            title: "Fractals",
                            render: () => <Fractals />,
                        },
                        {
                            title: "Rigid Body Dynamics",
                            render: () => <RigidBodyDynamics />,
                        },
                        {
                            title: "Cellular Automata",
                            render: () => <CellularAutomata />,
                        },
                        {
                            title: "Other Projects",
                            render: () => <OtherProjects />,
                        },
                    ]}
                </TabMenu>
            </div>
        </div>
    </>
);
