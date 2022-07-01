import './App.css';
import PhraseList from "./components/PhraseList/PhraseList";
import {useEffect, useContext} from "react";

function App() {

  useEffect(() => {
    //fetch to load phrase here
  }, [])
  return (
    <div className="App">
      <h1 style={{margin: '40px', color: '#ffffff'}}>Language Trainer</h1>
      <PhraseList/>
    </div>
  );
}

export default App;
