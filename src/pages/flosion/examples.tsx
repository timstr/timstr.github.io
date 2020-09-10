import * as React from "react";
import { renderPage } from "../../renderpage";
import { Section, SubSection } from "../../components/Section";
import { BigImage } from "../../components/BigImage";
import { Link } from "../../components/Link";
import { SoundCloudPlayer } from "../../components/SoundCloudPlayer";

renderPage(
    ["flosion", "examples"],
    <>
        <h1>Examples</h1>
        <Section header={<h2>Preamble</h2>}>
            <p>
                Flosion is an ongoing project, and has been for a few years now.
                Consequently, the code base has been through many major
                overhauls, and the user interface has also changed a number of
                times, and is changing yet again as part of a current code
                update. The abstract structure has remained the same for a long
                time though, and so the various screenshots here are still very
                relevant.
            </p>
        </Section>
        <Section header={<h2>Basic Setups</h2>}>
            <p>
                This screenshot is of an early version of Flosion, and shows, at
                the top, two numeric constants, X and Y, being passed to an
                "Add" number object, which can be seen computing their sum.
                Below that is another variable, "X Domain," being passed through
                a "Sine" object, and into a graphing object. Graphing objects
                were a very useful feature that unfortunately were implemented
                in a very unsafe and messy way, and ways to reintroduce them are
                under investigation. At the bottom of the image, there is the
                object labeled "Aaah.wav," which is simply a sound object that
                plays a sound file. This object is fed into the "PlayBack"
                object, which simply takes the sound stream entering its input
                and plays the stream to the computer's speakers. The result is
                that one can physically hear a recording of myself shouting.
            </p>
            <p>
                If the font looks weird, it's probably because the glyphs were
                hand drawn by myself, using a pixel art program that I also
                wrote myself to animate video game characters, all because I
                couldn't figure out how to use standard text rendering APIs. But
                that's a different story from my earlier days as a programmer.
            </p>
            <BigImage name="flosion/demo1" />
            <SubSection>
                <p>
                    In this example, a Filter object is used, which computes a{" "}
                    <Link dst="https://en.wikipedia.org/wiki/Fast_Fourier_transform">
                        fast Fourier transform
                    </Link>{" "}
                    of its input sound to create a{" "}
                    <Link dst="https://en.wikipedia.org/wiki/Spectrogram">
                        spectrogram
                    </Link>
                    . This spectrogram can be used to see how the sound is
                    composed of a distribution of waves of different frequencies
                    and amplitudes. The Filter object can be used to amplify or
                    attenuate these frequencies selectively. It exposes a
                    "frequency" number source at its top, which it can change to
                    select a frequency, and it provides an "amplitude" number
                    input, which it multiplies individual frequencies by. To
                    modify individual frequencies, one simply needs to define a
                    function of the Filter's frequency and pass it into the
                    "amplitude" input. In this screenshot, a bell curve, or
                    Gaussian distribution, is used to silence all but a narrow
                    range of frequency components. The overall result is that a{" "}
                    <Link dst="https://en.wikipedia.org/wiki/Band-pass_filter">
                        band-pass filter
                    </Link>{" "}
                    is applied to the sound stream. Band-pass filters are a
                    fairly common effect in digital music production, and can be
                    used for things like isolating vocals or bass from a larger
                    piece of audio.
                </p>
                <BigImage name="flosion/demo2" />
            </SubSection>
            <SubSection>
                <p>
                    Here, we see a NoteGen object being used. This object is
                    essentially a{" "}
                    <Link dst="https://en.wikipedia.org/wiki/Function_generator">
                        function generator
                    </Link>
                    , which produces some periodic signal at a specified
                    frequency. The NoteGen object exposes a "phase" number
                    output, visible on its top edge, and accepts a "wave
                    function" input. By defining the wave function input to be
                    any desirable function of the phase, the user can create any
                    wave form they choose. The wave function chose here is the
                    canonical sine wave.
                </p>
                <p>
                    The frequency at which this wave form is played in the
                    output sound is determined by the "frequency" number input,
                    which is being given the constant value of 250 Hz here. The
                    end result of this setup is a simple sine-wave tone of 250
                    Hz.
                </p>
                <BigImage name="flosion/demo3" />
            </SubSection>
            <SubSection>
                <p>
                    Here, the NoteGen object is used in tandem with the Sampler
                    object. The Sampler object is used to define a melody. The
                    vertical axis denotes note pitch, and the horizontal axis
                    denotes time. Essentially, it represents sheet music, but
                    without all the swirls and lines and other complex rules.
                    The Sampler uses a multi-input so that it can call upon its
                    input many times in parallel, which it needs to do when its
                    notes overlap in time. The Sampler object also exposes a
                    "note frequency" number output, which simply yields the
                    value of the current note's frequency. By plugging this into
                    the NoteGen's frequency input, it produces a note of the
                    desired pitch. This example thus plays a sine-wave melody
                    which is defined by the notes drawn on the Sampler object.
                </p>
                <BigImage name="flosion/demo4" />
            </SubSection>
        </Section>
        <Section header={<h2>More Complicated Examples</h2>}>
            <p>
                Here's what it can look like when bigger networks of sounds and
                numbers are put together. It can get messy quickly, which is why
                the next major version of Flosion will include new ways to
                encapsulate sub-networks and hide the small details when needed.
            </p>
            <BigImage name="flosion/franklyamess" />
            <SubSection>
                <p>
                    The following setup was used as-is to create a pair of
                    recorded songs. The songs themselves can be listened to
                    below the screenshot.
                </p>
                <BigImage name="flosion/simplesong" />
                <SoundCloudPlayer
                    trackid={"275870851"}
                    width={300}
                    height={300}
                />
                <SoundCloudPlayer
                    trackid={"275870658"}
                    width={300}
                    height={300}
                />
            </SubSection>
        </Section>
        <Section header={<h2>More Graphing Objects</h2>}>
            <p>
                In previous versions where graphing objects still existed, 2D
                graphing objects could also be used, and were very useful for
                visualizing multi-dimensional things like filter functions that
                changed over time.
            </p>
            <BigImage name="flosion/2dgraph" />
        </Section>
        <Section header={<h2>A Quick Note on the Sampler</h2>}>
            <p>
                In more recent versions of Flosion, I've been working to allow
                the notes of a Sampler object to be far more customizable than
                those of comparable note sequencers in other music software.
                Firstly, notes can change frequency on the fly, as shown in the
                first example. Second, notes can be parameterized by adding any
                number of numeric values that change as desired over the course
                of the note's lifetime. These parameters are very useful for
                creating truly customized melodies and effects, and help to give
                back some creative freedoms, like dynamically modifying the
                timbre of instrument, which is otherwise lost when making music
                on a computer.
            </p>
            <BigImage name="flosion/sampler1" />
            <BigImage name="flosion/sampler2" />
            <BigImage name="flosion/sampler3" />
        </Section>
    </>
);
