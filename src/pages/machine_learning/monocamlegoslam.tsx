import * as React from "react";
import { Link } from "../../components/Link";
import { renderPage } from "../../renderpage";

renderPage(
    ["machine_learning", "monocamlegoslam"],
    <>
        <h1>Line Segment SLAM</h1>
        <p>by Tim Straubinger</p>
        <p>
            <pre>// TODO</pre>
        </p>
        <p>
            <Link dst="/static/papers/monocamlegoslam.pdf">
                Link to paper (.pdf)
            </Link>
        </p>
    </>
);
