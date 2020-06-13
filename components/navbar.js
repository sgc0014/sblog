import React, { useState } from "react";
import styles from "../styles/navbar.module.css";
import Link from "next/link";
import { FaFacebookF, FaPinterest } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

function Navbar() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
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

        <ul className={toggle === true ? "navbarItems" : "navbarItems open"}>
          <li className={styles.navbarItem}>
            <Link href="/">
              <a>Home </a>
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/">
              <a>Travel</a>
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/">
              <a>Health</a>
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/">
              <a>Food</a>
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/">
              <a>Lifestyle</a>
            </Link>
          </li>
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

          @media screen and (max-width: 1020px) {
            .navbarItems {
              display: flex;
              background: #ffff;
              width: 100%;
              text-align: center;
              flex-direction: column;
              position: absolute;
              top: 54px;
              left: 0;
              padding: 0;
              transition: all 0.5s ease-in;
              height: 0;
              overflow: hidden;
            }
            .open {
              display: flex;
              height: 240px;
            }
          }
        `}
      </style>
    </div>
  );
}
export default Navbar;
