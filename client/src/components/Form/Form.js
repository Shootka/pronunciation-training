import React, {useState, useContext} from 'react';
import './Form.scss'
import PhraseContext from "../../context";

const Form = () => {
  const [value, setValue] = useState("")
  const {phraseList, setPhraseList} = useContext(PhraseContext)
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPhraseList([...phraseList, value])
    setValue('')
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