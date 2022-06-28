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
  },
];

function EstablishmentTable() {
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
    </div>
  );
}

export default EstablishmentTable;
