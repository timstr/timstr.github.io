import * as React from "react";
import { renderPage } from "../../../renderpage";
import { YouTubePlayer } from "../../../components/YouTubePlayer";
import { Section } from "../../../components/Section";

renderPage(
    ["physics", "rigidbodydynamics", "frictionlessboxes"],
    <>
        <Section
            header={
                <>
                    <h1>Frictionless Boxes</h1>
                    <p>
                        A large number of frictionless squares are placed
                        densely along a grid while gravity periodically changes
                        direction.
                    </p>
                    <p>
                        This demonstrates the stability of the physics engine
                        when dealing with large and complex interactions, much
                        like the box chain demo.
                    </p>
                </>
            }
        >
            <YouTubePlayer ytid="XrJb-_ypHHw" width={1000} height={700} />
        </Section>
    </>
);
