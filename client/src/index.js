import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import context from "./context/context";


function Main() {
  const [phraseList, setPhraseList] = useState(['Google Cloud Text-to-Speech enables developers to synthesize natural-sounding speech with 100+ voices', 'available in multiple languag', 'Lorem ipsum dolor sit amet, consectetur adipisicing ', 'exe'])
  const [modalActive, setModalActive] = useState(false)
  return (
    <React.StrictMode>
      <context.PhraseContext.Provider value={{phraseList, setPhraseList}}>
        <context.ModalContext.Provider value={{modalActive, setModalActive}}>
          <App/>
        </context.ModalContext.Provider>
      </context.PhraseContext.Provider>
    </React.StrictMode>
  )
}

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
