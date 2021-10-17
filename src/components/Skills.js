import React from 'react'
import data from './data/SkillsData'
import { Desktop, Mobile } from './DetectSize'
import Fade from 'react-reveal/Fade'

const Skills = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="skills">
                    <Fade bottom>
                        <Desktop>
                            <div className="skills-title desktop-skills-title">
                                <h1>Skills</h1>
                            </div>
                        </Desktop>
                        <Mobile style="opacity:0;">
                            <div className="skills-title mobile-skills-title">
                                <h1>Skills</h1>
                            </div>
                        </Mobile>
                    </Fade>
                    <Fade bottom>
                    <Desktop>
                        <div className="skill-container desktop-skills">
                            {data.skills.map((skill, index) => (
                                <div className="skill" key={index}>
                                    <img src={skill.img} alt="css" />
                                    <p>{skill.para}</p>
                                </div>
                            ))}
                        </div>
                    </Desktop>
                    <Mobile>
                        <div className="skill-container mobile-skills">
                            {data.skills.map((skill, index) => (
                                <div className="skill" key={index}>
                                    <img src={skill.img} alt="css" />
                                    <p>{skill.para}</p>
                                </div>
                            ))}
                        </div>
                    </Mobile>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Skills