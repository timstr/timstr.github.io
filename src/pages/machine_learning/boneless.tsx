import * as React from "react";
import { BigImage } from "../../components/BigImage";
import { Link } from "../../components/Link";
import { Section } from "../../components/Section";
import { renderPage } from "../../renderpage";

renderPage(
    ["machine_learning", "boneless"],
    <>
        <h1>Locomotion of Boneless Creatures with Distributed Control</h1>
        <h2>
            Tim Straubinger and{" "}
            <Link dst="https://davepagurek.com/">Dave Pagurek</Link> - April
            2020
        </h2>
        <h3>
            <em>CPSC 533V Course Project</em>
        </h3>
        <BigImage name="ml/tetrapus-long.png" />
        <Section header={<h3>Animations</h3>}>
            <BigImage name="ml/tetrapus-springy.gif" />
            <BigImage name="ml/tetrapus-fall.gif" />
            <BigImage name="ml/horse.gif" />
        </Section>
        <Section header={<h3>Learn More</h3>}>
            <p>
                See more videos of our project over at{" "}
                <Link dst="https://www.davepagurek.com/programming/boneless/">
                    Dave's website.
                </Link>
            </p>
            <p>
                Read the full paper{" "}
                <Link dst="/static/papers/boneless.pdf">
                    here (.pdf - 3.4 MB)
                </Link>
            </p>
        </Section>
        <Section header={<h3>Source Code</h3>}>
            <Link dst="https://github.com/davepagurek/boneless">
                View the code on GitHub
            </Link>
        </Section>
    </>
);
