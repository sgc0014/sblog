import React, { useEffect, useState } from "react";
import styles from "../../styles/mainContentContainer.module.css";
import SinglePost from "./singlePostCard";
import PopularPosts from "../popularPost";
import TopCategory from "./topCategory";
import Category from "../category";
import Axios from "axios";
import Featured from "./featured";

export default function IndexContent({ posts }) {
  const [postArr, setpostArr] = useState([]);
  const [featuredPostArr, setfeaturedPostArr] = useState([]);
  const api = async () => {
    const data = await Axios.get("http://localhost:1337/posts");
    const post = data.data;
    setpostArr([...post]);

    post.map(post => post.featured?setfeaturedPostArr([...featuredPostArr,post]):'')
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <div className="indexBody">
      <Featured />
      {console.log(featuredPostArr)}
      <TopCategory />
      <div className={"mainContentContainer"}>
        <div className={"leftSide"}>
          {postArr.map((post) => (
            <SinglePost title={post.Title} image={post.Coverimage[0].url} category={post.category.Name} date={post.created_at} />
          ))}
        </div>

        <div className={"rightSide"}>
          <PopularPosts />

          <Category />
        </div>
      </div>
    </div>
  );
}
