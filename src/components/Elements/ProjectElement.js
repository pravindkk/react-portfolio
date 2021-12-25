import React from 'react'
import { Link } from 'react-router-dom'

const ProjectElement = ({ heading, paragraph, imgUrl, projectLink }) => {
    // var link = "/projects" + projectLink;

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
        <Link to={"/projects/" + projectLink} className='heading'>
          <div className="content">
            <h2 className="heading">{heading}</h2>
          </div>
        </Link>
      </div>
    )
  }
  
  export default ProjectElement