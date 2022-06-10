import React from "react";
import { Col, Row } from "antd";
import BaseDivider from "../../../base/Divider";
import { Button } from 'antd';
import "./index.less";

function Item({
  section,
  type,
  image,
  image_title,
  image_alt,
  title,
  content,
  link,
}) {
  let layout = null;
  if (type === "YOUR-CUSTOM-TYPE-HERE") {
    layout = (
      <Col className={`listing__item__${type}`} xs={12} lg={6}>
        <a href={link} alt={title}>
          <span>{title}</span>
          <div
            className="listing__item__bgimage"
            style={{ backgroundImage: `url('/images/${section}/${image}')` }}
          ></div>
        </a>
      </Col>
    );
  } else if (type === "carrossel") {
    layout = (
      <div>
        <Row className="coluna_carrossel">
          <Col span={12}>
            <p
              className="carroussel__legend"
              dangerouslySetInnerHTML={{ __html: content }}
            ></p>
          </Col>

          <Col className="carroussel" span={12}>
            <div className="div_imagem_carroussel">
              <img
                className="imagem_carroussel"
                src={`/images/${section}/${image}`}
                alt={image_alt}
                title={image_title}
              />
              <div className ="div_button_image">
                <Button type="primary" className="button_image">
                  <h4 className="text__button2">Nome da Pessoa</h4>
                </Button>
              </div>
              
            </div>
            
            <div className="background_big"></div>
            <div className="bullet bullet--1"></div>
            <div className="bullet bullet--2"></div>
            <div className="bullet bullet--3"></div>
            <div className="bullet bullet--4"></div>
            <div className="bullet bullet--5"></div>
            <div className="bullet bullet--6"></div>
            <div className="bullet bullet--7"></div>
            <div className="bullet bullet--8"></div>
            <div className="bullet bullet--9"></div>
            <div className="bullet bullet--10"></div>
            
          </Col>
        </Row>
      </div>
    );
  } else {
    layout = (
      <li className="listing__item">
        <div className={`listing__item`}>
          <h1>{title}</h1>
          <img
            src={`/images/${section}/${image}`}
            alt={image_alt}
            title={image_title}
          />
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
      </li>
    );
  }
  return layout;
}

export default Item;
