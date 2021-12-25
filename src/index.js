import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/main.css'
// import App from './App';
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import About from './components/About';
import Skills from './components/Skills'
import Contact from './components/Contact'
import Timeline from './components/Timeline'
import Project from './components/Project'
import ProjectMainPage from './components/ProjectsMainPage';

// import App from "./App"

import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

// import ScrollToTop from './components/atoms/ScrollToTop'



ReactDOM.render(
  <React.StrictMode>

    {/* <App /> */}
    <BrowserRouter>
    {/* <Navbar />
    <MainPage />
    <About />
    <Skills />    
    <Timeline />
    <Contact />
    <Project /> */}
    {/* <App /> */}
    <Route exact path="/" component={Navbar} />
    <Route exact path="/" component={Welcome} />
    <Route exact path="/" component={About} />
    <Route exact path="/" component={Skills} />
    <Route exact path="/" component={Project} />
    <Route exact path="/" component={Timeline} />
    <Route exact path="/" component={Contact} />
    {/* <ScrollToTop> */}
    <Route exact path="/projects/:id" component={ProjectMainPage} />
    {/* <ScrollToTop /> */}
    {/* </ScrollToTop> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

