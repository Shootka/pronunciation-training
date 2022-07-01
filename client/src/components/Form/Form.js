import React, {useState, useContext} from 'react';
import context from "../../context/context";
import './Form.scss'

const Form = () => {
  const [value, setValue] = useState("")
  const {phraseList, setPhraseList} = useContext(context.PhraseContext)
  const {modalActive, setModalActive} = useContext(context.ModalContext)
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPhraseList([...phraseList, value])
    setValue('')
    setModalActive(!modalActive)
  }

  return (
    <form onSubmit={e => handleSubmit(e)} className={'control'}>
      <label className={'control'}>
        Type here a new phrase:
        <textarea
          className={'field'}
          value={value}
          onChange={(e) => handleChange(e)}/>
      </label>
      <input className={'submit'} type="submit" value="add"/>
    </form>
  );
};

export default Form;