import * as React from "react";
import { Section, SubSection } from "../Common/Section";
import { Link } from "../Common/Link";
import { CodeSnippet } from "../Common/CodeSyntax";
import {
    NumberSourceSnippet,
    AddObjectSnippet,
    NumberInputSnippet,
    SoundSourceSnippet,
    SoundSourceBaseSnippet,
    StateSnippet,
    StatefulSnippet,
    AudioStateSnippet,
    AudioSnippet,
} from "./Snippets";

export const Implementation = () => (
    <>
        <h1>How Flosion Is Written</h1>
        <Section header={<h2>Implementation</h2>}>
            <h4>
                <code>NumberSource</code> and <code>NumberInput</code>
            </h4>
            <p>
                Flosion is written in C++ and uses <Link dst="https://www.sfml-dev.org/">SFML</Link>{" "}
                for drawing, playing sounds, handling user input, and managing windows.
                Additionally, Flosion uses a GUI library that I wrote myself and have used for other
                projects, which is very much inspired by HTML and its JavaScript interface. The GUI
                is also written in modern C++ and uses SFML.
            </p>
            <p>
                The source code makes heavy use of inheritance and templates. Inheritance is used to
                provide a generic interface for sound and number objects to communicate, while
                templates are used to avoid boilerplate and preserve type-safety. The code shown
                here is stripped down significantly, and in the actual source code, a lot of
                book-keeping methods are necessary, which are not needed to understand the basics.
            </p>
            <p>
                Here are the essentials details of the <code>NumberSource</code> class, which every
                number object inherits from. <code>evaluate()</code> is a polymorphic function that
                number objects override to compute whatever they like. <code>dependencies</code> and{" "}
                <code>dependants</code> represent the objects that are directly connected as inputs
                and outputs.
            </p>
            <CodeSnippet>{NumberSourceSnippet}</CodeSnippet>
            <p>
                Another class, called <code>NumberInput</code>, is used to connect to any number
                object and get its value, or some default value if nothing is connected.
            </p>
            <CodeSnippet>{NumberInputSnippet}</CodeSnippet>
            <p>
                Using both of these classes, the 'Add' number object can be now implemented like
                this:
            </p>
            <CodeSnippet>{AddObjectSnippet}</CodeSnippet>
            <p>
                The <code>state</code> parameter is used to record the current context, and
                represents a path in the state tree. It can be used to get the (relative) current
                time, and is needed by stateful number sources (which live inside sound objects) to
                retrieve the correct stateful information.
            </p>
            <SubSection>
                <h4>
                    <code>State</code> and <code>Stateful</code>
                </h4>
                <p>
                    Below is the <code>State</code> class, which is the base class of every type of
                    state. It simply stores a pointer to its parent state, and a pointer to the{" "}
                    <code>Stateful</code> object that owns this state. A polymorphic{" "}
                    <code>reset()</code> function is used to restore states to their original
                    condition. Derived <code>State</code> types are used to hold whatever
                    time-sensitive information that <code>Stateful</code> objects need to store.
                    Rather than storing stateful data through instance members,{" "}
                    <code>Stateful</code> objects will use many instances of a custom{" "}
                    <code>State</code> type.
                </p>
                <CodeSnippet>{StateSnippet}</CodeSnippet>
                <p>
                    And here is the <code>Stateful</code> base class, which represents any type that
                    stores stateful information in some collection of <code>State</code> objects.
                    The details of how this is done varies by sub-class. For example,{" "}
                    <code>SoundSource</code>, <code>SingleInput</code> and <code>MultiInput</code>{" "}
                    all store states slightly differently, but the <code>Stateful</code> class is
                    common interface shared by all, which makes sorting out dependencies much
                    simpler.
                </p>
                <CodeSnippet>{StatefulSnippet}</CodeSnippet>
            </SubSection>
            <SubSection>
                <h4>
                    The <code>SoundSource</code> Base Class
                </h4>
                <p>
                    Every type of sound object is represented by a basic <code>SoundSource</code>{" "}
                    base class. Since every sound object needs to manage stateful information,{" "}
                    <code>SoundSource</code> derives from <code>Stateful</code>. The{" "}
                    <code>getNextChunk</code> method is used to fetch up-to-date snippets of sound
                    information from the sound object, and by calling this method rapidly and
                    regularly, a stream is created which contains real-time audio information.
                </p>
                <CodeSnippet>{SoundSourceSnippet}</CodeSnippet>
                <p>
                    While the <code>SoundSource</code> class is simple enough to be used generically
                    by any kind of sound input, it doesn't concern itself with how it stores states
                    or even what kind of state it works with. This is where{" "}
                    <code>SoundSourceBase</code> comes in. <code>SoundSourceBase</code> exists to
                    automatically manage creating, updating, and retrieving states of any type. This
                    class exists for the convenience and safety of not having to do this tedious
                    work for each new sound object type. The class overrides{" "}
                    <code>SoundSource::getNextChunk()</code>, which provides only weakly-typed state
                    information, and retrieves its own, strongly-typed internal state, which is
                    provided to the new <code>renderChunk()</code>, which, in derived sound object
                    classes, does the actual work of producing sound.
                </p>
                <CodeSnippet>{SoundSourceBaseSnippet}</CodeSnippet>
            </SubSection>
            <SubSection>
                <h4>Concrete Example</h4>
                <p>
                    All the above code, and much more code that isn't being shown, exist to make
                    implementing new sound object far simpler and less error-prone than it otherwise
                    would be. In this example, the <code>Audio</code> class is implemented, which is
                    a sound object that simply loads a sound from a file and produces this sound as
                    its output. To make do this, only two things are needed. One needs to define
                    what information it stores as part of its state, which is done here in the{" "}
                    <code>AudioState</code> class. In this case, the only state that's needed is an
                    index into where in the audio file we're currently listening from, which shall
                    be called <code>pos</code>.
                </p>
                <CodeSnippet>{AudioStateSnippet}</CodeSnippet>
                <p>
                    Finally, one needs to define the <code>Audio</code> class itself, which derives
                    from <code>{"SoundSourceBase<AudioState>"}</code>, so that all stateful
                    information and dependencies and so on are perfectly and implicitly managed. The{" "}
                    <code>{"SoundSourceBase<AudioState>::renderChunk()"}</code> method is overridden
                    to do the actual work of playing the sound. The implementation isn't shown here,
                    since it's mostly <code>for</code>-loops and and sample frequency calculations
                    and audio channel checks, but all it does is copy the current part of the audio
                    clip into the current <code>SoundChunk</code> of the stream, using{" "}
                    <code>state.pos</code> for book-keeping. This audio clip itself is stored in the{" "}
                    <code>soundbuffer</code> member. Note that this piece of sound information will
                    always be the same, no matter who's listening to this <code>Audio</code> object,
                    and therefore, it is not stored in the <code>AudioState</code> type. As an
                    extra, this class also defines and exposes a <code>current_time</code> member,
                    which is a special kind of number source that is associated with the state of
                    the <code>Audio</code> object. This number source can be used to query the
                    (subjective) current time of the <code>Audio</code> object. As you can see, this
                    work, which is complicated and delicate at heart, is handled well by templates
                    and inheritance, and the code needed to implement new and interesting features
                    is minimal.
                </p>
                <CodeSnippet>{AudioSnippet}</CodeSnippet>
            </SubSection>
        </Section>
        <Section header={<h2>Full Source Code</h2>}>
            <p>
                The Flosion source code is stored on github, and can be found{" "}
                <Link dst="https://github.com/timstr/Flosion">here</Link>.
            </p>
        </Section>
    </>
);
