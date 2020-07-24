import React from "react";
import Layout from "../../components/layout/layout";
import PopularPosts from "../../components/popularPost";
import SinglePostWide from "../../components/singlePostWide";
import Category from "../../components/category";

function Travel(props) {
  return (
    <Layout>
      <div className={"mainContentContainer"}>
        <div className={"listStyleLeft"}>
          <SinglePostWide
            title={"Places to visit in Nepal."}
            images={"/images/posts/travel1.jpg"}
          />
          <SinglePostWide
            title={"Holy heaven in Earth."}
            images={"/images/posts/travel2.jpg"}
          />
          <SinglePostWide
            title={"Tips to save money in airways."}
            images={"/images/posts/travel3.jpg"}
          />
          <SinglePostWide
            title={"I went on a yacht trip."}
            images={"/images/posts/travel4.jpg"}
          />
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

export default Travel;
