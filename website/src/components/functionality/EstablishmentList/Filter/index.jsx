import React, { useEffect, useState } from "react";
import { Button, Space } from "antd";
import "./index.less";
import _service from "@netuno/service-client";

function Filter({onCategoryChange}) {
  const [selected, setSelected] = useState("all");
  const [list, setList] = useState([]);
  useEffect(() => {
    _service({
      url: "/establishment/category/list",
      success: (response) => {
        setList(response.json);
      },
      fail: (e) => {
        console.log("Service Error", e);
      },
    });
  }, []);
  
  return (
    <div className="establishment-list__filter">
      <Space wrap>
        <Button 
          type={selected == "all" ? "primary" : "default"}
          onClick={() => {
            setSelected("all");
            if (onCategoryChange) {
              onCategoryChange("all");
            }
          }}
        >Todos</Button>
        {list.map((item) => {
          return (
            <Button
              type={selected == item.code ? "primary" : "default"}
              onClick={() => {
                setSelected(item.code);
                if (onCategoryChange) {
                  onCategoryChange(item.code);
                }
              }}
            >{item.name}</Button>
          );
        })}
      </Space>
    </div>
  );
}

export default Filter;
