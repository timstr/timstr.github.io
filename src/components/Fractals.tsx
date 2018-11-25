import * as React from "react";

const Pictures = [
    "algae",
    "cauliflower",
    "cubes1",
    "cubes2",
    "gasbox",
    "glbox1",
    "glbox2",
    "greensponge",
    "ironsprout",
    "mandelbox1",
    "mandelbox2",
    "mandelbox3",
    "mandelbox4",
    "octree",
    "particleaccelerator",
    "saturn",
    "toroidalvortex",
    "tree",
];

const PictureIcon = (props: { image: string }) => (
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

export const Fractals = () => (
    <>
        <div className="fractals">
            {Pictures.map(img => (
                <PictureIcon key={img} image={img} />
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
