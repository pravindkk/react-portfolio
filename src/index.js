import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/main.css'
// import App from './App';
import Navbar from './components/Navbar'
import MainPage from './components/Welcome'
import About from './components/About';
import Skills from './components/Skills'
import Contact from './components/Contact'
import Timeline from './components/Timeline'
import Project from './components/Project'
import ProjectMainPage from './components/ProjectsMainPage';

import App from "./App"

import { Route, Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'



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
    <App />
    <Route exact path="/projects" component={ProjectMainPage} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

