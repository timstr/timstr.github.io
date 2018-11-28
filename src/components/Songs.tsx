import * as React from "react";
import { SoundCloudPlayer } from "./Common/SoundCloudPlayer";
import { Link } from "./Common/Link";

// TODO: integrate this with Flosion page
// consider adding "gallery" to Flosion page

const PlayList = [
    "362396984", // Black sands exerpt
    "352281611", // Suite 03
    "352281068", // Suite 02
    "275723029", // suite 01
    "317720529", // Time-stretched compilation
    "293278142", // beansprout echoes
    "275870851", // simple chords
    "271523671", // a lesson in FM synthesis
    "315647927", // sauntering through many different waveforms
    "267075861", // sentimental saunter
];

export const Songs = () => (
    <>
        {PlayList.map(song => (
            <SoundCloudPlayer
                key={song}
                trackid={song}
                width={300}
                height={300}
            />
        ))}
        <div>
            More songs at{" "}
            <Link dst="https://soundcloud.com/timstraubinger">
                soundcloud.com/timstraubinger
            </Link>
        </div>
    </>
);
