import './App.css';
import PhraseList from "./components/PhraseList/PhraseList";
import {useEffect, useContext} from "react";
import Filter from "./components/Filter/Filter";
import context from "./context/context";

function App() {

  useEffect(() => {
    //fetch to load phrase here
  }, [])
  const {lang} = useContext(context.FilterContext)

  return (
    <div className="App">
      <div className={'bg'}>
        <h1 style={{margin: '40px', color: '#ffffff'}}>Language Trainer</h1>
        <Filter/>
        <PhraseList flag={lang}/>
      </div>
    </div>
  );
}

export default App;
