import * as React from "react";
import { ActualSizeImage } from "../../components/ActualSizeImage";
import { Link } from "../../components/Link";
import { Section, SubSection } from "../../components/Section";
import { renderPage } from "../../renderpage";

renderPage(
    ["machine_learning", "hand_gesture_recognition"],
    <>
        <h1>A Rapid Prototyping System for Hand Gesture Recongition</h1>
        <h2>
            Tim Straubinger and{" "}
            <Link dst="https://sites.google.com/view/nhgk">Nam Hee Kim</Link> -
            December 2019
        </h2>
        <h3>
            <em>CPSC 554X Course Project</em>
        </h3>
        <Section header={<h3>Animations</h3>}>
            <p>
                <em>"Call Me"</em>
            </p>
            <ActualSizeImage name="ml/arpshand1.gif" />
            <SubSection>
                <p>
                    <em>"Let's Drink"</em>
                </p>
                <ActualSizeImage name="ml/arpshand1.gif" />
            </SubSection>
            <SubSection>
                <p>
                    <em>"OK"</em>
                </p>
                <ActualSizeImage name="ml/arpshand3.gif" />
            </SubSection>
            <SubSection>
                <p>
                    <em>"Paper"</em>
                </p>
                <ActualSizeImage name="ml/arpshand4.gif" />
            </SubSection>
            <SubSection>
                <p>
                    <em>"Scissors"</em>
                </p>
                <ActualSizeImage name="ml/arpshand5.gif" />
            </SubSection>
            <SubSection>
                <p>
                    <em>"Thumbs Up"</em>
                </p>
                <ActualSizeImage name="ml/arpshand6.gif" />
            </SubSection>
        </Section>
        <Section header={<h3>Learn More</h3>}>
            <p>
                See videos of our project over at{" "}
                <Link dst="https://sites.google.com/view/arpshand">
                    Nam's project website.
                </Link>
            </p>
            <p>
                Read the full paper{" "}
                <Link dst="/static/papers/hand_gesture_recognition.pdf">
                    here (.pdf - 4.9 MB)
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
