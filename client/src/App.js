import './App.css';

import PhraseList from "./components/PhraseList/PhraseList";
import {useState} from "react";

function App() {
  const [testList, setTestList] = useState(['Google Cloud Text-to-Speech enables developers to synthesize natural-sounding speech with 100+ voices, available in multiple languag', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa ducimus ea enim illo in', 'exe'])

  return (
    <div className="App">
      <h1 style={{margin: '40px', color: '#ffffff'}}>Language Trainer</h1>
      <PhraseList phraseList={testList} setPhraseList={setTestList}/>
    </div>
  );
}

export default App;
