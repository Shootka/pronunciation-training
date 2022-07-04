import React, {useContext, useMemo} from 'react';
import Phrase from "../Phrase/Phrase";
import Modal from "../Modal/Modal";
import Form from "../Form/Form";
import icons from "../../assets/icons.js";
import context from "../../context/context";
import './PhraseList.scss'

const PhraseList = () => {

  const {phraseList, setPhraseList} = useContext(context.PhraseContext)
  const {modalActive, setModalActive} = useContext(context.ModalContext)

  const renderList = (phraseList) => {
    return !!phraseList?.length && phraseList?.map((ph, index) => {
      return <Phrase
        key={ph?._id || Math.random()}
        id={ph?._id}
        phrase={ph.phrase}
        number={index + 1}
        />
    })
  }

  return (
    <div className={'container'}>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div className={'list'}>
          {!phraseList.length && <h2>Uuups, you don`t have a phrase :)</h2>}
          {useMemo(() => renderList(phraseList), [phraseList])}
        </div>
        <button className={'add-bnt'} onClick={() => setModalActive(true)}>
          {icons.ADD}
        </button>
        <Modal active={modalActive}
               setActive={setModalActive}>
          <Form setPhraseList={setPhraseList} phrase={phraseList}/></Modal>
      </div>
    </div>
  );
};

export default PhraseList;