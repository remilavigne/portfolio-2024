import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <div className="section--title--flex">
            <hr className="horizontal-line"/>
            <h1 className="skills-section--heading">My Expertise</h1>
        </div>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className={`skills--section--card ${item.color}`}>
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="skills--section--stack">
        <div className="section--title--flex">
          <hr className="horizontal-line"></hr>
          <h2 className="skills--title">Stack</h2>
        </div>
        <div className="stack--list--items">
          <ul className="skills--section-list">
            <li className="stack--item">HTML</li>
            <li className="stack--item">CSS</li>
            <li className="stack--item stack--color--green">Javascript</li>
            <li className="stack--item stack--color--green">Vue.js</li>
            <li className="stack--item stack--color--green">React.js</li>
            <li className="stack--item stack--color--dblue">Bootstrap</li>
            <li className="stack--item stack--color--dblue">Tailwind</li>
            <li className="stack--item stack--color--github">Ruby</li>
            <li className="stack--item stack--color--github">Ruby on Rails</li>
            <li className="stack--item stack--color--github">SQL</li>
          </ul>
        </div>
        <div className="section--title--flex">
          <hr className="horizontal-line"></hr>
          <h2 className="skills--title">UX/UI Design</h2>
        </div>
        <div className="stack--list--items">
          <ul className="skills--section-list">
            <li className="stack--item stack--color--blue">Design Thinking</li>
            <li className="stack--item stack--color--blue">UX research</li>
            <li className="stack--item stack--color--blue">Surveys and interviews</li>
            <li className="stack--item stack--color--blue">User testing</li>
            <li className="stack--item stack--color--blue">Ideation workshops</li>
            <li className="stack--item stack--color--yellow">Wireframe & prototype</li>
            <li className="stack--item stack--color--yellow">Design system</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
