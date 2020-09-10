import * as React from "react";
import { renderPage } from "../../renderpage";
import { YouTubePlayer } from "../../components/YouTubePlayer";

renderPage(
    ["rigidbodydynamics", "boxchain"],
    <YouTubePlayer ytid="obQryJWjAwg" width={1000} height={700} />
);
