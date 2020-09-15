// NOTE: the meaning of the following embedded constants is mappings
// from file/folder names to display names
const RootPaths = {
    index: "About Me",
    flosion: "Flosion",
    pathtracing: "Path Tracing",
    fractals: "Fractals",
    rigidbodydynamics: "Rigid Body Dynamics",
    cellularautomata: "Cellular Automata",
    other: "Other Projects",
} as const;
const AllRootPaths: (keyof typeof RootPaths)[] = [
    "index",
    "flosion",
    "pathtracing",
    "fractals",
    "rigidbodydynamics",
    "cellularautomata",
    "other",
];

const PathInFlosion = {
    index: "About",
    howitworks: "How It Works",
    implementation: "Implementation",
    examples: "Examples",
    gallery: "Song Gallery",
} as const;
const AllPathsInFlosion: (keyof typeof PathInFlosion)[] = [
    "index",
    "howitworks",
    "implementation",
    "examples",
    "gallery",
];

const PathInPathTracing = {
    index: "About",
    gallery: "Gallery",
} as const;
const AllPathsInPathTracing: (keyof typeof PathInPathTracing)[] = [
    "index",
    "gallery",
];

const PathInFractals = {
    index: "About",
    gallery: "Gallery",
} as const;
const AllPathsInFractals: (keyof typeof PathInFractals)[] = [
    "index",
    "gallery",
];

const PathInRBD = {
    index: "Circle Box Stacking",
    boxchain: "Box Chain",
    frictiondemo: "Friction Demo",
    frictionlessboxes: "Frictionless Boxes",
    circlepile: "Circle Pile",
} as const;
const AllPathsInRBD: (keyof typeof PathInRBD)[] = [
    "index",
    "boxchain",
    "frictiondemo",
    "frictionlessboxes",
    "circlepile",
];

const PathInOther = {
    index: "Tim's GUI",
    platformer: "Platformer Game",
    gibberishgenerators: "Gibberish Generator",
    random: "Random",
} as const;
const AllPathsInOther: (keyof typeof PathInOther)[] = [
    "index",
    "platformer",
    "gibberishgenerators",
    "random",
];

export type LocalPath =
    | ["index"]
    | ["pathtracing"]
    | ["pathtracing", keyof typeof PathInPathTracing]
    | ["flosion"]
    | ["flosion", keyof typeof PathInFlosion]
    | ["fractals"]
    | ["fractals", keyof typeof PathInFractals]
    | ["rigidbodydynamics"]
    | ["rigidbodydynamics", keyof typeof PathInRBD]
    | ["cellularautomata"]
    | ["other"]
    | ["other", keyof typeof PathInOther];

// This may look ugly as heck, but if any of the above strings don't match
// what's in the keysRootPaths, the following lines will cause an error
export const __DoNotUse_SafetyCheck_1__ = (_: keyof typeof RootPaths) => {};
export const __DoNotUse_SafetyCheck_2__ = (p: LocalPath) =>
    __DoNotUse_SafetyCheck_1__(p[0]);

export function pathContains(path: LocalPath, subPath: LocalPath): boolean {
    for (let i = 0; i < subPath.length; ++i) {
        if (i > path.length) {
            return subPath[i] === "index";
        }
        if (subPath[i] !== path[i]) {
            return false;
        }
    }
    return true;
}

export function makePathFileName(
    path: LocalPath,
    ext?: string | undefined
): string {
    const pathStr = ((): string => {
        if (path.length === 2) {
            return path[0] + "/" + path[1];
        }
        switch (path[0]) {
            case "index":
            case "cellularautomata":
                return path[0];
            case "flosion":
            case "pathtracing":
            case "fractals":
            case "rigidbodydynamics":
            case "other":
                return path[0] + "/index";
        }
    })();
    if (ext === undefined) {
        ext = "html";
    }
    return "/" + pathStr + (ext === "" ? "" : "." + ext);
}

export function getPathSiblings(path: LocalPath): LocalPath[][] {
    const rootPaths = AllRootPaths.map(
        (x: keyof typeof RootPaths): LocalPath => [x] as LocalPath
    );
    switch (path[0]) {
        case "index":
            return [rootPaths];
        case "pathtracing":
            return [
                rootPaths,
                AllPathsInPathTracing.map((x) => ["pathtracing", x]),
            ];
        case "flosion":
            return [rootPaths, AllPathsInFlosion.map((x) => ["flosion", x])];
        case "fractals":
            return [rootPaths, AllPathsInFractals.map((x) => ["fractals", x])];
        case "rigidbodydynamics":
            return [
                rootPaths,
                AllPathsInRBD.map((x) => ["rigidbodydynamics", x]),
            ];
        case "cellularautomata":
            return [rootPaths];
        case "other":
            return [rootPaths, AllPathsInOther.map((x) => ["other", x])];
    }
}

export function getPathHeadName(path: LocalPath): string {
    if (path.length === 1) {
        return RootPaths[path[0]];
    }
    switch (path[0]) {
        case "flosion":
            return PathInFlosion[path[1]];
        case "pathtracing":
            return PathInPathTracing[path[1]];
        case "fractals":
            return PathInFractals[path[1]];
        case "rigidbodydynamics":
            return PathInRBD[path[1]];
        case "other":
            return PathInOther[path[1]];
    }
}

export function pathUpOne(path: LocalPath): LocalPath | null {
    if (path.length === 1) {
        return null;
    }
    return path.slice(0, path.length - 1) as LocalPath;
}

export function makePathPrettyName(
    path: LocalPath,
    dir: "RootToLeaf" | "LeafToRoot",
    separator?: string | undefined,
    rootName?: string | undefined
): string {
    if (separator === undefined) {
        separator = " | ";
    }
    if (rootName === undefined) {
        rootName = "Tim's Portfolio";
    }
    let p: LocalPath | null = path;
    let names: string[] = [];
    while (p !== null) {
        names.push(getPathHeadName(p));
        p = pathUpOne(p);
    }
    if (rootName !== "") {
        names.push(rootName);
    }
    if (dir === "RootToLeaf") {
        names = names.reverse();
    }
    return names.join(separator);
}
