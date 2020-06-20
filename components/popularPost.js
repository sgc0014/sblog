import React, { useState } from "react";

export default function PopularPosts() {
  const [popularPostArr, setppArr] = useState([
    {
      title: "Change your life one habit at a time.",
      image: "/images/posts/lifestyle1.jpg",
    },
    {
      title: "Impact of clothing on a person perspective.",
      image: "/images/posts/fashion1.jpg",
    },
    {
      title: "Foods that boost your dopamine and sugar level.",
      image: "/images/posts/food1.jpg",
    },
    {
      title: "Go organic and live longer.",
      image: "/images/posts/health3.jpg",
    },
  ]);
  return (
    <div className={"popularPostContainer"}>
      <div className={"rightTitleContainer"}>
        <h3 className={"rightTitle"}>Popular</h3>
      </div>
      <ul className={"popularPostList"}>
        {popularPostArr.map((popularpost) => (
          <li className={"popularSinglePost"}>
            <img className={"popularSinglePostImg"} src={popularpost.image} />
            <div className={"popularSinglePostContent"}>
              <a href="/post/single-post" className=" popularPostTitle">
                {popularpost.title}
              </a>
              <p className="date">March 24</p>
            </div>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .rightTitleContainer {
          background: #ffff;
          padding: 1px;
          box-shadow: 1px 1px 3px #cacaca;
          margin-bottom: 45px;
        }

        .rightTitle {
          font-weight: 500;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .popularPostContainer {
          margin-bottom: 45px;
        }
        .popularPostList {
          list-style: none;
          padding: 0;
        }
        .popularSinglePost {
          display: flex;
          margin: 20px 0px;
        }
        .popularPostTitle {
          font-size: 13px;
          cursor: pointer;
        }
        .popularPostTitle:hover {
          color: #e361e8;
        }
        .popularSinglePostImg {
          width: 120px;
        }
        .popularSinglePostContent {
          width: 100%;
          padding: 0 20px;
        }
        @media screen and (max-width: 1200px) {
          .popularPostTitle {
            font-size: 11px;
          }
          .date {
            font-size: 9px;
          }
        }
      `}</style>
    </div>
  );
}
