import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Home from "./views/home/Home";
import './App.scss';
import 'antd/dist/antd.css';

import { setDataPhrase } from "./shared/store/slice/phrase";
import PhraseService from "./services/phrase.service";

import { setDataGrammar } from "./shared/store/slice/grammar";
import GrammarService from "./services/grammar.service";

import logo from './assets/koyLogo.png'
const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setTimeout(() => setLoading(true), 300)

    PhraseService().getAllPhrase().then(
      (response) => {
        dispatch(setDataPhrase(response.data))
      })

    GrammarService().getAllGrammar().then(
      (response) => {
        dispatch(setDataGrammar(response.data))

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
          <Home />

        )}
      </>
    </div>
  );
}


export default App;
