import * as React from "react";
import { FaceIcon } from "./FaceIcon";
import { TabMenu } from "./TabMenu";
import { Songs } from "./Songs";
import { Videos } from "./Videos";
import { Fractals } from "./Fractals";

export const Main = () => (
    <>
        <div className="backdrop" />
        <div className="maincontainer">
            <div className="mainbody">
                <FaceIcon />
                <h1 className="mainheader">Welcome to Tim</h1>
                <TabMenu
                    tabs={[
                        {
                            title: "About Me",
                            render: () => <h1>I am Tim</h1>,
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
                            render: () => <Fractals />,
                        },
                    ]}
                />
            </div>
        </div>
    </>
);
