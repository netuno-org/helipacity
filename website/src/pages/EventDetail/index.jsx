import React, { useState, useEffect } from "react";
import _service from "@netuno/service-client";
import { InstagramOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { Spin, Tag, notification } from "antd";
import dayjs from 'dayjs';

import "./index.less";

function EventDetail() {
  const servicePrefix = _service.config().prefix;
  const { uid } = useParams(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    _service({
      url: "/event",
      data: { uid },
      success: (response) => {
        setData(response.json);
        setLoading(false);
      },
      fail: (e) => {
        console.error("Service Error", e);
        notification.error({
          message: "Houve uma falha.",
          description: "Não foi possível encontrar o comércio.",
        });
        setLoading(false);
      },
    });
  }, []);
  if (loading) {
    return (
      <section className="content">
        <div className="event-detail">
          <Spin size="large"/>
        </div>
      </section>
    );
  }
  if (data == null) {
    return (
      <section className="content">
        <div className="event-detail">
          <p>N&atilde;o foi poss&iacute;vel carregar os detalhes do com&eacute;rcio.</p>
        </div>
      </section>
    );
  }
  return (
    <>
      <section className="event-banner" 
        style={{backgroundImage: `url(${servicePrefix}/event/image?uid=${uid})`}}>
        <div>
          <h1>{data.title}</h1>
          <Tag>{data.category.name}</Tag>
        </div>
      </section>
      <section className="content">
        <div className="event-detail">
          <p>{dayjs(data.date_time, 'YYYY-MM-DD HH:mm:ss.S').format('DD/MM HH:mm')}</p>
          <p>{data.address}</p>
          <p>{data.description}</p>
          <p>
            <a href={`https://www.instagram.com/${data.instagram}`} target="_blank"><InstagramOutlined /></a>
          </p>
          <p>{data.link}</p>
        </div>
      </section>
    </>
  );
}

export default EventDetail;