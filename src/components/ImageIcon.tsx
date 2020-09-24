import * as React from "react";
import { LazyImage } from "./LazyImage";
import { Link } from "./Link";

const bigName = (path: string): string => {
    if (path.lastIndexOf(".") > 0) {
        return path;
    }
    return path + ".png";
};

const smallName = (path: string): string => {
    const i = path.lastIndexOf(".");
    if (i < 0) {
        return path + "_small.png";
    }
    return path.substring(0, i) + "_small" + path.substring(i);
};

/**
 * Requires both "/static/img/{image}" and "/static/img/{image}_small" to exist.
 * If no file extension is provided, .png is assumed.
 */
export const ImageIcon = (props: { image: string }) => (
    <div className="pieceicon">
        <Link dst={`/static/img/${bigName(props.image)}`}>
            <LazyImage
                className="pieceicon-img"
                src={`${smallName(props.image)}`}
            />
        </Link>
    </div>
);

interface ListOfImageIconsProps {
    readonly folderName: string;
    readonly fileNames: string[];
}
export const ListOfImageIcons = (props: ListOfImageIconsProps) => (
    <>
        {props.fileNames.map((fn) => {
            const path = props.folderName + "/" + fn;
            return <ImageIcon image={path} key={path} />;
        })}
    </>
);
