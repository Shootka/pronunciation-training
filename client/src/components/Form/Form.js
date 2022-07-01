import React, {useState, useContext} from 'react';
import context from "../../context/context";
import './Form.scss'

const Form = () => {
  const [value, setValue] = useState("")
  const [error, setError] = useState('')

  const {phraseList, setPhraseList} = useContext(context.PhraseContext)
  const {modalActive, setModalActive} = useContext(context.ModalContext)
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value !== '') {
      setPhraseList([...phraseList, value])
      setValue('')
      setModalActive(!modalActive)
      setError('')
    } else {setError('Field can`t be empty!')}
  }

  return (
    <form onSubmit={e => handleSubmit(e)} className={'control'}>
      <label className={'control'}>
        Type here a new phrase:
        <textarea
          className={'field'}
          value={value}
          onChange={(e) => handleChange(e)}/>
        {error}
      </label>
      <input className={'submit'} type="submit" value="add"/>
    </form>
  );
};

export default Form;