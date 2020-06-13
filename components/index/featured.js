import React, { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Button from "./button";
import Link from "next/link";

export default function Featured() {
  const [index, setIndex] = useState(0);
  const [featuredPostArr, addFeaturedPost] = useState([
    {
      title: "Places to visit in Nepal.",
      category: "travel",
      createdAt: "June 6, 2020.",
      src: "images/img1.jpg",
    },
    {
      title: "Holy heavens in earth.",
      category: "travel",
      createdAt: "June 10, 2020.",
      src: "images/img2.jpg",
    },
  ]);

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
      <span className="minusSlide ">
        {" "}
        <AiOutlineArrowLeft className="slider" onClick={handlePrev} 
         style={{
          border: "1px solid white",
          borderRadius: "50%",
          fontSize: "37px",
          cursor: "pointer",
        }}/>
      </span>
      <div className="imagecontainer">
      <a  className="title" href='/post/single-post'> <img className="imageSlide " src={featuredPostArr[index].src}/></a>
        <div className="infocard">
          <p className="category">{featuredPostArr[index].category}</p>
         <h1> <a  className="title" href='/post/single-post'>  {featuredPostArr[index].title}</a></h1>
          <p className="date">{featuredPostArr[index].createdAt}</p>
          <Button />
        </div>
      </div>

      <span className="plusSlide ">
        {" "}
        <AiOutlineArrowRight
          className="slider"
          onClick={handleNext}
          style={{
            border: "1px solid white",
            borderRadius: "50%",
            fontSize: "37px",
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
          .title {
            font-size: 31px;
          }
        }
        @media screen and (max-width: 960px) {
          .infocard {
            padding: 40px 32px 28px;
          }
          .title {
            font-size: 25px;
          }
        }
        @media screen and (max-width: 800px) {
          .infocard {
            padding: 30px 7px 12px;
          }
          .title {
            font-size: 15px;
          }
        }
        @media screen and (max-width: 650px) {
          .infocard {
            padding: 27px 5px 15px;
          }
          .title {
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
          .title {
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
          .infocard {
            padding: 0px 5px 4px;
            width: 207px;
            left: 20%;
            right: 20%;
          }
          .title {
            font-size: 15px;
          }
          .date {
            font-size: 12px;
          }

          .category {
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
}
