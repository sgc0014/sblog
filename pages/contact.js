import React from "react";
import Layout from "../components/layout/layout";

function Contact(props) {
  return (
    <Layout>
      <div className="container">
        <img className="contactImg" src="/images/contact.jpg" />
        <div className="contactContainer">
          <h1 className="header">Contact</h1>
          <div className="commentFormContainer">
            <p className="bodyText">
              {" "}
              Suspendisse sodales erat est, vitae maximus ligula eleifend vitae.
              Praesent fringilla, urna eget tincid unt vehicula, urna diam
              convallis dui, ut tincidunt mi tellus sit amet ante. Praesent
              fringilla, urna eget tincidunt vehicula, urna diam convallis dui,
              ut tincidunt mi tellus sit amet ante.
            </p>
            <form className="contactForm">
              <input type="text" className="name" placeholder="Name" />
              <input type="email" className="name" placeholder="Email" />
              <textarea />
            </form>
            <button className="submit">Send</button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            max-width: 1200px;
            margin: 0 auto;
            background: #ffff;
            padding: 30px;
            margin-bottom: 37px;
          }
          .contactImg {
            width: 100%;
          }

          .header {
            padding: 25px 0;
          }
          p {
            margin: 50px 0;
          }
          .contactForm {
            display: flex;
            flex-direction: column;
          }
          textarea {
            height: 124px;
          }
          .contactForm > input,
          textarea {
            padding: 12px;
            margin-bottom: 15px;
            border: 1px solid #e1e0e0;
          }
        `}
      </style>
    </Layout>
  );
}

export default Contact;
