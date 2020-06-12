import React from "react";

export default function Logo() {
  return (
    <div className="logoContainer">
      <h1 className="logo">S-blog</h1>

      <style jsx>{`
        @font-face {
          font-family: Arizonia-Regular;
          src: url("/fonts/Arizonia-Regular.ttf");
        }
        .logoContainer{
            text-Align:center
        }
        .logo{
            font-family:Arizonia;
            font-size:60px;
        }

      `}</style>
    </div>
  );
}
