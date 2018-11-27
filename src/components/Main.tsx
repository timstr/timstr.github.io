import * as React from "react";
import { FaceIcon } from "./FaceIcon";
import { TabMenu } from "./TabMenu";
import { Songs } from "./Songs";
import { Videos } from "./Videos";
import { ImageList } from "./ImageList";
import { CoolGifs } from "./CoolGifs";
import { Color } from "../interfaces/Color";

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
                    tabs={[
                        {
                            title: "About Me",
                            render: () => (
                                <h1 style={{ minHeight: "200px" }}>I am Tim</h1>
                            ),
                        },
                        {
                            title: "A Cool Video",
                            render: () => <Videos />,
                        },
                        {
                            title: "Some Neat Songs",
                            render: () => <Songs />,
                        },
                        {
                            title: "Pictures I Done",
                            render: () => <ImageList />,
                        },
                        {
                            title: "Cool Gifs",
                            render: () => <CoolGifs />,
                        },
                    ]}
                />
            </div>
        </div>
    </>
);
