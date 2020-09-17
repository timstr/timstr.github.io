import * as React from "react";
import { BigImage } from "../components/BigImage";
import { Link, LocalLink } from "../components/Link";
import { Section, SubSection } from "../components/Section";
import { renderPage } from "../renderpage";

renderPage(
    ["blog"],
    <>
        <h1>Blag</h1>
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
    </>
);
