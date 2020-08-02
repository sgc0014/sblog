import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import { FaFacebookF, FaPinterest } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import AuthorSection from "../../components/single-post/authorSection";
import SuggestionPosts from "../../components/single-post/suggestionPosts";
import Axios from "axios";
import dateFormatter from "../../components/utils/dateFormatter";
import marked from "marked";
import parser from "html-react-parser";

export default function singlePost({ selectedPost }) {
  const [Content, setContent] = useState();
  useEffect(() => {
    //convert markdown language to html
    let content = marked(selectedPost[0].content);
    //add class to p and blockquote tag
    let replacePTag = content.replace(
      new RegExp("<p>", "g"),
      '<p class="bodyText">'
    );

    let replaceblockTag = replacePTag.replace(
      new RegExp("<blockquote>", "g"),
      "<blockquote class='blockquote' >"
    );

    //convet string html to html
    let final = parser(replaceblockTag);

    setContent(final);
  }, []);
  return (
    <Layout>
      {/* Post Details */}
      <div className="container">
        <div className="singlePostContainer">
          <div className="singlePostImgContainer">
            <img
              className="singlePostImg"
              src={`http://localhost:1337${selectedPost[0].Coverimage[0].url}`}
            />
          </div>
          <div className="singlePostText">
            <div className="postHeader">
              <p className="category">{selectedPost[0].category.Name}</p>
              <h1>{selectedPost[0].Title}</h1>
              <p className="date">
                {dateFormatter(selectedPost[0].created_at)}
              </p>
            </div>
            <div className="postContent">
              {Content}

              {/* Share social icons */}
              <div className="socialIcons">
                <p>Share</p>
                <a className="socialIcon">
                  <FaFacebookF />
                </a>
                <a className="socialIcon">
                  <AiOutlineTwitter />
                </a>
                <a className="socialIcon">
                  <FaPinterest />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Author Section */}
        <AuthorSection />

        {/* Suggestion Section */}
        <SuggestionPosts />

        {/* Comment Section */}
        <div className="postCommentContainer">
          <h4 className="postCardTitle">Comments</h4>
          <div className="postCommentsContainer">
            <ul className="postCommentsList">
              <li className="postComment">
                <img className="userImg" src="/images/person/user.jpg" />
                <div className="commentTextPart">
                  <p className="userName">Sam</p>
                  <p className="date">March 20, 2020</p>
                  <p className="bodyText">
                    {" "}
                    Suspendisse sodales erat est, vitae maximus ligula eleifend
                    vitae. Praesent fringilla, urna eget tincid unt vehicula,
                    urna diam convallis dui, ut tincidunt mi tellus sit amet
                    ante.
                  </p>
                  <a className="commentReply">Reply</a>
                </div>
              </li>
              <li className="postComment">
                <img className="userImg" src="/images/person/user2.jpg" />
                <div className="commentTextPart">
                  <p className="userName">Riya</p>
                  <p className="date">March 20, 2020</p>
                  <p className="bodyText">
                    {" "}
                    Suspendisse sodales erat est, vitae maximus ligula eleifend
                    vitae. Praesent fringilla, urna eget tincid unt vehicula,
                    urna diam convallis dui, ut tincidunt mi tellus sit amet
                    ante.
                  </p>
                  <a className="commentReply">Reply</a>
                </div>
              </li>
              <li className="postComment">
                <img className="userImg" src="/images/person/user.jpg" />
                <div className="commentTextPart">
                  <p className="userName">Sam</p>
                  <p className="date">March 20, 2020</p>
                  <p className="bodyText">
                    {" "}
                    Suspendisse sodales erat est, vitae maximus ligula eleifend
                    vitae. Praesent fringilla, urna eget tincid unt vehicula,
                    urna diam convallis dui, ut tincidunt mi tellus sit amet
                    ante.
                  </p>
                  <a className="commentReply">Reply</a>
                </div>
              </li>
            </ul>
          </div>
          <div className="commentFormContainer">
            <h4 className="postCardTitle">Leave A Reply</h4>
            <form className="replyForm">
              <input type="text" className="name" placeholder="Name" />
              <input type="email" className="name" placeholder="Email" />
              <textarea />
            </form>
            <button className="submit">Post Comment</button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            max-width: 1200px;
            margin: 0 auto;
          }

          .singlePostContainer {
            text-align: center;
            margin: 0 auto;
            background: #ffff;
            letter-spacing: 0.5px;
          }

          .postHeader {
            padding: 30px 0;
          }
          .postContent {
            text-align: justify;
            padding: 30px 45px 10px;
            line-height: 27px;
          }
          .bodyText {
            font-size: 15px;
          }

          .singlePostImg {
            width: 100%;
          }
          .blockquote {
            padding: 10px 13px;
            margin-bottom: 35px;
            margin-top: 35px;
            border-left: 4px solid #ec5d5d;
            background: #eee;
          }

          .hl {
            border: 1px solid #e6e6e6;
            margin-top: 80px;
          }

          .postCommentContainer {
            margin: 35px 0;
            background: #ffff;
            padding: 25px 30px;
          }
          .postCommentContainer > h4 {
            text-align: center;
          }
          .postCommentsList {
            padding: 0;
          }
          .postComment {
            list-style: none;
            display: flex;
            border-bottom: 1px solid #e6e6e6;
            margin-bottom: 30px;
          }
          .commentTextPart {
            position: relative;
            top: -20px;
          }
          .commentReply {
            position: absolute;
            top: 15px;
            right: 50px;
            color: #8e8e8e;
            font-size: 12px;
          }
          .replyForm {
            display: flex;
            flex-direction: column;
          }
          textarea {
            height: 124px;
          }
          .replyForm > input,
          textarea {
            padding: 12px;
            margin-bottom: 15px;
            border: 1px solid #e1e0e0;
          }

          @media screen and (max-width: 650px) {
            .bodyText {
              font-size: 13px;
            }
          }
          @media screen and (max-width: 460px) {
            .userImg {
              width: 60px;
              height: 60px;
            }
            .commentReply {
              top: 19px;
              right: 39px;
            }
          }
        `}
      </style>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const data = await Axios.get("http://localhost:1337/posts");
  const posts = data.data;
  const selectedPost = posts.filter((post) => post.slug === slug);

  return {
    props: {
      selectedPost,
    },
  };
}
