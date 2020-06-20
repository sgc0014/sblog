import React from "react";
import styles from "../../styles/mainContentContainer.module.css";
import SinglePost from "./singlePostCard";
import PopularPosts from "../popularPost";
import TopCategory from "./topCategory";
import Category from "../category";

export default function IndexContent() {
  return (
    <div className="indexBody">
      <TopCategory />
      <div className={"mainContentContainer"}>
        <div className={"leftSide"}>
          <SinglePost
            title={"Tips to save money in airways."}
            images={"/images/posts/travel3.jpg"}
          />
          <SinglePost
            title={"I went on a yacht trip."}
            images={"/images/posts/travel4.jpg"}
          />
          <SinglePost
            title={"Minimizing heart diseases with jogging."}
            images={"/images/posts/health1.jpg"}
          />
          <SinglePost
            title={"Are Vitamins suplement worth it?"}
            images={"/images/posts/health2.jpg"}
          />
        </div>

        <div className={"rightSide"}>
          
          <PopularPosts />

          <Category />

        </div>
      </div>
    </div>
  );
}
