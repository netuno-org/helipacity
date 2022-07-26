import React from "react";
import { Row } from "antd";
// import _service from "@netuno/service-client";

import "./index.less";
import CommerceSelect from "./CommerceSelect";
import Cards from "./CommerceList";

function Commerces(RemoveError={}) {
  return (
    <Row>
      <div className="embreve">
        <h1>Em Breve.</h1>
      </div>
      <CommerceSelect />
      <Cards />
    </Row>
  );
}

export default Commerces;
