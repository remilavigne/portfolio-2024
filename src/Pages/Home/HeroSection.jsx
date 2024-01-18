export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Welcome, I'm Rémi</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Front End</span>{" "}
            <br />
            Developer & UX/UI Designer
          </h1>
          <p className="hero--section-description">
          Elevating digital experiences with a touch of creativity. I'm Rémi, your Front-End Web Developer and UX/UI Designer. Let's craft intuitive designs and seamless interfaces that leave a lasting impact. Ready to transform ideas into compelling realities?
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
