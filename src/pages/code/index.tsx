import { renderPage } from "../../renderpage";
import * as React from "react";
import { ImageIcon } from "../../components/ImageIcon";

/**
 * TODO:
 *  - explanation, design overview
 *  - brief history
 *  - inspiration from HTML / CSS
 *  - github link
 */

renderPage(
    ["code", "index"],
    <>
        <h1>Tim's GUI</h1>
        <h4>Coming soon</h4>
        <p>
            The first image is Wikipedia's article on Confucius, as viewed in
            Google Chrome. The right image is my recreation of the article using
            my Tim's GUI library, which uses a similar box model and flow
            algorithm to HTML and CSS. Spot the difference!
        </p>
        <ImageIcon image="other/confuciuswikipedia" />
        <ImageIcon image="other/confuciustimsgui" />
    </>
);
