import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <div id="experiences">
      <div className="section-head">
        <h5>Explore My</h5>
        <h3 className="animate">Experience</h3>
        <div className="exp-container">
          <div className="exp-cat-1">
            <h2>Frontend Development</h2>
            <div className="exp-grid">
              <div className="grid-item">
                <BsPatchCheckFill className="exp-badge" />
                <div className="exp-skill">
                  HTML
                  <div className="exp-level">Experienced</div>
                </div>
              </div>
              <div className="grid-item">
                <BsPatchCheckFill className="exp-badge" />
                <div className="exp-skill">
                  CSS
                  <div className="exp-level">Experienced</div>
                </div>
              </div>
              <div className="grid-item">
                <BsPatchCheckFill className="exp-badge" />
                <div className="exp-skill">
                  Javascript
                  <div className="exp-level">Intermediate</div>
                </div>
              </div>
              <div className="grid-item">
                <BsPatchCheckFill className="exp-badge" />
                <div className="exp-skill">
                  React
                  <div className="exp-level">Intermediate</div>
                </div>
              </div>
              <div className="grid-item">
                <BsPatchCheckFill className="exp-badge" />
                <div className="exp-skill">
                  Redux
                  <div className="exp-level">Intermediate</div>
                </div>
              </div>
              <div className="grid-item">
                <BsPatchCheckFill className="exp-badge" />
                <div className="exp-skill">
                  Material UI
                  <div className="exp-level">Basic</div>
                </div>
              </div>
            </div>
          </div>
          <div className="exp-cat-1">
            <h2>Backend Development</h2>
            <div className="exp-grid">
              <div className="grid-item">
                <BsPatchCheckFill className="exp-badge" />
                <div className="exp-skill">
                  Node JS
                  <div className="exp-level">Intermediate</div>
                </div>
              </div>
              <div className="grid-item">
                <BsPatchCheckFill className="exp-badge" />
                <div className="exp-skill">
                  Express JS
                  <div className="exp-level">Intermediate</div>
                </div>
              </div>
              <div className="grid-item">
                <BsPatchCheckFill className="exp-badge" />
                <div className="exp-skill">
                  MongoDB
                  <div className="exp-level">Intermediate</div>
                </div>
              </div>
              <div className="grid-item">
                <BsPatchCheckFill className="exp-badge" />
                <div className="exp-skill">
                  Git & Github
                  <div className="exp-level">Intermediate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
