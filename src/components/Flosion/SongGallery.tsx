import * as React from "react";
import { SoundCloudPlayer } from "../Common/SoundCloudPlayer";
import { Link } from "../Common/Link";

type RenderFunction = () => React.ReactNode;

interface Song {
    id: string;
    info?: string | RenderFunction | undefined;
}

const PlayList: Song[] = [
    {
        id: "362396984",
        info: () => (
            <>
                This piece was created using the{" "}
                <Link dst="https://en.wikipedia.org/wiki/Phase_vocoder">Phase Vocoder</Link> object.
                The original sound is a 5-second exerpt from "Black Sands" by Bonobo, which has been
                stretched in time to nearly 15 minutes, while preserving frequencies.
            </>
        ),
    }, // Black sands exerpt
    { id: "352281611" }, // Suite 03
    { id: "352281068" }, // Suite 02
    { id: "275723029" }, // suite 01
    {
        id: "317720529",
        info: () => (
            <>
                This piece demonstrates the use of the Resampler object, which performs{" "}
                <Link dst="https://en.wikipedia.org/wiki/Sample-rate_conversion">
                    sample-rate conversion
                </Link>{" "}
                to change the speed and frequency of an audio stream. The Resampler object exposes a
                "speed" number input, which in this example, is being changed by a simpler slider
                control.
            </>
        ),
    }, // Time-stretched compilation
    {
        id: "293278142",
        info: () => (
            <>
                Here, the FeedBack object was used, which was an experimental attempt to introduce a
                closed loop into the audio rendering network. This can be used to allow methods like{" "}
                <Link dst="https://en.wikipedia.org/wiki/Karplus%E2%80%93Strong_string_synthesis">
                    Karplus-Strong synthesis
                </Link>
                , and other effects like echoes and reverberations, as heard here. The original song
                is "Sprout and the Bean" by Joanna Newsom.
            </>
        ),
    }, // beansprout echoes
    {
        id: "275870851",
        info: () => (
            <>
                To see a screenshot from the recording of this song, click{" "}
                <Link dst="img/flosion/simplesong.png">here</Link>
            </>
        ),
    }, // simple chords
    {
        id: "275870658",
        info: () => (
            <>
                To see a screenshot from the recording of this song, click{" "}
                <Link dst="img/flosion/simplesong.png">here</Link>
            </>
        ),
    }, // simple chords, take 2
    {
        id: "271523671",
        info: () => (
            <>
                Aptly named, this song demonstrates{" "}
                <Link dst="https://en.wikipedia.org/wiki/Frequency_modulation_synthesis">
                    frequency modulation synthesis
                </Link>
                . In FM synthesis, the frequency of a waveform being played is modulated at a speed
                comparable to that of the waveform's original frequency. This method can achieve a
                variety of glassy, metallic and ceramic sounds by changing the waveform and
                frequencies involved. The creation of this sound involved only a Sampler object and
                a NoteGen object, plus a variety of number objects to compute the waveforms and
                modulating functions.
            </>
        ),
    }, // a lesson in FM synthesis
    {
        id: "315647927",
        info: () => (
            <>
                Here, a NoteGen object is used in conjunction with a hand-drawn waveform to
                implement a{" "}
                <Link dst="https://en.wikipedia.org/wiki/Wavetable_synthesis">
                    wavetable synthesizer.
                </Link>
                . The timbre of the sound changing is due to the waveform being redrawn,
                freehandedly, at runtime, by the user. Hand-drawn waveforms turn out to be a very
                effective way of introducing unique timbres and harmonics. In most off-the-shelf
                synthesizers, the waveform is typically selected from an immutable list of
                predefined shapes, but in Flosion, there is no such restriction.
            </>
        ),
    }, // sauntering through many different waveforms
    {
        id: "267075861",
        info: () => (
            <>
                This piece was also made with a hand-drawn wavetable synthesizer. The output of this
                single-wave synthesizer is then passed to an Ensemble object, which samples its
                input many times in parallel while providing a random distribution of similar
                frequencies, and mixes the resulting streams into a single output stream. This adds
                a tremendous amount of character and spatial immersion to the synthesizer. The
                resulting sound stream is then passed through a Filter object which applies a
                band-pass filter. At the start of every note, the filter permits most frequencies
                through, before descending quickly to allow only bass frequencies. This changes the
                otherwise rather static sound into something resembling a plucked or struck
                instrument. In other synthesizers, this is commonly achieved by customizing
                something called the{" "}
                <Link dst="https://en.wikipedia.org/wiki/Synthesizer#Attack_Decay_Sustain_Release_(ADSR)_envelope">
                    Attack Decay Sustain Release envelope
                </Link>{" "}
                and a filter which is built in to the synth. In Flosion, this is instead achieved by
                defining arbitrary functions and wiring them together with Filter objects.
            </>
        ),
    }, // sentimental saunter
];

export const SongGallery = () => (
    <>
        <h2>Songs Made using Flosion</h2>
        <div className="songlist">
            {PlayList.map(song => (
                <div className="songbox" key={song.id}>
                    <SoundCloudPlayer trackid={song.id} width={500} height={200} />
                    {song.info !== undefined ? (
                        <p>{typeof song.info === "string" ? song.info : song.info()}</p>
                    ) : null}
                </div>
            ))}
        </div>
        <div>
            More songs at{" "}
            <Link dst="https://soundcloud.com/timstraubinger">soundcloud.com/timstraubinger</Link>
        </div>
    </>
);
