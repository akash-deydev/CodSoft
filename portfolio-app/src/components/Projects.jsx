const Projects = () => {
  return (
    <div>
      <div className="section-head">
        <h5>Browse My Recent</h5>
        <h3 className="animate">Projects</h3>
      </div>
      <div className="projects">
        <div id="project-1" className="project-card">
          <div className="project-head"></div>
          <div className="project-body">
            <h2>React Movie List App</h2>
            <button>Github</button>
            <button>Live Demo</button>
          </div>
        </div>
        <div id="project-2" className="project-card">
          <div className="project-head"></div>
          <div className="project-body">
            <h2>Tesla Automotive Clone</h2>
            <button>Github</button>
            <button>Live Demo</button>
          </div>
        </div>
        <div id="project-3" className="project-card">
          <div className="project-head"></div>
          <div className="project-body">
            <h2>Project Three</h2>
            <button>Github</button>
            <button>Live Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
