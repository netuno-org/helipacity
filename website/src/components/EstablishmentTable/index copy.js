import React, { useEffect, useState } from "react";
import _service from "@netuno/service-client";
import { Table,Tag,List } from "antd";
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
    {
      title: "UID",
      dataIndex: "uid" ,
      key: "uid",
      className:"uid",
    },
    {
    title: "Imagem",
    // dataIndex: "image",
    key: "image",
    className: "image",
    render:  (_,record) => <img src={`http://192.168.1.102:9000/services/establishment/image?uid=${record.uid}`} />                
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
{
  list.map ((item) => {
    return(
      <div>{item.name}{item.uid}</div>
    )
 })
}
      <Table dataSource={list} columns={columns} />
      <List
    itemLayout="horizontal"
    dataSource={list}
    renderItem={(item) => (
      <List.Item>
       {item.name}{item.uid}
       <img src={`http://192.168.1.102:9000/services/establishment/image?uid=${item.uid}`} /> 
      </List.Item>
    )}
  />
    </div>
  );
}
export default EstablishmentTable;






