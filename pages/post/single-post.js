import React from "react";
import Layout from "../../components/layout";
import styles from "../../styles/singlePost.module.css";

export default function SinglePost() {
  return (
    <Layout>
      {/* Post Details */}
      <div className={styles.container}>
        <div className={styles.singlePostContainer}>
          <div className={styles.singlePostImgContainer}>
            <img className={styles.singlePostImg} src="/images/img2.jpg" />
          </div>
          <div className={styles.singlePostText}>
            <div className={styles.postHeader}>
              <p className="category">Travel</p>
              <h1 className={styles.postTitle}>Holy heavens in Earth</h1>
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
              <div className={styles.socialIcons}>
                <p>Share</p>
                <a>f</a>
                <a>t</a>
                <a>p</a>
              </div>
            </div>
          </div>
        </div>

        {/* Author Section */}

        <div className="authorCardContainer">
          <img className="authorImg" src="/images/person/author.jpg" />
          <div className="authorInfo">
            <a className="authorName">Carly Roy</a>
            <p className={styles.bodyText}>
              {" "}
              Suspendisse sodales erat est, vitae maximus ligula eleifend vitae.
              Praesent fringilla, urna eget tincid unt vehicula, urna diam
              convallis dui, ut tincidunt mi tellus sit amet ante.
            </p>
            <p>
              <a>f</a>
              <a>t</a>
            </p>
          </div>
        </div>
        {/* Suggestion Section */}

        <div className="suggestionCardContainer">
        <h3 className="suggestionTitle">You Might Also Like</h3>
          <ul className="suggestionPostList">
            <li className="suggestionPost">
              <img src="/images/posts/img1.jpg" />
              <div className="suggestionPostBody">
                <p className="category">Travel</p>
                <h1 className="title-sm">Places to visit in Nepal.</h1>
                <p className="date">June 6, 2020.</p>
              </div>
            </li>
            <li className="suggestionPost">
              <img src="/images/posts/img1.jpg" />
              <div className="suggestionPostBody">
                <p className="category">Travel</p>
                <h1 className="title-sm">Places to visit in Nepal.</h1>
                <p className="date">June 6, 2020.</p>
              </div>
            </li>
            <li className="suggestionPost">
               
              <img src="/images/posts/img1.jpg" />
              <div className="suggestionPostBody">
                <p className="category">Travel</p>
                <h1 className="title-sm">Places to visit in Nepal.</h1>
                <p className="date">June 6, 2020.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Comment Section */}


      </div>
      <style jsx>
        {`
          .authorCardContainer {
            display: flex;
            padding: 18px 11px;
            background: #ffff;
            margin-top: 35px;
          }
          .authorImg {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin-right: 20px;
          }

          .authorName {
            font-weight: 800;
          }
          .suggestionCardContainer{
              background:#ffff;
              padding: 32px 10px;
              margin-top:35px;
              text-align: center;
          }
          .suggestionTitle{
              font-weight:400;
          }
          .suggestionPostList {
            display: flex;
            list-style: none;
          }

          .suggestionPost {
            width: 33.33333%;
            padding: 0 12px;
          }
         
          .suggestionPost > img {
            width: 100%;
          }
          @media screen and (max-width: 650px){
              .suggestionPostList{
                  flex-direction:column;
                  padding:0;
              }
              .suggestionPost{
                  width:100%;
                 
              }
              .bodyText{
                  font-size:13px;
              }
          }
          @media screen and (max-width: 460px) {
            .authorCardContainer {
              flex-direction: column;
              text-align: center;
            }
            .authorImg {
              margin-right: 0;
              align-self: center;
            }
            .authorInfo {
              padding: 11px 0;
            }
          }
        `}
      </style>
    </Layout>
  );
}
