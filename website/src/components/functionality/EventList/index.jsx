import React, { useState } from "react";
import { Row, Col } from "antd";

import Filter from "./Filter";
import Results from "./Results";

import "./index.less";

function EventList() {
  const [categoryCode, setCategoryCode] = useState("all");
  return (
    <Row>
      <Col className="event-list">
        <Filter onCategoryChange={(code) => setCategoryCode(code)} />
        <Results categoryCode={categoryCode} />
      </Col>
    </Row>
  );
}

export default EventList;