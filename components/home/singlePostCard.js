import React from "react";
import Button from "./readMoreButton";
import styles from "../../styles/singlePostCard.module.css";
import dateFormatter from "../utils/dateFormatter";
export default function SinglePostCard({ title, image, category, date, slug }) {
  return (
    <div className={styles.singlePostContainer}>
      <div className={styles.spImgContainer}>
        <a className="title" href={`/post/${slug}`}>
          {" "}
          <img
            className={styles.singlePostImg}
            src={`http://localhost:1337${image}`}
          />
        </a>
      </div>
      <div className={styles.postBody}>
        <p className="category">{category}</p>
        <a className="title" href={`/post/${slug}`}>
          {" "}
          <h1 className="title">{title}</h1>
        </a>
        <p className="date">{dateFormatter(date)}</p>

        <a className="title" href={`/post/${slug}`}>
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
