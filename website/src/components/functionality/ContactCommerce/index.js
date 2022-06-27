import React, { useState } from 'react';
import { Row, Col, Form, Input, Button, notification } from 'antd';
import _service from '@netuno/service-client';
import Cluar from '../../../common/Cluar';

import './index.less';
import CommerceSelect from '../../CommerceSelecty';
import EstablishmentTable from '../../EstablishmentTable';



function ContactCommerce({}) {
    return(
        <Row>
          <CommerceSelect/>  
          <EstablishmentTable/> 
           <Col span={24}><h1 className='ContactCommerce'>Em Construção.</h1></Col>
  
        </Row>
        )
}

export default ContactCommerce;