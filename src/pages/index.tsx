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
                I'm an MSc. student at the{" "}
                <Link dst="https://www.cs.ubc.ca/">
                    University of British Columbia
                </Link>
                , under the supervision of{" "}
                <Link dst="https://www.robertxiao.ca/">Robert Xiao</Link> and{" "}
                <Link dst="http://helge.rhodin.de/">Helge Rhodin</Link>, with{" "}
                <Link dst="https://www.cs.ubc.ca/labs/imager/imager.php">
                    Imager Lab
                </Link>{" "}
                and the{" "}
                <Link dst="https://vision.cs.ubc.ca/">Computer Vision Lab</Link>
                , where I work on{" "}
                <LocalLink
                    dst={["machine_learning", "acoustic_reconstruction"]}
                >
                    {" "}
                    acoustic reconstruction using machine learning and wave
                    simulation.
                </LocalLink>
            </p>
            <p>
                When I'm not biking or exploring nature, I like to create my own
                worlds, usually with software, sometimes with Lego. Most of my
                software projects revolve around trying to capture or emulate
                organic complexity and chaos of one form or another.
            </p>
            <p>
                I like to make{" "}
                <LocalLink dst={["audio", "flosion"]}>music software</LocalLink>
                ,{" "}
                <LocalLink dst={["graphics"]}>
                    3D renderings and fractals
                </LocalLink>
                , and{" "}
                <LocalLink dst={["physics", "rigidbodydynamics"]}>
                    physics simulations
                </LocalLink>{" "}
                among other things.
            </p>
            <p>
                Take a look around. Please{" "}
                <Link dst="mailto:timstr@cs.ubc.ca">ask me</Link> any questions
                you have about my work.
            </p>
            <p>Pronouns: he/him/his</p>
        </Section>
        <Section header={<h2>Links</h2>}>
            <ul>
                <li>
                    <Link dst="https://github.com/timstr">GitHub</Link>
                </li>
                <li>
                    <Link dst="https://soundcloud.com/timstraubinger">
                        SoundCloud
                    </Link>
                </li>
                <li>
                    <Link dst="https://www.youtube.com/channel/UCzB2F3BBhsi3yY1HVP7--ow">
                        YouTube
                    </Link>
                </li>
                <li>
                    <Link dst="https://stackoverflow.com/users/5023438/alter-igel">
                        StackOverflow
                    </Link>
                </li>
            </ul>
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
