import React from 'react'
import {Desktop, Mobile } from './components/DetectSize'

import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import About from './components/About';
import Skills from './components/Skills'
import Contact from './components/Contact'
import Timeline from './components/Timeline'
import Project from './components/Project'
import { Route } from 'react-router-dom'

const App = () => {
    return (
        <div className="main">
            <Desktop>
                <div className="App">
                    <Route exact path="/" component={Navbar} />
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/" component={About} />
                    <Route exact path="/" component={Skills} />
                    <Route exact path="/" component={Project} />
                    <Route exact path="/" component={Timeline} />
                    <Route exact path="/" component={Contact} />
                </div>
            </Desktop>
            <Mobile>
                <div className="AppMobile" style={{
                    width: "500px",
                }}>
                    <Route exact path="/" component={Navbar} />
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/" component={About} />
                    <Route exact path="/" component={Skills} />
                    <Route exact path="/" component={Project} />
                    <Route exact path="/" component={Timeline} />
                    <Route exact path="/" component={Contact} />
                </div>
            </Mobile>
        </div>
    )
}

export default App