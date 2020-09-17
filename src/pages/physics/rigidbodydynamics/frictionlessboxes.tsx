import * as React from "react";
import { renderPage } from "../../../renderpage";
import { YouTubePlayer } from "../../../components/YouTubePlayer";

renderPage(
    ["physics", "rigidbodydynamics", "frictionlessboxes"],
    <YouTubePlayer ytid="XrJb-_ypHHw" width={1000} height={700} />
);
