import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import '/home/remilavigne/code/remilavigne/portfolio-2024/src/AnimatedBackground.css';

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section animated-background">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hello there!</p>
          <div className="section--title--flex">
            <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.4998 0.500913C26.2395 0.500913 28.4605 3.21004 28.4605 9.68579C28.4605 16.1615 23.4998 23.9517 23.4998 23.9517C23.4998 23.9517 18.5391 16.1615 18.5391 9.68579C18.5391 3.21004 20.7601 0.500914 23.4998 0.500913Z" fill="black"/>
              <path d="M13.1991 13.1993C14.4388 11.9597 16.6695 12.1805 19.5996 15.1106C22.5297 18.0407 23.8099 23.8101 23.8099 23.8101C23.8099 23.8101 18.0405 22.5299 15.1104 19.5998C12.1803 16.6697 11.9595 14.439 13.1991 13.1993Z" fill="black"/>
              <path d="M13.1991 32.1738C11.9594 30.9342 12.1803 28.7034 15.1104 25.7733C18.0405 22.8432 23.8099 21.563 23.8099 21.563C23.8099 21.563 22.5296 27.3324 19.5995 30.2625C16.6695 33.1926 14.4387 33.4135 13.1991 32.1738Z" fill="black"/>
              <path d="M32.1735 32.1737C30.9338 33.4134 28.7031 33.1925 25.773 30.2624C22.8429 27.3323 21.5627 21.563 21.5627 21.563C21.5627 21.563 27.3321 22.8432 30.2621 25.7733C33.1922 28.7033 33.4131 30.9341 32.1735 32.1737Z" fill="black"/>
              <path d="M33.5739 13.0178C34.9063 14.1571 34.8599 16.3983 32.1669 19.5477C29.4739 22.6971 23.8218 24.4228 23.8218 24.4228C23.8218 24.4228 24.6487 18.5712 27.3417 15.4218C30.0346 12.2724 32.2414 11.8784 33.5739 13.0178Z" fill="black"/>
              <path d="M0.499939 23.5002C0.499938 20.7605 3.20907 18.5395 9.68481 18.5395C16.1606 18.5395 23.9507 23.5002 23.9507 23.5002C23.9507 23.5002 16.1606 28.4609 9.68481 28.4609C3.20907 28.4609 0.499939 26.2399 0.499939 23.5002Z" fill="black"/>
              <path d="M46.4998 23.5003C46.4998 26.24 43.7907 28.461 37.3149 28.461C30.8392 28.461 23.0491 23.5003 23.0491 23.5003C23.0491 23.5003 30.8392 18.5396 37.3149 18.5396C43.7907 18.5396 46.4998 20.7605 46.4998 23.5003Z" fill="black"/>
              <path d="M23.5 46.5001C20.7602 46.5001 18.5392 43.7909 18.5392 37.3152C18.5392 30.8394 23.5 23.0493 23.5 23.0493C23.5 23.0493 28.4607 30.8394 28.4607 37.3152C28.4607 43.7909 26.2397 46.5001 23.5 46.5001Z" fill="black"/>
            </svg>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">I'm <strong>Rémi</strong></span>{" "}
            </h1>
          </div>
          <p className="hero--section-description">
            A front-end web developer, passionate about UX, interactions and pixel perfect design.
          </p>
        </div>
        <div className="hero--section--cta">
          <a
            href="https://github.com/remilavigne"
            target="_blank"
            rel="noopener noreferrer"
           >
            <button className="btn btn-github">
              <FontAwesomeIcon icon={faSquareGithub} />
              My GitHub
            </button>
          </a>
          <a
            href="www.linkedin.com/in/rémi-lavigne-68753898"
            target="_blank"
            rel="noopener noreferrer"
           >
            <button className="btn btn-github">
              <FontAwesomeIcon icon={faLinkedin} />
              Connect on LinkedIn
            </button>
          </a>
          <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="text-md"
              >
                <button className="btn btn-primary btn-contact">
                  <FontAwesomeIcon icon={faEnvelope} />
                  Contact Me</button>
              </Link>
        </div>
      </div>
    </section>
  );
}
