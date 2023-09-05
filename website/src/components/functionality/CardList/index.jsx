import React, { useState } from "react";
import { Row, Col } from "antd";

import Filter from "./Filter";
import Results from "./Results";

import "./index.less";

function CardList({listType}) {
  const [categoryCode, setCategoryCode] = useState("all");
  return (
    <Row>
      <Col className="card-list">
        <Filter listType={listType} onCategoryChange={(code) => setCategoryCode(code)} />
        <Results listType={listType} categoryCode={categoryCode} />
      </Col>
    </Row>
  );
}

export default CardList;