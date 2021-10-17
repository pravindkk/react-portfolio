import React, { Component } from "react";
import Fade from "react-reveal/Fade"
import { Desktop, Mobile } from "./DetectSize";
import ReactPlayer from "react-player";


import welcomeVideo from '../images/welcome.mp4'
import welcomegif from '../images/welcome.gif'


const Welcome = () => {
    return (
        <div className="section" id="home">
            <div className="container">
                <div className="header-wrapper">
                    {/* <video autoplay loop muted playsinline src={welcomeVideo}></video> */}
                    {/* <video src={welcomeVideo} autoPlay typeof="video/mp4"/> */}
                    {/* <video controls autoplay>
                        <source src="../images/welcome.mp4" type="video/mp4" />
                    </video> */}
                    {/* <ReactPlayer
                    url={'../images/welcome.mp4'}
                    playing={true}
                    width={500}
                    height={500}
                    /> */}
                    <img src={welcomegif} className="welcome-gif" alt="hello" />
                    <Fade bottom>
                        <Desktop>
                            <div className="desktop-css">
                                <h2>I'm Pravind</h2>
                            </div>
                        </Desktop>
                        <Mobile>
                            <div className="mobile-css">
                                <h2>I'm Pravind</h2>
                            </div>
                        </Mobile>
                        
                    </Fade>
                    
                    <Fade bottom>
                        <Desktop>
                            <div className="desktop-css">
                                <a
                                    href={`mailto:${
                                    "pravindkummar.k@gmail.com"
                                    }`}
                                    className="primary-btn desktop-css"
                                >
                                    connect with me
                                </a>
                            </div>
                        </Desktop>
                        <Mobile>
                            <div className="mobile-css">
                                <a
                                    href={`mailto:${
                                    "pravindkummar.k@gmail.com"
                                    }`}
                                    className="primary-btn mobile-css"
                                >
                                    connect with me
                                </a>
                            </div>
                        </Mobile>
                        
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Welcome