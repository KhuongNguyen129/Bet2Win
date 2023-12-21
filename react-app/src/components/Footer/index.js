import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <footer>
      <p className="footer">
        Check out the source code and me on{" "}
        <a
          href="https://github.com/KhuongNguyen129/API-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a>, </a>
        <a
          href="https://www.linkedin.com/in/khuong-c-nguyen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
};

export default Footer;
