import * as React from "react";
import { BigImage } from "../components/BigImage";
import { Link, LocalLink } from "../components/Link";
import { Section, SubSection } from "../components/Section";
import { renderPage } from "../renderpage";

renderPage(
    ["personal"],
    <>
        <h1>Personal Stuff</h1>
        <Section
            header={
                <>
                    <h2>CSGSA Coffee House</h2>
                    <p>March 6th, 2020</p>
                </>
            }
        >
            <p>
                Me making weird sounds with my friend Noah a.k.a.{" "}
                <Link dst="https://byte.observer">byte.observer</Link>
            </p>
            <p>
                <BigImage name="timnoah.jpg"></BigImage>
            </p>
            <SubSection>
                <p>
                    <Link dst="https://www.davepagurek.com/">Dave</Link>,
                    creator of the ad-hoc member-fluid cover band{" "}
                    <Link dst="https://soundcloud.com/dont-cross-me">
                        Don't Cross Me
                    </Link>
                    , loosely orchestrating a cover of Shake It Off by Taylor
                    Swift. Dave is playing the melodica.{" "}
                    <Link dst="http://gregdeon.com/index.html">Greg</Link> is on
                    the bass. Noah is serving up some beats using{" "}
                    <Link dst="http://toolsforscholars.com/defmon/doku.php?id=start">
                        defMON
                    </Link>
                    . I'm lagging far behind, trying to tune a saw wave using{" "}
                    <LocalLink dst={["audio", "flosion"]}>Flosion</LocalLink>.
                </p>
                <p>
                    <BigImage name="dontcrossme.jpg"></BigImage>
                </p>{" "}
            </SubSection>
        </Section>
        <Section
            header={
                <>
                    <h1>UDLS - C++ Roast</h1>
                    <p>January 24th, 2020</p>
                </>
            }
        >
            <p>
                I gave an{" "}
                <Link dst="https://www.cs.ubc.ca/~udls/">
                    Undistinguished Lecture
                </Link>{" "}
                on the dangers and idiosyncracies of the C++ programming
                language.
            </p>
            <BigImage name="udls_cpproast" />
            <p>
                The abstract and slides are available{" "}
                <Link dst="https://www.cs.ubc.ca/~udls/showTalk.php/2020-01-24">
                    here
                </Link>
                .
            </p>
        </Section>
        <Section
            header={
                <>
                    <h1>UDLS - German Fairy Tales</h1>
                    <p>November 22nd, 2019</p>
                </>
            }
        >
            <p>
                I gave an{" "}
                <Link dst="https://www.cs.ubc.ca/~udls/">
                    Undistinguished Lecture
                </Link>{" "}
                on the fairy tales of the Brothers Grimm (<em>Cinderella</em>,{" "}
                <em>Rapunzel</em>, <em>Snow White</em>, etc) and Heinrich
                Hoffmann (<em>Struwwelpeter</em> - ask your nearest German).
            </p>
            <BigImage name="udls_germanfairytales" />
            <p>
                The abstract and slides are available{" "}
                <Link dst="https://www.cs.ubc.ca/~udls/showTalk.php/2019-11-22">
                    here
                </Link>
                .
            </p>
        </Section>
    </>
);
