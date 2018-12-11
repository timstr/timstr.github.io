import * as React from "react";
import { Section } from "../Common/Section";

export const AboutFlosion = () => (
    <>
        <h1>About Flosion</h1>
        <Section header={<h2>What is it?</h2>}>
            <p>
                Flosion is the tentative name for sound editing software that I've been working on
                in one form or another for a handful of years. Briefly put, it's a visual
                programming language for creating, modifying, and listening to streams of sound. It
                allows the user to compose various effects by building a network, and to listen to
                the results in real-time. Every effect is highly configurable, and can be
                parameterized by nearly anything else in the network.
            </p>
        </Section>
        <p />
        <Section header={<h2>Motivation</h2>}>
            <p>
                I began dreaming about this project when I was trying to use existing digital audio
                workstations like Apple's Logic Pro to create my own synthesizers, effects and
                melodies and put together songs. I had a great deal of fun with these, but many
                out-of-the-box synths and effects are complicated and have limited degrees of
                freedom, which can be overwhelming for a beginner and restrictive for the
                experienced user who wants to change something fundamental. It also seemed
                impossible to make one effect depend on properties of another effect, which was
                something I regularly wanted. Lots of existing music software that I've seen
                provides the user with a timeline, a list of audio tracks to layer over one another
                on this timeline, and a chain of effects to be applied to each track. These effects
                themselves are modular and range from simple, with one or two parameters, to walls
                of buttons, knobs, and detailed graphics. This works well for creating compositions
                and using effects that one already likes, but I wanted to be able to lift the hood
                and re-wire things as I desired.
            </p>
            <p>
                Thus I slowly began developing my own audio software. The beginnings were very slow
                and I'll skip the details by saying that I learned intimately how many things you
                can do wrong in C++. But over time, the more I learned and the more I developed, my
                software took shape and the first few interesting-sounding glitches were then
                followed by recognizable melodies and recreations of effects that I was familiar
                with from elsewhere. There's still a lot I plan to do, but with the foundations
                already in place, I'm hoping Flosion will eventually be good enough to create freely
                with and to share with the community.
            </p>
            <p>
                The end goal is to have software that allows users to play with sounds and create
                music, working at the level of abstraction they desire, and while having the freedom
                to configure anything they wish, all while remaining very expressive, intuitive, and
                unique in its approach.
            </p>
        </Section>
    </>
);
