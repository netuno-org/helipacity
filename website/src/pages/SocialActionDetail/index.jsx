import React, { useState, useEffect } from "react";
import _service from "@netuno/service-client";

import { WhatsAppOutlined} from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { Spin, Tag, notification } from "antd";

import Back from "../../base/Back";

import "./index.less";

function SocialActionDetail() {
  const servicePrefix = _service.config().prefix;
  const { uid } = useParams(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    _service({
      url: "/social-action",
      data: { uid },
      success: (response) => {
        setData(response.json);
        setLoading(false);
      },
      fail: (e) => {
        console.error("Service Error", e);
        notification.error({
          message: "Houve uma falha.",
          description: "Não foi possível encontrar a ação social.",
        });
        setLoading(false);
      },
    });
  }, []);
  if (loading) {
    return (
      <section className="social-action-detail">
        <div className="social-action-detail__loading">
          <Spin size="large"/> &nbsp; carregando...
        </div>
      </section>
    );
  }
  if (data == null) {
    return (
      <section className="social-action-detail">
        <div className="social-action-detail__error">
          <p>N&atilde;o foi poss&iacute;vel carregar os detalhes da a&ccedil;&atilde;o social.</p>
          <Back link />
        </div>
      </section>
    );
  }
  return (
    <section className="social-action-detail">
      <Back topButton />
      <div className="social-action-detail__cover">
        <img src={`${servicePrefix}/social-action/image?uid=${uid}`} width="100%"/>
      </div>
      <div className="social-action-detail__detail">
        <h1>{data.name}</h1>
        <p><Tag>{data.category.name}</Tag></p>
        <p>{data.description}</p>
        <p>{data.address}</p>
        <p className="social-action-detail__detail__whatsapp">
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

export default SocialActionDetail;