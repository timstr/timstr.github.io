import * as React from "react";
import { renderPage } from "../../../renderpage";
import { ImageIcon } from "../../../components/ImageIcon";

const Pictures = [
    "algae",
    "alveoli",
    "berryshake",
    "buddha",
    "cauliflower",
    "clockwork",
    "contrail",
    "eye",
    "gasbox",
    "greensponge",
    "hydra",
    "ironsprout",
    "map",
    "mau5",
    "oilfilm",
    "particleaccelerator",
    "rose",
    "sand",
    "saturn",
    "skullraa",
    "spongeheirarchy",
    "teddytoast",
    "toroidalvortex",
    "tree",
];

renderPage(
    ["graphics", "fractals2d", "gallery"],
    <>
        <div className="img-gallery">
            {Pictures.map((img) => (
                <ImageIcon key={img} image={"/fractals/" + img} />
            ))}
        </div>
    </>
);
