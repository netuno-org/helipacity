import React from "react";
import { Col, Row } from "antd";

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
        <div className="bar"> </div>
        <Row>
          <Col span={12}>
            <p
              className="carroussel__legend"
              dangerouslySetInnerHTML={{ __html: content }}
            ></p>
          </Col>

          <Col className="carroussel" span={12}>
          <h1>{title}</h1>
           <div className="div_imagem_carroussel">
           <img
              className="imagem_carroussel"
              src={`/images/${section}/${image}`}
              alt={image_alt}
              title={image_title}
            />
           </div>
           <div className = "background_image"></div>
            
            
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
