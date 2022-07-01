import React, {useState, useContext} from 'react';
import Phrase from "../Phrase/Phrase";
import './PhraseList.scss'
import Modal from "../Modal/Modal";
import icons from "../../assets/icons.js";
import Form from "../Form/Form";
import context from "../../context/context";


const PhraseList = () => {

  const {phraseList, setPhraseList} = useContext(context.PhraseContext)
  const {modalActive, setModalActive} = useContext(context.ModalContext)

  return (
    <div className={'container'}>
      <div className={'list'}>
        {!phraseList.length && <h2>Uuups, you don`t have a phrase :)</h2>}
        {!!phraseList.length && phraseList?.map(ph => {
          return <Phrase
            key={ph?._id || Math.random()}
            phrase={ph}/>
        })}
      </div>
      <button className={'add-bnt'} onClick={() => setModalActive(true)}>
        {icons.ADD}
      </button>
      <Modal active={modalActive}
             setActive={setModalActive}>
        <Form setPhraseList={setPhraseList} phrase={phraseList}/></Modal>
    </div>
  );
};

export default PhraseList;