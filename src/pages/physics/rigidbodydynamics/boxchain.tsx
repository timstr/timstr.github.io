import * as React from "react";
import { renderPage } from "../../../renderpage";
import { YouTubePlayer } from "../../../components/YouTubePlayer";
import { Section } from "../../../components/Section";

renderPage(
    ["physics", "rigidbodydynamics", "boxchain"],
    <>
        <Section
            header={
                <>
                    <h1>Box Chain</h1>
                    <p>
                        In this example, a large number of small boxes are
                        connected end-to-end using fixed-distance constraints.
                        Fixed-distance constraints behave much like collision
                        constraints, except that collision constraints always
                        push objects apart while fixed-distance constraints push
                        and pull as needed.
                    </p>
                    <p>
                        Note the long-ranging effects of one end of the chain
                        pulling on the other. Despite the physics engine's local
                        solver only ever knowing about individual constraints at
                        a time, the large system of constraints is still solved
                        due to the use of multiple local constraint solving
                        iterations.
                    </p>
                </>
            }
        >
            <YouTubePlayer ytid="obQryJWjAwg" width={1000} height={700} />
        </Section>
    </>
);
