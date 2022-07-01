import React, { useState } from 'react';
import { Row, Col, Form, Input, Button, notification } from 'antd';
import _service from '@netuno/service-client';
import Cluar from '../../../common/Cluar';

import './index.less';
import CommerceSelect from '../../CommerceSelecty';
import EstablishmentTable from '../../EstablishmentTable';



function Commerces({}) {
  
    return(
        <Row>
              <div className='ContactCommerce'> <h1 >Em Breve.</h1></div>
          <CommerceSelect/>  
          <EstablishmentTable/> 
       
  
        </Row>
        )
}

export default Commerces;