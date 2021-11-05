import * as React from "react";
import { BigImage } from "../../components/BigImage";
import { ListOfImageIcons } from "../../components/ImageIcon";
import { Link } from "../../components/Link";
import { Section, SubSection } from "../../components/Section";
import { renderPage } from "../../renderpage";

renderPage(
    ["personal", "mushrooms"],
    <>
        <h1>Mushroom Photography</h1>
        <Section header={<h1>Amanita sp.</h1>}>
            <BigImage name="mushrooms/amanitasp2.jpg" />
            <BigImage name="mushrooms/amanitasp1.jpg" />
            <SubSection>
                <h3>
                    <em>Amanita muscaria var. flavivolvata</em>
                </h3>
                <ListOfImageIcons
                    folderName="mushrooms"
                    fileNames={[
                        "amanitamuscaria1.jpg",
                        "amanitamuscaria2.jpg",
                        "amanitamuscaria3.jpg",
                        "amanitamuscaria4.jpg",
                    ]}
                />
            </SubSection>
        </Section>
        <Section header={<h1>Giant Puffball</h1>}>
            <h3>
                <em>Calvatia booniana</em>
            </h3>
            <BigImage name="mushrooms/giantpuffball1.jpg" />
            <BigImage name="mushrooms/giantpuffball2.jpg" />
        </Section>
        <Section header={<h1>A Boletus or Suillus or something</h1>}>
            <BigImage name="mushrooms/boletusmaybe1.jpg" />
            <p>Me for scale</p>
            <BigImage name="mushrooms/boletusmaybe2.jpg" />
        </Section>
        <Section header={<h1>Earthstar</h1>}>
            <h3>
                <em>Geastrum saccatum</em>
            </h3>
            <BigImage name="mushrooms/earthstar.jpg" />
        </Section>
        <Section header={<h1>Stinkhorn</h1>}>
            <h3>
                <em>Phallus impudicus</em>
            </h3>
            <BigImage name="mushrooms/stinkhorn.jpg" />
        </Section>
        <Section header={<h1>Corraline fungus</h1>}>
            <h3>
                <em>Ramaria sp.</em>
            </h3>
            <BigImage name="mushrooms/coralline.jpg" />
        </Section>
        <Section header={<h1>Red-cracked bolete</h1>}>
            <h3>
                <em>Xerocomellus diffractus</em>
            </h3>
            <BigImage name="mushrooms/redcrackedbolete.jpg" />
        </Section>
        <Section header={<h1>False morel</h1>}>
            <h3>
                <em>Helvella vespertina</em>
            </h3>
            <BigImage name="mushrooms/falsemorel.jpg" />
        </Section>
        <Section header={<h1>Sulfur tuft</h1>}>
            <h3>
                <em>Hypholoma fasciculares</em>
            </h3>
            <BigImage name="mushrooms/sulfurtuft.jpg" />
        </Section>
        <p>
            <Link dst="https://www.inaturalist.org/people/alter_igel">
                Follow me on iNaturalist
            </Link>{" "}
            for more
        </p>
    </>
);
