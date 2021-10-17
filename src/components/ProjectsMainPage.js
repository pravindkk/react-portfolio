import React from 'react'
import Fade from 'react-reveal/Fade'
import { Desktop, Mobile } from './DetectSize'

import safeEntryMainPage from "../images/project-images/safe-entry-main-page.png"
import safeEntryMapPage from "../images/project-images/safe-entry-map-page.png"

import expenseTrackerMainPage from "../images/project-images/expense-tracker-main-page.png"


const ProjectMainPage = () => {
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
                                <p className="project-paragraph">During the days of COVID-19, the Singapore government had implemented multiple Safety Management Measures (SMM). One of the measures was an initiative called SafeEntry. It allowed the government to better track the movements of Singaporeans by asking them to check in, into the different places that they have been in. The users also had to check out of the places that they visited, on their own accord. I quickly realised that many people forget to check out of the places that they visited.</p>
                            </div>
                            </Fade>
                            <Fade right>
                            <div className="paragraph">
                                <p className="project-paragraph">To rectify this problem I had created an iOS app from Swift that functions the same as SafeEntry. It allows people to check into the different places and checks out of the locations. In addition, it reminds the user to check out from the location that they have checked into if they move at least 300 metres away. People can also bring up a map view to see all the locations that they have checked into. To conserve battery life, the app checks the if the user had moved every 15 minutes. As a result, this app can help the Singapore government to better track the movement of Singaporeans and control the spread of COVID-19.</p>
                                <img className="project-phone-screenshot-right" src={safeEntryMapPage} alt="safe-entry-map-page" />
                            </div>
                            </Fade>
                        </div>
                    </Fade>
                </Desktop>
                <Mobile>
                    <Fade top>
                        <div id="safe-entry-container" style={{
                            width: '365px',
                        }}>
                            <h1 className="project-title mobile">SafeEntry With Map Function</h1>
                            <Fade left>
                            <div className="paragraph mobile">
                            <p className="project-paragraph mobile">During the days of COVID-19, the Singapore government had implemented multiple Safety Management Measures (SMM). One of the measures was an initiative called SafeEntry. It allowed the government to better track the movements of Singaporeans by asking them to check in, into the different places that they have been in. The users also had to check out of the places that they visited, on their own accord. I quickly realised that many people forget to check out of the places that they visited.</p>
                                <img className="project-phone-screenshot mobile" src={safeEntryMainPage} alt="safe-entry-main-page" />
                                
                            </div>
                            </Fade>
                            <Fade right>
                            <div className="paragraph mobile">
                                <p className="project-paragraph mobile">To rectify this problem I had created an iOS app from Swift that functions the same as SafeEntry. It allows people to check into the different places and checks out of the locations. In addition, it reminds the user to check out from the location that they have checked into if they move at least 300 metres away. People can also bring up a map view to see all the locations that they have checked into. To conserve battery life, the app checks the if the user had moved every 15 minutes. As a result, this app can help the Singapore government to better track the movement of Singaporeans and control the spread of COVID-19.</p>
                                <img className="project-phone-screenshot mobile" src={safeEntryMapPage} alt="safe-entry-map-page" />
                            </div>
                            </Fade>
                        </div>
                    </Fade>
                </Mobile>
                <Desktop>
                    <Fade top>
                        <div id="expense-tracker-container">
                            <h1 className="project-title">Expense Tracker</h1>
                            <Fade left>
                                <div className="paragraph">
                                    <img className="project-phone-screenshot-left" src={expenseTrackerMainPage} alt="expense-tracker-main-page" />
                                    <p className="project-paragraph">Before entering my Computer Engineering Course at NTU, I wanted to have some expereince in React and Databases. As such, I created an expense tracker using React. However I soon realised that when utilising the local data storing methods in React, the saved data was gone when i refreshed the page. That is why I moved to a online database to contain the saved trasactions. It required me to learn more on NodeJS and React-Routing. Although there may be better ways of storing the transaction data, I chose this method as I could widen the scope of my knowledge.</p>
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
                            <Fade left>
                                <div className="paragraph mobile">
                                <p className="project-paragraph mobile">Before entering my Computer Engineering Course at NTU, I wanted to have some expereince in React and Databases. As such, I created an expense tracker using React. However I soon realised that when utilising the local data storing methods in React, the saved data was gone when i refreshed the page. That is why I moved to a online database to contain the saved trasactions. It required me to learn more on NodeJS and React-Routing. Although there may be better ways of storing the transaction data, I chose this method as I could widen the scope of my knowledge.</p>
                                    <img className="project-phone-screenshot mobile" src={expenseTrackerMainPage} alt="expense-tracker-main-page" />
                                </div>
                            </Fade>
                        </div>
                    </Fade>
                </Mobile>
            </div>
        </div>
    )
}

export default ProjectMainPage