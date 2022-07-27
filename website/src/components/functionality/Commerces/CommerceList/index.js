import React, { useEffect, useState } from "react";
import _service from "@netuno/service-client";
import { Card, Row, Col, notification } from "antd";
import { InstagramOutlined, WhatsAppOutlined} from "@ant-design/icons";
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
    <Row className="commerce-cards"
    gutter={[16,16]}
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
                  src={`${servicePrefix}/commerce/establishment/image?uid=${item.uid}`}
                  alt="Imagem dos Comercios"
                />
              }
            >
              <div className="shadow">Shadow</div>
              <p><Meta title={item.name}/></p>
              {/* <p>{item. description}</p>
              <div className="end"><h5>End:&nbsp;{item.address}</h5></div> */}
              <div className="whats">
                <a href={`https://web.whatsapp.com/send?phone=5511${item.contact}`} target="_blank"><WhatsAppOutlined /></a>
                <a href={`tel:5511${item.contact}`}>{item.contact}</a>
              </div>
              {/* <a href={item.link}>
              <div className="insta">
                <InstagramOutlined />
                <h4>Instagran</h4>
              </div>
              </a> */}
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
