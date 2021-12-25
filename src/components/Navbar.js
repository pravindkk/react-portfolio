import React from "react"
import ScrollTo from "gatsby-plugin-smoothscroll"
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="navbar-wrapper">
                    <div 
                        className="name"
                        tabIndex = {0}
                        role="button"
                        onClick={() => ScrollTo("#home")}
                    >Pravind.</div>
                    <div className="links-wrapper">
                    <ul className="nav-items">
                        <li className="nav-item">
                            <Link
                                activeClass="navbar-button"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="button"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={70}
                                duration={500}
                            >About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="button"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >Contact
                            </Link>
                        </li>
                    </ul>
                    
                    
                    
                    
                    
                    
                        {/* <button onClick={() => ScrollTo("#projects")}>Projects</button>
                        <button onClick={() => ScrollTo("#about")}>About</button>
                        <button onClick={() => ScrollTo("#contact")}>Contact</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar