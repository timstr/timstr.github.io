import * as React from "react";
import { FaceIcon } from "./FaceIcon";
import { TabMenu } from "./TabMenu";
import { Songs } from "./Songs";
import { Videos } from "./Videos";

export const Main = () => (
    <div className="mainbody">
        <FaceIcon />
        <h1 className="mainheader">Welcome to Tim</h1>
        <TabMenu
            tabs={[
                {
                    title: "About Me",
                    render: () => <h1>I am Tim</h1>
                },
                {
                    title: "A Cool Video",
                    render: () => <Videos />
                },
                {
                    title: "Some Neat Songs",
                    render: () => <Songs />
                }
            ]}
        />
    </div>
);
