import data from "../../data/index.json";
import { Reveal } from "./Reveal.tsx";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <Reveal>
          <p className="section--title">What's drive me to excellence</p>
        </Reveal>
        <Reveal>
          <div className="section--title--flex">
              <hr className="horizontal-line"/>
              <h1 className="skills-section--heading">My Philosophy</h1>
          </div>
        </Reveal>
      </div>
      <div className="philosophy--section--container">
        {data?.philosophy?.map((item, index) => (
          <div key={index} className="skills--section--card">
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
    </section>
  );
}
