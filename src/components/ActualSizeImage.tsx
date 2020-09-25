import * as React from "react";

interface ImageProps {
    name: string;
}

// All images will be looked for in the "/static/img/" folder.
// If the image name does not contain a file extension, png will be added by default
export const ActualSizeImage = (props: ImageProps) => {
    const path =
        "/static/img/" + props.name + (props.name.includes(".") ? "" : ".png");
    return (
        <div className="actualsizeimage">
            <img className="actualsizeimage-img" src={path} />
        </div>
    );
};
