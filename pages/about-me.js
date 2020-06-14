import React from "react";
import Layout from "../components/layout/layout";
import {FaFacebookF, FaPinterest} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'

function AboutMe() {
  return (
    <Layout>
      <div className="aboutMeContainer">
        <img className="meImg" src="/images/person/me.jpg" />
        <div className="aboutMeTextContainer">
          <h1 className="header">About me</h1>
          <p className="bodyText">
            Cras vel convallis mi. Sed aliquet mollis erat, ultricies elementum
            orci vehicula non. Nulla lacinia scel erisque risus quis pulvinar.
            Nullam nec nibh arcu. Nam libero nisl, convallis at metus at,
            pretium tincid unt enim. Cras metus orci, volutpat eu tincidunt et,
            venenatis eu mi. Fusce varius varius tortor vel pellentesque.
            Suspendisse sodales erat est, vitae maximus ligula eleifend vitae.
          </p>
          <p className="bodyText">
            Praesent fringilla, urna eget tincidunt vehicula, urna diam
            convallis dui, ut tincidunt mi tellus sit amet ante. Maecenas mattis
            turpis nec ex maximus cursus. Pellentesque pretium erat sit amet
            feugiat placerat.
          </p>
          <p className="bodyText">
            Nullam urna ligula, tempus at eros ac, condimentum iaculis erat.
            Cras tempor urna ac dui malesuada, nec mollis augue scelerisque.
            Nunc pharetra metus eu tellus sagittis, in ultrices urna
            pellentesque. In luctus massa ac risus mollis tincidunt. Etiam
            pulvinar erat et massa congue congue. Pellentesque volutpat
            vestibulum felis, eget faucibus lacus ultrices ut. Duis id dui nulla
            eget egestas justo, ac viverra orci. Maecenas accumsan rhoncus ex a
            egestas.
          </p>
          <blockquote className="blockquote">
            <p className="bodyText">
              If there is not something in a box. Then it probably means there
              is nothing in box. Not sure though. Pass that joint bro.
            </p>
            <span>-Gandhi</span>
          </blockquote>
          <div className='socialIcons'>
                <p>Follow me</p>
                <a className='socialIcon'><FaFacebookF/></a>
                <a className='socialIcon'><AiOutlineTwitter/></a>
                <a className='socialIcon'><FaPinterest/></a>
              </div>
        </div>
      </div>
      <style jsx>
        {`
          .aboutMeContainer {
            max-width: 1200px;
            margin: 0 auto;
            background: #ffff;
            padding: 30px;
            margin-bottom: 37px;
          }
          .meImg {
            width: 100%;
          }
          .blockquote {
            padding: 10px 30px;
            margin-bottom: 35px;
            margin-top: 35px;
            border-left: 4px solid #ec5d5d;
            background: #eee;
          }
          .header{
            padding: 25px 0;
                      }
        `}
      </style>
    </Layout>
  );
}

export default AboutMe;
