import React, {useContext} from 'react';
import context from "../../context/context";
import './ResultBox.scss'

const ResultBox = () => {
  const {selectPhrase} = useContext(context.selectPhraseContext)

  return (
    <div className={'result-box'}>
      <h3 className={'result-box__title'}>Result: </h3>
      <p>Select phrase: {selectPhrase?.id}</p>
      <p>lang of phrase: {selectPhrase?.lang}</p>
      <p>last try: {selectPhrase?.last}%</p>
      <p>better try: {selectPhrase?.better}%</p>
      <p>average: {selectPhrase?.average.toFixed(1)}%</p>
    </div>
  );
};

export default React.memo(ResultBox);