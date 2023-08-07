import React from "react";
import { Row, Col } from "antd";

import "./index.less";

function BaseDivider() {
  return (
    <div class="basedivider">
      <Row type="flex" justify="center">
        <Col span={24}>
          <hr class="basedivider__hr"></hr>
        </Col>
      </Row>
    </div>
  );
}
export default BaseDivider;
