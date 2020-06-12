import React from "react";
import styles from "../styles/mainContentContainer.module.css";
import SinglePost from "./singlePost";

export default function MainContentContainer() {
  return (
    <div className={"mainContentContainer"}>
      <div className={'leftSide'}>
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
      </div>

      <div className={'rightSide'}>
        <div className={'popularPostContainer'}>
          <div className={'rightTitleContainer'}>
            <h3 className={'rightTitle'}>Popular</h3>
          </div>
          <ul className={'popularPostList'}>
            <li className={'popularSinglePost'}>
              <img
                className={'popularSinglePostImg'}
                src="/images/img1.jpg"
              />
              <div className={'popularSinglePostContent'}>
                <a className='title popularPostTitle'>
                  Something to do somewhere.
                </a>
                <p className="date">March 24</p>
              </div>
            </li>
            <li className={'popularSinglePost'}>
              <img
                className={'popularSinglePostImg'}
                src="/images/img1.jpg"
              />
              <div className={'popularSinglePostContent'}>
                <a className='title'>
                  Something to do somewhere.
                </a>
                <p className="date">March 24</p>
              </div>
            </li>
            <li className={'popularSinglePost'}>
              <img
                className={'popularSinglePostImg'}
                src="/images/img1.jpg"
              />
              <div className={'popularSinglePostContent'}>
                <a className='title'>
                  Something to do somewhere.
                </a>
                <p className="date">March 24</p>
              </div>
            </li>
            <li className={'popularSinglePost'}>
              <img
                className={'popularSinglePostImg'}
                src="/images/img1.jpg"
              />
              <div className={'popularSinglePostContent'}>
                <a className='title'>
                  Something to do somewhere.
                </a>
                <p className="date">March 24</p>
              </div>
            </li>
          </ul>
        </div>
        <div className={'rightCategory'}>
        <div className={'rightTitleContainer'}>
        <h3 className={'rightTitle'}>Category</h3>
        </div>
        <ul className="categoryList">
          <li className="categoryItem">
            <a >Travel</a>
          </li>
          <li className="categoryItem">
            <a >Travel</a>
          </li>
          <li className="categoryItem">
            <a >Travel</a>
          </li>
          <li className="categoryItem">
            <a >Travel</a>
          </li>
          <li className="categoryItem">
            <a >Travel</a>
          </li>
        </ul>


        </div>
      </div>
      <style jsx>{`

.mainContentContainer{
  display: flex;
  justify-content: space-around;
  padding:50px
}

.leftSide{
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 50px;
  width: 60%;
}



.rightTitleContainer{
  background: #ffff;
  padding: 1px;
  box-shadow: 1px 1px 3px #cacaca;
  margin-bottom: 45px;
}

.rightTitle{
  font-weight: 500;
  text-align: center;
  text-transform:uppercase;
  letter-spacing:0.5px;



}
.popularPostContainer{
  margin-bottom:45px;
}
.popularPostList{
  list-style: none;
  padding: 0;
}
.popularSinglePost{
  display: flex;
  margin: 20px 0px;
}
.popularSinglePostImg{
  width: 120px;
}
.popularSinglePostContent{
  width: 100%;
  padding: 0 20px;
}

.categoryList{
  list-style: none;
  padding:0;
}

.categoryItem{
  font-size: 16px;
  line-spacing:0.7px;
  border-bottom: 1px solid #d0d0d0;
  padding-bottom: 15px;
  margin-bottom: 15px;
}


    .date{
        font-size:10px;
    }  
    .rightSide{
      width: 30%;
      padding: 0 20px;
  }
    @media screen and (max-width:1200px){
      .title{
          font-size: 11px ;
      }
      @media screen and (max-width:990px){
      .rightSide{
        width:38%;
      }
      
      }

      @media screen and (max-width:790px){
        .mainContentContainer{
          flex-direction:column;
          align-items:center:

        }
        .leftSide{
          width:100%;
        }
        .rightSide{
          width:100%;
          margin:70px auto;
        }
      }
      @media screen and (max-width:600px){
        .leftSide{
          display:flex;
          flex-direction:column;
          align-items:center;
        }
  }
   
  `}</style>
    </div>
  );
}
