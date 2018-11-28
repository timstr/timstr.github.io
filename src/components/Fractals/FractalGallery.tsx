import * as React from "react";
import { ImageIcon } from "../Common/ImageIcon";
import { Link } from "../Common/Link";

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

export const FractalGallery = () => (
    <>
        <div className="fractals">
            {Pictures.map(img => (
                <ImageIcon key={img} image={img} />
            ))}
        </div>
        <div>
            More images at{" "}
            <Link dst="https://timstraubinger.tumblr.com/">
                timstraubinger.tumblr.com/
            </Link>
        </div>
    </>
);
