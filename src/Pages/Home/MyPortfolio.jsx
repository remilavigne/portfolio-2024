import data from "../../data/index.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <div className="section--title--flex">
            <hr className="horizontal-line"/>
            <h1 className="skills-section--heading">My portfolio</h1>
          </div>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <div className="stack--list--items">
                <p className="stack--item">HTML</p>
                <p className="stack--item">CSS</p>
                <p className="stack--item">Javascript</p>
                <p className="stack--item">Bootstrap</p>
                <p className="stack--item">Ruby</p>
                <p className="stack--item">Ruby on rails</p>
              </div>
              <a href={item.link} target="_blanck">
                <button className="btn btn-github">
                  <FontAwesomeIcon icon={faSquareGithub} />
                  Github
                </button>
              </a>
              <Link to="/SprinterSell">
                <button className="btn btn-github">More information</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
