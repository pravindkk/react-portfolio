import React from 'react'
import { Link } from 'react-router-dom'


const ProjectElement = ({ heading, paragraph, imgUrl, projectLink }) => {
    var link = "/projects" + projectLink;

    return (
      <div
        className="card"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          opacity: 0.5
        }}
      >
        <Link to={"/projects#" + projectLink}>
          <div className="content">
            {/* <img src={TracetogetherIcon} alt="" /> */}
            <h1 className="header">{heading}</h1>
            {/* <p className="text">{paragraph}</p> */}
            {/* <Link to="/projects">Projects</Link> */}
            {/* <a
              href={projectLink ? projectLink : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Explore
            </a> */}
          </div>
        </Link>
      </div>
    )
  }
  
  export default ProjectElement