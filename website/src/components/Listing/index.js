import React from 'react';
import { Row } from 'antd';
import { Carousel } from 'react-responsive-carousel';

import Item from './Item';

import './index.less';
 

function Listing({section, type, image, image_title, image_alt, title, content, items}) {
  const children = [];
  items.map((item) =>{
      
      children.push(<Item key={item.uid} {...{type, ...item}} />);
      return null;
    });
  
  

  let listLayout = (
    <div>
      <h1>{ title }</h1>
      <div className="listing__title-border"></div>
      <div dangerouslySetInnerHTML={{__html: content}}></div>
      <ul className={`listing__${type}`}>
        { children }
      </ul>   
    </div>   
  );

  if (type === 'YOUR-CUSTOM-TYPE-HERE') {
    listLayout = (
      <Row className={`listing__${type}`} justify="start">
        { children }
      </Row>
    );
  } else if (type === 'OTHER-CUSTOM-TYPE-HERE') {
    listLayout = (
      <Row className={`listing__${type}`}>
        { children }
      </Row>
    );
  } else if (type === 'carrossel') {
    listLayout = (
      <div>
      <h1>{ title }</h1>
      <div className="listing__title-border"></div>
      <div dangerouslySetInnerHTML={{__html: content}}></div>
      
      <Carousel >
        { children }
      </Carousel>
      </div>
    );
    }
  return (
    <section className="listing">
      { listLayout }
    </section>
  );
}

export default Listing;