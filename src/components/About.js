import React from "react";
import Fade from 'react-reveal/Fade'
import profilePic from '../images/profile.png'
import { Desktop, Mobile } from "./DetectSize";

const About = () => {
    return (
        <div className="section" id="about">
            <div className="container">
                <div className="about-section">
                    <Desktop>
                        <div className="content">
                            <Fade bottom cascade>
                                <h1 className="desktop-about-title">About</h1>
                            </Fade>
                            <p className="desktop-p">
                            Hey there! My name is Pravind. I have some experience in Swift, NodeJs and ReactJs coding. Other than coding, I'm interested in photography and design. Although I do not have alot of experience in different projects, I believe that with my passion for learning, I will be able to keep up and be helpful to other projects in the future.
                            </p>
                        </div>
                        <div className="image-wrapper desktop-img">
                            <img src={profilePic} alt="about"></img>
                        </div>
                    </Desktop>
                    <Mobile>
                        <div className="container">
                            <Fade bottom cascade>
                                <h1 className="mobile-about-title">About</h1>
                            </Fade>
                            <p className="mobile-p" id="mobile-p">
                            Hey there! My name is Pravind. I have some experience in Swift, NodeJs and ReactJs coding. Other than coding, I'm interested in photography and design. Although I do not have alot of experience in different projects, I believe that with my passion for learning, I will be able to keep up and be helpful to other projects in the future.
                            </p>
                            <div className="image-wrapper mobile-img">
                                <img src={profilePic} alt="about"></img>
                            </div> 
                        </div>
                    </Mobile>
                </div>
            </div>
        </div>
    )
}

export default About