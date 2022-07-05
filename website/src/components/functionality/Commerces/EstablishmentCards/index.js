import React, { useEffect, useState } from "react";
import _service from "@netuno/service-client";
import { Card, Row, Col, Pagination } from "antd";
import { InstagramOutlined, WhatsAppOutlined
 } from "@ant-design/icons";
import "./index.less";

const { Meta } = Card;

function Cards(removeError = {}) {
  const [list, setList] = useState([]);
  useEffect(() => {
    _service({
      url: "commerce/establishment/list",
      success: (response) => {
        setList(response.json);
      },
      fail: (e) => {
        console.log("Service Error", e);
      },
    });
  }, []);
  return (
    <Row>
      {list.map((item) => {
        return (
          <Col
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
            xl={{ span: 4 }}
          >
            <Card
              hoverable
              style={{
                width: 250,
                
              }}
              cover={
                <img
                  src={`http://192.168.1.102:9000/services/commerce/establishment/image?uid=${item.uid}`}
                  alt="Imagem dos Comercios"
                />
              }
            >
              <div className="shadow">Shadow</div>
              <p><Meta title={item.name} description={item.description} /></p>
              <div className="end"><h5>End:&nbsp;{item.address}</h5></div>
              <div className="whats">
                <WhatsAppOutlined/>
                <h4>{item.contact}</h4>
              </div>
              <a href={item.link}>
              <div className="insta">
                <InstagramOutlined />
                <h4>Instagran</h4>
              </div>
              </a>
            </Card>
          </Col>
        );
      })}
      <Col>
      </Col>
    </Row>
  );
}
export default Cards;
