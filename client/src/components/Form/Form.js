import React, {useState, useContext} from 'react';
import context from "../../context/context";
import query from '../../query/query.js'
import './Form.scss'

const Form = () => {
  const [value, setValue] = useState("")
  const [error, setError] = useState('')

  const {setPhraseList} = useContext(context.PhraseContext)
  const {modalActive, setModalActive} = useContext(context.ModalContext)
  const {filter} = useContext(context.FilterContext)

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (value !== '') {
      await query.addNewPhrase(filter.lang, value.trim(), setPhraseList)
      setValue('')
      setModalActive(!modalActive)
      setError('')
    } else {
      setError('Field can`t be empty!')
    }
  }

  return (
    <form onSubmit={e => handleSubmit(e)} className={'control'}>
      <label className={'control'}>
        Type here a new phrase:
        <textarea
          className={'field'}
          value={value.trim()}
          onChange={(e) => handleChange(e)}/>
        {error}
      </label>
      <input className={'submit'} type="submit" value="add"/>
    </form>
  );
};

export default Form;