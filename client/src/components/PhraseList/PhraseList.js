import React from 'react';
import Phrase from "../Phrase/Phrase";
import './PhraseList.scss'

const PhraseList = ({phraseList}) => {
  return (
    <div className={'container'}>
      <div className={'list'}>
        {phraseList?.map(ph => {
          return <Phrase key={ph?._id || Math.random()} phrase={ph}/>
        })}
      </div>
    </div>
  );
};

export default PhraseList;