import React from "react";
import Button from "./readMoreButton";
import styles from "../../styles/singlePostCard.module.css";

export default function SinglePostCard({ title, image, category, date }) {
  
  //format date => 13 July,2020
  const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  return (
    <div className={styles.singlePostContainer}>
      <div className={styles.spImgContainer}>
        <a className="title" href="/post/single-post">
          {" "}
          <img
            className={styles.singlePostImg}
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
        <p className="date">{dateFormatter.format(Date.parse(date))}</p>

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
