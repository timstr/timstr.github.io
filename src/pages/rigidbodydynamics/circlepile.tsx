import * as React from "react";
import { renderPage } from "../../renderpage";
import { YouTubePlayer } from "../../components/YouTubePlayer";

renderPage(
    ["rigidbodydynamics", "circlepile"],
    <YouTubePlayer ytid="uXgi76ymtG4" width={1000} height={700} />
);
