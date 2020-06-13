import React from 'react';

function SuggestionPosts(props) {
    return (
        <div className="suggestionCardContainer">
        <h3 className="postCardTitle">You Might Also Like</h3>
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
        <style jsx>
            {`
              .suggestionCardContainer {
                background: #ffff;
                padding: 32px 10px;
                margin-top: 35px;
                text-align: center;
              }
              .postCardTitle {
                font-weight: 400;
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
              @media screen and (max-width: 650px) {
                .suggestionPostList {
                  flex-direction: column;
                  padding: 0;
                }
                .suggestionPost {
                  width: 100%;
                }
                .bodyText {
                  font-size: 13px;
                }
              }`}
        </style>
      </div>
    );
}

export default SuggestionPosts;