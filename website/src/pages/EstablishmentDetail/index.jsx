import React, { useState, useEffect } from "react";
import _service from "@netuno/service-client";

import { WhatsAppOutlined} from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { Spin, Tag, notification } from "antd";

import Back from "../../base/Back";

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
      <section className="establishment-detail">
        <div className="establishment-detail__loading">
          <Spin size="large"/> &nbsp; carregando...
        </div>
      </section>
    );
  }
  if (data == null) {
    return (
      <section className="establishment-detail">
        <div className="establishment-detail__error">
          <p>N&atilde;o foi poss&iacute;vel carregar os detalhes do com&eacute;rcio.</p>
          <Back link />
        </div>
      </section>
    );
  }
  return (
    <section className="establishment-detail">
      <Back topButton />
      <div className="establishment-detail__cover">
        <img src={`${servicePrefix}/establishment/image?uid=${uid}`} width="100%"/>
      </div>
      <div className="establishment-detail__detail">
        <h1>{data.name}</h1>
        <p><Tag>{data.category.name}</Tag></p>
        <p>{data.description}</p>
        <p>{data.address}</p>
        <p className="establishment-detail__detail__whatsapp">
          <a href={`https://api.whatsapp.com/send?phone=005511${data.phone}`} target="_blank">
            <WhatsAppOutlined />
            &nbsp;
            {data.phone}
          </a>
        </p>
        {data.link != '' && <p>
            <a href={data.link} target="_blank">
              {data.link.substring(data.link.indexOf('//') + 2)}
            </a>
        </p>}
        <Back link />
      </div>
    </section>
  );
}

export default EstablishmentDetail;