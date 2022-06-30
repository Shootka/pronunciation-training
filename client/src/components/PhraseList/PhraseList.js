import React from 'react';
import Phrase from "../Phrase/Phrase";
import './PhraseList.scss'
import {useState} from "@types/react";

const PhraseList = ({phraseList}) => {
  const [modalActive, setModalActive] = useState(false)
  return (
    <div className={'container'}>
      <div className={'list'}>
        {phraseList?.map(ph => {
          return <Phrase key={ph?._id || Math.random()} phrase={ph}/>
        })}
      </div>
      <button></button>
    </div>
  );
};

export default PhraseList;