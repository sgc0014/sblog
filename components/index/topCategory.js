import React from "react";

export default function TopCategory() {
  return (
    // Category with picture
    <div className="topCategoryContainer">
      <div className="container">
        <div className="categoryItem">
          <div className="img-cover">
            <img className="categoryImg" src="/images/category/Travel.jpg" />
            <div className="categoryName">
              <a>Travel</a>
            </div>
          </div>
        </div>

        <div className="categoryItem">
          <div className="img-cover">
            <img className="categoryImg" src="/images/category/Food.jpg" />
            <div className="categoryName">
              <a>Food</a>
            </div>
          </div>
        </div>
        <div className="categoryItem">
          <div className="img-cover">
            <img className="categoryImg" src="/images/category/Lifestyle.jpg" />
            <div className="categoryName">
              <a>Lifestyle</a>
            </div>
          </div>
        </div>
        <div className="categoryItem">
          <div className="img-cover">
            <img className="categoryImg" src="/images/category/Health.jpg" />
            <div className="categoryName">
              <a>Health</a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .topCategoryContainer {
          background: #ffff;
        }
        .container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
          text-align: center;
          padding: 100px 0px;
        }

        .categoryItem {
          position: relative;
        }

        .categoryName {
          position: absolute;
          bottom: 33%;
          width: 100%;
          background: #ffff;
          padding: 8px;
          opacity: 0.8;
          text-transform: uppercase;
          letter-spacing: 0.7;
          cursor: pointer;
        }
        .categoryName:hover {
          opacity: 1;
        }
        @media screen and (max-width: 960px) {
          .categoryImg {
            width: 120px;
          }
          .categoryName {
            font-size: 13px;
            bottom:24%;
          }
          @media screen and (max-width: 600px) {
            
            .container{
                display:flex;
                flex-direction:column;
                
            }
            .category{
                margin-bottom: 40px
            }
            .categoryImg {
                width: 172px;
              }
            .categoryName {
                font-size: 13px;
                bottom:24%;
              }
        
        }
      `}</style>
    </div>
  );
}
