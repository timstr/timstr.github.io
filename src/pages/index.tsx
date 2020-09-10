import * as React from "react";
import { renderPage } from "../renderpage";
import { FaceIcon } from "../components/FaceIcon";
import { Section } from "../components/Section";
import { Link, LocalLink } from "../components/Link";

renderPage(
    ["index"],
    <div>
        <div className="intromain">
            <div className="intromain-child">
                <FaceIcon />
                <h1 className="myname">Tim Straubinger</h1>
            </div>
        </div>
        <Section header={<h2>Bio</h2>}>
            <p>
                I'm currently studying for a master's degree in computer science
                at the{" "}
                <Link dst="https://www.cs.ubc.ca/">
                    University of British Columbia
                </Link>
                , under the supervision of{" "}
                <Link dst="https://www.robertxiao.ca/">Robert Xiao</Link> and{" "}
                <Link dst="http://helge.rhodin.de/">Helge Rhodin</Link>. When
                I'm not biking or exploring nature, I like to create my own
                worlds, usually with software, sometimes with Lego. Most of my
                software projects revolve around trying to emulate organic chaos
                and complexity of one form or another.
            </p>
            <p>
                I like to make{" "}
                <LocalLink dst={["flosion"]}>music software</LocalLink>,{" "}
                <LocalLink dst={["fractals"]}>fractals</LocalLink>, and{" "}
                <LocalLink dst={["rigidbodydynamics"]}>
                    physics simulations
                </LocalLink>{" "}
                among other things.
            </p>
            <p>
                Take a look around. Please{" "}
                <Link dst="mailto:timstr@cs.ubc.ca">ask me</Link> any questions
                you have about my work.
            </p>
        </Section>
        <Section header={<h2>Resume</h2>}>
            <p>
                Click <Link dst="/static/TimStraubingerCV.pdf">here</Link> for
                my resume.
            </p>
        </Section>
        <Section header={<h2>Contact Me</h2>}>
            <p>
                Email:{" "}
                <Link dst="mailto:timstr@cs.ubc.ca">timstr@cs.ubc.ca</Link>
            </p>
        </Section>
    </div>
);
