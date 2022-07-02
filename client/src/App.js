import './App.css';
import PhraseList from "./components/PhraseList/PhraseList";
import {useEffect, useContext} from "react";
import Filter from "./components/Filter/Filter";
import context from "./context/context";
import axios from "axios";

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
        <h3 className={'language'}>{filter.lang}</h3>
        <div className={'score'}>
          <p>Result</p>
        </div>
        <h1 className={'main-title'}>Language Trainer</h1>
        <Filter/>
        <PhraseList/>
      </div>
    </div>
  );
}

export default App;
