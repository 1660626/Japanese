import React, { useState, useEffect, useContext } from "react";
import Tab from '../../components/Tab/Tab';
import Time from "../../components/Time/Time";
import PhraseService from '../../services/phrase.service'

import { AppContext } from "../../utils/AppContext";

const Home = () => {
    const { dataListPhar, setDataListPhar,
        dataListPharTemp,
        setDataListPharTemp,
        dataListGrammar,
        setDataListGrammar,
        dataListGrammarTemp,
        setDataListGrammarTemp } = useContext(AppContext);

    const [toggleState, setToggleState] = useState(1);
    const [toggleActive, setToggleActive] = useState(false);


    const [inputValueSearch, setInputValueSearch] = useState("");




    const toggleTab = (index) => {
        setToggleState(index);
    };

    const getActiveClass = (index, className) =>
        toggleState === index ? className : "";


    const handleChange = (e) => {
        let value = e.target.value
        if (toggleState === 1) {
            let listLiter = dataListPhar[0].filter((item) => {
                return (
                    item.pinyin.toLowerCase().includes(value.toLowerCase()) ||
                    item.vietnamese.toLowerCase().includes(value.toLowerCase())
                );
            })
            setDataListPharTemp([listLiter, dataListPhar[1]]);

        }
        if (toggleState === 2) {
            let listLiter = dataListGrammar.filter((item) => {

                return (
                    item.title.toLowerCase().includes(value.toLowerCase()) ||
                    item.note.toLowerCase().includes(value.toLowerCase())
                );
            })
            setDataListGrammarTemp(listLiter);

        }

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
        setDataListGrammarTemp(dataListGrammar);
        setDataListPharTemp(dataListPhar);
    };


    const [valueSelected, setValueSelected] = useState(1);

    const handleChangeSelected = (value) => {
        setValueSelected(value);

    }

    useEffect(() => {
        setDataListPharTemp(dataListPhar);

        if (valueSelected === 0) {
            console.log(valueSelected)
        } else {
            if (dataListPhar) {
                let listLiter = dataListPhar[0].filter((item) => {
                    return (
                        item.category_id == (valueSelected)
                    );
                })
                setDataListPharTemp([listLiter, dataListPhar[1]]);
            }


        }
    }, [valueSelected, dataListPhar])

    const [inputValueMean, setInputValueMean] = useState("");
    const handleChangeMean = (e) => {

        let value = e.target.value

        setInputValueMean(value);

    };
    const writeData = () => {
        var data ={
            "japanese": inputValueSearch,
            "vietnamese": inputValueMean,
        }
        PhraseService().postPhrase(data).then((res) => { console.log(res) })
        setTimeout(() => {
            PhraseService()
            .getAllPhrase()
            .then((response) => {
              // setDataPhrase([shuffleData(response.data[0]), response.data[1]])
              // setDataPhrase(response.data)
              setDataListPhar(response.data)
              setDataListPharTemp(response.data)
            });
          }, 500);
      
    }
    return (
        <div className="Home-section">
            <div className="head">
                <div>
                    <h2 className="font-weight-bold">日本語を検索する </h2>
                    <div className="inputfield">
                        <div className="inputText">
                            <input type="text" placeholder="日本語....." onChange={handleChange} value={inputValueSearch} />
                            <span className={toggleActive ? "delKey active" : " delKey"} onClick={() => handleClearText()}>&times;</span>
                        </div>

                        <div className={toggleActive ? "inputTextMean active" : "inputTextMean"} onChange={handleChangeMean} value={inputValueMean}>
                            <input type="text" placeholder="ベトナム語....." />
                        </div>

                        <button id="btnAdd " className={toggleActive ? "btn custom-btn active" : "btn custom-btn"} onClick={() => writeData()}>
                            <i className="fa fa-plus" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
                <Time />
            </div>
            <Tab dataListGrammar={dataListGrammarTemp} toggleTab={toggleTab} getActiveClass={getActiveClass} dataListPharTemp={dataListPharTemp} handleChangeSelected={handleChangeSelected} />
        </div>
    )
}
export default Home;