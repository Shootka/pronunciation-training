import React, {useContext} from 'react';
import icons from '../../assets/icons.js'
import './Filter.scss'
import context from "../../context/context";

const Filter = () => {
  const {lang, setLang} = useContext(context.FilterContext)

  const onFlagClick = (e) => {
    setLang(e.currentTarget.id)
    // console.log(e.currentTarget.id)

  }
console.log(lang)
  const onGenderClick = (e) => {
    console.log(e.currentTarget.id)
  }

  return (
    <div className={'filter-wrapper'}>
      {icons.COUNTRY.map((flag, index) =>
        <div key={index}
             onClick={(e) => onFlagClick(e)}
             id={flag.id}
             className={"filter-wrapper__item"}><span>{flag.fl}</span></div>)}
      {icons.GENDER.map((el, index) =>
        <div id={el.id}
             className={'filter-wrapper__gender-item'}
             onClick={(e) => onGenderClick(e)}
             key={Math.random() * index}>{el.gn}</div>)}
    </div>
  );

};

export default Filter;