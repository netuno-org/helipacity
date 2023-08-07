import React from "react";
import { Row } from "antd";
import { Carousel } from "react-responsive-carousel";

import Item from "./Item";

import "./index.less";
import BaseDivider from "../../base/Divider";

function Listing({
  section,
  type,
  image,
  image_title,
  image_alt,
  title,
  content,
  items,
}) {
  const children = [];
  items.map((item) => {
    children.push(<Item key={item.uid} {...{ type, ...item }} />);
    return null;
  });

  const titleParts = title.split(" ");
  let titleStyled = title;
  if (titleParts.length > 1) {
    const titleIndex = Math.floor(Math.random() * titleParts.length);
    titleParts[
      titleIndex
    ] = `<span class="text__title--stroke">${titleParts[titleIndex]}</span>`;
    titleStyled = titleParts.join(" ");
  }

  let listLayout = (
    <div>
      <h1>{title}</h1>
      <div className="listing__title-border"></div>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
      <ul className={`listing__${type}`}>{children}</ul>
    </div>
  );

  if (type === "YOUR-CUSTOM-TYPE-HERE") {
    listLayout = (
      <Row className={`listing__${type}`} justify="start">
        {children}
      </Row>
    );
  } else if (type === "OTHER-CUSTOM-TYPE-HERE") {
    listLayout = <Row className={`listing__${type}`}>{children}</Row>;
  } else if (type === "carrossel_principal") {
    listLayout = (
      <Row className="listing__principal" xs={{ span: 24 }} md={{ span: 12 }}>
        <div>
          {titleStyled && (
            <h1
              className="text__title_principal"
              dangerouslySetInnerHTML={{ __html: titleStyled }}
            ></h1>
          )}
          {content && (
            <div
              className="text_principal"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          )}
          <Carousel
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            showArrows={true}
            autoPlay
            infiniteLoop
            interval={3000}
          >
            {children}
          </Carousel>
        </div>
      </Row>
    );
  } else if (type === "carrossel") {
    listLayout = (
      <Row className="listing__segundo">
        <BaseDivider />
        <div className="listing__carroussel_secundario">
          <h1
            className="text__title"
            dangerouslySetInnerHTML={{ __html: titleStyled }}
          ></h1>
          <div
            className="text"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>

          <Carousel
            showStatus={false}
            interval={3000}
            showArrows={false}
            autoPlay
            showIndicators
            infiniteLoop
          >
            {children}
          </Carousel>
        </div>
        <BaseDivider />
      </Row>
    );
  }
  return <section className="listing">{listLayout}</section>;
}

export default Listing;
