import * as React from "react";
import { renderPage } from "../../../renderpage";
import { YouTubePlayer } from "../../../components/YouTubePlayer";

renderPage(
    ["physics", "rigidbodydynamics", "index"],
    <YouTubePlayer ytid="Q2xi2WWNEec" width={1000} height={700} />
);
