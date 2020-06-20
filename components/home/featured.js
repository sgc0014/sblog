import React, { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Button from "./readMoreButton";
import Link from "next/link";

export default function Featured() {
  const [index, setIndex] = useState(0);
  const [featuredPostArr, addFeaturedPost] = useState([
    {
      title: "Places to visit in Nepal.",
      category: "travel",
      createdAt: "June 6, 2020.",
      src: "images/posts/travel1.jpg",
    },
    {
      title: "Holy heavens in earth.",
      category: "travel",
      createdAt: "June 10, 2020.",
      src: "images/posts/travel2.jpg",
    },
  ]);

// Image Slideshow

  const handleNext = () => {
    if (index >= featuredPostArr.length - 1) {
      setIndex(0);

      return;
    }

    setIndex(1);
    console.log(featuredPostArr);
  };

  const handlePrev = () => {
    if (index <= 0) {
      setIndex(featuredPostArr.length - 1);

      return;
    }
    setIndex(index - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }
    , 5000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="featured">
      {/* Previous Button */}
      <span className="minusSlide ">
        {" "}
        <AiOutlineArrowLeft className="slider" onClick={handlePrev} 
         style={{
          border: "1px solid white",
          borderRadius: "50%",
          fontSize: "30px",
          cursor: "pointer",
        }}/>
      </span>

      {/* Featured Post */}
      <div className="imagecontainer">
      <a  href='/post/single-post'> <img className="imageSlide " src={featuredPostArr[index].src}/></a>
        <div className="infocard">
          <p className="category">{featuredPostArr[index].category}</p>
         <h1 className='featuredTitle'> <a  href='/post/single-post'>  {featuredPostArr[index].title}</a></h1>
          <p className="date">{featuredPostArr[index].createdAt}</p>
         <button className='readMorebtn'>Read More</button>
        </div>
      </div>

      {/* Next Button */}

      <span className="plusSlide ">
        {" "}
        <AiOutlineArrowRight
          className="slider"
          onClick={handleNext}
          style={{
            border: "1px solid white",
            borderRadius: "50%",
            fontSize: "30px",
            cursor: "pointer",
          }}
        />
      </span>

      <style jsx>{`
        .featured {
          position: relative;
        }
        span {
          color: #ffff;
          font-size: 28px;
        }

        .imageSlide {
          width: 100%;
         
        }
      

        .minusSlide {
          position: absolute;
          top: 50%;
          right: 90%;
        }

        .plusSlide {
          position: absolute;
          top: 50%;
          left: 90%;
        }
        .plusSlide>:hover{
          background:#ffff;
          color:black;
        }
        .minusSlide>:hover{
          background:#ffff;
          color:black;
        }

        .infocard {
          background: #ffff;
          text-align: center;
          position: absolute;
          bottom: 0;
          left: 29%;
          right: 29%;
          padding: 40px;
        }
  
        @media screen and (max-width: 1200px) {
          .infocard {
            padding: 40px 40px 32px;
          }
          .featuredTitle{
            font-size: 31px;
          }
        }
        @media screen and (max-width: 960px) {
          .infocard {
            padding: 40px 32px 28px;
          }
          .featuredTitle {
            font-size: 25px;
          }
        }
        @media screen and (max-width: 800px) {
          .infocard {
            padding: 30px 7px 12px;
          }
          .featuredTitle{
            font-size: 15px;
          }
        }
        @media screen and (max-width: 650px) {
          .infocard {
            padding: 27px 5px 15px;
          }
          .featuredTitle{
            font-size: 15px;
          }
          .date {
            font-size: 12px;
          }

          .category {
            font-size: 13px;
          }
        }
        @media screen and (max-width: 460px) {
          .infocard {
            padding: 0px 5px 4px;
          }
          .featuredTitle {
            font-size: 15px;
          }
          .date {
            font-size: 12px;
          }

          .category {
            font-size: 13px;
          }
        }
        @media screen and (max-width: 390px) {
          .infocard{
            padding: 0px;
            width: 260px;
            left: 10%;
            height: 164px;
          }
          .featuredTitle{
            font-size: 15px;
            margin: 0;
            margin-top:14px;
           
          }
          .date {
            font-size: 12px;
          }

          .category {
            font-size: 13px;
            margin:0;
            margin-top:8px;
          }
          .minusSlide {
            position: absolute;
            top: 54%;
            right: 90%;
          }
  
          .plusSlide {
            position: absolute;
            top: 50%;
            left: 91%;
          }
        }
      `}</style>
    </div>
  );
}
