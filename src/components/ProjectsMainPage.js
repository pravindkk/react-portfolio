import React, { useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import { Desktop, Mobile } from './DetectSize'

import ScrollTo from "gatsby-plugin-smoothscroll"

import safeEntryMainPage from "../images/project-images/safe-entry-main-page.png"
import safeEntryMapPage from "../images/project-images/safe-entry-map-page.png"

import expenseTrackerMainPage from "../images/project-images/expense-tracker-main-page.png"

import tuiBot1 from '../images/project-images/tuiBot/tuiBot-1.jpg'
import tuiBot2 from '../images/project-images/tuiBot/tuiBot-2.jpg'
import tuiBot3 from '../images/project-images/tuiBot/tuiBot-3.jpg'
import tuiBot4 from '../images/project-images/tuiBot/tuiBot-4.jpg'
import tuiBot5 from '../images/project-images/tuiBot/tuiBot-5.jpg'
import tuiBot6 from '../images/project-images/tuiBot/tuiBot-6.jpg'
import tuiBot7 from '../images/project-images/tuiBot/tuiBot-7.jpg'
import tuiBot8 from '../images/project-images/tuiBot/tuiBot-8.jpg'


class ProjectMainPage extends React.Component {

    constructor(props) {
        super(props)
        
    }

    componentDidMount() {
        console.log(window.location.href)
        const slug = "#" + window.location.href.split('/').pop()
        ScrollTo(slug)
    }

    render() {
        return (
            <div className="section">
                <div className="container">
                    <Desktop>
                        <Fade top>
                            <div id="safe-entry-container">
                                <h1 className="project-title">SafeEntry With Map Function</h1>
                                <Fade left>
                                <div className="paragraph">
                                    <img className="project-phone-screenshot-left" src={safeEntryMainPage} alt="safe-entry-main-page" />
                                    <p className="project-paragraph">During the days of COVID-19, the Singapore government had implemented multiple Safety Management Measures (SMM). One of the measures was an initiative called SafeEntry. It allowed the government to better track the movements of Singaporeans by asking them to check-in, into the different places that they have been in. The users also had to check out the places they visited independently. I quickly realised that many people forget to check out the places they visit.</p>
                                </div>
                                </Fade>
                                <Fade right>
                                <div className="paragraph">
                                    <p className="project-paragraph">To rectify this problem, I created an iOS app from Swift that functions the same as SafeEntry. It allows people to check into the different places and check out the locations. In addition, it reminds the user to check out from the location that they have checked into if they move at least 300 metres away. People can also bring up a map view to see all the locations they have checked into. The app checks if the user has moved every 15 minutes to conserve battery life. As a result, this app can help the Singapore government better track Singaporeans' movements and control the spread of COVID-19.</p>
                                    <img className="project-phone-screenshot-right" src={safeEntryMapPage} alt="safe-entry-map-page" />
                                </div>
                                </Fade>
                            </div>
                        </Fade>
                    </Desktop>
                    <Mobile>
                        
                            <div id="safe-entry-container" style={{
                                width: '365px',
                            }}>
                                <Fade top>
                                <h1 className="project-title mobile" id="safe-entry-title">SafeEntry With Map Function</h1>
                                </Fade>
                                <Fade left>
                                <div className="paragraph mobile">
                                <p className="project-paragraph mobile">During the days of COVID-19, the Singapore government had implemented multiple Safety Management Measures (SMM). One of the measures was an initiative called SafeEntry. It allowed the government to better track the movements of Singaporeans by asking them to check-in, into the different places that they have been in. The users also had to check out the places they visited independently. I quickly realised that many people forget to check out the places they visit.</p>
                                    <img className="project-phone-screenshot mobile" src={safeEntryMainPage} alt="safe-entry-main-page" />
                                    
                                </div>
                                </Fade>
                                <Fade right>
                                <div className="paragraph mobile">
                                    <p className="project-paragraph mobile">To rectify this problem, I created an iOS app from Swift that functions the same as SafeEntry. It allows people to check into the different places and check out the locations. In addition, it reminds the user to check out from the location that they have checked into if they move at least 300 metres away. People can also bring up a map view to see all the locations they have checked into. The app checks if the user has moved every 15 minutes to conserve battery life. As a result, this app can help the Singapore government better track Singaporeans' movements and control the spread of COVID-19.</p>
                                    <img className="project-phone-screenshot mobile" src={safeEntryMapPage} alt="safe-entry-map-page" />
                                </div>
                                </Fade>
                            </div>
                            {/* <ScrollToTop /> */}
                        
                    </Mobile>
                    <Desktop>
                        <Fade left>
                            <div id="expense-tracker-container">
                                <h1 className="project-title">Expense Tracker</h1>
                                <Fade left>
                                    <div className="paragraph">
                                        <img className="project-phone-screenshot-left" src={expenseTrackerMainPage} alt="expense-tracker-main-page" />
                                        <p className="project-paragraph">Before entering my Computer Engineering Course at NTU, I wanted to experience React and Databases. As such, I created an expense tracker using React. However, I soon realised that the saved data was gone when I refreshed the page when utilising the local data storing methods in React. That is why I moved to an online database to contain the saved transactions. It required me to learn more about NodeJS and React-Routing. Although there may be better ways of storing the transaction data, I chose this method to widen the scope of my knowledge.</p>
                                    </div>
                                </Fade>
                            </div>
                        </Fade>
                    </Desktop>
                    <Mobile>
                        <Fade top>
                            <div id="expense-tracker-container" style={{
                                width: '365px',
                            }}>
                                <h1 className="project-title mobile">Expense Tracker</h1>
                                {/* <Fade left> */}
                                    <div className="paragraph mobile">
                                    <p className="project-paragraph mobile">Before entering my Computer Engineering Course at NTU, I wanted to experience React and Databases. As such, I created an expense tracker using React. However, I soon realised that the saved data was gone when I refreshed the page when utilising the local data storing methods in React. That is why I moved to an online database to contain the saved transactions. It required me to learn more about NodeJS and React-Routing. Although there may be better ways of storing the transaction data, I chose this method to widen the scope of my knowledge.</p>
                                        <img className="project-phone-screenshot mobile" src={expenseTrackerMainPage} alt="expense-tracker-main-page" />
                                    </div>
                                {/* </Fade> */}
                            </div>
                            {/* <ScrollToDown /> */}
                        </Fade>
                    </Mobile>













                    <Desktop>
                        <Fade left>
                            <div id="tuibot-container">
                                <h1 className="project-title">tuiBot</h1>
                                <Fade left>
                                    <div className='tuiBot-img-container'>
                                        <img className='tuiBot-img' src={tuiBot1} alt="tuiBot-img" />
                                        <img className='tuiBot-img' src={tuiBot8} alt="tuiBot-img" />
                                        <img className='tuiBot-img' src={tuiBot2} alt="tuiBot-img" />
                                        <img className='tuiBot-img' src={tuiBot3} alt="tuiBot-img" />
                                        <p className="tui-bot-para">With over 50 users in the beta programme of this website, tuiBot has changed the way new students consume online tuition. As a favour to a friend and to expand my horizons, I created an online tuition website. With the website, students have personalised access to courses they registered for. Only the users under the admin group can add new courses, add new videos for courses, and change which courses students are taking. New students can register with the sign-up page, and an OTP will be sent to the student's email for email confirmation. The AWS amplify system handles all sign-in, sign-up, course and video components. Moreover, all the videos are stored on an AWS S3 bucket for easy retrieval of data. All of the UI components were created on Figma just for this project.</p>
                                        <img className='tuiBot-img' src={tuiBot4} alt="tuiBot-img" />
                                        <img className='tuiBot-img' src={tuiBot5} alt="tuiBot-img" />
                                        <img className='tuiBot-img' src={tuiBot6} alt="tuiBot-img" />
                                        <img className='tuiBot-img' src={tuiBot7} alt="tuiBot-img" />
                                    </div>
                                </Fade>
                            </div>
                        </Fade>
                    </Desktop>
                    <Mobile>
                        <Fade left>
                            <div id="tuibot-container">
                                <h1 className="project-title">tuiBot</h1>
                                <Fade left>
                                    <div>
                                        <img className='tuiBot-img' src={tuiBot1} alt="tuiBot-img" />
                                        <img className='tuiBot-img' src={tuiBot8} alt="tuiBot-img" />
                                        <img className='tuiBot-img' src={tuiBot2} alt="tuiBot-img" />
                                        <img className='tuiBot-img' src={tuiBot3} alt="tuiBot-img" />
                                        <p className="tui-bot-para mobile">With over 50 users in the beta programme of this website, tuiBot has changed the way new students consume online tuition. As a favour to a friend and to expand my horizons, I created an online tuition website. With the website, students have personalised access to courses they registered for. Only the users under the admin group can add new courses, add new videos for courses, and change which courses students are taking. New students can register with the sign-up page, and an OTP will be sent to the student's email for email confirmation. The AWS amplify system handles all sign-in, sign-up, course and video components. Moreover, all the videos are stored on an AWS S3 bucket for easy retrieval of data. All of the UI components were created on Figma just for this project.</p>
                                        <img className='tuiBot-img' src={tuiBot4} alt="tuiBot-img" />
                                        <img className='tuiBot-img' src={tuiBot5} alt="tuiBot-img" />
                                        <img className='tuiBot-img' src={tuiBot6} alt="tuiBot-img" />
                                        <img className='tuiBot-img' src={tuiBot7} alt="tuiBot-img" />
                                        
                                    </div>
                                </Fade>
                            </div>
                        </Fade>
                    </Mobile>
                </div>
            </div>
        )
    }
}

export default ProjectMainPage

