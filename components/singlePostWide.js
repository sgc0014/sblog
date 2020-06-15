import React from "react";
import styles from "../styles/singlePostWide.module.css";

function SinglePostWide({title,images}) {
  return (
    <div className={styles.singlePostWide}>
      <div className={styles.spImgContainer}>
        <a className="title" href="/post/single-post">
          {" "}
          <img className={styles.singlePostWideImg} src={images} />
        </a>
      </div>
      <div className={styles.postBody}>
        <p className="category">Travel</p>
        <a className="title" href="/post/single-post">
          {" "}
          <h1 className="title">{title}</h1>
        </a>
        <p className="date">June 6, 2020.</p>

        <a className="title" href="/post/single-post">
          {" "}
         
        </a>
      </div>
      <style jsx>
        {`
        .title{
          font-size:25px;
        }

        @media screen and (max-width:890px){
          .title{
              font-size: 15px;
          }
          @media screen and (max-width:390px){
            .title{
                font-size: 13px;
            }
      }
      
        `}
      </style>
    </div>
  );
}

export default SinglePostWide;
