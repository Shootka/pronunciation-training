import React, {useContext, useEffect, useState} from 'react';
import context from "../../context/context";
import './ResultBox.scss'

const ResultBox = ({average, current, better}) => {

  const {selectPhrase} = useContext(context.selectPhraseContext)

  return (
    <div className={'result-box'}>
      <h3>Result: </h3>
      <p>Current phrase: {selectPhrase.id}</p>
      <p>{selectPhrase.lang}</p>
      <p>last try: {current}%</p>
      <p>better try: {better}%</p>
      <p>average of try: {average}%</p>
    </div>
  );
};

export default ResultBox;