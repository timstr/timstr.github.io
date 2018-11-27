import * as React from "react";

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
        <p>This is a quick, informal bio</p>
        <p>
            Click here for my <button onClick={props.gotoCV}>resume</button>
        </p>
    </div>
);
