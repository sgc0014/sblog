import React from "react";
import Button from "./button";
import styles from "../styles/singlePost.module.css";

export default function SinglePost() {
  return (
    <div className={styles.singlePostContainer}>
      <div className={styles.spImgContainer}>
        <img
          className={styles.singlePostImg}
          src="/images/img2.jpg"
        />
      </div>
      <div className={styles.postBody}>
        <p className="category">Travel</p>
        <h1 className="title">Places to visit in Nepal.</h1>
        <p className="date">June 6, 2020.</p>
    
      <Button />
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
