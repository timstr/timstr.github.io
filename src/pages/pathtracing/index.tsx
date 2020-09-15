import { renderPage } from "../../renderpage";
import * as React from "react";
import { Link, LocalLink } from "../../components/Link";
import { Section } from "../../components/Section";
import { ImageIcon } from "../../components/ImageIcon";
import { LazyImage } from "../../components/LazyImage";

renderPage(
    ["pathtracing", "index"],
    <>
        <h1>Path Tracing</h1>
        <Section header={<h2>What does it do</h2>}>
            <h4>It makes pretty pictures.</h4>
            <p>
                <ImageIcon image="pathtracing/blockball09" />
            </p>
        </Section>
        <Section header={<h2>Where is the code</h2>}>
            <p>
                It is{" "}
                <Link dst="https://github.com/timstr/pathtracer">here</Link>.
            </p>
        </Section>
        <Section header={<h2>Can it do glossy materials</h2>}>
            <h4>Yes</h4>
            <p>
                <ImageIcon image="pathtracing/distantlight1" />
            </p>
        </Section>
        <Section
            header={
                <h2>
                    Oh but do the glossy materials get shinier at oblique angles
                    just like physically realistic materials
                </h2>
            }
        >
            <h4>Ya.</h4>
            <p>
                <ImageIcon image="pathtracing/specvsangle2" />
                <ImageIcon image="pathtracing/specvsangle1" />
            </p>
        </Section>
        <Section
            header={
                <h2>
                    Can it make weird fractals using only lights and shiny
                    spheres
                </h2>
            }
        >
            <h4>Yes, actually</h4>
            <p>
                <ImageIcon image="pathtracing/fractalreflections" />
            </p>
        </Section>
        <Section header={<h2>Can it do refractions and caustics</h2>}>
            <h4>Yes also. Caustics are terribly slow to converge, however.</h4>
            <p>
                <ImageIcon image="pathtracing/refraction" />
                <ImageIcon image="pathtracing/caustic" />
            </p>
        </Section>
        <Section header={<h2>And can it do raymarched fractals</h2>}>
            <h4>
                Oh you betcha. It can even make glossy and glassy fractals and
                shine lights on them
            </h4>
            <p>
                <ImageIcon image="pathtracing/mandelbulbwhole" />
                <ImageIcon image="pathtracing/mandelbulbtoplit" />
                <ImageIcon image="pathtracing/mandelbulbtopglass" />
            </p>
        </Section>
        <Section header={<h2>I need more</h2>}>
            <p>
                Check out the{" "}
                <LocalLink dst={["pathtracing", "gallery"]}>gallery</LocalLink>
            </p>
        </Section>
        <Section header={<h2>Whaaat</h2>}>
            <p>
                <LazyImage src="pathtracing/bouncey2.gif" />
            </p>
        </Section>
        <Section header={<h2>I still need more</h2>}>
            <p>
                Please yell at me via{" "}
                <Link dst="mailto:timstr@cs.ubc.ca">timstr@cs.ubc.ca</Link> and
                I will add more just for you
            </p>
        </Section>
    </>
);
