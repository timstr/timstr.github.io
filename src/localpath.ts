// NOTE: the meaning of the following embedded constants is mappings
// from file/folder names to display names
const RootPaths = {
    index: "About Me",
    abilities: "Abilities",
    flosion: "Flosion",
    fractals: "Fractals",
    rigidbodydynamics: "Rigid Body Dynamics",
    cellularautomata: "Cellular Automata",
    other: "Other Projects",
} as const;
const AllRootPaths: (keyof typeof RootPaths)[] = [
    "index",
    "abilities",
    "flosion",
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
    | ["abilities"]
    | ["flosion"]
    | ["flosion", keyof typeof PathInFlosion]
    | ["fractals"]
    | ["fractals", keyof typeof PathInFractals]
    | ["rigidbodydynamics"]
    | ["rigidbodydynamics", keyof typeof PathInRBD]
    | ["cellularautomata"]
    | ["other"]
    | ["other", keyof typeof PathInOther];

// export const AllLocalPaths: LocalPath[] = ([
//     ["index"],
//     ["abilities"],
// ] as LocalPath[])
//     .concat(AllPathsInFlosion.map((x) => ["flosion", x]))
//     .concat(AllPathsInFractals.map((x) => ["fractals", x]))
//     .concat(AllPathsInRBD.map((x) => ["rigidbodydynamics", x]))
//     .concat(["cellularautomata"])
//     .concat(AllPathsInOther.map((x) => ["other", x]));

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
            case "abilities":
            case "cellularautomata":
                return path[0];
            case "flosion":
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
        case "abilities":
            return [rootPaths];
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
        case "fractals":
            return PathInFractals[path[1]];
        case "rigidbodydynamics":
            return PathInRBD[path[1]];
        case "other":
            return PathInOther[path[1]];
    }
}
