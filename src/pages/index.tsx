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
                I'm currently a production engineer at{" "}
                <Link dst="https://www.ilm.com/">
                    Industrial Light &amp; Magic
                </Link>
                , working in VFX R&amp;D.
            </p>
            <p>
                Previously, I received my master's degree in Computer Science at
                the{" "}
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
                , where I worked on{" "}
                <LocalLink
                    dst={["machine_learning", "acoustic_reconstruction"]}
                >
                    {" "}
                    acoustic reconstruction using machine learning and wave
                    simulation.
                </LocalLink>
            </p>
            <p>
                I have also worked at{" "}
                <Link dst="https://www.vitalmechanics.com/">
                    Vital Mechanics Research
                </Link>
                , working on garment and soft tissue simulation.
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
                <Link dst="mailto:straubinger.tim@gmail.com.ca">ask me</Link>{" "}
                any questions you have about my work.
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
                    <Link dst="https://www.inaturalist.org/people/alter_igel">
                        iNaturalist
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
                Click <Link dst="/static/TimStraubingerResume.pdf">here</Link>{" "}
                for my resume.
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
