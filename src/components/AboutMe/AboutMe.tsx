import * as React from "react";
import { Section } from "../Common/Section";

/**
 * TODO:
 *  - bio
 *  - interests
 *  - skills
 *  - etc
 *  - links to other pages where relevant
 *  - pictures of me
 *  - drawings / random facts? I have regular lucid dreams
 */

interface AboutMeProps {
    gotoCV(): void;
}

export const AboutMe = (props: AboutMeProps) => (
    <div>
        <h1>I am Tim</h1>
        <Section header={<h2>Bio</h2>}>
            This will be a quick, informal bio
        </Section>
        <Section header={<h2>Resume</h2>}>
            Click here for my <button onClick={props.gotoCV}>resume</button>
        </Section>
    </div>
);
