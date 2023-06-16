import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="Projects" id="Projects">
      <div className="p-title">
        <span>P R O J E C T S</span>
      </div>
      <div className="p-cards">
        <div className="p-left">
            
          <div className="l-video">
            <img src="" alt="" />
          </div>
          <div className="p-buttons">
            <button className="button">LIVE</button>
            <button className="button">GitHub Repo</button>
          </div>
        </div>
        <div className="p-right"></div>
      </div>
    </div>
  );
};

export default Projects;
