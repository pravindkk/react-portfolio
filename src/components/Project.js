import React from "react";
import Fade from 'react-reveal/Fade';
import ProjectElement from "./Elements/ProjectElement";
import { Desktop, Mobile } from "./DetectSize";

import data from './data/ProjectData'


const Project = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="project-wrapper">
                    <Fade bottom>
                        <h1 className="project-title">Projects</h1>
                    </Fade>
                    <Desktop>
                        <div className="grid">
                            <Fade bottom cascade>
                                {data.projects.map((project, index) => (
                                    <ProjectElement
                                        key={index}
                                        heading={project.title}
                                        paragraph={project.para}
                                        imgUrl={project.imageSrc}
                                        projectLink={project.url}
                                    ></ProjectElement>
                                ))}
                            </Fade>
                        </div>
                    </Desktop>
                    <Mobile>
                        <div className="mobile-project-grid">
                            <Fade bottom cascade>
                                {data.projects.map((project, index) => (
                                    <ProjectElement
                                        key={index}
                                        heading={project.title}
                                        paragraph={project.para}
                                        imgUrl={project.imageSrc}
                                        projectLink={project.url}
                                    ></ProjectElement>
                                ))}
                            </Fade>
                        </div>
                    </Mobile>
                </div>
            </div>
        </div>
    )
}

export default Project