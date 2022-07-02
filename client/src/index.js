import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import context from "./context/context";

function Main() {
  const [phraseList, setPhraseList] = useState([])
  const [lang, setLang] = useState('us')
  const [modalActive, setModalActive] = useState(false)

  return (
    <React.StrictMode>
      <context.PhraseContext.Provider value={{phraseList, setPhraseList}}>
        <context.ModalContext.Provider value={{modalActive, setModalActive}}>
          <context.FilterContext.Provider value={{lang, setLang}}>
            <App/>
          </context.FilterContext.Provider>
        </context.ModalContext.Provider>
      </context.PhraseContext.Provider>
    </React.StrictMode>
  )
}

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);
reportWebVitals();
