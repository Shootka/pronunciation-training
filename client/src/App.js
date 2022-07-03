import './App.css';
import PhraseList from "./components/PhraseList/PhraseList";
import {useEffect, useContext, useState} from "react";
import Filter from "./components/Filter/Filter";
import context from "./context/context";
import axios from "axios";
import ResultBox from "./components/ResultBox/ResultBox";

function App() {
  const {filter} = useContext(context.FilterContext)
  const {setPhraseList} = useContext(context.PhraseContext)

  useEffect(() => {
    axios.get(`/api/pronunciation/allphrases/${filter.lang}`)
      .then(res => {setPhraseList(res.data)})
      .catch(err => console.error(err))
  }, [filter.lang])

  useEffect(() => {
    window.sessionStorage.setItem('filter', JSON.stringify(filter))
  }, [filter])

  return (
    <div className="App">
      <div className={'bg'}>
        <ResultBox/>
        <h1 className={'main-title'}>Language Trainer</h1>
        <Filter/>
        <PhraseList/>
      </div>
    </div>
  );
}

export default App;
