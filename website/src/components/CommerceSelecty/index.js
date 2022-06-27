import React, {useEffect, useState} from 'react';
import {Select} from 'antd';
import './index.less'
import _service from '@netuno/service-client';

function CommerceSelect () {
    const [list, setList] = useState ([]);

    useEffect (() => {
        _service({
            url: "/commerce/list",
            success: (response) => {
               
                    setList (response.json);
              
            },
            fail: (e) => {
                console.log("Service Error", e);
            }
        });

    },[])

    return(
  <div className='CommerceSelecty'> 
    {/* {JSON.stringify(list)} */}
        <h1>Categoria dos Comércios</h1>
        <Select className='select' >
            {
                list.map((item) => {
                   return (<Select.Option value={item.code}>{item.name}</Select.Option>)
                })
            }
            
        </Select>
  </div>
        );
}

export default CommerceSelect;