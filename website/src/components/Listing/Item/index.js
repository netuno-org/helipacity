import React from "react";
import { Col, Row } from "antd";
import BaseDivider from "../../../base/Divider";
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
        
        <Row className ="coluna_carrossel">
        
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
           </div>
           <div className = "background_image1"></div>
           <div className = "background_image2"></div>
           <div className = "background_image3"></div>
           <div className = "background_image4"></div>
           <div className = "background_image5"></div>
           <div className = "background_image6"></div>
           <div className = "background_image7"></div>
           <div className = "background_image8"></div>
           <div className = "background_image9"></div>
           <div className = "background_image10"></div>
           <div className = "background_image11"></div>

           
            
            
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
