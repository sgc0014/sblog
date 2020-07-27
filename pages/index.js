import Head from "next/head";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout/layout";
import Featured from "../components/home/featured";
import SinglePost from "../components/home/singlePostCard";
import PopularPosts from "../components/popularPost";
import TopCategory from "../components/home/topCategory";
import Category from "../components/category";
import Axios from "axios";

const Home = ({posts,featuredPosts}) => {
 
 

  return (
    <div className="bodyContainer">
     {console.log(posts[0].slug)}
      <Head>
        <title>S-blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
          <div className="indexBody">
            <Featured featuredPosts={featuredPosts} />

            <TopCategory />
            <div className={"mainContentContainer"}>
              <div className={"leftSide"}>
                {posts.length ? (
                  posts.map((post) => (
                    <SinglePost
                      title={post.Title}
                      image={post.Coverimage[0].url}
                      category={post.category.Name}
                      date={post.created_at}
                      slug={post.slug}
                    />
                  ))
                ) : (
                  <div>Loading...</div>
                )}
              </div>

              <div className={"rightSide"}>
                <PopularPosts />

                <Category />
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </div>
  );
};

export async function getServerSideProps() {
  const data = await Axios.get("http://localhost:1337/posts");

  const posts = data.data;
  const featuredPosts = posts.filter((post) => post.featured === true);
 
  return {
    props: {
      posts,
      featuredPosts
      
    }
  };
}

export default Home;
