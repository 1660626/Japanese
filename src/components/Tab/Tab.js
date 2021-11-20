import React, { useState, useRef, useEffect } from "react";
import { Select } from 'antd';
import "./style.scss";

import PhraseService from '../../services/phrase.service'

const { Option } = Select;

const Tab = ({ dataListGrammar, toggleTab, getActiveClass, dataListPharTemp,
    handleChangeSelected }) => {
    // console.log(dataListGrammar)
    const ref = useRef();
    // const [dataListGrammar, setDataListGrammar] = useState(data);


    const [modal, setModal] = useState({ isActive: false, value: {} });


    const handleEventClickOpenModal = (id) => {
        let dataID = dataListGrammar.find((element) => {
            return element.id === id;
        })
        setModal({ isActive: true, value: dataID });
    };
    const handleEventClickCloseModal = () => {

        setModal({ isActive: false, value: {} });
    };

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (modal.isActive && ref.current && !ref.current.contains(e.target)) {
                setModal({ isActive: false, value: {} });
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [modal.isActive])

    const renderModal = () => {

        return modal.isActive ?
            <div id="myModal" className="modal active"  >
                <div className="modal-content" ref={ref} >
                    <span className="close" onClick={() => handleEventClickCloseModal()}>×</span>
                    <div className="gr-title">
                        <div className="grammar-item-title ">{modal.value.title}</div>
                        <div className="grammar-item-title-mean">{modal.value.note}</div>
                    </div>

                    <div className="item-description mt-2">

                        {modal.value.description.map((element, index) => (
                            <div key={index}>
                                <div className="gr-use-description display-linebreak" >
                                    {element}

                                </div>
                                {modal.value.example[index].map((element1, index1) => (
                                    <div className="gr-example" key={index1}>
                                        <div className="example">
                                            {index1 + 1 + ". "} {element1}
                                        </div>
                                        <div className="example-mean">
                                            {modal.value.exampleMean[index][index1]}
                                        </div>
                                    </div>

                                ))}</div>
                        ))}



                    </div>
                </div>

            </div>
            : <>
            </>
    }


    const [audioTemp, setAudioTemp] = useState(new Audio());

    useEffect(() => {
        audioTemp.addEventListener('ended', () => { });
        return () => {
            audioTemp.removeEventListener('ended', () => { });
        };
    }, [audioTemp]);

    useEffect(() => {
        audioTemp.play();


    }, [audioTemp])
    const playAudio = (id) => {
        // console.log(audioTemp.currentTime)
        PhraseService().getVoiceByPhrase(id).then((res) => {
            setAudioTemp(new Audio(`${PhraseService().API_URL}/voice/${id}`));
            if (audioTemp.currentTime > 0) {
                audioTemp.pause();
                audioTemp.currentTime = 0;
            }
        })

        // "../../data/voice/phrase/accommodation_1.mp3"

        // setAudioTemp(new Audio(tryRequire(id)))

        // console.log(id)

        // console.log(tryRequire(id))
        // document.addEventListener('play', function (e) {
        //     var audios = document.getElementsByTagName('audio');
        //     for (var i = 0, len = audios.length; i < len; i++) {
        //         if (audios[i] !== e.target) {
        //             audios[i].pause();
        //             audios[i].currentTime = 0;
        //         }
        //     }
        // }, true);
        // const audio = document.getElementById(id);
        // audio.play()
    };


    return (
        <div className="container-tab" >
            <div className="tab-list">
                <div className={`tabs ${getActiveClass(1, "active-tabs")}`} onClick={() => toggleTab(1)}  >
                    文
                </div>
                <div className={`tabs ${getActiveClass(2, "active-tabs")}`} onClick={() => toggleTab(2)} >
                    文法
                </div>

            </div>
            <div className="content-container">
                <div className={`content ${getActiveClass(1, "active-content")}`}>
                    <div className="row">
                        <div className="col-lg-2" >
                            <Select size={"large"} style={{ width: "100%" }} defaultValue={[1]} onChange={handleChangeSelected}>
                                <Option value={0}>Tất Cả</Option>
                                {dataListPharTemp && dataListPharTemp[1].map((element, index) => (
                                    <Option key={index + 1} value={index + 1}>{element}</Option>

                                ))}
                            </Select>
                        </div>

                        <div className="col-lg-10" >
                            <div className="box-result">
                                {dataListPharTemp && dataListPharTemp[0].map((element, index) => (
                                    <div className="item-result" onClick={() => playAudio(`${element.voice}.mp3`)} key={index}>
                                        <div className="item-header">
                                            <span className="item-title"> {(index + 1) + ". " + element.japanese }。</span>
                                            <span> {element.pinyin}</span>

                                            <strong className="item-note">{element.vietnamese}</strong>
                                            {/* <audio id={`myAudio${element.id}`} >
                                                <source src={tryRequire(`../../data/voice/phrase/${element.voice}.mp3`)} type="audio/mpeg" />
                                            </audio> */}
                                        </div>
                                    </div>
                                ))}


                            </div>
                        </div>
                    </div>

                </div>
                <div className={`content ${getActiveClass(2, "active-content")}`}>
                    <div>
                        合計: {dataListGrammar && dataListGrammar.length}
                    </div>
                    <div className="box-result">
                        <div className="row">
                            {dataListGrammar && dataListGrammar.map((e, index) => (
                                <div className="col-lg-3 col-md-4 col-sm-6" key={index} onClick={() => handleEventClickOpenModal(e.id)} >
                                    <div className="item-result" data-id="1">
                                        <div className="item-header">
                                            <p className="item-title">({index + 1}) {e.title}</p>
                                            <strong className="item-note">{e.note}</strong>
                                            <p> ({e.lesson})</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {
                renderModal()

            }
        </div >
    );
};

export default Tab;