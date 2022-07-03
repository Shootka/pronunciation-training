import React, {useContext, useEffect, useState} from 'react';
import context from "../../context/context";
import './ResultBox.scss'

const ResultBox = () => {

  const {selectPhrase} = useContext(context.selectPhraseContext)
  console.log(selectPhrase, 'renderrrr')
  return (
    <div className={'result-box'}>
      <h3 className={'result-box__title'}>Result: </h3>
      <p>Current phrase: {selectPhrase.id}</p>
      <p>{selectPhrase.lang}</p>
      <p>last try: {selectPhrase.last}%</p>
      <p>better try: {selectPhrase.better}%</p>
      <p>average of try: {32}%</p>
    </div>
  );
};

export default React.memo(ResultBox);