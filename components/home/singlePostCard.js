import React from "react";
import Button from "./readMoreButton";
import styles from "../../styles/singlePostCard.module.css";

export default function SinglePostCard({title,images}) {
  return (
    <div className={styles.singlePostContainer}>
      <div className={styles.spImgContainer}>
        <a className="title" href="/post/single-post">
          {" "}
          <img className={styles.singlePostImg} src={images} />
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
          <Button />
        </a>
      </div>
      <style jsx>{`
      @media screen and (max-width:1200px){
        .title{
          font-size:25px;
        }
        @media screen and (max-width:960px){
          .title{
            font-size:17px;
          }
         
      
      `}</style>
    </div>
  );
}
