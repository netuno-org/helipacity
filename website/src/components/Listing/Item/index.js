import React from "react";
import { Col, Row } from "antd";
import BaseDivider from "../../../base/Divider";
import { Button } from "antd";
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
            className="listing__item__bigmage"
            style={{ backgroundImage: `url('/images/${section}/${image}')` }}
          ></div>
        </a>
      </Col>
    );
  } else if (type === "carrossel_principal") {
    layout = (
      <div className="backgroundTop">
        <div className="div_imagem_principal">
        <h1  className="carroussel__legend">{title}</h1>
            <p className="carroussel__legendprincipal"
              dangerouslySetInnerHTML={{ __html: content }}
            ></p>
              <img className= "imagem_principal"
                src={`/images/${section}/${image}`}
                alt={image_alt}
                title={image_title}
              />
            </div>
        
      </div>
    );
  } else if (type === "carrossel") {
    layout = (
      <div>
        <Row className="coluna_carrossel" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
        
          <Col span={12} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          
            <p
              className="carroussel__text"
              dangerouslySetInnerHTML={{ __html: content }}
            ></p>
          </Col>

          <Col className="carroussel" span={12} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <div className="div_imagem_carroussel">
              <img
                className="imagem_carroussel"
                src={`/images/${section}/${image}`}
                alt={image_alt}
                title={image_title}
              />
              <div className="div_button_image">
                <Button type="primary" className="button_image">
                  <h4 className="text__button2">Nome da Pessoa</h4>
                </Button>
              </div>
            </div>

            <div className="background_big"></div>
              <div className =" flexbulletvertical">
                <div className="bullet bullet--1"></div>
                <div className="bullet bullet--2"></div>
                <div className="bullet bullet--3"></div>
                <div className="bullet bullet--4"></div>
            </div>
            
            <div className="bullet bullet--5"></div>

            <div className =" flexbullethorizontal">
              <div className="bullet bullet--6"></div>
              <div className="bullet bullet--7"></div>
              <div className="bullet bullet--8"></div>
              <div className="bullet bullet--9"></div>
              <div className="bullet bullet--10"></div>
            </div>
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
