import React, {useState, useContext, useMemo} from 'react';
import {useSpeechSynthesis} from "react-speech-kit";
import AudioReactRecorder, {RecordState} from 'audio-react-recorder'
import icons from "../../assets/icons.js";
import context from "../../context/context";
import query from "../../query/query";
import './Phrase.scss'
import axios from "axios";

const Phrase = ({phrase, id, number}) => {

  const {speak, voices} = useSpeechSynthesis();
  const {filter} = useContext(context.FilterContext)

  const [stop, setStop] = useState(false)
  const [show, setShow] = useState(false)
  const [score, setScore] = useState(0)

  const [countOfTry, setCountOfTry] = useState(1)
  const [average, setAverage] = useState(0)
  const [recordState, setRecordState] = useState(RecordState.NONE)
  let termPhrases = JSON.parse(window.sessionStorage.getItem(`phrases-${filter.lang}`)) || []


  const {setPhraseList} = useContext(context.PhraseContext)
  const {selectPhrase, setSelectPhrase} = useContext(context.selectPhraseContext)

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
    setRecordState(RecordState.START)
  }

  const onClickPhrase = () => {
    setShow(!show)
    setAverage(score + selectPhrase.last)
    console.log(average)
    setSelectPhrase({
      id: number,
      lang: filter.lang,
      last: score,
      better: score,
      count: countOfTry,
      average: score + selectPhrase.last / countOfTry
    })
  }

  const stopRecording = () => {
    setStop(!stop)
    setRecordState(RecordState.STOP)
  }

  const onStop = async (audioData) => {
    let fd = new FormData()
    fd.append('voice', audioData.blob)
    fd.append('language', filter.lang)
    fd.append('phrase', phrase)

    await axios({
      url: "/api/pronunciation/result",
      method: 'POST',
      data: fd,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then(res => {
      setCountOfTry(countOfTry+1)
      setScore(score > res.data ? score : res.data)
      setAverage(score + res.data / countOfTry)
      setSelectPhrase({
        id: number,
        lang: filter.lang,
        last: res.data,
        better: score > res.data ? score : res.data,
        count: countOfTry,
        average: (score + res.data) / countOfTry
      })
      termPhrases.push(selectPhrase)
    })
  }
  termPhrases = termPhrases?.filter((elem,index,array) => {
    if(elem.id !== selectPhrase.id
      && (elem.last !== selectPhrase.last
      || elem.better !== selectPhrase.better)){
     return array[index] = elem
    }else if(elem.id !== selectPhrase.id) {
      return elem
    }
  })

  termPhrases.push(selectPhrase)
  window.sessionStorage.setItem(`phrases-${filter.lang}`,JSON.stringify(termPhrases))
  window.sessionStorage.setItem('selected', JSON.stringify(selectPhrase))

  const onDeletePhrase = async (e) => {
    e.stopPropagation()
    await query.deletePhrase(filter.lang, id, setPhraseList)
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
        {phrase.length <= 47
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

export default Phrase;