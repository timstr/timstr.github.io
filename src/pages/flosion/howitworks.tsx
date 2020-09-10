import * as React from "react";
import { renderPage } from "../../renderpage";
import { Section, SubSection } from "../../components/Section";
import { BigImage } from "../../components/BigImage";
import { Link } from "../../components/Link";

renderPage(
    ["flosion", "howitworks"],
    <>
        <h1>How Flosion Works</h1>
        <Section header={<h2>Overview</h2>}>
            <h4>Data Types and Objects</h4>
            <p>
                In Flosion, there are two data types: sound streams and numbers.
                There are also objects, which produce and consume this data. The
                two types, naturally, are sound objects and number objects.
            </p>
            <BigImage name="flosion/numbersandsounds" />
            <h4>Number Objects</h4>
            <p>
                Number objects have no state. They can only accept numbers as
                inputs and always produce numbers as outputs. These act just
                familiar mathematical functions. Examples of number objects
                include addition, multiplication, trigonometric functions, and
                numeric constants.
            </p>
            <BigImage name="flosion/numberobjects" />
            <h4>Sound Objects</h4>
            <p>
                Sound objects produce a stream of sound that can be listened to
                or given to other objects as input. Sound objects can also take
                sound streams as inputs, modifying them according to their
                design, and returning the result as their output. Sound objects
                can additionally accept numbers as inputs, which may control
                various behaviors of the sound object. Sound objects are allowed
                to have stateful information that changes over time as it
                produces sound. Many sound objects also expose some of their
                stateful information in the form of number outputs. Some
                examples include an amplifier, an echo effect, or a sound clip.
            </p>
            <BigImage name="flosion/soundobjects" />
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
                    original sound clip.
                </p>
                <BigImage name="flosion/ampnetwork" />
                <p>Of course, these networks can get far more interesting.</p>
                <BigImage name="flosion/morecomplicated" />
            </SubSection>
            <SubSection>
                <h4>Inputs and Outputs</h4>
                <p>
                    For sending and receiving numbers, there are of number
                    inputs and number outputs. There are also sound ouputs,
                    which produce streams of sound, and sound inputs, which
                    consume them. There are two types of sound inputs,
                    single-inputs and multi-inputs. A sound output that is
                    connected to a single-input always produces a single stream
                    of sound for that input. But a sound output that is
                    connected to a multi-input can produce multiple streams, at
                    the same time. A multi-input always has some known{" "}
                    <Link dst="https://en.wikipedia.org/wiki/Arity">arity</Link>
                    , which is a number that generalizes the number of streams
                    it can receive in parallel. A single-input is essentially a
                    special case of a multi-input, with a fixed arity of 1.
                </p>
                <BigImage name="flosion/inputsandoutputs" />
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
                    Another reason is the existence of sound multi-inputs, which
                    call upon their inputs multiple times in parallel.
                    Multi-inputs are very useful for creating certain types of
                    sound objects. For example, a synthesizer can be plugged
                    into the multi-input of a sound object that generates a
                    melody from some number of notes notes. The result is that
                    if the melody has n notes, then for every state of the
                    melody generator, there will be an additional n states in
                    the synthesizer. This way, the melody can use the same
                    synthesizer multiple times in parallel to play overlapping
                    notes, without any distortions or conflict from shared
                    state.
                </p>
                <BigImage name="flosion/parallelsynth" />
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
                <BigImage name="flosion/timestretchdelay" />
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
                    it always makes sense for a child to ask for stateful
                    information from a parent. Of course, this restriction
                    doesn't apply for constants and numbers that don't depend on
                    state, but those never change and are a bit boring anyway.
                    Thus, sounds flow up the network, and numbers flow down the
                    network. With both numbers and sound streams, closed loops
                    would cause an infinite recursion, and so are not allowed.
                </p>
                <BigImage name="flosion/goodbadconnections" />
                <h4>Stateful and Stateless numbers</h4>
                <p>
                    Some numbers in Flosion come from sources that have no
                    state, such as constants, or functions whose inputs are all
                    constants. These can be referred to as global, and they can
                    be used as inputs anywhere. But some numbers come for
                    sources that are stateful, and these are usually sound
                    objects. To preserve the flow of information, stateful
                    number sources cannot be connected to number inputs that
                    don't have access to that state. Again, the flow of numbers
                    needs to be in the direction opposite to the flow of sound.
                    The way that sound is flowing is what decides whose state is
                    visible to which other sound objects.
                </p>
                <BigImage name="flosion/inaccessible" />
                <p>
                    Finally, an output can be connected to any number of inputs,
                    but every input can have at most one output.
                </p>
                <BigImage name="flosion/oneinputmanyoutputs" />
            </SubSection>
        </Section>
        <Section header={<h2>Abstract Structure</h2>}>
            <p>
                The networks of sound objects in Flosion always form a{" "}
                <Link dst="https://en.wikipedia.org/wiki/Directed_acyclic_graph">
                    directed acyclic graph (DAG)
                </Link>
                . Number objects also always connect to form a DAG, though, as
                discussed above, the flow of sound and numbers is always in the
                opposite direction.
            </p>
            <BigImage name="flosion/subgraphs" />
            <p>
                The states of sound objects are a bit special. Every state has a
                parent state, and every state can have multiple child states.
                The states of the sound objects thus form a tree, and this tree
                has a similar structure to the overall sound object network.
                Given any sound object, it has one state for each state of every
                sound single-input it is connected to, and n states for each
                state of every n-adic multi-input it is connected to.
            </p>
            <BigImage name="flosion/statetree" />
        </Section>
    </>
);
