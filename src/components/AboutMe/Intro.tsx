import * as React from "react";
import { Section } from "../Common/Section";
import { Link } from "../Common/Link";

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

export const Intro = () => (
    <div>
        <h1>Hello! I am Tim.</h1>
        <Section header={<h2>Bio</h2>}>
            <p>
                I'm currently finishing my bachelor's degree in Computer Science
                at UBC Vancouver. When I'm not biking or exploring nature, I
                like to create my own worlds, usually with software, sometimes
                with Lego. Most of my software projects revolve around trying to
                emulate organic chaos and complexity of some form or another.
            </p>
            <p>
                Take a look around. Please{" "}
                <a href="mailto:straubinger.tim@gmail.com">ask me</a> any
                questions you have about my work.
            </p>
        </Section>
        <Section header={<h2>Resume</h2>}>
            <p>
                Click <Link dst="TimStraubingerCV.pdf">here</Link> for my
                resume.
            </p>
        </Section>
    </div>
);
