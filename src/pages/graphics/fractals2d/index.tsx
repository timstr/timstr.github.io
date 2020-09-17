import * as React from "react";
import { renderPage } from "../../../renderpage";
import { LocalLink, Link } from "../../../components/Link";
import { ImageIcon } from "../../../components/ImageIcon";
import { Section, SubSection } from "../../../components/Section";
import { YouTubePlayer } from "../../../components/YouTubePlayer";
import { CoolGifs } from "../../../components/CoolGifs";

const FractalImages = (props: { names: string[] }) => (
    <div>
        {props.names.map((str) => (
            <ImageIcon image={"fractals/" + str} key={str} />
        ))}
    </div>
);

renderPage(
    ["graphics", "fractals2d", "index"],
    <>
        <h1>About my fractals</h1>
        <p>
            More images are available in the{" "}
            <LocalLink dst={["graphics", "fractals2d", "gallery"]}>
                gallery
            </LocalLink>
        </p>
        <Section
            header={
                <>
                    <h2>How They're Made</h2>
                    <p>
                        The fractals shown here were rendered by an evolving
                        lineage of various programs that I've refined and
                        re-implemented over the course of many years. My
                        favourite of these renderers is shown here, which
                        includes a gradient editor and lots of customizable
                        sliders and options that determine the fractal algorithm
                        being used. The fading effect when zooming and
                        rerendering is due to the pixels being rendered in a
                        randomized order. This renderer is multi-threaded and
                        uses <Link dst="https://www.libsdl.org/">SDL</Link>.
                    </p>
                    <p>
                        The code for this is old and horrible and I shall not be
                        releasing it. Sorry.
                    </p>
                    <p>
                        Please nag me at{" "}
                        <Link dst="mailto:timstr@cs.ubc.ca">
                            timstr@cs.ubc.ca
                        </Link>{" "}
                        if you think I should make a better one and share it
                        with the world.
                    </p>
                </>
            }
        >
            <h4>Fractals in Action</h4>
            <YouTubePlayer ytid="u90snpqoBxA" width={600} height={450} />
            <p>
                A fractal that was saved during this screen recording is
                available below.
            </p>
            <ImageIcon image="fractals/examplemandelbox" />
            <ImageIcon image="fractals/fractalui" />
        </Section>

        <Section
            header={
                <>
                    <h2>2D Fractals (in Colour)</h2>
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
                        function is applied iteratively, until either its value
                        grows too large or some maximum number of iterations is
                        reached (it can go on infinitely, for some points). The
                        number of iterations is then used to choose a colour
                        from gradient. While the exact choice of transformations
                        and colours allows for an enormous amount of
                        customizability, the results are often very
                        unpredictable.
                    </p>
                </>
            }
        >
            <FractalImages
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

        <Section
            header={
                <>
                    <h2>2D Fractals (With Texture)</h2>
                    <p>
                        For these images, the usual escape-time Mandelbrot
                        rendering algorithm was used to create a local estimate
                        of curvature. This curvate value was then used in
                        addition to the escape time to perform colour
                        computations, simple shading, and texture mapping. Two
                        of the fractals here are textured using the following
                        image of seaweed at low tide.
                    </p>
                    <ImageIcon image="fractals/seaweed" />
                </>
            }
        >
            <FractalImages
                names={["algae", "cauliflower", "oilfilm", "saturn"]}
            />
        </Section>

        <Section
            header={
                <>
                    <h2>3D Fractals</h2>
                    <p>
                        Here, I implemented a CPU-based{" "}
                        <Link dst="https://en.wikipedia.org/wiki/Ray_tracing_(graphics)">
                            ray-tracer
                        </Link>{" "}
                        in C++, which simulates paths of light through space as
                        they collide with the computed fractal geometry. For 3D
                        fractals, whose shape is complicated and chaotic, these
                        light paths need to take lots of very small steps to
                        avoid skipping right through parts of the fractal. These
                        small step sizes make this kind of ray tracing
                        computationally expensive, especially when done many
                        times per pixel, for a million pixels, just for a single
                        image. Multi-threading can reduce the time
                        significantly, though the rendering time of these
                        fractals ranged from 2 minutes to 30 minutes.
                    </p>
                    <p>
                        The code for this is old and horrible and I shall not be
                        releasing it. Sorry.
                    </p>
                    <p>
                        Please see my{" "}
                        <LocalLink dst={["graphics", "pathtracing"]}>
                            work on path tracing
                        </LocalLink>{" "}
                        for newer 3D fractals.
                    </p>
                </>
            }
        >
            <FractalImages
                names={["mandelbox4", "mandelbox3", "mandelbox1", "mandelbox2"]}
            />
            <SubSection>
                <p>
                    I've also used the same ray-tracing algorithm to render
                    other things, like voxel clouds and octrees.
                </p>
                <FractalImages
                    names={["cubes1", "cubes2", "octree", "voxelplanet"]}
                />
            </SubSection>
        </Section>

        <Section
            header={
                <>
                    <h2>3D Fractals (GLSL)</h2>
                    <p>
                        These fractals were implemented using a similar ray
                        tracing algorithm to that described above, though
                        instead of running on the CPU, these ones were
                        implemented in GLSL and ran on the GPU. The lighting is
                        done using the Blinn-Phong shading model, for which a
                        local estimate of curvate was computed to generate a
                        surface normal.
                    </p>
                    <p>
                        Note: while this renderer ran significantly faster than
                        the CPU-based ray-tracer, the FPS counter in the
                        top-left corner is rounded up. In actuality, the speed
                        was about 5 to 10 seconds per frame at full-screen.
                    </p>
                </>
            }
        >
            <FractalImages names={["glbox1", "glbox2"]} />
        </Section>

        <Section header={<h2>Animated</h2>}>
            <CoolGifs />
        </Section>
    </>
);
