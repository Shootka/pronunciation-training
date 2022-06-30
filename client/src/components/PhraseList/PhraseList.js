import React, {useState} from 'react';
import Phrase from "../Phrase/Phrase";
import './PhraseList.scss'
import Modal from "../Modal/Modal";
import icons from "../../assets/icons.js";
const PhraseList = ({phraseList}) => {
  const [modalActive, setModalActive] = useState(false)

  return (
    <div className={'container'}>
      <div className={'list'}>
        {phraseList?.map(ph => {
          return <Phrase key={ph?._id || Math.random()} phrase={ph}/>
        })}
      </div>
      <button className={'add-bnt'} onClick={() => setModalActive(true)}>
        {icons.ADD}
      </button>
      <Modal active={modalActive} setActive={setModalActive}/>
    </div>
  );
};

export default PhraseList;