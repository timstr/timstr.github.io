import * as React from "react";
import { Link } from "../../components/Link";
import { renderPage } from "../../renderpage";

renderPage(
    ["machine_learning", "hand_gesture_synthesis"],
    <>
        <h1>Hand Gesture Synthesis</h1>
        <p>
            by Tim Straubinger and{" "}
            <Link dst="https://sites.google.com/view/nhgk">Nam Hee Kim</Link>
        </p>
        <p>
            <pre>// TODO</pre>
        </p>
        <p>
            <Link dst="/static/papers/hand_gesture_synthesis.pdf">
                Link to paper (.pdf)
            </Link>
        </p>
    </>
);
