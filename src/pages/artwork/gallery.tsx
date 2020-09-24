import { renderPage } from "../../renderpage";
import * as React from "react";
import { ImageIcon } from "../../components/ImageIcon";

const Pictures = ["earthblimpsandwich.jpg", "bruntus.jpg", "bruntus2.jpg"];

renderPage(
    ["artwork", "gallery"],
    <>
        <div className="img-gallery">
            {Pictures.map((img) => (
                <ImageIcon key={img} image={"artwork/" + img} />
            ))}
        </div>
    </>
);
