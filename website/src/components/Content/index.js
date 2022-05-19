import React from 'react';
import { Row, Col } from 'antd';
import{FaMicrophone} from 'react-icons/fa'
import {BsFillChatSquareTextFill} from 'react-icons/bs'
import {FiHelpCircle}from 'react-icons/fi'
import Actions from '../Actions';


import './index.less';

function Content({section, type, title, content, image, image_title, image_alt, image_max_width, actions}) {
  let layout = null;
  const imageStyle = {};
  if (image_max_width > 0) {
    imageStyle["maxWidth"] = `${image_max_width}px`;
  }
  if (type === 'text') {
    layout = (
      <div >
        
        <div className="text">
        <div className ="barra"> </div>
          <h1>Fácil Acesso</h1>
          <h3> Botões Informativos</h3>
          <div >
            <button className = "button"><FaMicrophone className="icons"/>Texto</button>
            <button className = "button"><BsFillChatSquareTextFill className="icons"/>Texto</button>
            <button className = "button"><FiHelpCircle className="icons"/>Texto</button>
           </div>
         </div>
          <div className ="barra2"> </div>
          <div className="text">
          <h1>O que é o Helipacity?</h1>
          <h3>Somos...</h3>
          
          </div >
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
              <p className="titulo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              
              <div dangerouslySetInnerHTML={{__html: content}}></div>
              
            </div>
          </Col>
        </Row>
        <div className ="barra3"> </div>
        <div className ="text">
        <h1>Por decidir</h1>
        <h3>Texto</h3>
        </div>
        <p className = "titulo__sub-titulo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    );
  } else if (type === 'image-right') {
    layout = (
      <div className="content__image-right">
        <Row>
          <Col md={16}>
            <div className="text">
              <h1> { title }</h1>
              <div className="text__title-border"></div>
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