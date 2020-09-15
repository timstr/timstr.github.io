import * as React from "react";
import * as ReactDom from "react-dom";
import { LocalPath, makePathPrettyName } from "./localpath";
import { Main } from "./components/Main";

export function renderPage(path: LocalPath, element: JSX.Element) {
    ReactDom.render(
        <Main currentTab={path}>{element}</Main>,
        document.getElementById("main")
    );
    document.title = makePathPrettyName(path, "LeafToRoot");
}
