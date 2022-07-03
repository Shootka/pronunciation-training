import React, {useState, useContext, useMemo} from 'react';
import {useSpeechSynthesis} from "react-speech-kit";
import AudioReactRecorder, {RecordState} from 'audio-react-recorder'
import icons from "../../assets/icons.js";
import context from "../../context/context";
import query from "../../query/query";
import './Phrase.scss'

const Phrase = ({phrase, id, number}) => {
  const {speak, voices} = useSpeechSynthesis();
  const {filter} = useContext(context.FilterContext)

  const [stop, setStop] = useState(false)
  const [show, setShow] = useState(false)

  const [recordState, setRecordState] = useState(RecordState.NONE)
  const {setPhraseList} = useContext(context.PhraseContext)
  const {setSelectPhrase} = useContext(context.selectPhraseContext)

  const [select, setSelect] = useState({id: number, lang: filter.lang})

  const filterVoice = (voices) => {
    return voices
      .filter(el =>
        el?.lang
          .toLowerCase()
          .indexOf(filter.lang) >= 0
        && el.name.indexOf('Google') >= 0
      )
  }
  const filteredVoices = useMemo(() => filterVoice(voices), [voices])

  const startRecording = () => {
    setStop(!stop)
    console.log('start')
    setRecordState(RecordState.START)
  }
  const onClickPhrase = (e) => {
    setShow(!show)
    setSelect({
      id: number,
      lang: filter.lang
    })
    window.sessionStorage.setItem('selected', JSON.stringify(select))
    setSelectPhrase(select)
  }
  const stopRecording = () => {
    setStop(!stop)
    console.log('stop')
    setRecordState(RecordState.STOP)
  }
  const onStop = async (audioData) => {
    let fd = new FormData()
    fd.append('voice', audioData.blob)
    console.log(fd.get('voice'));
    await query.sendAudio(fd)
  }
  const onDeletePhrase = async (e) => {
    e.stopPropagation()
    query.deletePhrase(filter.lang, id)
    setPhraseList(await query.fetchPhrase(filter.lang))
  }
  return (
    <div className={"phrase-box"}>

      <div className={'phrase-box__container'}
           id={id}
           onClick={(e) => onClickPhrase(e)}>
        <div className={"phrase-box__number"}>{number}</div>
        <button className='delete btn'
                onClick={e => onDeletePhrase(e)}>
          {icons.DEL}
        </button>
        {phrase.length > 47
          && <h2 className={show
            ? "phrase-box__title-active bigger"
            : "phrase-box__title bigger"}>{phrase}</h2>}
        {phrase.length < 47
          && <h2 className={"phrase-box__title "}>{phrase}</h2>}
        <div className={"phrase-box__button-box"}
             onClick={event => (event.stopPropagation())}>
          <button className="btn"
                  style={{height: '48px'}}
                  onClick={() => speak({text: phrase, voice: filteredVoices[0]})}>
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

export default React.memo(Phrase);