import React, { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import dateFormatter from "../utils/dateFormatter";

export default function Featured({ featuredPosts }) {
  const [index, setIndex] = useState(0);
  const [singlePostLink, setSinglePostLink] = useState(
    `/post/${featuredPosts[index].slug}`
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Image Slideshow

  const handleNext = () => {
    if (index >= featuredPosts.length - 1) {
      setIndex(0);

      return;
    }

    setIndex(index + 1);
  };

  const handlePrev = () => {
    if (index <= 0) {
      setIndex(featuredPosts.length - 1);

      return;
    }
    setIndex(index - 1);
  };

  return (
    <div className="featured">
      {/* Previous Button */}
      <span className="minusSlide ">
        {" "}
        <AiOutlineArrowLeft
          className="slider"
          onClick={handlePrev}
          style={{
            border: "1px solid white",
            borderRadius: "50%",
            fontSize: "30px",
            cursor: "pointer",
          }}
        />
      </span>

      {/* Featured Post */}
      <div className="imagecontainer">
        <a href={singlePostLink}>
          {" "}
          <img
            className="imageSlide "
            src={`http://localhost:1337${featuredPosts[index].Coverimage[0].url}`}
          />
        </a>
        <div className="infocard">
          <p className="category">{featuredPosts[index].category.Name}</p>
          <h1 className="featuredTitle">
            {" "}
            <a href={singlePostLink}> {featuredPosts[index].Title}</a>
          </h1>
          <p className="date">
            {dateFormatter(featuredPosts[index].created_at)}
          </p>
          <a href={singlePostLink}>
            <button className="readMorebtn">Read More</button>
          </a>
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
        .minusSlide:hover {
          color: #e411ec;
        }

        .plusSlide {
          position: absolute;
          top: 50%;
          left: 90%;
        }
        .plusSlide:hover {
          color: #e411ec;
        }
        .minusSlide > :hover {
          background: #ffff;
          color: black;
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
          .featuredTitle {
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
          .featuredTitle {
            font-size: 15px;
          }
        }
        @media screen and (max-width: 650px) {
          .infocard {
            padding: 27px 5px 15px;
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
          .infocard {
            padding: 0px;
            width: 260px;
            left: 14%;
            height: 164px;
          }
          .featuredTitle {
            font-size: 15px;
            margin: 0;
            margin-top: 14px;
          }
          .date {
            font-size: 12px;
          }

          .category {
            font-size: 13px;
            margin: 0;
            margin-top: 8px;
          }
          .minusSlide {
            position: absolute;
            top: 49%;
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
