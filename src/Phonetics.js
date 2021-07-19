import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core'
import {
  faVolumeUp
} from '@fortawesome/free-solid-svg-icons'
library.add(
    faVolumeUp
)

export default function Phonetics(props) {
    let [audio, setAudio] = useState(null);
    
    function playAudio(event) {
        event.preventDefault();
        setAudio(props.phonetics.audio);
    }

    function resetAudio() {
        setAudio(null);
    }

    return (
        <div className="Phonetics">
            <a className="btn" href="/" role="button" onClick={playAudio}>
            <FontAwesomeIcon icon="volume-up" className="iconsForm" />
            <ReactAudioPlayer
            src={audio}
            onEnded={resetAudio}
            autoPlay />
            </a>
            {props.phonetics.text}
        </div>
    )
}