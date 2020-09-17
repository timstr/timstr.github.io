import { renderPage } from "../../../renderpage";
import * as React from "react";
import { ImageIcon } from "../../../components/ImageIcon";

const Pictures = [
    "blockball03",
    "blockball05",
    "blockball06",
    "blockball09",
    "blockball10",
    "blockball11",
    "blur06",
    "blur12",
    "blur21",
    "distantlight1",
    "distantlight2",
    "fractalreflections",
    "mandelbulbtop",
    "mandelbulbtoplit",
    "mandelbulbtopglass",
    "mandelbulbwhole",
    "randomspheres",
    "refraction",
    "refractionnoglass",
    "spheres03",
];

renderPage(
    ["graphics", "pathtracing", "gallery"],
    <>
        <div className="img-gallery">
            {Pictures.map((img) => (
                <ImageIcon key={img} image={"pathtracing/" + img} />
            ))}
        </div>
    </>
);
