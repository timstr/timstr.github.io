import { renderPage } from "../../renderpage";
import * as React from "react";
import { ImageIcon } from "../../components/ImageIcon";

const Pictures = [
    "earthblimpsandwich.jpg",
    "bruntus.jpg",
    "bruntus2.jpg",
    "bossfellow.JPG",
    "bradlad.JPG",
    "brainpower.JPG",
    "catinsectetc.JPG",
    "coolguyeyeperson.jpg",
    "crystalswip.jpg",
    "cupper.JPG",
    "deathspire.JPG",
    "fractaljam.JPG",
    "fun_gal.JPG",
    "goochmelancholy.JPG",
    "gourdbasket.JPG",
    "hatree.JPG",
    "hobgob.JPG",
    "livechicken.jpg",
    "scooter.JPG",
    "snooter.JPG",
    "sonflower.JPG",
    "treebirdplanes.JPG",
    "treee.JPG",
    "triclops.jpg",
    "twoeyedfish.jpg",
    "watercycle.JPG",
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
