import * as React from "react";
import { ImageIcon, ListOfImageIcons } from "../../components/ImageIcon";
import { Link } from "../../components/Link";
import { Section } from "../../components/Section";
import { renderPage } from "../../renderpage";

renderPage(
    ["artwork", "ti84plus"],
    <>
        <h1>TI-84 Plus Graphing Calculator</h1>
        <Section
            header={
                <>
                    <h1>Graphing Calculator Drawings</h1>
                    <p>
                        Over the course of many dull highschool classes, I
                        taught myself{" "}
                        <Link dst="https://en.wikipedia.org/wiki/TI-BASIC">
                            TI-BASIC
                        </Link>{" "}
                        which is a weird and terrible language, although it does
                        let you manipulate individual pixels of the screen. I
                        made a drawing program that consists of the cursor,
                        which is a single flashing pixel, that can be moved one
                        pixel at a time using the arrow keys, and whose colour
                        can be toggled with the Enter key.
                    </p>
                    <p>
                        An important part of this program is a series of
                        for-loops that do nothing other than slow the
                        interpreter down enough for the key press speed to
                        roughly match human intuition.
                    </p>
                    <p>
                        This extremely restricted medium combined with hours of
                        classroom boredom made for some happy artwork.
                    </p>
                </>
            }
        >
            <ListOfImageIcons
                folderName="artwork/ti84plus"
                fileNames={[
                    "alphahelium.jpg",
                    "froyoperson.jpg",
                    "jungletemple.jpg",
                    "mrwiebe.jpg",
                    "pokecenter.jpg",
                    "spacerocket.jpg",
                ]}
            />
        </Section>
        <Section header={<h3>Extra</h3>}>
            <ImageIcon image="artwork/ti84plus/mandelbrot.jpg" />
            <p>
                TI-BASIC also has built-in support for complex numbers, which is
                convenient for rendering the Mandelbrot set. The 96-by-64 pixel
                image shown here took half an hour to render on this bad boy.
            </p>
        </Section>
    </>
);
