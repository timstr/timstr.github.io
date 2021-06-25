import { renderPage } from "../../renderpage";
import * as React from "react";
import { ImageIcon } from "../../components/ImageIcon";

const Pictures = [
    "earthblimpsandwich.jpg",
    "bruntus.jpg",
    "bruntus2.jpg",
    "bossfellow.jpg",
    "bradlad.jpg",
    "brainpower.jpg",
    "catinsectetc.jpg",
    "coolguyeyeperson.jpg",
    "crystalswip.jpg",
    "cupper.jpg",
    "deathspire.jpg",
    "fractaljam.jpg",
    "fun_gal.jpg",
    "goochmelancholy.jpg",
    "gourdbasket.jpg",
    "hatree.jpg",
    "hobgob.jpg",
    "livechicken.jpg",
    "scooter.jpg",
    "snooter.jpg",
    "snowhut.jpg",
    "sonflower.jpg",
    "treebirdplanes.jpg",
    "treee.jpg",
    "triclops.jpg",
    "twoeyedfish.jpg",
    "watercycle.jpg",
];

renderPage(
    ["artwork", "gallery"],
    <>
        <div className="img-gallery">
            {Pictures.map((img) => (
                <ImageIcon key={img} image={"artwork/" + img} />
            ))}
        </div>
    </>
);
