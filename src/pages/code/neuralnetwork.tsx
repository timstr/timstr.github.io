import * as React from "react";
import { Link } from "../../components/Link";
import { renderPage } from "../../renderpage";

renderPage(
    ["code", "neuralnetwork"],
    <>
        <h1>Neural Network Library</h1>
        <h2>
            A flexible, fully-connected neural network with a compile-time
            architecture
        </h2>
        <p>More on this later.</p>
        <p>
            The source code is available on{" "}
            <Link dst="https://github.com/timstr/nueralnetwork">GitHub</Link>.
        </p>
    </>
);
