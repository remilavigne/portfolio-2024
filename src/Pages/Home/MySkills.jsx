import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
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
      <div className="tada">
        <div>
          <h3>Developer</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Vue.js</li>
            <li>React.js</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
            <li>Ruby</li>
            <li>Ruby on Rails</li>
            <li>SQL</li>
          </ul>
        </div>
          <div>
          <h3>UX/UI Design</h3>
          <ul>
            <li>Design Thinking</li>
            <li>UX research</li>
            <li>Surveys and interviews</li>
            <li>User testing</li>
            <li>Ideation workshops</li>
            <li>Wireframe & prototype</li>
            <li>Design system</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
