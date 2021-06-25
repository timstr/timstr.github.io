// NOTE: the structure of this object is expected to match the path names of
// files inside src/pages. For example:
// src/pages/index.tsx corresponds to SiteTree.index
// src/pages/audio/flosion/index.tsx corresponds to SiteTree.audio.flosion.index
// These paths are represented as (type-checked!!!) arrays of keys into this object.
// For example: ["index"] or ["audio", "flosion"] (equivalent to ["audio", "flosion", "index"])
const SiteTree = [
    "Tim's Portfolio",
    {
        index: "About Me",
        machine_learning: [
            "Machine Learning",
            {
                index: "List of Projects",
                graph_merging: "Differentiable Graph Merging",
                monocamlegoslam: "Line Segment SLAM",
                boneless: "Soft-Bodied Locomotion",
                hand_gesture_recognition: "Hand Gesture Recognition",
                hand_gesture_synthesis: "Hand Gesture Synthesis",
            },
        ],
        audio: [
            "Audio",
            {
                flosion: [
                    "Flosion",
                    {
                        index: "About",
                        howitworks: "How It Works",
                        implementation: "Implementation",
                        examples: "Examples",
                        gallery: "Song Gallery",
                    },
                ],
            },
        ],
        graphics: [
            "Graphics",
            {
                pathtracing: [
                    "Path Tracing",
                    { index: "About", gallery: "Gallery" },
                ],
                fractals2d: [
                    "2D Fractals",
                    { index: "About", gallery: "Gallery" },
                ],
                fractals3d: [
                    "3D Fractals (Old)",
                    { index: "About", gallery: "Gallery" },
                ],
                cellularautomata: "Cellular Automata",
            },
        ],
        physics: [
            "Physics",
            {
                rigidbodydynamics: [
                    "Rigid Body Dynamics",
                    {
                        index: "About",
                        circleboxstacking: "Circle Box Stacking",
                        boxchain: "Box Chain",
                        frictiondemo: "Friction Demo",
                        frictionlessboxes: "Frictionless Boxes",
                        circlepile: "Circle Pile",
                        images: "Images",
                    },
                ],
            },
        ],
        artwork: [
            "Artwork",
            {
                index: "Selected Works",
                gallery: "Gallery",
                ti84plus: "TI-84 Plus Graphing Calculator",
            },
        ],
        personal: [
            "Personal Stuff",
            {
                index: "Tim Doing Things",
                taipan: "Tai Pan Server",
                mushrooms: "Mushroom Photography",
                recipes: "Recipes",
            },
        ],
    },
] as const;

type Node = LeafNode | NamedInternalNode;
type LeafNode = string;
type NamedInternalNode = readonly [string, InternalNode];
type InternalNode = {
    [i: string]: Node;
};

type Cons<H, T> = T extends readonly any[]
    ? ((h: H, ...t: T) => void) extends (...r: infer R) => void
        ? R
        : never
    : never;

type Prev = [
    never,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    ...0[]
];

type NodePath<T extends Node, D extends number = 10> = [D] extends [never]
    ? never
    : T extends readonly [any, InternalNode]
    ? {
          [K in keyof T[1]]-?:
              | [K]
              | (NodePath<T[1][K], Prev[D]> extends infer P
                    ? P extends []
                        ? never
                        : Cons<K, P>
                    : never);
      }[keyof T[1]]
    : [];

////////////////////////
export const __DoNotUse_SafetyCheck_A__ = (_: Node) => {};
export const __DoNotUse_SafetyCheck_B__ = () =>
    __DoNotUse_SafetyCheck_A__(SiteTree);
////////////////////////

export type LocalPath = NodePath<typeof SiteTree>;

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

export function makePathFileName(path: LocalPath): string {
    let pp: string[] = path;
    let n: any = SiteTree[1];
    for (let p of path.slice(0, path.length - 1)) {
        n = n[p][1];
    }
    // n now is the parent InternalNode of the last item in the path

    // v is the Node to which the path points
    let v = n[path[path.length - 1]];

    // If the final node is an internal node,
    // search down the first branch until a leaf is found
    while (Array.isArray(v)) {
        v = v[1];
        if (typeof v === "object") {
            const k = Object.keys(v)[0];
            pp.push(k);
            v = v[k];
        }
    }
    return "/" + pp.join("/") + ".html";
}

export function getPathSiblings(path: LocalPath): LocalPath[][] {
    let out: LocalPath[][] = [];
    let n: any = SiteTree[1];
    let prefix: string[] = [];
    for (let p of path) {
        const keys = Object.keys(n);
        out.push(keys.map((k) => prefix.concat([k])) as LocalPath[]);
        prefix.push(p);
        n = n[p];
        if (typeof n === "string") {
            n = null;
        } else if (Array.isArray(n)) {
            n = n[1];
        }
    }
    return out;
}

export function getPathHeadName(path: LocalPath): string {
    let n: any = SiteTree[1];
    for (let p of path.slice(0, path.length - 1)) {
        n = n[p][1];
    }
    // n now is the parent InternalNode of the last item in the path

    // v is the Node to which the path points
    const v = n[path[path.length - 1]];

    if (typeof v === "string") {
        // the final node is a leaf
        return v;
    } else {
        // the final node is a named internal node
        return v[0];
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
