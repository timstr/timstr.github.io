import * as React from "react";

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
        <a
            href={`img/${props.image}.png`}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                className="pieceicon-img"
                src={`img/${props.image}_small.png`}
            />
        </a>
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
            <a
                href="https://timstraubinger.tumblr.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                timstraubinger.tumblr.com/
            </a>
        </div>
    </>
);
