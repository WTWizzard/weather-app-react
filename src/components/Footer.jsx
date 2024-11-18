import React from "react";
import linkedinIcon from "../assets/images/linkedin.png";
import githubIcon from "../assets/images/github.png";
import telegramIcon from "../assets/images/telegram.png";
import brandImage from "../assets/images/brand-01.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer__container sky-gradient-04">
          <section className="footer__contacts">
            <p>
              Email:
              <a href="mailto:faringar35@gmail.com">faringar35@gmail.com</a>
            </p>
            <p>
              Phone: <a href="tel:+380937043092">+380(93)704-3092</a>
            </p>
            <p>Socials: </p>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/vitalii-suvorov-23a075233/"
              className="socials"
            >
              <img src={linkedinIcon} alt="linkedin" />
            </a>
            <a
              target="_blank"
              href="https://github.com/WTWizzard"
              className="socials"
            >
              <img src={githubIcon} alt="github" />
            </a>
            <a
              target="_blank"
              href="https://t.me/@WTWizzard"
              className="socials"
            >
              <img src={telegramIcon} alt="telegram" />
            </a>
          </section>
          <section className="footer__rights">
            <p className="rights">Icons provided by: </p>
            <a
              href="https://github.com/basmilius/weather-icons"
              className="icons-link"
            >
              <img src={brandImage} alt="icons" width="250px" height="150px" />
            </a>
          </section>
        </div>
      </div>
    </footer>
  );
};
