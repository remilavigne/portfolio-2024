import data from "../../data/index.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-brands-svg-icons';
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
              <div className="portfolio--btn--flex">
                <a href={item.link} target="_blanck">
                  <button className="btn btn-github">
                    <FontAwesomeIcon icon={faSquareGithub} />
                    Github
                  </button>
                </a>
                <Link to="/SprinterSell">

                  <button className="btn btn-github">
                  <svg className="portfolio--btn--svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>
                    More information</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
