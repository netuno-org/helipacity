import React, { useState } from "react";
import { Row, Col } from "antd";

import Filter from "./Filter";
import Results from "./Results";

import "./index.less";

function EstablishmentList() {
  const [categoryCode, setCategoryCode] = useState("all");
  return (
    <Row>
      <Col className="establishment-list">
        <div className="establishment-list__em-breve">
          <h1>Em Breve.</h1>
        </div>
        <Filter onCategoryChange={(code) => setCategoryCode(code)} />
        <Results categoryCode={categoryCode} />
      </Col>
    </Row>
  );
}

export default EstablishmentList;