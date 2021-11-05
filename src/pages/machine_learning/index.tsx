import * as React from "react";
import { BigImage } from "../../components/BigImage";
import { Link, LocalLink } from "../../components/Link";
import { Section } from "../../components/Section";
import { renderPage } from "../../renderpage";

renderPage(
    ["machine_learning", "index"],
    <>
        <h1>Machine Learning Projects</h1>
        <Section
            header={
                <>
                    <h3>MSc. Thesis</h3>
                    <h3>
                        <em>October 2021</em>
                    </h3>
                </>
            }
        >
            <h3>Acoustic Reconstruction using Synthetic Aperture Focusing</h3>
            <p>
                <LocalLink
                    dst={["machine_learning", "acoustic_reconstruction"]}
                >
                    Read more
                </LocalLink>
            </p>
            <BigImage name="ml/thesis_system_diagram.png" />
        </Section>

        <Section
            header={
                <>
                    <h3>CPSC 532S Course Project</h3>
                    <h3>
                        <em>April 2021</em>
                    </h3>
                </>
            }
        >
            <h3>Learning to Reduce Graphs with Differentiable Merging</h3>
            <p>
                <LocalLink dst={["machine_learning", "graph_merging"]}>
                    Read more
                </LocalLink>
            </p>
            <BigImage name="ml/graph_merging_1.png" />
        </Section>

        <Section
            header={
                <>
                    <h3>CPSC 533V Course Project</h3>
                    <h3>
                        <em>April 2020</em>
                    </h3>
                    <h4>
                        With{" "}
                        <Link dst="https://davepagurek.com/">Dave Pagurek</Link>
                    </h4>
                </>
            }
        >
            <h3>Locomotion of Boneless Creatures with Distributed Control</h3>
            <p>
                <LocalLink dst={["machine_learning", "boneless"]}>
                    Read more
                </LocalLink>
            </p>
            <BigImage name="ml/tetrapus-long.png" />
        </Section>

        <Section
            header={
                <>
                    <h3>CPSC 554X Course Project</h3>
                    <h3>
                        <em>December 2019</em>
                    </h3>
                    <h4>
                        With{" "}
                        <Link dst="https://sites.google.com/view/nhgk">
                            Nam Hee Kim
                        </Link>
                    </h4>
                </>
            }
        >
            <h3>A Rapid Prototyping System for Hand Gesture Recongition</h3>
            <p>
                <LocalLink
                    dst={["machine_learning", "hand_gesture_recognition"]}
                >
                    Read more
                </LocalLink>
            </p>
            <BigImage name="ml/arpshand-all.png" />
        </Section>

        <Section
            header={
                <>
                    <h3>CPSC 535P Course Project</h3>
                    <h3>
                        <em>December 2019</em>
                    </h3>
                    <h4>
                        With{" "}
                        <Link dst="https://sites.google.com/view/nhgk">
                            Nam Hee Kim
                        </Link>
                    </h4>
                </>
            }
        >
            <h3>
                SMASH-G: A System for Modeling, Analyzing, and Synthesizing Hand
                Gestures
            </h3>
            <p>
                <LocalLink dst={["machine_learning", "hand_gesture_synthesis"]}>
                    Read more
                </LocalLink>
            </p>
            <BigImage name="ml/smashg-hands.png" />
        </Section>
    </>
);
