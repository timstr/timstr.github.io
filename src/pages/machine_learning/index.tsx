import * as React from "react";
import { LocalLink } from "../../components/Link";
import { renderPage } from "../../renderpage";

renderPage(
    ["machine_learning", "index"],
    <>
        <h1>Machine Learning Projects</h1>
        <p>
            <pre>// TODO</pre>
            <ul>
                <li>
                    <LocalLink dst={["machine_learning", "graph_merging"]}>
                        Differentiable Graph Merging
                    </LocalLink>
                </li>
                <li>
                    <LocalLink dst={["machine_learning", "monocamlegoslam"]}>
                        Line Segment SLAM
                    </LocalLink>
                </li>
                <li>
                    <LocalLink dst={["machine_learning", "boneless"]}>
                        Soft-Bodied Locomotion
                    </LocalLink>
                </li>
                <li>
                    <LocalLink
                        dst={["machine_learning", "hand_gesture_recognition"]}
                    >
                        Hand Gesture Recognition
                    </LocalLink>
                </li>
                <li>
                    <LocalLink
                        dst={["machine_learning", "hand_gesture_synthesis"]}
                    >
                        Hand Gesture Synthesis
                    </LocalLink>
                </li>
            </ul>
        </p>
    </>
);
