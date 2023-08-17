import React, { useState, useEffect } from "react";
import _service from "@netuno/service-client";
import { useParams } from "react-router-dom";

import "./index.less";

function CommerceDetail() {
  const servicePrefix = _service.config().prefix;
  const { uid } = useParams(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    _service({
      url: "/establishment",
      data: { uid },
      success: (response) => {
        setData(response.json);
      },
      fail: (e) => {
        console.error("Service Error", e);
        notification.error({
          message: "Houve uma falha.",
          description: "Não foi possível encontrar o comércio.",
        });
      },
    });
  }, []);
  return (
    <section className="content">
      <div className="commerce-detail">
        <p>Detalhe dos Comércios</p>
        {JSON.stringify(data)}
        <img
          src={`${servicePrefix}/establishment/image?uid=${uid}`}
          alt="Imagem dos Comercios"
        />
        <p>{data.name}</p>
      </div>
    </section>
  );
}

export default CommerceDetail;
