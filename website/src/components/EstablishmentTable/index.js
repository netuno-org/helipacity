import _service from "@netuno/service-client";
import React, { useEffect, useState } from "react";
import { Table,Tag } from "antd";
import './index.less'

const columns = [
  {
    title: "Categoria",
    dataIndex: "commerce",
    className: "commerce",
    key: "commerce",
    render: (commerce) => {
        return <>
        <Tag>{commerce.name}</Tag>
        </>
    },
  },
  {
    title: "Nome",
    dataIndex: "name",
    key: "name",
    className:"name"
  },
  {
    title: "Descrição",
    dataIndex: "description",
    key: "description",
    className: "description",
  },
  {
    title: "Endereço",
    dataIndex: "address",
    key: "address",
    className:"address",
  },
  {
    title: "Contato",
    dataIndex: "contact",
    key: "contact",
    className: "contact",
  },
  {
    title: "Rede Social",
    dataIndex: "link",
    key: "link",
    className: "link",
    
  },{
    title: "Imagem",
    dataIndex: "image",
    key: "image",
    className: "image",
    
  },
];

function EstablishmentTable({}) {
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
    <div className="EstablishmentTable">
      <h1>Lista dos Comércios</h1>
      <Table dataSource={list} columns={columns} />
      <img src="http://192.168.1.102:9000/services/establishment/image?uid=7df7121a-4314-48c2-9776-53612cedc28f"/>
    </div>
  );
}

export default EstablishmentTable;
