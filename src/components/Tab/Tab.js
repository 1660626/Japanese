import React, { useState, useRef, useEffect } from "react";
import "./style.scss";
// import { data } from '../../data'
const Tab = ({ dataListGrammar }) => {
    const ref = useRef();
    const [toggleState, setToggleState] = useState(1);
    // const [dataListGrammar, setDataListGrammar] = useState(data);


    const [modal, setModal] = useState({ isActive: false, value: {} });

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const getActiveClass = (index, className) =>
        toggleState === index ? className : "";


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
                        <div class="grammar-item-title ">～も</div>
                        <div class="grammar-item-title-mean">Cũng, đến mức, đến cả</div>
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
                    <h2>Lorem</h2>
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
        </div>
    );
};

export default Tab;