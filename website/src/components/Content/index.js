import React from 'react';
import { Row, Col } from 'antd';
import { FaMicrophone } from "react-icons/fa";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { FiHelpCircle } from "react-icons/fi";
import Actions from '../Actions';
import { Button } from 'antd';
import BaseDivider from '../../base/Divider'


import './index.less';

function Content({section, type, title, content, image, image_title, image_alt, image_max_width, actions}) {

  let layout = null;
  const imageStyle = {};
  if (image_max_width > 0) {
    imageStyle["maxWidth"] = `${image_max_width}px`;
  }
  const titleParts = title.split(' ');
  let titleStyled = title;
  if (titleParts.length > 1) {
    const titleIndex = Math.floor(Math.random() * titleParts.length);
    titleParts[titleIndex] = `<span class="text__title--stroke">${titleParts[titleIndex]}</span>`;
    titleStyled = titleParts.join(' ');
  }
  if (type === 'text') {
    layout = (
      <div className={section+'__text'}>
        <div className="text">
        {/* <div className="bar"> </div> */}
        <h1 className="text__title" dangerouslySetInnerHTML={{ __html: titleStyled }}></h1>
          <h3> Botões Informativos</h3>
          <div className ="text__divButton">
            <Button type="primary" className="button1">
                <FaMicrophone className="icons" />
                <h4 className="text__button1">Texto</h4>
              </Button>
              <br/>
              <Button type="primary" className="button2">
                <BsFillChatSquareTextFill className="icons" />
                <h4 className="text__button1">Texto</h4>
              </Button>
              <br/>
              <Button type="primary" className="button3">
                <FiHelpCircle className="icons" />
                <h4 className="text__button1">Texto</h4>
              </Button>
          </div>
          <div className="bar2"> </div>
        </div>
      </div>
    );
    } else if (type === 'text2') {
      layout = (
        <div className={section+'__text'}>
          <div className="text">
          <div className="bar3"> </div>
          <h1 className="text__title" dangerouslySetInnerHTML={{ __html: titleStyled }}></h1>
          <h3> Texto</h3>
            { title ? <div className="text__title-border"></div> : null }
            <div dangerouslySetInnerHTML={{__html: content}}></div>
            
          </div>
        </div>
      );
    } else if (type === 'text3') {
      layout = (
        <div className={section+'__text'}>
          <div className="text">
          <h1 className="text__title" dangerouslySetInnerHTML={{ __html: titleStyled }}></h1>
            <h3> Somos...</h3>
            <div dangerouslySetInnerHTML={{__html: content}}></div>
          </div>
        </div>
      );
  } else if (type === 'image-left') {
    layout = (
      <div className="content__image-left">
        <Row>
          <Col md={8}>
            <div className="image">
              <img src={`/images/${section}/${image}`} alt={ image_alt } title={ image_title } style={ imageStyle }/>
            </div>
          </Col>
          <Col md={16}>
         
            <div className="text">
            <h1 className="text__title" dangerouslySetInnerHTML={{ __html: titleStyled }}></h1>
              
              <div dangerouslySetInnerHTML={{__html: content}}></div>
              </div>
              <Button type="primary" className="button4">
                <h4 className="text__button2">Saiba mais</h4>
              </Button>
           
          </Col>
        </Row>
      </div>
    );
  } else if (type === 'image-right') {
    layout = (
      <div className="content__image-right">
        <Row>
          <Col md={16}>
            <div className="text">
              <h1>{ title }</h1>
              <div className="text__title"></div>
              <div dangerouslySetInnerHTML={{__html: content}}></div>
            </div>
          </Col>
          <Col md={8}>
            <div className="image">
              <img src={`/images/${section}/${image}`} alt={ image_alt } title={ image_title } style={ imageStyle }/>
            </div>
          </Col>
        </Row>
      </div>
    );
  } else if (type === 'image-top') {
    layout = (
      <div className="content__image-top">
        <div className="image">
          <img src={`/images/${section}/${image}`} alt={ image_alt } title={ image_title } style={ imageStyle }/>
        </div>
        <div className="text">
          <h1>{ title }</h1>
          <div dangerouslySetInnerHTML={{__html: content}}></div>
        </div>
      </div>
    );
  } else if (type === 'image-bottom') {
    layout = (
      <div className="content__image-bottom">
        <div className="text">
          <h1>{ title }</h1>
          <div dangerouslySetInnerHTML={{__html: content}}></div>
        </div>
        <div className="image">
          <img src={`/images/${section}/${image}`} alt={ image_alt } title={ image_title } style={ imageStyle }/>
        </div>
      </div>
    );
  } else if (type === 'image') {
    layout = (
      <div className="content__image">
        <div className="image">
          <img src={`/images/${section}/${image}`} alt={ image_alt } title={ image_title } style={ imageStyle }/>
        </div>
      </div>
    );
   
  }else if (type === 'basedivider') {     // divisória amarela entre as páginas 
   return (
      <div>
       <BaseDivider/>
      </div>
    );
  } else if (type === 'titlepage') {
    layout = (
        <div className={section+'__text'}>
        <div className='null'/>
        <div className="text">
        <h1 className="text__title" dangerouslySetInnerHTML={{ __html: titleStyled }}></h1>
        <h3><div dangerouslySetInnerHTML={{__html: content}}></div> </h3>
        </div>
      </div> 
    );
  } else {
    layout = (
      <div className={`content__${type}`}>
        <div className="image">
          <img src={`/images/${section}/${image}`} alt={ image_alt } title={ image_title } style={ imageStyle }/>
        </div>
        <div className="text">
          <h1>{ title }</h1>
          <div dangerouslySetInnerHTML={{__html: content}}></div>
        </div>
      </div>
    );
  }
  return (
    <section className="content">
      { layout }
      <Actions { ... { section, type, actions } } />
    </section>
  );
}

export default Content;