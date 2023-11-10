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
      <section className="event-detail">
        <div className="event-detail__cover">
          <img src={`${servicePrefix}/event/image?uid=${uid}`} width="100%"/>
        </div>
        <div className="event-detail__detail">
          <h1>{data.title}</h1>
          <p>{dayjs(data.date_time, 'YYYY-MM-DD HH:mm:ss.S').format('DD/MM HH:mm')}</p>
          <p><Tag>{data.category.name}</Tag></p>
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