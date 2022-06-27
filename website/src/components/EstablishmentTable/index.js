import _service from "@netuno/service-client";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import './index.less'

const columns = [
  {
    title: "Nome",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Descrição",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Endereço",
    dataIndex: "address",
    key: "address",
    class:"teste",
  },
  {
    title: "Contato",
    dataIndex: "contact",
    key: "contact",
  },
  {
    title: "Rede Social",
    dataIndex: "link",
    key: "link",
  },
  {
    title: "Categorias",
    dataIndex: "commerce",
    key: "commerce",
    render: (commerce) => {
        return <>
        {commerce.name}
        </>
    },
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
