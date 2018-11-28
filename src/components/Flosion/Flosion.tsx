import * as React from "react";
import { Section } from "../Common/Section";

/**
 * TODO:
 *  - lots of explanation, by topic
 *  - brief history?
 *  - screenshots
 *  - sample sounds
 *  - github link
 *  - executable download?
 */

export const Flosion = () => (
    <>
        <h1>Flosion</h1>
        <Section header={<h2>What is it?</h2>}>It's pretty cool</Section>
        <Section header={<h2>How does it work?</h2>}>Magic</Section>
        <Section header={<h2>Motivation</h2>}>I wanted it</Section>
        <Section header={<h2>Examples</h2>}>Go look somewhere else</Section>
        <Section header={<h2>Noteworthy things</h2>}>
            Phase Vocoder, Sampler, Timestretch
        </Section>
        <Section header={<h2>Architecture</h2>}>Subtle</Section>
        <Section header={<h2>Implementation</h2>}>
            C++, SFML, Tim's GUI (link)
        </Section>
        <Section header={<h2>Source</h2>}>github</Section>
        <Section header={<h2>Download</h2>}>notavirus.exe</Section>
    </>
);
