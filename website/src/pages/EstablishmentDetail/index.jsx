import React, { useState, useEffect } from "react";
import _service from "@netuno/service-client";

import { WhatsAppOutlined} from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { Spin, Tag, notification } from "antd";

import "./index.less";

function EstablishmentDetail() {
  const servicePrefix = _service.config().prefix;
  const { uid } = useParams(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    _service({
      url: "/establishment",
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
        <div className="establishment-detail">
          <Spin size="large"/>
        </div>
      </section>
    );
  }
  if (data == null) {
    return (
      <section className="content">
        <div className="establishment-detail">
          <p>N&atilde;o foi poss&iacute;vel carregar os detalhes do com&eacute;rcio.</p>
        </div>
      </section>
    );
  }
  return (
    <>
      <section className="establishment-banner" 
        style={{backgroundImage: `url(${servicePrefix}/establishment/image?uid=${uid})`}}>
        <div>
          <h1>{data.name}</h1>
          <Tag>{data.category.name}</Tag>
        </div>
      </section>
      <section className="content">
        <div className="establishment-detail">
          <p>{data.description}</p>
          <p>{data.address}</p>
          <p>
            <a href={`https://api.whatsapp.com/send?phone=005511${data.phone}`} target="_blank"><WhatsAppOutlined /></a>
            <a href={`tel:005511${data.phone}`}>{data.phone}</a>
          </p>
          <p>{data.link}</p>
        </div>
      </section>
    </>
  );
}

export default EstablishmentDetail;