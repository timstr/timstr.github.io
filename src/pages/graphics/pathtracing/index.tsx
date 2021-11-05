import * as React from "react";
import { BigImage } from "../../../components/BigImage";
import { ImageIcon } from "../../../components/ImageIcon";
import { LazyImage } from "../../../components/LazyImage";
import { Link, LocalLink } from "../../../components/Link";
import { Section } from "../../../components/Section";
import { renderPage } from "../../../renderpage";

renderPage(
    ["graphics", "pathtracing", "index"],
    <>
        <h1>Path Tracing</h1>
        <BigImage name="pathtracing/blockball05" />
        <Section header={<h2>Overview</h2>}>
            <h2>How it works</h2>
            <p>
                Path tracing, like conventional computer rendering, draws 3D
                objects as seen by a virtual camera by finding where lines of
                sight from the camera intersect with nearby objects. Unlike
                conventional rendering, when a ray of light hits an obstacle,
                path tracing simulates multiple additional bouncing rays which
                contribute light to the original point that was hit. Path
                tracing is able to faithfully reproduce many real-world
                phenomena, such as global illumination, depth of field,
                caustics, and a large variety of material properties. The
                recursive nature of path tracing, as well as the large number of
                simulated rays per pixel that are needed for smooth images, can
                make a naive implementation of a path tracer quite slow.
            </p>
            <p>
                <ImageIcon image="pathtracing/blockball09" />
            </p>
            <p>
                My implementation of a path tracer is of the naive variety, and
                so it converges very slowly for scenes with very few, small,
                bright light sources (which unfortunately describes most natural
                scenes). Most of the images you'll see here are flooded with
                light and light-emitting surfaces, which converges more quickly
                and gives a delightfully other-wordly if not quite realistic
                look.
            </p>
            <p>
                The simple representation of light rays bouncing off surfaces
                that path tracing uses makes it remarkably easy to implement a
                large number of pleasing optical effects with simple vector
                calculus, including
                <ul>
                    <li>Specular reflections</li>
                    <li>Diffuse reflections</li>
                    <li>Glossy reflections</li>
                    <li>Refraction</li>
                    <li>Caustics</li>
                    <li>Depth of field</li>
                </ul>
                among others.
            </p>
            <p>
                My pather tracer is designed to be fairly agnostic to the
                geometric representations of objects it's rendering, as long as
                one can find points of intersections with rays and surface
                normals. At the moment, rectangular prisms, spheres, triangles,
                and signed distance fields are implemented.
            </p>
            <p>
                In natural scenes, most of the computation of a path tracer is
                wasted by naively gathering light rays from dark areas, without
                giving direct and indirect light sources the extra attention
                they deserve. Building a better path tracer requires a good
                understanding of efficient probabilistic sampling that still
                remains accurate (or "unbiased"). I may attempt this in the
                future. But in the meantime, here are some pretty pictures.
            </p>
            <h2>Source Code</h2>
            <p>
                The C++ implementation is available on{" "}
                <Link dst="https://github.com/timstr/pathtracer">GitHub</Link>.
            </p>
        </Section>
        <Section header={<h2>Surface Materials</h2>}>
            <p>
                Whenever a ray hits a surface, the light that is seen along that
                ray is gathered from three different major sources:
                <ul>
                    <li>
                        Light emitted by the surface itself, such as a light
                        source or incandescing object
                    </li>
                    <li>
                        Rays that bounce off the surface and hit other light
                        sources, which is reflection
                    </li>
                    <li>
                        Rays that pass through the surface before later leaving
                        and hitting other light sources, which is refraction
                    </li>
                </ul>
                Just about any physical material can be described by how it
                transmits, reflects, and refracts light according to where the
                material was hit, what angle it was hit at, and where other
                light sources are located relatively.
            </p>
            <p>
                <ImageIcon image="pathtracing/spheres03" />
            </p>
            <p>
                Specular (or shiny) surfaces reflect incoming rays perfectly,
                which creates a crisp and detailed reflection. Diffuse (or
                matte) surfaces will randomly bounce rays in many different
                directions, which creates smooth and gradual shading.
            </p>
            <p>
                <ImageIcon image="pathtracing/distantlight1" />
            </p>
            <p>
                Glossy materials produce a mixture of both specular and diffuse
                reflections. In the real world, glossy or diffuse materials
                often appear to become shinier at oblique angles. This easy to
                emulate in software, by attenuating the spread of diffuse
                reflections according to the incoming angle.
            </p>
            <p>
                <ImageIcon image="pathtracing/specvsangle2" />
                <ImageIcon image="pathtracing/specvsangle1" />
            </p>

            <p>
                Refraction is also fairly easy to implement, simply by allowing
                ray intersections to work through the insides of obstacles. The
                amount that light rays are bent according to the indicies of
                refraction is easily implemented using Snell's law. Slight
                specular highlights can be obtained simply by randomly choosing
                some light rays to reflect while allowing the rest to refract.
            </p>
            <p>
                <ImageIcon image="pathtracing/refractionnoglass" />
                <ImageIcon image="pathtracing/refraction" />
            </p>
            <p>
                Pictured above is a glass orb in front of a group of coloured
                glossy, glassy, and metallic spheres. The same spheres without
                the glass orb in front are pictured on the left for comparison.
                Note the inversion of features at the center of the image.
            </p>
        </Section>
        <Section header={<h2>Caustics</h2>}>
            <h2>What are caustics?</h2>
            <p>
                Caustics are when light from a single source is concentrated in
                a small spot from reflections and refractions, rather than
                spreading out normally. Real-world examples include the patterns
                of light behind glasses of water, the spots of light from a
                disco ball, and the ripples of light under a wavy water surface.
            </p>
            <p>
                In a path tracer, caustics are hard because they depend heavily
                on tiny light sources that are very difficult to hit with random
                sampling. They also depend on indirect and often convoluted
                sequences of light bounces, which makes reasoning about
                probabilistic sampling even more difficult. For these reason,
                they're often used as a sort of benchmark for how well a path
                tracer performs.
            </p>
            <p>
                <ImageIcon image="pathtracing/caustic" />
            </p>
            <p>
                As has previously been stated, my path tracer is a naive
                implementation. The above image of a sphere of glass focusing
                light onto a plane was rendered at 65,536 samples per pixel
                which took forever. For this reason, I am not attempting to do
                any other work producing caustics here.
            </p>
        </Section>
        <Section header={<h2>Signed Distance Fields</h2>}>
            <p>
                My path tracer allows simple geometric solids and signed
                distance fields to coexist in the same scene. Signed distance
                fields are fun because while they can describe simple shapes,
                they can also be used to render fractals, such as the
                mandelbulb, on the fly. Ray intersect tests are performed using
                ray marching, and surface normals are computed using finite
                differences. The same materials used on basic shapes above can
                also be used here, at no extra cost.
            </p>
            <ImageIcon image="pathtracing/mandelbulbwhole" />
            <ImageIcon image="pathtracing/mandelbulbtoplit" />
            <ImageIcon image="pathtracing/mandelbulbtopglass" />
        </Section>
        <Section header={<h2>Fun/Weird Stuff</h2>}>
            <p>
                Here's a fractal made simply by placing shiny spheres right
                beside each other, next to some glowing and green and blue
                spheres.
            </p>
            <p>(large image - 4.6 MB)</p>
            <p>
                <ImageIcon image="pathtracing/fractalreflections" />
            </p>
            <p>And here's negative light in a Cornell box.</p>
            <p>
                <BigImage name="pathtracing/negativelight" />
            </p>
            <p>
                On the top is a normal light source. When light rays hit the
                light source, their brightness increases. On the bottom is a
                negative light source (or "light sink") which decreases the
                amount of light returned by a bouncing light ray.
            </p>
            <p>
                It makes no sense at all but the math is the same and it's fun
                to look at. Note the brighter shadows and brighter corners
                (negative ambient occlusion) near the bottom of the image.
            </p>
            <p>Sorry it's small and grainy. This was also slow to render.</p>
        </Section>
        <Section header={<h2>More</h2>}>
            <p>
                More images are located in the{" "}
                <LocalLink dst={["graphics", "pathtracing", "gallery"]}>
                    gallery
                </LocalLink>
            </p>
        </Section>
        <Section header={<h2>Even More</h2>}>
            <p>
                Please write to me via{" "}
                <Link dst="mailto:timstr@cs.ubc.ca">timstr@cs.ubc.ca</Link> and
                I will add more just for you
            </p>
        </Section>
        <Section header={<h2>Whoah Nice</h2>}>
            <p>
                <LazyImage src="pathtracing/bouncey2.gif" />
            </p>
        </Section>
    </>
);
