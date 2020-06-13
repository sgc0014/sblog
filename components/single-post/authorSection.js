import React from 'react';
import { FaFacebookF, FaPinterest } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

function AuthorSection() {
    return (
          <div className="authorCardContainer">
          <img className="authorImg" src="/images/person/author.jpg" />
          <div className="authorInfo">
            <a className="userName">Carly Roy</a>
            <p className='bodyText'>
              {" "}
              Suspendisse sodales erat est, vitae maximus ligula eleifend vitae.
              Praesent fringilla, urna eget tincid unt vehicula, urna diam
              convallis dui, ut tincidunt mi tellus sit amet ante.
            </p>
            <p>
              <a className="socialIcon">
                <FaFacebookF />
              </a>
              <a className="socialIcon">
                <AiOutlineTwitter />
              </a>
            </p>
          </div>
          <style jsx>
              {`
               .authorCardContainer {
                display: flex;
                padding: 18px 11px;
                background: #ffff;
                margin-top: 35px;
              }
              .authorImg {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                margin-right: 20px;
              }
    
              .userName {
                font-weight: 800;
              }
              @media screen and (max-width: 650px) {
            
                .bodyText {
                  font-size: 13px;
                }
              }
              @media screen and (max-width: 460px) {
                .authorCardContainer {
                  flex-direction: column;
                  text-align: center;
                }
                .authorImg {
                  margin-right: 0;
                  align-self: center;
                }
                .authorInfo {
                  padding: 11px 0;
                }
            }    
    `}
          </style>
        </div>
    )
}

export default AuthorSection;