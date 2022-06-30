import './App.css';

import PhraseList from "./components/PhraseList/PhraseList";

function App() {
  const testList = ['Google Cloud Text-to-Speech enables developers to synthesize natural-sounding speech with 100+ voices, available in multiple languages and variants. It applies DeepMind’s groundbreaking research in WaveNet and Google’s powerful neural networks to deliver the highest fidelity possible. As an easy-to-use API, you can create lifelike interactions with your users, across many applications and devices.']
  return (
    <div className="App">
      <h1 style={{margin: '40px', color: '#ffffff'}}>Language Trainer</h1>
      <PhraseList phraseList={testList}/>
    </div>
  );
}

export default App;
