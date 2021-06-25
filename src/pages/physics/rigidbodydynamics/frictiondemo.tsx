import * as React from "react";
import { renderPage } from "../../../renderpage";
import { YouTubePlayer } from "../../../components/YouTubePlayer";
import { Section } from "../../../components/Section";

renderPage(
    ["physics", "rigidbodydynamics", "frictiondemo"],
    <>
        <Section
            header={
                <>
                    <h1>Friction Demo</h1>
                    <p>
                        When using global solvers and when working at the level
                        of forces, implementing friction poses a signficant
                        challenge. However, in a local, impulse-based solver
                        such as this one, friction can be implemented rather
                        naively with accurate and pleasing results.
                    </p>
                    <p>
                        Using the Sequential Impulses Method, implementing
                        friction is as simple as looping over all collision
                        constraints and applying additional impulses against the
                        direction of tangent motion, proportional to the
                        coefficient of friction. These impulses must be clamped,
                        such that they at most cancel the tangent motion, rather
                        than possibly reversing it.
                    </p>
                    <p>
                        In this demo, a series of obstacles collide without
                        friction. Then, friction is enabled, and the simulation
                        is repeated.
                    </p>
                </>
            }
        >
            <YouTubePlayer ytid="7c5AEtKV_Nk" width={1000} height={700} />
        </Section>
    </>
);
