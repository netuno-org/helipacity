import React from "react";
import { Layout} from "antd";
// import { PhoneOutlined, HomeOutlined, MailOutlined } from "@ant-design/icons";
import {FaYoutube,FaFacebook,FaTwitter,FaInstagram,} from "react-icons/fa";
// import { RiOpenSourceFill } from "react-icons/ri";
// import Configuration from "../../components/Configuration";
import "./index.less";

const { Footer } = Layout;

function BaseFooter() {
  return (
    <Footer className="ant-layout-footer">   
       <div className="position">
          <div className="position__icons">           
            {/* <Col xs={24} lg={8}>
                  <div className="logo" data-sal="slide-up" data-sal-duration="2000" data-sal-easing="ease-out-cubic">
                  <img alt="logo" src="/images/logo.png" />
                  </div>
                  </Col> */}
            {/*   <Row>
                  <Col><HomeOutlined /></Col>
                  <Col>&nbsp;</Col>
                  <Col>
                  <address><Configuration parameter="footer-address" multilines/></address>
                  </Col>
                  </Row>
                  <Row>
                  <Col>
                  <p><PhoneOutlined /> <Configuration parameter="footer-phone"/></p>
                  </Col>
                  </Row>
                  <Row>
                  <Col>
                  <p><MailOutlined /> <Configuration parameter="footer-email"/></p>
                  </Col>
                  </Row> */}
            {/* Comentada acima Localidade, Telefone e Endereço que estão vinculados :  Formulário->Configuração no back-office */}
              <a href="https://www.youtube.com/channel/UCYY1Nz6T2NJtP29vba2fqkg">
                <FaYoutube />
              </a>
              <a href="https://www.instagram.com/netuno_org/">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/netuno_org">
                <FaTwitter />
              </a>         
              <a href="https://www.facebook.com/netuno.org/">
                 <FaFacebook />
              </a>                         
            {/* <a href="https://discord.gg/4sfXG6YWFu" className="share-icons">
                    <FaDiscord />
                  </a> */}
            {/* <a href="https://github.com/netuno-org" className="share-icons">
                    <FaGithub />
                  </a> */}
          </div>       
          <img className="footersvg" alt="Background Footer" src="/images/footer/footer-bg.svg"/>  
          </div>
       </Footer>
  );
}
export default BaseFooter;




           
