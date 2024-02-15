import data from "../../data/index.json";
import { Reveal } from "./Reveal.tsx";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <Reveal>
          <p className="section--title">My Skills</p>
        </Reveal>
        <Reveal>
          <div className="section--title--flex">
              <hr className="horizontal-line"/>
              <h1 className="skills-section--heading">My Expertise</h1>
          </div>
        </Reveal>
      </div>
        <div className="skills--section--container">
          {data?.skills?.map((item, index) => (
            <div key={index} className={`skills--section--card ${item.color}`}>
              <div className="skills--section--img">
                <img src={item.src} alt="Product Chain" />
              </div>
              <div className="skills--section--card--content">
                <Reveal>
                  <h3 className="skills--section--title">{item.title}</h3>
                </Reveal>
                <Reveal>
                  <p className="skills--section--description">{item.description}</p>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      <div className="skills--section--stack">
        <Reveal>
          <div className="section--title--flex">
            <hr className="horizontal-line"></hr>
            <h2 className="skills--title">Stack</h2>
          </div>
        </Reveal>
        <div className="stack--list--items">
          <ul className="skills--section-list">
            <li className="stack--item stack--color--primary">HTML</li>
            <li className="stack--item stack--color--primary">CSS</li>
            <li className="stack--item stack--color--primary">Javascript</li>
            <li className="stack--item stack--color--primary">Vue.js</li>
            <li className="stack--item stack--color--primary">React.js</li>
            <li className="stack--item stack--color--primary">Bootstrap</li>
            <li className="stack--item stack--color--primary">Tailwind</li>
            <li className="stack--item stack--color--primary">Framer</li>
            <li className="stack--item stack--color--blue">Ruby</li>
            <li className="stack--item stack--color--blue">Ruby on Rails</li>
            <li className="stack--item stack--color--blue">SQL</li>
          </ul>
        </div>
        <Reveal>
          <div className="section--title--flex">
            <hr className="horizontal-line"></hr>
            <h2 className="skills--title">UX/UI Design</h2>
          </div>
        </Reveal>
        <div className="stack--list--items">
          <ul className="skills--section-list">
            <li className="stack--item stack--color--github">Design Thinking</li>
            <li className="stack--item stack--color--github">UX research</li>
            <li className="stack--item stack--color--github">Surveys and interviews</li>
            <li className="stack--item stack--color--github">User testing</li>
            <li className="stack--item stack--color--github">Ideation workshops</li>
            <li className="stack--item stack--color--yellow">Wireframe & prototype</li>
            <li className="stack--item stack--color--yellow">Design system</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
