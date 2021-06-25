import * as React from "react";
import { Link } from "../../components/Link";
import { renderPage } from "../../renderpage";

renderPage(
    ["machine_learning", "boneless"],
    <>
        <h1>Boneless</h1>
        <p>
            by Tim Straubinger and{" "}
            <Link dst="https://davepagurek.com/">Dave Pagurek</Link>
        </p>
        <p>
            <pre>// TODO</pre>
        </p>
        <p>
            <Link dst="/static/papers/boneless.pdf">Link to paper (.pdf)</Link>
        </p>
    </>
);
