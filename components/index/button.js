import React from "react";

export default function Button() {
  return (
    <div>
      <button className="readMorebtn">Read More</button>

      <style jsx>{`
        .readMorebtn {
          background: #ffff;
          border: 1px solid #e6abe8;
          padding: 16px 28px;
          cursor: pointer;
          margin: 10px;
        }

        .readMorebtn:hover {
          background: #e6abe8;
          color: #ffff;
          transition: 0.7s;
        }
      `}</style>
    </div>
  );
}
