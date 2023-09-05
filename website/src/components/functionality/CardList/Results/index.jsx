import React, { useEffect, useState } from "react";
import _service from "@netuno/service-client";
import { Card, Row, Col, notification, Button } from "antd";
import { InstagramOutlined, WhatsAppOutlined} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import dayjs from 'dayjs';

import "./index.less";

const { Meta } = Card;

function Results({listType, categoryCode}) {
  const servicePrefix = _service.config().prefix;
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [showMore, setShowMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 
  const detailPrefix = listType == 'event' ? 'evento' : 'comercio';

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
      url: `/${listType}/list`,
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
    <Row className="card-list__results"
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
              onClick={() => navigate(`/pt/${detailPrefix}/${item.uid}`)}
              cover={
                <>
                  <Link to={`/pt/${detailPrefix}/${item.uid}`}>
                    <img
                      src={`${servicePrefix}/${listType}/image?uid=${item.uid}`}
                      alt="Imagem"
                    />
                  </Link>
                  {
                   listType == 'event' 
                   && <div className="icon icon--insta">                 
                      <a onClick={(e) => { 
                        e.stopPropagation();
                        window.open(`https://www.instagram.com/${item.instagram}`);                      
                      }}><InstagramOutlined /></a>
                    </div>
                  }
                  {
                   listType == 'establishment' 
                   && <div className="icon icon--whats">                 
                      <a onClick={(e) => { 
                        e.stopPropagation();
                        window.open(`https://api.whatsapp.com/send?phone=005511${item.phone}`);                      
                      }}><WhatsAppOutlined /></a>
                    </div>
                  }
                </>
              }
            >
              <Meta 
                title={
                  <>
                    <Link to={`/pt/${detailPrefix}/${item.uid}`}> 
                      {listType == 'event' ? item.title : item.name}
                    </Link>
                    
                  </>
                }
                description= {listType == 'event' 
                && <>{dayjs(item.date_time, 'YYYY-MM-DD HH:mm:ss.S').format('DD/MM HH:mm')}</>
              }
                /> 
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
