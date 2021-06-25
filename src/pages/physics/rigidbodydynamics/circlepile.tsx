import * as React from "react";
import { renderPage } from "../../../renderpage";
import { YouTubePlayer } from "../../../components/YouTubePlayer";
import { Section } from "../../../components/Section";

renderPage(
    ["physics", "rigidbodydynamics", "circlepile"],

    <>
        <Section
            header={
                <>
                    <h1>Circle Pile</h1>
                    <p>
                        While this video showcases the stability and scalability
                        of the simulator, it also shows a bug - after the
                        circles have come to rest in a large pile, they
                        gradually but steadily compress, moving closer and
                        closer together even though they should be rigidly
                        colliding
                    </p>
                    <p>
                        This drift occurs naturally due to floating point
                        inaccuracies and discretization errors when integrating
                        the equations of motion. Sophisticated solutions exist,
                        but a simple, efficient, and commonly-used technique to
                        prevent drift is to make collision impulses stronger
                        when objects are colliding more deeply. This can
                        introduce artificial energy into the system and may give
                        obstacles an unrealistic bounciness if not carefully
                        tuned. However, in many practical cases, it works very
                        well.
                    </p>
                    <p>
                        This simple form of stabilization is used in the other
                        demos, but in this demo, it is disabled to highlight its
                        important effect on stability.
                    </p>
                </>
            }
        >
            <YouTubePlayer ytid="uXgi76ymtG4" width={1000} height={700} />
        </Section>
    </>
);
