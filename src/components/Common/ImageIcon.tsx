import * as React from "react";
import { LazyImage } from "./LazyImage";
import { Link } from "./Link";

/**
 * Requires both "img/{image}.png" and "img/{image}_small.png" to exist
 */
export const ImageIcon = (props: { image: string }) => (
    <div className="pieceicon">
        <Link dst={`img/${props.image}.png`}>
            <LazyImage
                className="pieceicon-img"
                src={`${props.image}_small.png`}
            />
        </Link>
    </div>
);
