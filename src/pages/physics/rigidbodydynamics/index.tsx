import * as React from "react";
import { BigImage } from "../../../components/BigImage";
import { Link } from "../../../components/Link";
import { Section } from "../../../components/Section";
import { renderPage } from "../../../renderpage";

renderPage(
    ["physics", "rigidbodydynamics", "index"],
    <>
        <h1>Rigid Body Dynamics</h1>
        <BigImage name="physics/bods" />
        <Section header={<h2>Overview</h2>}>
            <p>
                Shown above is a screen capture from my rigid body dynamics
                simulator, written in C++. The simulator allows arbitrary convex
                polygons to move and collide in 2D space.
            </p>
            <p>
                Collisions and joints are supported. The simulation engine
                relies on an iterative local solver which solves constraints
                such as non-penetration and fixed-distance constraints at the
                level of impulses. Working at the level of impulses uses only
                the first time derivative, and using a local solver allows for a
                much simpler implementation for things like inequality
                constraints.
            </p>
            <p>
                Other features include friction, immoveable solids,
                post-stabilization, and the ability to apply arbitrary forces
                and impulses, which is useful for a physics-based video game.
            </p>
            <p>
                Recordings of the physics engine in action are shown in the
                adjacent pages.
            </p>
        </Section>
        <Section header={<h2>Acknowledgements</h2>}>
            <p>
                This engine is heavily inspired by the Sequential Impulses
                Method proposed by Erin Catto, author of the popular{" "}
                <Link dst="https://box2d.org/">Box2D Physics Library</Link>.
                Erin Catto has published a number of highly informative
                resources at the{" "}
                <Link dst="https://box2d.org/publications/">Box2D website</Link>{" "}
                for physics programming which I am grateful for.
            </p>
            <p>
                Additionally, Nilson Souto has written a{" "}
                <Link dst="https://www.toptal.com/game/video-game-physics-part-i-an-introduction-to-rigid-body-dynamics">
                    three-part series on physics programming and constraint
                    solving
                </Link>{" "}
                which, while working at the level of forces and focusing on the
                second time derivative, is very useful for thinking about
                constraints geometrically and mathematically.
            </p>
        </Section>
        <Section header={<h2>Source Code</h2>}>
            <p>
                The source code for my physics engine is available on{" "}
                <Link dst="https://github.com/timstr/A-Platformer-Game-by-Richard-and-Tim">
                    GitHub
                </Link>
                .
            </p>
        </Section>
    </>
);
