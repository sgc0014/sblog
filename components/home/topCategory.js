import React from "react";

export default function TopCategory() {
  return (
    // Category with picture
    <div>
      <div className="container">
        <div className="categoryItem">
          <img className="categoryImg" src="/images/category/Travel.jpg" />
          <div className="categoryName">
            <a>Travel</a>
          </div>
        </div>

        {/* Category Items */}
        <div className="categoryItem">
          <img className="categoryImg" src="/images/category/Food.jpg" />
          <div className="categoryName">
            <a>Food</a>
          </div>
        </div>

        <div className="categoryItem">
          <img className="categoryImg" src="/images/category/Lifestyle.jpg" />
          <div className="categoryName">
            <a>Lifestyle</a>
          </div>
        </div>

        <div className="categoryItem">
          <img className="categoryImg" src="/images/category/Health.jpg" />
          <div className="categoryName">
            <a>Health</a>
          </div>
        </div>
      </div>

      <style jsx>{`
     
        .container {
         display:flex;
         justify-content: space-around;
          text-align: center;
          padding: 80px 0px;
          background: #ffff;
        }
      

        .categoryItem {
          position: relative;
          width:200px;
          height:90px;
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
          .categoryItem,img {
            width: 120px;
            height:auto;
          }
          .categoryName {
            font-size: 11px;
            bottom:37%;
          }
          @media screen and (max-width: 600px) {
            
            .container{
                display:flex;
                flex-direction:column;
                
            }
        .categoryItem{
          margin:33px auto
        }
           
            .categoryItem,img {
                width: 172px;
              }
            .categoryName {
                font-size: 13px;
                bottom:33%;
              }
        
        }
      `}</style>
    </div>
  );
}
