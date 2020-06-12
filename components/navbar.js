import React, { useState } from "react";
import styles from "../styles/navbar.module.css";
import Link from 'next/link'


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
          <li className={styles.navbarItem}><Link href='/post/single-post'><a>Home </a></Link> </li>
          <li className={styles.navbarItem}>Shop</li>
          <li className={styles.navbarItem}>About</li>
          <li className={styles.navbarItem}>Latest</li>
          <li className={styles.navbarItem}>Blog</li>
          <li className={styles.navbarItem}>Contact</li>
        </ul>

        <ul className={styles.socialLinks}>
          <li className={styles.socialLink}>A</li>
          <li className={styles.socialLink}>b</li>
          <li className={styles.socialLink}>c</li>
        </ul>

     
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
             height:0;
             overflow:hidden
            
            }
            .open {
              display: flex;
              height:240px
            }
          }
        `}
      </style>
    </div>
  );
}
export default Navbar;
