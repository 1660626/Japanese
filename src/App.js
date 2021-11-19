import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Home from "./views/home/Home";
import "./App.scss";
import "antd/dist/antd.css";

import { setDataPhrase } from "./shared/store/slice/phrase";
import PhraseService from "./services/phrase.service";

import { setDataGrammar } from "./shared/store/slice/grammar";
import GrammarService from "./services/grammar.service";

import logo from "./assets/koyLogo.png";
const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const shuffleData = (data) => {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1)),
        temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data;
  };

  useEffect(() => {
    setTimeout(() => setLoading(true), 3000);

    PhraseService()
      .getAllPhrase()
      .then((response) => {
        dispatch(
          // setDataPhrase([shuffleData(response.data[0]), response.data[1]])
          setDataPhrase(response.data)

        );
      });

    GrammarService()
      .getAllGrammar()
      .then((response) => {
        dispatch(setDataGrammar(shuffleData(response.data)));
      });
  }, []);

  console.log(useSelector((state) => state.phraseSlice))
  return (
    <div className="App">
      <>
        {loading === false ? (
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        ) : (
          <Home />
        )}
      </>
    </div>
  );
};

export default App;
