import { Reveal } from "./Reveal.tsx";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="about--section--content">
          <Reveal>
            <p className="section--title">Nice to meet you!</p>
          </Reveal>
          <Reveal>
            <div className="section--title--flex">
              <hr className="horizontal-line"/>
              <h1 className="skills-section--heading">About Me</h1>
            </div>
          </Reveal>
          <Reveal>
            <p className="hero--section-description">
              I am Rémi, a dynamic <strong>Front End Web Developer</strong> and <strong>UX/UI designer</strong>, weaving a narrative that seamlessly bridges the realms of technology and creativity. Armed with a robust background in <strong>Digital Project Management </strong>and <strong>UX/UI Design</strong>, I've undertaken the exciting path of coding to <strong>bring innovative ideas to life.</strong>
            </p>
          </Reveal>
          <Reveal>
            <p className="hero--section-description">
              As a dedicated professional, I bring a unique blend of <strong>technical expertise</strong> and <strong>design sensibility</strong>. My journey is fueled by a commitment to delivering exceptional results and staying ahead in the ever-evolving tech landscape. I am ready to bring my <strong>skills and passion</strong> to your team, contributing to projects that demand excellence and innovation.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
