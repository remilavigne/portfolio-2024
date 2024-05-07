import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { Reveal } from "./Reveal.tsx";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      {/* <div classname="fullscreen-bg">
        <video autoPlay muted loop className="fullscreen-bg__video">
          <source src="video-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
      {/* <div className="noise--filter"></div> */}
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <Reveal>
            <p className="section--title ">Hello there 👋</p>
          </Reveal>
          <Reveal>
            <div className="section--title--flex">
              <svg width="47" height="47" viewBox="0 0 152 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M152 58.5C152 62.113 106.736 117 58.6765 117C26.2703 117 0 90.8087 0 58.5C0 26.1913 26.2703 0 58.6765 0C107.485 0 152 54.887 152 58.5ZM65.9444 37.3553C68.4438 37.3553 70.47 39.8193 70.47 45.7093C70.47 46.9824 70.2586 48.3114 69.9271 49.6126C70.6052 48.4863 71.3836 47.4247 72.2673 46.5437C76.4446 42.3789 79.625 42.0649 81.3923 43.827C83.1596 45.589 82.8448 48.7597 78.6674 52.9245C78.3652 53.2258 78.0419 53.5148 77.702 53.7917C77.9859 53.7725 78.268 53.7624 78.5474 53.7624C84.4551 53.7624 86.9266 55.7825 86.9266 58.2743C86.9266 60.7662 84.4551 62.7863 78.5474 62.7863C77.7466 62.7863 76.9238 62.7034 76.0996 62.56C77.0386 63.1592 77.9182 63.8309 78.6675 64.578C82.8449 68.7428 83.1598 71.9135 81.3924 73.6756C79.6251 75.4376 76.4448 75.1237 72.2674 70.9589C71.5177 70.2114 70.8437 69.3339 70.2425 68.3972C70.3864 69.2194 70.4697 70.0403 70.4697 70.8393C70.4697 76.7292 68.4435 79.1932 65.9441 79.1932C63.4447 79.1932 61.4185 76.7292 61.4185 70.8393C61.4185 70.1302 61.4841 69.4038 61.5995 68.6745C61.045 69.5069 60.4312 70.2856 59.7559 70.9588C55.5785 75.1236 52.3982 75.4375 50.6309 73.6755C48.8635 71.9135 49.1784 68.7427 53.3558 64.5779C54.1192 63.8168 55.0178 63.134 55.9766 62.5264C55.09 62.6902 54.2032 62.7861 53.3418 62.7861C47.4341 62.7861 44.9626 60.7661 44.9626 58.2742C44.9626 55.7823 47.4341 53.7622 53.3418 53.7622C53.6694 53.7622 54.0006 53.7761 54.3341 53.8023C53.9895 53.5221 53.6617 53.2296 53.3557 52.9245C49.1783 48.7597 48.8634 45.5889 50.6308 43.8269C52.3981 42.0649 55.5784 42.3788 59.7558 46.5436C60.544 47.3295 61.2485 48.259 61.8728 49.2501C61.5929 48.0654 61.4189 46.8644 61.4189 45.7093C61.4189 39.8193 63.445 37.3553 65.9444 37.3553ZM66.6223 57.5374L66.5903 57.6509L66.543 57.6776C66.5688 57.6322 66.5953 57.5855 66.6223 57.5374Z" fill="#EBE7E1"/>
              </svg>
              <h1 className="hero--section--title">
                <span className="hero--section-title--color">I'm <strong className="hero--section--orange">Rémi</strong></span>{" "}
              </h1>
            </div>
          </Reveal>
          <Reveal>
            <p className="hero--section-description">
              A <strong className="hero--section--orange">front-end web developer</strong>, passionate about UX, interactions and pixel perfect design.
            </p>
          </Reveal>
        </div>
        <Reveal>
          <div className="hero--section--cta">
            <a
              href="https://github.com/remilavigne"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-hero">
                <FontAwesomeIcon icon={faSquareGithub} />
                My GitHub
              </button>
            </a>
            <a
              href="https://linkedin.com/in/rémi-lavigne-68753898"
              target="_blank"
              rel="noopener noreferrer"np
            >
              <button className="btn btn-hero">
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
                  <button className="btn btn-hero">
                    <FontAwesomeIcon icon={faEnvelope} />
                    Contact Me</button>
                </Link>
          </div>
        </Reveal>
      </div>
        <div className="hero--section--img">
          <img src="img/hero-img.png" alt="hero-img" />
        </div>
    </section>
  );
}
