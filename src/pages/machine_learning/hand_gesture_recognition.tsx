import * as React from "react";
import { Link } from "../../components/Link";
import { renderPage } from "../../renderpage";

renderPage(
    ["machine_learning", "hand_gesture_recognition"],
    <>
        <h1>Hand Gesture Recognition</h1>
        <p>
            by Tim Straubinger and{" "}
            <Link dst="https://sites.google.com/view/nhgk">Nam Hee Kim</Link>
        </p>
        <p>
            <pre>// TODO</pre>
        </p>
        <p>
            <Link dst="/static/papers/hand_gesture_recognition.pdf">
                Link to paper (.pdf)
            </Link>
        </p>
    </>
);
