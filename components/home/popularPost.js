import React from "react";

export default function PopularPosts() {
  return (
    <div className={"popularPostContainer"}>
      <div className={"rightTitleContainer"}>
        <h3 className={"rightTitle"}>Popular</h3>
      </div>
      <ul className={"popularPostList"}>
        <li className={"popularSinglePost"}>
          <img className={"popularSinglePostImg"} src="/images/img1.jpg" />
          <div className={"popularSinglePostContent"}>
            <a href="/post/single-post" className=" popularPostTitle">
              Something to do somewhere.
            </a>
            <p className="date">March 24</p>
          </div>
        </li>
        <li className={"popularSinglePost"}>
          <img className={"popularSinglePostImg"} src="/images/img1.jpg" />
          <div className={"popularSinglePostContent"}>
            <a className="popularPostTitle" href="/post/single-post">
            Enjoy the stunning city of toky story to blow your mind
            </a>
            <p className="date">March 24</p>
          </div>
        </li>
        <li className={"popularSinglePost"}>
          <img className={"popularSinglePostImg"} src="/images/img1.jpg" />
          <div className={"popularSinglePostContent"}>
            <a className="popularPostTitle" href="/post/single-post">
              Something to do somewhere.
            </a>
            <p className="date">March 24</p>
          </div>
        </li>
        <li className={"popularSinglePost"}>
          <img className={"popularSinglePostImg"} src="/images/img1.jpg" />
          <div className={"popularSinglePostContent"}>
            <a className="popularPostTitle" href="/post/single-post">
              Something to do somewhere.
            </a>
            <p className="date">March 24</p>
          </div>
        </li>
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
