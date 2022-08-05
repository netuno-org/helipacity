import React from "react";
import { Layout} from "antd";
import {FaYoutube,FaFacebook,FaTwitter,FaInstagram,} from "react-icons/fa";

import "./index.less";

const { Footer } = Layout;

function BaseFooter() {
  return (
    <Footer className="ant-layout-footer">   
       <div className="position">
          <div className="position__icons">           
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
          </div>
                      <picture>
                    <source media='(min-width: 800px)' srcset='/images/footer/footer-bg1000px.svg'/>
                    <img className="footersvg" src='/images/footer/footer-bg.svg' />
                    
                 </picture>
          </div>
       </Footer>
  );
}
export default BaseFooter;




           
