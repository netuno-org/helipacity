import React, { useEffect, useState } from "react";
import _service from "@netuno/service-client";
import { Card, Row, Col, notification, Button } from "antd";
import { InstagramOutlined, WhatsAppOutlined} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

import "./index.less";

const { Meta } = Card;

function Results({categoryCode}) {
  const servicePrefix = _service.config().prefix;
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [showMore, setShowMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    if (page > 1) {
      onLoadData({categoryCode, page, list});
    }
  }, [page]);

  useEffect( () => {
    onLoadData({categoryCode, page:1, list:[]});
    return () => {
      // cleanup...
      setPage(1);
      setShowMore(true);
      setList([]);
    }
  }, [categoryCode]);

  const onLoadData = ({categoryCode, page, list}) => {
    setLoading(true);
    _service({
      url: "/establishment/list",
      data: {categoryCode, page},
      success: (response) => {
        if (response.json.length < 6) {
          setShowMore(false);
        }
        setList([...list, ...response.json]);
        setLoading(false);
      },
      fail: (e) => {
        console.error("Service Error", e);
        notification.error({
          message:"Falhou !!!",
          description:"Não foi possível encontrar os comércios."
        });
        setLoading(false);
      },
    });
  };
  return (
    <>
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
              onClick={() => navigate(`/pt/comercio/${item.uid}`)}
              cover={
                <>
                  <Link to={`/pt/comercio/${item.uid}`}>
                    <img
                      src={`${servicePrefix}/establishment/image?uid=${item.uid}`}
                      alt="Imagem dos Comercios"
                    />
                  </Link>
                  <div className="whats">                 
                    <a onClick={(e) => { 
                      e.stopPropagation();
                      window.open(`https://api.whatsapp.com/send?phone=005511${item.phone}`);                      
                    }}><WhatsAppOutlined /></a>
                  </div>
                </>
              }
            >
              <Meta title={<Link to={`/pt/comercio/${item.uid}`}>{item.name}</Link>}/> 
            </Card>
          </Col>
        );
      })}
    </Row>
    { showMore && <Button loading={loading} onClick={()=> setPage(page + 1) }>Mostrar mais</Button> }
    </> 
  );
}
export default Results;
