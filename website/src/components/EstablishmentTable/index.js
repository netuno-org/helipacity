import React, { useEffect, useState } from "react";
import _service from "@netuno/service-client";
import { Card,Row,Col } from 'antd';
import {InstagramOutlined } from '@ant-design/icons'
import './index.less'
const { Meta } = Card;

function Cards({}) {
  const [list, setList] = useState([]);
  useEffect(() => {
    _service({
      url: "/establishment/list",
      success: (response) => {
        setList(response.json);
      },
      fail: (e) => {
        console.log("Service Error", e);
      },
    });
  }, []);
  return (
    <Row >
      
   
          {
            list.map ((item) => {
              return(
                     <Col  xs={{span: 24 }} sm={{span: 8}} md={{span: 8}} lg={{span: 6}} xl={{span: 4,offset: 1}} >
                        <Card  hoverable 
                          style={{ 
                             width: 240,
                                }}
                          cover={<img  src={`http://192.168.1.102:9000/services/establishment/image?uid=${item.uid}`} />}
                           >
                            <div className="shadow">Shadow</div>
                            <Meta title={item.name} description={item.description} />
                            <p>{item.address}</p>
                            
                            <p>{item.contact}</p>
                            <a href={item.link}><InstagramOutlined/></a>
                        </Card>
                     </Col>
                  )
          })
          }
      
    </Row>
  );
}
export default Cards;






