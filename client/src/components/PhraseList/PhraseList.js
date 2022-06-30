import React, {useState, useContext} from 'react';
import Phrase from "../Phrase/Phrase";
import './PhraseList.scss'
import Modal from "../Modal/Modal";
import icons from "../../assets/icons.js";
import Form from "../Form/Form";
import PhraseContext from "../../context";


const PhraseList = () => {
  const [modalActive, setModalActive] = useState(false)
  const {phraseList, setPhraseList} = useContext(PhraseContext)
  return (
    <div className={'container'}>
      <div className={'list'}>
        {!phraseList.length && <h2 color={'white'}>You don`t have a phrase <br/> add new</h2>}
        {!!phraseList.length && phraseList?.map(ph => {
          return <Phrase
            key={ph?._id || Math.random()}
            phrase={ph}
            setPhrase={setPhraseList}/>
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