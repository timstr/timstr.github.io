import * as React from "react";
import { BigImage } from "../../components/BigImage";
import { ImageIcon, ListOfImageIcons } from "../../components/ImageIcon";
import { LocalLink } from "../../components/Link";
import { SubSection } from "../../components/Section";
import { renderPage } from "../../renderpage";

renderPage(
    ["artwork", "index"],
    <>
        <h1>Artwork</h1>
        <BigImage name="artwork/earthblimpsandwich.jpg" />
        <SubSection>
            <BigImage name="artwork/scooter.jpg" />
        </SubSection>
        <SubSection>
            <ListOfImageIcons
                folderName="artwork"
                fileNames={[
                    "treebirdplanes.jpg",
                    "fun_gal.jpg",
                    "deathspire.jpg",
                    "goochmelancholy.jpg",
                ]}
            />
        </SubSection>
        <SubSection>
            <BigImage name="artwork/treee.jpg" />
        </SubSection>
        <SubSection>
            <BigImage name="artwork/snowhut.jpg" />
        </SubSection>
        <SubSection>
            <p>
                More artwork is in{" "}
                <LocalLink dst={["artwork", "gallery"]}>the gallery</LocalLink>
            </p>
            <p>
                <ImageIcon image="artwork/sprudo.gif" />
            </p>
        </SubSection>
    </>
);
