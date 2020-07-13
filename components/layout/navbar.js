import React, { useState } from "react";
import styles from "../../styles/navbar.module.css";
import Link from "next/link";
import { FaFacebookF, FaPinterest } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

function Navbar() {
  const [toggle, setToggle] = useState(true);
  const [categoryItems, setItems] = useState([
    "travel",
    "health",
    "food",
    "lifestyle",
  ]);

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>

        {/* Burger Toggler */}
        
        <div
          className={styles.burger}
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>

        {/* Nav-links */}

        <ul className={toggle === true ? "navbarItems" : "navbarItems open"}>
          <li className={styles.navbarItem}>
            <Link href="/">
              <a>Home </a>
            </Link>
          </li>

          {/* Category Items */}

          {categoryItems.map((categoryItem) => (
            <li className={styles.navbarItem}>
              <Link href={`/category/${categoryItem}`}>
                <a>{categoryItem}</a>
              </Link>
            </li>
          ))}

        
          <li className={styles.navbarItem}>
            <Link href="/about-me">
              <a>About me</a>
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/contact">
              <a>Contact </a>
            </Link>
          </li>
        </ul>

        {/* Social-icons */}

        <div className="socialIcons">
          <a className="socialIcon">
            <FaFacebookF />
          </a>
          <a className="socialIcon">
            <AiOutlineTwitter />
          </a>
          <a className="socialIcon">
            <FaPinterest />
          </a>
        </div>
      </div>

      <style jsx>
        {`
          .navbarItems {
            display: flex;
            list-style: none;
          }
          // Responsive navbar
          @media screen and (max-width: 1020px) {
            .navbarItems {
              display: flex;
              background: #ffff;
              width: 100%;
              text-align: center;
              flex-direction: column;
              position: absolute;
              top: 35px;
              left: 0;
              padding: 0;
              transition: all 0.5s ease-in;
              height: 0;
              overflow: hidden;
              z-index: 9999;
            }
            .open {
              display: flex;
              height: 275px;
              box-shadow: 45px 5px 8px gray;
            }
          }
        `}
      </style>
    </div>
  );
}
export default Navbar;
