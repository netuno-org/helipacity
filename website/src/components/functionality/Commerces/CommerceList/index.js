import React, { useEffect, useState } from "react";
import _service from "@netuno/service-client";
import { Card, Row, Col, notification } from "antd";
import { InstagramOutlined, WhatsAppOutlined
 } from "@ant-design/icons";
import "./index.less";

const { Meta } = Card;


function Cards(removeError = {}) {
  const servicePrefix = _service.config().prefix;
  const [list, setList] = useState([]);
  useEffect(() => {
    _service({
      url: "commerce/establishment/list",
      success: (response) => {
        setList(response.json);
      },
      fail: (e) => {
        console.error("Service Error", e);
        notification.error({
          message:"Falhou !!!",
          description:"Não foi possível encontrar os comércios."
        })
      },
    });
  }, []);
  return (
    <Row className="cards">
      {list.map((item) => {
        return (
          <Col
            xs={24}
            sm={12}
            md={8}
            lg={8}
            xl={8}
          >
            <Card
              hoverable
              style={{
                width: 300,
              }}
              cover={
                <img
                  src={`${servicePrefix}/commerce/establishment/image?uid=${item.uid}`}
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
