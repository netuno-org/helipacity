import React from "react";
import { Row, Col } from "antd";

import ESelect from "./Select";
import EList from "./List";

import "./index.less";

function EstablishmentList() {
  return (
    <Row>
      <Col>
        <div className="embreve">
          <h1>Em Breve.</h1>
        </div>
        <h1>Comércios</h1>
        <ESelect />
        <EList />
      </Col>
    </Row>
  );
}

export default EstablishmentList;
