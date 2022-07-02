import React, {useContext, useMemo} from 'react';
import Phrase from "../Phrase/Phrase";
import './PhraseList.scss'
import Modal from "../Modal/Modal";
import icons from "../../assets/icons.js";
import Form from "../Form/Form";
import context from "../../context/context";

const PhraseList = () => {
  const {phraseList, setPhraseList} = useContext(context.PhraseContext)
  const {modalActive, setModalActive} = useContext(context.ModalContext)

  const renderList = (phraseList) => {
    return !!phraseList?.length && phraseList?.map(ph => {
      return <Phrase
        key={ph?._id || Math.random()}
        phrase={ph.phrase}/>
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

export default React.memo(PhraseList);