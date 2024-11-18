import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="botones">
          <a href="https://www.facebook.com/UNIVERSAE/" className="face">
            <i className="fa fa-facebook" style={{ fontSize: "24px" }}></i>
          </a>
          <a href="https://www.instagram.com/_universae/?hl=es" className="insta">
            <i className="fa fa-instagram" style={{ fontSize: "24px" }}></i>
          </a>
          <a href="https://www.youtube.com/c/UNIVERSAE_FP" className="youtube">
            <i className="fa fa-youtube" style={{ fontSize: "24px" }}></i>
          </a>
          <a href="https://www.youtube.com/c/UNIVERSAE_FP" className="twitch">
            <i className="fa fa-twitch" aria-hidden="true" style={{ fontSize: "24px" }}></i>
          </a>
          <a href="https://www.linkedin.com/school/universae" className="linkedin">
            <i className="fa fa-linkedin" style={{ fontSize: "24px" }}></i>
          </a>
          
          <a href="https://twitter.com/_Universae" className="twitter">
            <i className="fa fa-twitter" style={{ fontSize: "24px" }}></i>
          </a>
          <a href="https://universae.com" className="google">
            <i className="fa fa-google" style={{ fontSize: "24px" }}></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
