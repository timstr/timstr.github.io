import * as React from "react";

interface ImageProps {
    name: string;
}

// All images will be looked for in the "/static/img/" folder.
// If the image name does not contain a file extension, png will be added by default
export const BigImage = (props: ImageProps) => {
    const path =
        "/static/img/" + props.name + (props.name.includes(".") ? "" : ".png");
    return (
        <div className="bigimage">
            <img className="bigimage-img" src={path} />
        </div>
    );
};
