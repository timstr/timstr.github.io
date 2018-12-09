import * as React from "react";
import { Section } from "../Common/Section";
import { ImageIcon } from "../Common/ImageIcon";
import { LazyImage } from "../Common/LazyImage";
import { Link } from "../Common/Link";

const Images = (props: { names: string[] }) => (
    <div>
        {props.names.map(str => (
            <ImageIcon image={str} key={str} />
        ))}
    </div>
);

interface Props {
    gotoGallery(): void;
}

export const AboutFractals = (props: Props) => (
    <>
        <h1>About my fractals</h1>
        <p>
            More images are available in the{" "}
            <button onClick={props.gotoGallery}>gallery</button>
        </p>
        <Section
            header={
                <>
                    <h2>A Brief History</h2>
                    <p>I was born, once. Later, I made my first fractal.</p>
                </>
            }
        >
            <ImageIcon image="fractalui" />
        </Section>

        <Section
            header={
                <>
                    <h2>2D Fractals (in colour)</h2>
                    <p>
                        The fractals here are various hybrids of{" "}
                        <Link dst="https://en.wikipedia.org/wiki/Mandelbrot_set">
                            Mandelbrot
                        </Link>{" "}
                        and{" "}
                        <Link dst="https://en.wikipedia.org/wiki/Mandelbox">
                            mandelbox
                        </Link>{" "}
                        fractals, with a variety of other transformations thrown
                        into the fractal algorithm. To produce these, a simple
                        function is defined that maps points in 2D space to
                        other points. For every point in the image, this
                        function is applied repeatedly, until it either grows
                        too large or some maximum number of iterations is
                        reached. The number of iterations is then used to choose
                        a colour from gradient. While the exact choice of
                        transformations and colours allows for an enormous
                        amount of customizability, the results are often very
                        unpredictable.
                    </p>
                    <p />
                </>
            }
        >
            <Images
                names={[
                    "particleaccelerator",
                    "tree",
                    "berryshake",
                    "rose",
                    "eye",
                    "toroidalvortex",
                ]}
            />
        </Section>

        <Section header={<h2>2D Fractals (with texture)</h2>}>
            UV mapping using curvature and amplitude
            <Images names={["algae", "cauliflower", "oilfilm", "saturn"]} />
            For comparison, two of these are textured using{" "}
            <Link dst="img/seaweed.png">this picture of seaweed</Link>.
        </Section>

        <Section header={<h2>3D Fractals</h2>}>
            Using CPU. Oh I did not sleep that night
            <Images
                names={["mandelbox4", "mandelbox3", "mandelbox1", "mandelbox2"]}
            />
        </Section>

        <Section header={<h2>3D Fractals (GLSL)</h2>}>
            Blinn-Phong shading maybe?
            <Images names={["glbox1", "glbox2"]} />
        </Section>

        <Section header={<h2>Other</h2>}>mostly cubes here</Section>
        <Images names={["cubes1", "cubes2", "octree", "voxelplanet"]} />
        <LazyImage src="img/flying.gif" />
        <LazyImage src="img/fovsilliness.gif" />
        <LazyImage src="img/gooflow.gif" />
        <LazyImage src="img/orbit.gif" />
    </>
);
