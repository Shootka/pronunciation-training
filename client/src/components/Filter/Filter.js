import React, {useContext, useState} from 'react';
import icons from '../../assets/icons.js'
import './Filter.scss'
import context from "../../context/context";

const Filter = () => {
  const {filter, setFilter} = useContext(context.FilterContext)
  const [clickedFlag, setClickedFlag] = useState(JSON.parse(window.sessionStorage.getItem('filter'))?.lang || '')

  const onFlagClick = (e) => {
    setFilter({...filter, lang: e.currentTarget.id})
    setClickedFlag(e.currentTarget.id)
  }



  return (
    <div className={'filter-wrapper'}>
      {icons?.COUNTRY?.map((flag, index) =>
        <div key={index}
             onClick={(e) => onFlagClick(e)}
             id={flag.id}
             className={`${clickedFlag === flag.id
               ? "filter-wrapper__item active-flag"
               : "filter-wrapper__item"}`}><span>{flag.fl}</span></div>)}
    </div>
  );
};

export default React.memo(Filter);