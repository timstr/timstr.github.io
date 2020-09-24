import * as React from "react";
import { Link } from "../../components/Link";
import { renderPage } from "../../renderpage";

renderPage(
    ["games", "index"],
    <>
        <h1>Tai Pan Server</h1>
        <p>
            Please visit{" "}
            <Link dst="https://timstaipanserver.ca">timstaipanserver.ca</Link>{" "}
            to play (if you know the password).
        </p>
    </>
);
