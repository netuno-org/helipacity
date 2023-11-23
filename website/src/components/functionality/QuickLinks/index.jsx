import React from "react";
import { Button } from "antd";
import { FaMicrophone } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";
import { BsFillChatSquareTextFill } from "react-icons/bs";

function QuickLinks({title}) {
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
            <div className="quick-links">
                <h1
                    className="quick-links__title"
                    dangerouslySetInnerHTML={{ __html: titleStyled }}
                ></h1>
                <h3> Botões Informativos</h3>
                <div className="quick-links__divButton">
                    <Button type="primary" className="button1">
                        <FaMicrophone className="icons" />
                        <h4 className="quick-links__button1">Texto</h4>
                    </Button>
                    <br />
                    <Button type="primary" className="button2">
                        <BsFillChatSquareTextFill className="icons" />
                        <h4 className="quick-links__button1">Texto</h4>
                    </Button>
                    <br />
                    <Button type="primary" className="button3">
                        <FiHelpCircle className="icons" />
                        <h4 className="quick-links__button1">Texto</h4>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default QuickLinks;