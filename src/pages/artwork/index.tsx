import * as React from "react";
import { BigImage } from "../../components/BigImage";
import { Section } from "../../components/Section";
import { renderPage } from "../../renderpage";

renderPage(
    ["artwork", "index"],
    <>
        <h1>Artwork</h1>
        <BigImage name="artwork/earthblimpsandwich.jpg" />
        <Section header={<h1>Will there be more?</h1>}>
            <p>Probably. Stick around.</p>
        </Section>
    </>
);
