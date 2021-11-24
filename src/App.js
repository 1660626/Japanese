import React, { useState, useEffect } from "react";

import Home from "./views/home/Home";
import "./App.scss";
import "antd/dist/antd.css";

import PhraseService from "./services/phrase.service";

import GrammarService from "./services/grammar.service";

import logo from "./assets/koyLogo.png";

import { AppContext } from "./utils/AppContext";
const App = () => {
  const [loading, setLoading] = useState(false);

  // const shuffleData = (data) => {
  //   let i = data.length - 1;
  //   while (i > 0) {
  //     const j = Math.floor(Math.random() * (i + 1)),
  //       temp = data[i];
  //     data[i] = data[j];
  //     data[j] = temp;
  //     i--;
  //   }
  //   return data;
  // };


  const [dataListPhar, setDataListPhar] = useState();
  const [dataListPharTemp, setDataListPharTemp] = useState();

  const [dataListGrammar, setDataListGrammar] = useState();
  const [dataListGrammarTemp, setDataListGrammarTemp] = useState();

  useEffect(() => {
    setTimeout(() => setLoading(true), 500);

    PhraseService()
      .getAllPhrase()
      .then((response) => {
        console.log(response)
        // setDataPhrase([shuffleData(response.data[0]), response.data[1]])
        // setDataPhrase(response.data)
        setDataListPhar(response.data)
        setDataListPharTemp(response.data)
      });

    GrammarService()
      .getAllGrammar()
      .then((response) => {
        // dispatch(setDataGrammar(response.data));
        setDataListGrammar(response.data)
        setDataListGrammarTemp(response.data)
      });
  }, []);

  return (
    <div className="App">
      <>
        {loading === false ? (
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        ) : (
          <AppContext.Provider value={{dataListPhar, setDataListPhar,
            dataListPharTemp,
            setDataListPharTemp,
            dataListGrammar,
            setDataListGrammar,
            dataListGrammarTemp,
            setDataListGrammarTemp}}>
            <Home />

          </AppContext.Provider>
        )}
      </>
    </div>
  );
};

export default App;
