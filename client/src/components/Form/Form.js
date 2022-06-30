import React, {useState} from 'react';
import './Form.scss'

const Form = ({phrase, setPhraseList}) => {
  const [value, setValue] = useState("")
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPhraseList([...phrase, value])
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