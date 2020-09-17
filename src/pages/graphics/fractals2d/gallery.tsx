import * as React from "react";
import { renderPage } from "../../../renderpage";
import { ImageIcon } from "../../../components/ImageIcon";

/**
 * TODO:
 *  - explanation
 *  - organize by topic
 *  - talk about software used
 *  - screenshots
 *  - include gifs
 */

const Pictures = [
    "algae",
    "alveoli",
    "berryshake",
    "box",
    "buddha",
    "cauliflower",
    "clockwork",
    "contrail",
    "cubes1",
    "cubes2",
    "eye",
    "flyingmountains",
    "gasbox",
    "glbox1",
    "glbox2",
    "greensponge",
    "hydra",
    "ironsprout",
    "mandelbox1",
    "mandelbox2",
    "mandelbox3",
    "mandelbox4",
    "map",
    "mau5",
    "octree",
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
    "voxelplanet",
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
