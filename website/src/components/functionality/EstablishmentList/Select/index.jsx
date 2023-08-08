import React, { useEffect, useState } from "react";
import { Select } from "antd";
import "./index.less";
import _service from "@netuno/service-client";

function ESelect() {
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
    <div className="commerce__filter">
      {/* {JSON.stringify(list)} */}
      <Select>
        {list.map((item) => {
          return <Select.Option value={item.code}>{item.name}</Select.Option>;
        })}
      </Select>
    </div>
  );
}

export default ESelect;
