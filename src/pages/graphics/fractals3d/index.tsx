import * as React from "react";
import { ListOfImageIcons } from "../../../components/ImageIcon";
import { Link, LocalLink } from "../../../components/Link";
import { Section, SubSection } from "../../../components/Section";
import { TabbedImages } from "../../../components/TabbedImages";
import { renderPage } from "../../../renderpage";

renderPage(
    ["graphics", "fractals3d", "index"],
    <>
        <h1>3D Fractals (old)</h1>
        <p>
            More images are available in the{" "}
            <LocalLink dst={["graphics", "fractals3d", "gallery"]}>
                gallery
            </LocalLink>
        </p>
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
            <ListOfImageIcons
                folderName="fractals"
                fileNames={[
                    "mandelbox4",
                    "mandelbox3",
                    "mandelbox1",
                    "mandelbox2",
                ]}
            />
            <SubSection>
                <p>
                    I've also used the same ray-tracing algorithm to render
                    other things, like voxel clouds and octrees.
                </p>
                <ListOfImageIcons
                    folderName="fractals"
                    fileNames={["cubes1", "cubes2", "octree", "voxelplanet"]}
                />
            </SubSection>
        </Section>

        <Section header={<h2>Animated</h2>}>
            <TabbedImages
                folderName="fractals"
                images={[
                    { fileName: "flying.gif", title: "Flying" },
                    {
                        fileName: "fovsilliness.gif",
                        title: "Negative Field-of-View",
                    },
                    { fileName: "orbit.gif", title: "Orbit" },
                ]}
            />
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
            <ListOfImageIcons
                folderName="fractals"
                fileNames={["glbox1", "glbox2"]}
            />
        </Section>
    </>
);
