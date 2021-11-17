import React, { useState, useEffect } from "react";
import './App.scss';
import Tab from './components/Tab/Tab';
import Time from "./components/Time/Time";
import { data } from './data'

const App = () => {
  const [toggleActive, setToggleActive] = useState(false);
  const [dataListGrammar, setDataListGrammar] = useState(data);
  const [dataListGrammarTemp, setDataListGrammarTemp] = useState(data);


  const [inputValueSearch, setInputValueSearch] = useState("");
  const handleChange = (e) => {
    let value = e.target.value
    let listLiter = dataListGrammar.filter((item) => {

      return (
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        item.note.toLowerCase().includes(value.toLowerCase())
      );
    })
    setDataListGrammarTemp(listLiter);

    setInputValueSearch(value);

  };
  useEffect(() => {
    if (inputValueSearch.length !== 0) {
      setToggleActive(true);
    } else {
      setToggleActive(false);
    }
  }, [inputValueSearch])
  const handleClearText = () => {
    setInputValueSearch("");
  };

  return (
    <div className="App">
      <div className="head">
        <div>
          <h2 className="font-weight-bold">日本語を検索する </h2>
          <div className="inputfield">
            <div className="inputText">
              <input type="text" placeholder="日本語....." onChange={handleChange} value={inputValueSearch} />
              <span className={toggleActive ? "delKey active" : " delKey"} onClick={() => handleClearText()}>&times;</span>
            </div>

            <div className={toggleActive ? "inputTextMean active" : "inputTextMean"}>
              <input type="text" placeholder="ベトナム語....." />

            </div>

            <button id="btnAdd " className={toggleActive ? "btn custom-btn active" : "btn custom-btn"}>
              <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <Time/>
      </div>
      <Tab dataListGrammar={dataListGrammarTemp} />
    </div>
  );
}

export default App;
