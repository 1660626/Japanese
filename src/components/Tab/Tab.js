import React, { useState, useRef, useEffect } from "react";
import "./style.scss";

const Tab = ({ dataListGrammar, toggleTab, getActiveClass , dataListPharTemp}) => {
    console.log(dataListGrammar)
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
            <div id="myModal" class="modal active"  >
                <div class="modal-content" ref={ref} >
                    <span class="close" onClick={() => handleEventClickCloseModal()}>×</span>
                    <div class="gr-title">
                        <div class="grammar-item-title ">{modal.value.title}</div>
                        <div class="grammar-item-title-mean">{modal.value.note}</div>
                    </div>

                    <div class="item-description mt-2">

                        {modal.value.description.map((element, index) => (
                            <>
                                <div class="gr-use-description display-linebreak" key={index}>
                                    {element}

                                </div>
                                {modal.value.example[index].map((element1, index1) => (
                                    <div class="gr-example" key={index1}>
                                        <div class="example">
                                            {index1 + 1 + ". "} {element1}
                                        </div>
                                        <div class="example-mean">
                                            {modal.value.exampleMean[index][index1]}
                                        </div>
                                    </div>

                                ))}</>
                        ))}



                    </div>
                </div>

            </div>
            : <>
            </>
    }



    const playAudio = (id) => {

        document.addEventListener('play', function (e) {
            var audios = document.getElementsByTagName('audio');
            for (var i = 0, len = audios.length; i < len; i++) {
                if (audios[i] !== e.target) {
                    audios[i].pause();
                    audios[i].currentTime = 0;
                }
            }
        }, true);
        const audio = document.getElementById(id);
        audio.play()
    };
    return (
        <div className="container-tab mt-5" >
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
                    <div className="box-result">
                        <div className="row">
                            {dataListPharTemp.map((element, index) => (
                                <div className="col-lg-3 col-md-4 col-sm-6" onClick={() => playAudio(`myAudio${element.id}`)}  key={index} >
                                    <div className="item-result" data-id="1">
                                        <div className="item-header">
                                            <span className="item-title"> {(index+1)+". " + element.japanese}</span>
                                            <p> {element.pinyin}</p>

                                            <strong className="item-note">{element.vietnamese}</strong>
                                            <audio id={`myAudio${element.id}`} >
                                                <source src={require(`../../data/voice/phrase/${element.voice}.mp3`).default} type="audio/mpeg" />
                                            </audio>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* <div className="col-lg-3 col-md-4 col-sm-6" onClick={() => playAudio("myAudio2")}  >
                                <div className="item-result" data-id="1">
                                    <div className="item-header">
                                        <p className="item-title"></p>
                                        <strong className="item-note"></strong>
                                        <p> </p>
                                        <audio id="myAudio2" >
                                            <source src="https://mina.mazii.net/db/phrase/greeting_3.mp3" type="audio/mpeg" />
                                        </audio>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className={`content ${getActiveClass(2, "active-content")}`}>
                    <div>
                        合計: {dataListGrammar.length}
                    </div>
                    <div className="box-result">
                        <div className="row">
                            {dataListGrammar.map((e, index) => (
                                <div className="col-lg-3 col-md-4 col-sm-6" key={index} onClick={() => handleEventClickOpenModal(e.id)} >
                                    <div className="item-result" data-id="1">
                                        <div className="item-header">
                                            <p className="item-title">({index + 1}) {e.title}</p>
                                            <strong className="item-note">{e.note}</strong>
                                            <p> {e.lesson}</p>
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