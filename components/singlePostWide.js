import React from "react";
import styles from "../styles/singlePostWide.module.css";
import dateFormatter from "./utils/dateFormatter";

function SinglePostWide({ title, image, category, date, slug }) {
  return (
    <div className={styles.singlePostWide}>
      <div className={styles.spImgContainer}>
        <a className="title" href="/post/single-post">
          {" "}
          <img
            className={styles.singlePostWideImg}
            src={`http://localhost:1337${image}`}
          />
        </a>
      </div>
      <div className={styles.postBody}>
        <p className="category">{category}</p>
        <a className="title" href="/post/single-post">
          {" "}
          <h1 className="title">{title}</h1>
        </a>
        <p className="date">{date}</p>

        <a className="title" href={`/post/${slug}`}>
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
