import React from "react";
import Fade from 'react-reveal/Fade'

import { Desktop, Mobile } from "./DetectSize";

import githubIcon from '../images/github.svg'
import instagramIcon from '../images/instagram.svg'

import data from './data/SocialData'

const Contact = () => {
    return (
        <div className="section" id="contact">
            <div className="container">
                <div className="contact-container">
                    <Fade bottom cascade>
                        <h1>Contact</h1>
                    </Fade>
                    <Desktop>
                        <a className="email-link desktop-email" href={`mailto:pravindkummar.k@gmail.com`}>
                            pravindkummar.k@gmail.com
                        </a>
                    </Desktop>
                    <Mobile>
                        <a className="email-link mobile-email" href={`mailto:pravindkummar.k@gmail.com`}>
                            pravindkummar.k@gmail.com
                        </a>
                    </Mobile>
                    <div className="social-icons-container">
                        <a href="https://github.com/pravindkk">
                            <img src={githubIcon} className="social-icons" alt="icon" />
                        </a>
                        <a href="https://www.instagram.com/pravindkk">
                            <img src={instagramIcon} className="social-icons" alt="icon" />
                        </a>
                    </div>

                    
                        {/* {data.social.map((socialLink, index) => (
                        <a
                            key={index}
                            href={socialLink.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={socialLink.img} alt="icons"></img>
                        </a>
                        ))} */}
                    
                </div>
                
            </div>
        </div>
    )
}

export default Contact