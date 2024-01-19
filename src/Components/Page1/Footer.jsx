import styles from "./Footer.module.css";

import googleplay from "D:/React Learning/Assignment Project/Assignment Project/src/assets/google-play-badge.png";

import fb from "D:/React Learning/Assignment Project/Assignment Project/src/assets/FB-icon-black@2x.png";
import linkedin from "D:/React Learning/Assignment Project/Assignment Project/src/assets/linkedin-icon-black@2x.png";
import x from "D:/React Learning/Assignment Project/Assignment Project/src/assets/Twitter-icon-black@2x.png";

const Footer = () => {
  return (
    <>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-4 my-2 border-top">
          <img src={googleplay} alt="" />

          <span id={styles.icons}>
            <img src={fb} alt="" />
            <img src={linkedin} alt="" />
            <img src={x} alt="" />
          </span>
        </footer>
      </div>
    </>
  );
};

export default Footer;
