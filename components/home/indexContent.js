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
          <SinglePost title={'Tips to save money in airways.'} images={'/images/posts/travel3.jpg'}/>
          <SinglePost title={'I went on a yacht trip.'} images={'/images/posts/travel4.jpg'}/>
          <SinglePost title={'Minimizing heart diseases with jogging.'} images={'/images/posts/health1.jpg'}/>
          <SinglePost  title={'Are Vitamins suplement worth it?'} images={'/images/posts/health2.jpg'}/>
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
