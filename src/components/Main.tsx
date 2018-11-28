import * as React from "react";
import { FaceIcon } from "./FaceIcon";
import { Color } from "../interfaces/Color";
import { AboutMe } from "./AboutMe/AboutMe";
import { CurriculumVitae } from "./CurriculumVitae/CurriculumVitae";
import { Flosion } from "./Flosion/Flosion";
import { Fractals } from "./Fractals/Fractals";
import { RigidBodyDynamics } from "./RigidBodyDynamics/RigidBodyDynamics";
import { CellularAutomata } from "./CellularAutomata/CellularAutomata";
import { OtherProjects } from "./OtherProjects/OtherProjects";
import { TabMenu } from "./Common/TabMenu";

export const Main = () => (
    <>
        <div className="backdrop" />
        <div className="maincontainer">
            <div className="mainbody">
                <FaceIcon />
                <h1 className="mainheader">Welcome to Tim</h1>
                <TabMenu
                    tabColor={new Color("#c2bed8")}
                    contentColor={new Color("#ffffff")}
                    backgroundColor={new Color("#7165af")}
                >
                    {gotoTab => [
                        {
                            title: "About Me",
                            render: () => (
                                <AboutMe
                                    gotoCV={() => gotoTab("Curriculum Vitae")}
                                />
                            ),
                        },
                        {
                            title: "Curriculum Vitae",
                            render: () => <CurriculumVitae />,
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
