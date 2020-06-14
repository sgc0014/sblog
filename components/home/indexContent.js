import React from "react";
import styles from "../../styles/mainContentContainer.module.css";
import SinglePost from "./singlePostCard";
import PopularPosts from "./popularPost";
import TopCategory from "./topCategory";

export default function IndexContent() {
  return (
    <div className="indexBody">
      <TopCategory />
      <div className={"mainContentContainer"}>
        <div className={"leftSide"}>
          <SinglePost />
          <SinglePost />
          <SinglePost />
          <SinglePost />
        </div>

        <div className={"rightSide"}>
          <PopularPosts />

          <div className={"rightCategory"}>
            <div className={"rightTitleContainer"}>
              <h3 className={"rightTitle"}>Category</h3>
            </div>
            <ul className="categoryList">
              <li className="categoryItem">
                <a>Travel</a>
              </li>
              <li className="categoryItem">
                <a>Food</a>
              </li>
              <li className="categoryItem">
                <a>Lifestyle</a>
              </li>
              <li className="categoryItem">
                <a>Health</a>
              </li>
              <li className="categoryItem">
                <a>Fashion</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}
