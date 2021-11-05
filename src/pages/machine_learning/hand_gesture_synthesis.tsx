import * as React from "react";
import { BigImage } from "../../components/BigImage";
import { Link } from "../../components/Link";
import { Section } from "../../components/Section";
import { renderPage } from "../../renderpage";

renderPage(
    ["machine_learning", "hand_gesture_synthesis"],
    <>
        <h1>
            SMASH-G: A System for Modeling, Analyzing, and Synthesizing Hand
            Gestures
        </h1>
        <h2>
            Tim Straubinger and{" "}
            <Link dst="https://sites.google.com/view/nhgk">Nam Hee Kim</Link> -
            December 2019
        </h2>
        <h3>
            <em>CPSC 535P Course Project</em>
        </h3>
        <BigImage name="ml/smashg-hands.png" />
        <BigImage name="ml/smashg-pca.png" />
        <Section header={<h3>Learn More</h3>}>
            <p>
                See videos of our project over at{" "}
                <Link dst="https://sites.google.com/view/smash-g">
                    Nam's project website.
                </Link>
            </p>
            <p>
                Read the full paper{" "}
                <Link dst="/static/papers/hand_gesture_recognition.pdf">
                    here (.pdf - 2.9 MB)
                </Link>
            </p>
        </Section>
        <Section header={<h3>Source Code</h3>}>
            <Link dst="https://github.com/namheegordonkim/arpshand/">
                View the code on GitHub
            </Link>
        </Section>
    </>
);
