import React, {useState} from 'react';
import {useSpeechSynthesis} from "react-speech-kit";
import './Phrase.scss'

const Phrase = ({phrase}) => {
  const {speak, voices} = useSpeechSynthesis();
  const [start, setStart] = useState(true)
  return (
    <div className={"phrase-box"}>
      <div className={'phrase-box__container'}>
        <h2 className={"phrase-box__title"}>{phrase}</h2>
        <button className="phrase-box__play" onClick={() => speak({text: phrase, voice: voices[10]})}/>
        {/*<Recording/>*/}
      </div>
    </div>
  );
};

export default Phrase;