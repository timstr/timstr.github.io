import * as React from "react";
import { renderPage } from "../../renderpage";
import { YouTubePlayer } from "../../components/YouTubePlayer";

renderPage(
    ["rigidbodydynamics", "frictiondemo"],
    <YouTubePlayer ytid="7c5AEtKV_Nk" width={1000} height={700} />
);
