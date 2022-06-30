import React, {useState} from 'react';
import {useSpeechSynthesis} from "react-speech-kit";
import AudioReactRecorder, {RecordState} from 'audio-react-recorder'
import './Phrase.scss'

const Phrase = ({phrase}) => {
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

  return (
    <div className={"phrase-box"}>
      <div className={'phrase-box__container'}
           onClick={() => setShow(!show)}>
        <h2 className={show ? "phrase-box__title-active" : "phrase-box__title"}>{phrase}</h2>
        <div className={"phrase-box__button-box"}
             onClick={event => (event.stopPropagation())}>
          <button className="phrase-box__play"
                  onClick={() => speak({text: phrase, voice: voices[10]})}/>
          <div style={{display: "none"}}>
            <AudioReactRecorder type={'audio/mp3'} state={recordState} onStop={onStop}/>
          </div>
          <button
            className={"phrase-box__recorder"}
            style={{backgroundColor: `${!stop ? 'lawngreen' : '#fc5050'}`}}
            onClick={() => !stop ? startRecording() : stopRecording()}/>
        </div>
      </div>
    </div>
  );
};

export default Phrase;