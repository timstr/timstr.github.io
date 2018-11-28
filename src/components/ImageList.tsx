import * as React from "react";
import { LazyImage } from "./Common/LazyImage";
import { Link } from "./Common/Link";

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

const ImageIcon = (props: { image: string }) => (
    <div className="pieceicon">
        <Link dst={`img/${props.image}.png`}>
            <LazyImage
                className="pieceicon-img"
                src={`img/${props.image}_small.png`}
            />
        </Link>
    </div>
);

export const ImageList = () => (
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
