import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import context from "./context/context";

function Main() {
  const [phraseList, setPhraseList] = useState([])
  const [selectPhrase, setSelectPhrase] = useState(
    JSON.parse(window.sessionStorage.getItem('selected')) || {
      id: 'none',
      lang: 0,
      last: 0,
      better: 0,
      count: 0,
      average: 0
    })

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
            <context.selectPhraseContext.Provider value={{selectPhrase, setSelectPhrase}}>
              <App/>
            </context.selectPhraseContext.Provider>
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
