import React, {useState} from 'react';
import {useSpeechSynthesis} from "react-speech-kit";
import AudioReactRecorder, {RecordState} from 'audio-react-recorder'
import icons from "../../assets/icons.js";
import './Phrase.scss'

const Phrase = ({phrase, setPhrase}) => {
  const {speak, voices} = useSpeechSynthesis();
  const [stop, setStop] = useState(false)
  const [blob, setBlob] = useState()
  const [show, setShow] = useState(false)
  const [recordState, setRecordState] = useState(RecordState.NONE)

  const startRecording = () => {
    setStop(!stop)
    console.log('start')
    setRecordState(RecordState.START)
  }
  const stopRecording = () => {
    setStop(!stop)
    console.log('stop')
    setRecordState(RecordState.STOP)
  }
  const onStop = (audioData) => {
    console.log('audioData', audioData)
    setBlob(audioData)
  }
  const onDeletePhrase = (e) => {
    e.stopPropagation()
    setPhrase()
  }
  return (
    <div className={"phrase-box"}>
      <div className={'phrase-box__container'}
           onClick={() => setShow(!show)}>
        <button className='btn'
                onClick={e => onDeletePhrase(e)}>
          {icons.DEL}
        </button>
        {phrase.length > 39
          && <h2 className={show
            ? "phrase-box__title-active bigger"
            : "phrase-box__title bigger"}>{phrase}</h2>}
        {phrase.length < 39
          && <h2 className={"phrase-box__title "}>{phrase}</h2>}

        <div className={"phrase-box__button-box"}
             onClick={event => (event.stopPropagation())}>
          <button className="btn"
                  onClick={() => speak({text: phrase, voice: voices[10]})}>
            {icons.PLAY}</button>
          <div style={{display: "none"}}>
            <AudioReactRecorder type={'audio/mp3'} state={recordState} onStop={onStop}/>
          </div>
          <button
            className={"phrase-box__recorder btn"}
            style={{backgroundColor: `${!stop ? 'lawngreen' : '#fc5050'}`}}
            onClick={() => !stop ? startRecording() : stopRecording()}>{icons.MICRO}</button>
        </div>
      </div>
    </div>
  );
};

export default Phrase;