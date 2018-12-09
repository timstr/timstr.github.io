import * as React from "react";
import { Section, SubSection } from "../Common/Section";

export const HowItWorks = () => (
    <>
        <h1>How Flosion Works</h1>
        <Section header={<h2>Overview</h2>}>
            <h4>Data Types and Objects</h4>
            <p>
                In Flosion, there are two data types: sound streams and numbers.
                There are also objects, which produce and consume this data. The
                two types, naturally, are sound objects and number objects.
            </p>
            <h4>Number Objects</h4>
            <p>
                Number objects have no state. They can only accept numbers as
                inputs and always produce numbers as outputs. These act just
                familiar mathematical functions. Examples of number objects
                include addition, multiplication, trigonometric functions, and
                numeric constants. [TODO: drawing of various number objects]
            </p>
            <h4>Sound Objects</h4>
            <p>
                Sound objects produce a stream of sound that can be listened to
                or given to other objects as input. Sound objects can also take
                sound streams as inputs, modifying them according to their
                design, and returning the result as their output. Sound objects
                can additionally accept numbers as inputs, which may control
                various behaviors of the sound object. Finally, sound objects
                can also produce numbers, which typically represent a part of
                the object's state, which can be used as inputs to other
                objects. Sound objects are allowed to have stateful information
                that changes over time as it produces sound. Some examples
                include an amplifier, an echo effect, or a sound clip. [TODO:
                drawing of various sound objects]
            </p>
            <SubSection>
                <h4>Flow Networks</h4>
                <p>
                    Sound objects and number objects can be wired together ad
                    hoc to create a network. This is done simply by connecting
                    number outputs with number inputs, and sound outputs with
                    sound inputs. In these networks, sound is always flowing in
                    one direction and numbers are flowing in the opposite
                    direction. Why this is so is explained further down. The
                    output of these networks is a sound that can be listened to.
                    For example, one can attach the output of a sound clip
                    object to the input of an amplifier object, to define a
                    network which produces a louder or quieter version of the
                    original sound clip. [TODO: draw this setup] Of course,
                    these networks can get far more interesting. [TODO: draw a
                    more interesting setup?]
                </p>
            </SubSection>
            <SubSection>
                <h4>Parallelism</h4>
                <p>
                    Recall that sound objects are allowed to have state.
                    Actually, sound objects can have <i>multiple</i> states at
                    the same time. This is one case where Flosion departs from
                    the physical realm a bit. The reason for this is that
                    sometimes the same sound stream needs to be used in multiple
                    places, and the results want to be heard in real-time.
                    [TODO: draw one sound source being used twice in one
                    network] Another reason is the existence of a special type
                    of sound input, the multi-input, that calls upon its input
                    multiple times in parallel, which is very useful for
                    creating some types of sound objects. For example, a
                    synthesizer can be plugged into a sound object that
                    generates a melody from some number of notes notes. The
                    result is that if the melody has n notes, then for every
                    state of the melody generator, there will be n states in the
                    synthesizer. This way, the melody can use the same
                    synthesizer multiple times in parallel to play overlapping
                    notes, without any distortions or conflict from shared
                    state. [TODO: draw this synth melody example]
                </p>
                <h4>Relativism</h4>
                <p>
                    Another quirk of Flosion is that time is very relative. Some
                    sound objects create delays in the sounds they draw upon,
                    and other sound objects change the speed of time coming from
                    their inputs. This means that when one sound object queries
                    the current time of another sound object, it might see
                    different value and a different speed of time from what it
                    knows. This isn't as big of a problem as it might sound. In
                    practice, it just works out.
                </p>
            </SubSection>
            <SubSection>
                <h4>The Flow of Information</h4>
                <p>
                    In Flosion, sound streams always flow in one direction, and
                    numbers always flow in the opposite direction. This is
                    necessary because of multi-inputs, which allow one sound
                    object to call upon an input many times in parallel. This
                    means that the parent sound object sees many states in the
                    child sound object, while the child object only ever sees
                    one parent state. Thus it's a bit meaningless for the parent
                    object to ask for stateful information from the child, while
                    the it always makes sense for a child to ask for stateful
                    information from a parent. Of course, this restriction
                    doesn't apply for constants and numbers that don't depend on
                    state, but those never change and are a bit boring anyway.
                </p>
            </SubSection>
        </Section>
        <Section header={<h2>Abstract Design</h2>}>
            <p>
                TODO: explain DAG, state tree, parallelism, properties of
                dependencies and dependants, lots of drawings
            </p>
            <SubSection>
                It's a weird kind of tree - sounds and numbers
            </SubSection>
            <SubSection>Sound flows up</SubSection>
            <SubSection>Stateful data flows down</SubSection>
            <SubSection>
                Processing objects can be queried many times in parallel
            </SubSection>
            <SubSection>Processing objects can have many states</SubSection>
            <SubSection>Sound Inputs and Outputs</SubSection>
            <SubSection>Number Inputs and Outputs</SubSection>
        </Section>
        <Section header={<h2>Implementation</h2>}>
            <p>
                TODO: explain key parts of the C++ code, possibly using
                syntax-highlighting for code snippets
            </p>
        </Section>
        <Section header={<h2>Source Code</h2>}>
            <p>TODO: link to github repo</p>
        </Section>
    </>
);
