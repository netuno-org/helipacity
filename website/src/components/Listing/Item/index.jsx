import React from "react";
import { Col, Row } from "antd";
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
  } else if (type === "carrossel-principal") {
    layout = (
      <div className={`listing__${type}__item`} style={{
        backgroundImage: `url("/images/${section}/${image}")`,
      }}>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    );
  } else if (type === "carrossel") {
    layout = (
      <div className="carroussel__areaTotalsegundo">
        <Row
          className="carroussel__coluna"
          gutter={{ xs: 24, sm: 16, md: 24, lg: 32 }}
        >
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <p
              className="carroussel__text"
              dangerouslySetInnerHTML={{ __html: content }}
            ></p>
          </Col>

          <Col className="carroussel" xs={{ span: 24 }} md={{ span: 12 }}>
            <div className="carroussel__areaTotalsecundario">
              <div className="carroussel__areaimagem">
                <img
                  className="carroussel__segundaimagem"
                  src={`/images/${section}/${image}`}
                  alt={image_alt}
                  title={image_title}
                />
                <div className="area_button_image">
                  <Button type="primary" className="button_image">
                    <h4 className="text__button2">Nome da Pessoa</h4>
                  </Button>
                </div>
              </div>

              <div className="background_big"></div>
              <div className=" flexbulletvertical">
                <div className="bullet bullet--1"></div>
                <div className="bullet bullet--2"></div>
                <div className="bullet bullet--3"></div>
                <div className="bullet bullet--4"></div>
              </div>

              <div className="bullet bullet--5"></div>

              <div className=" flexbullethorizontal">
                <div className="bullet bullet--6"></div>
                <div className="bullet bullet--7"></div>
                <div className="bullet bullet--8"></div>
                <div className="bullet bullet--9"></div>
                <div className="bullet bullet--10"></div>
              </div>
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
