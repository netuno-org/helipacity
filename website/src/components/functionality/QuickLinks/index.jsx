import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { IoStorefront, IoCalendarNumber } from "react-icons/io5";
import { FaHandsHelping } from "react-icons/fa";

import "./index.less";

function QuickLinks({title}) {
    const navigate = useNavigate(); 
    const titleParts = title.split(" ");
    let titleStyled = title;
    if (titleParts.length > 1) {
        const titleIndex = Math.floor(Math.random() * titleParts.length);
        titleParts[
            titleIndex
        ] = `<span class="quick-links__title--stroke">${titleParts[titleIndex]}</span>`;
        titleStyled = titleParts.join(" ");
    }
    return (
        <div className="quick-links">
            <h1
                className="quick-links__title"
                dangerouslySetInnerHTML={{ __html: titleStyled }}
            ></h1>
            <h3>Veja os principais conteúdos.</h3>
            <div className="quick-links__buttons">
                <Button type="primary" onClick={() => navigate('/pt/evento')}>
                    <IoCalendarNumber />
                    <span>Eventos</span>
                </Button>
                <Button type="primary" onClick={() => navigate('/pt/comercio')}>
                    <IoStorefront />
                    <span>Comércios</span>
                </Button>
                <Button type="primary" onClick={() => navigate('/pt/acao-social')}>
                    <FaHandsHelping className="icons" />
                    <span>Ação Social</span>
                </Button>
            </div>
        </div>
    );
}

export default QuickLinks;