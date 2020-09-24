import { renderPage } from "../../renderpage";
import * as React from "react";
import { Link } from "../../components/Link";

renderPage(
    ["code", "index"],
    <>
        <h1>OFC - Objects and Functional Components</h1>
        <h2>A cross-platform GUI Framework using C++ and SFML</h2>
        <p>More on this later.</p>
        <p>
            The source code is available on{" "}
            <Link dst="https://github.com/timstr/OFC">GitHub</Link>.
        </p>
    </>
);
