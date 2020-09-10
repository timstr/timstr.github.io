import * as React from "react";
import { renderPage } from "../renderpage";
import { Section, SubSection } from "../components/Section";
import { Link } from "../components/Link";

renderPage(
    ["abilities"],
    <>
        <h1>My Abilities</h1>
        <Section header={<h2>Curriculum Vitae</h2>}>
            Click <Link dst="/static/TimStraubingerCV.pdf">here for my CV</Link>
        </Section>
        <Section header={<h2>Skills</h2>}>
            <h4>Programming Languages</h4>
            <p>
                I'm proficient in C++. It's my favourite language by a large
                margin and I've been using it regularly for over 6 years. Given
                the number of times I've learned something new that made me
                rethink the language I thought I knew, I cannot claim to know
                the language through and through. But in addition the basics of
                C++98 like all the fun gadgets of the Standard Library, basic
                object oriented programming, templates, the quirky build model,
                and the constraints and capabilities of the hardware runtime
                environment, I've been internalizing the changes introduced in
                C++11 and make an effort to keep up to date with some of the
                more recent language features since then. I have a great respect
                for the language's power and it's dark side commonly known as
                Undefined Behavior. Some features of the language that I'm very
                familiar with include:
            </p>
            <ul className="multicolumn">
                <li>
                    the <code>auto</code> keyword
                </li>
                <li>move semantics</li>
                <li>variadic templates</li>
                <li>SFINAE techniques</li>
                <li>lambda functions</li>
                <li>smart pointers</li>
                <li>
                    <code>const</code>-correctness
                </li>
                <li>
                    <code>std::function</code>
                </li>
                <li>special member functions</li>
                <li>operator overloading</li>
                <li>
                    the <code>noexcept</code> specifier
                </li>
                <li>
                    the <code>constexpr</code> keyword
                </li>
                <li>uniform initialization</li>
                <li>forwarding references</li>
                <li>multiple inheritance</li>
            </ul>
            <p>
                I also hope to learn more about atomics and using the standard
                libary's synchronization primitives. I eagerly await concepts,
                modules, and coroutines in C++20.
            </p>
            <h4>Other Programming Languages</h4>
            <p>
                I've also spent a lot of time with JavaScript (specifically,
                with TypeScript), and with C. Additional programming languages
                that I have a basic familiarity with include
            </p>
            <ul className="multicolumn">
                <li>Java</li>
                <li>C#</li>
                <li>Julia</li>
                <li>Haskell</li>
                <li>Prolog</li>
                <li>CUDA C</li>
                <li>GLSL</li>
                <li>Erlang</li>
            </ul>
            <SubSection>
                <h4>Frameworks, Environment, Libraries, Tools</h4>
                <ul className="multicolumn">
                    <li>
                        <Link dst="https://reactjs.org/">React</Link>
                    </li>
                    <li>
                        <Link dst="https://www.sfml-dev.org/">SFML</Link>
                    </li>
                    <li>
                        <Link dst="https://www.libsdl.org/">SDL</Link>
                    </li>
                    <li>
                        <Link dst="https://threejs.org/">three.js</Link>
                    </li>
                    <li>
                        <Link dst="https://www.boost.org/">Boost</Link>
                    </li>
                    <li>git</li>
                    <li>CMake</li>
                    <li>Visual Studio</li>
                    <li>Visual Studio Code</li>
                </ul>
            </SubSection>
            <SubSection>
                <h4>Human Languages</h4>
                <ul>
                    <li>English</li>
                    <li>German</li>
                </ul>
            </SubSection>
        </Section>
    </>
);
