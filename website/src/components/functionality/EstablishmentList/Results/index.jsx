import React, { useEffect, useState } from "react";
import _service from "@netuno/service-client";
import { Card, Row, Col, notification } from "antd";
import { InstagramOutlined, WhatsAppOutlined} from "@ant-design/icons";

import "./index.less";

const { Meta } = Card;

function Results({categoryCode}) {
  const servicePrefix = _service.config().prefix;
  const [list, setList] = useState([]);
  useEffect(() => {
    _service({
      url: "/establishment/list",
      data: {categoryCode},
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
  }, [categoryCode]);
  return (
    <Row className="establishment-list__results"
      gutter={[10,10]}
    >
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
                
              }}
              cover={
                <img
                  src={`${servicePrefix}/establishment/image?uid=${item.uid}`}
                  alt="Imagem dos Comercios"
                />
              }
            >
              <div className="shadow">Shadow</div>
              <p><Meta title={item.name}/></p>
              <div className="whats">
                <a href={`https://api.whatsapp.com/send?phone=005511${item.contact}`} target="_blank"><WhatsAppOutlined /></a>
                <a href={`tel:005511${item.contact}`}>{item.contact}</a>
              </div>
            </Card>
          </Col>
        );
      })}
      <Col>
      </Col>
    </Row>
  );
}
export default Results;
