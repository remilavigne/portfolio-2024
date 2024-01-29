import { Link } from "react-scroll";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hello there!</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">I'm <strong>Rémi</strong></span>{" "}
          </h1>
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
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
