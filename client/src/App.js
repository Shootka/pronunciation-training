import './App.css';
import PhraseList from "./components/PhraseList/PhraseList";
import {useEffect, useContext} from "react";
import Filter from "./components/Filter/Filter";
import context from "./context/context";
import axios from "axios";

function App() {
  const {lang} = useContext(context.FilterContext)
  const {setPhraseList} = useContext(context.PhraseContext)

  useEffect(() => {
    axios.get(`/api/pronunciation/allphrases/${lang}`)
      .then(res => setPhraseList(res.data || []))
      .catch(err => console.error(err))
  }, [lang])

  return (
    <div className="App">
      <div className={'bg'}>
        <h1 style={{margin: '40px', color: '#ffffff'}}>Language Trainer</h1>
        <Filter/>
        <PhraseList/>
      </div>
    </div>
  );
}

export default App;
