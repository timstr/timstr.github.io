import * as React from "react";
import { renderPage } from "../../../renderpage";
import { ImageIcon } from "../../../components/ImageIcon";

const Pictures = [
    "box",
    "cubes1",
    "cubes2",
    "flyingmountains",
    "glbox1",
    "glbox2",
    "mandelbox1",
    "mandelbox2",
    "mandelbox3",
    "mandelbox4",
    "octree",
    "voxelplanet",
];

renderPage(
    ["graphics", "fractals3d", "gallery"],
    <>
        <div className="img-gallery">
            {Pictures.map((img) => (
                <ImageIcon key={img} image={"/fractals/" + img} />
            ))}
        </div>
    </>
);
