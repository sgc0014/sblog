import React, { useEffect } from "react";
import Layout from "../../components/layout/layout";
import PopularPosts from "../../components/popularPost";
import SinglePostWide from "../../components/singlePostWide";
import Category from "../../components/category";
import Axios from "axios";

function SingleCategory({ selectedPost }) {
  useEffect(() => {}, []);
  return (
    <Layout>
      <div className={"mainContentContainer"}>
        <div className={"listStyleLeft"}>
          {selectedPost &&
            selectedPost.map((post) => (
              <SinglePostWide
                title={post.Title}
                image={post.Coverimage[0].url}
                category={post.category.Name}
                date={post.created_at}
                slug={post.slug}
              />
            ))}
        </div>

        <div className={"rightSide"}>
          <PopularPosts />

          <Category />
        </div>
        <style jsx>
          {`
            .mainContentContainer {
              max-width: 1300px;
              margin: 0 auto;
            }
          `}
        </style>
      </div>
    </Layout>
  );
}

export default SingleCategory;

export async function getServerSideProps(context) {
  const { category } = context.query;
  console.log(category);
  const data = await Axios.get("http://localhost:1337/posts");
  const posts = data.data;
  const selectedPost = posts.filter(
    (post) => post.category.Name.toLowerCase() === category
  );
  console.log(selectedPost);
  return {
    props: {
      selectedPost,
    },
  };
}
