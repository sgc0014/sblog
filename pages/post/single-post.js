import React from "react";
import Layout from "../../components/layout/layout";
import styles from "../../styles/singlePost.module.css";
import { FaFacebookF, FaPinterest } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import AuthorSection from "../../components/single-post/authorSection";
import SuggestionPosts from "../../components/single-post/suggestionPosts";

export default function SinglePost() {
  return (
    <Layout>
      {/* Post Details */}
      <div className={styles.container}>
        <div className={styles.singlePostContainer}>
          <div className={styles.singlePostImgContainer}>
            <img className={styles.singlePostImg} src="/images/posts/travel2.jpg" />
          </div>
          <div className={styles.singlePostText}>
            <div className={styles.postHeader}>
              <p className="category">Travel</p>
              <h1 >Holy heavens in Earth</h1>
              <p className="date">March 20, 2020</p>
            </div>
            <div className={styles.postContent}>
              <p className={styles.bodyText}>
                {" "}
                Cras vel convallis mi. Sed aliquet mollis erat, ultricies
                elementum orci vehicula non. Nulla lacinia scel erisque risus
                quis pulvinar. Nullam nec nibh arcu. Nam libero nisl, convallis
                at metus at, pretium tincid unt enim. Cras metus orci, volutpat
                eu tincidunt et, venenatis eu mi. Fusce varius varius tortor vel
                pellentesque.{" "}
              </p>
              <p className={styles.bodyText}>
                Suspendisse sodales erat est, vitae maximus ligula eleifend
                vitae. Praesent fringilla, urna eget tincidunt vehicula, urna
                diam convallis dui, ut tincidunt mi tellus sit amet ante.
                Maecenas mattis turpis nec ex maximus cursus. Pellentesque
                pretium erat sit amet feugiat placerat.
              </p>
              <h3>Lorem ipsum dolor sit amet</h3>
              <p className={styles.bodyText}>
                Suspendisse sodales erat est, vitae maximus ligula eleifend
                vitae. Praesent fringilla, urna eget tincidunt vehicula, urna
                diam convallis dui, ut tincidunt mi tellus sit amet ante.
                Maecenas mattis turpis nec ex maximus cursus. Pellentesque
                pretium erat sit amet feugiat placerat.
              </p>{" "}
              <blockquote className={styles.blockquote}>
                <p className={styles.bodyText}>
                  If there is not something in a box. Then it probably means
                  there is nothing in box. Not sure though. Pass that joint bro.
                </p>
                <span>-Gandhi</span>
              </blockquote>
              <p className={styles.bodyText}>
                Suspendisse sodales erat est, vitae maximus ligula eleifend
                vitae. Praesent fringilla, urna eget tincid unt vehicula, urna
                diam convallis dui, ut tincidunt mi tellus sit amet ante.
                Maecenas mattis turpis nec ex maximus cursus. Pellentesque
                pretium erat sit amet feugiat placerat. Duis in magna ornare,
                dictum libero sed, viverra tellus. Donec eget aliquet erat. Nunc
                ac porttitor justo, vitae molestie tortor. Proin laoreet erat ac
                est pelle ntesque, sit amet pulvinar massa tincidunt.
              </p>
              <div className={styles.hl}></div>
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
    <AuthorSection/>
     
        {/* Suggestion Section */}
    <SuggestionPosts/>

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
              height:60px;
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
