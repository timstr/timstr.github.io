import * as React from "react";
import { renderPage } from "../../../renderpage";
import { YouTubePlayer } from "../../../components/YouTubePlayer";

renderPage(
    ["physics", "rigidbodydynamics", "circlepile"],
    <YouTubePlayer ytid="uXgi76ymtG4" width={1000} height={700} />
);
