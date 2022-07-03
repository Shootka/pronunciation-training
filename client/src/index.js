import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import context from "./context/context";

function Main() {
  const [phraseList, setPhraseList] = useState([])
  const [filter, setFilter] = useState(JSON.parse(window.sessionStorage.getItem('filter'))
    || {
    lang: "en",
    gender: 'male'
  })
  const [modalActive, setModalActive] = useState(false)

  return (
    <React.StrictMode>
      <context.PhraseContext.Provider value={{phraseList, setPhraseList}}>
        <context.ModalContext.Provider value={{modalActive, setModalActive}}>
          <context.FilterContext.Provider value={{filter, setFilter}}>
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
