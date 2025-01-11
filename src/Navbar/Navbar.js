import React, { useState } from 'react';
import './Navbar.css';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Workspace from '../Workspace/Workspace';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Achievements from '../Achievements/Achievements';
export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <Router>
                <div className="mobile-navbar">
                    <div className='icon-and-name'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="currentColor"
                        className="bi bi-list"
                        viewBox="0 0 16 16"
                        onClick={toggleMenu}
                    >
                        <path
                            fillRule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                        />
                    </svg>
                    <h3>Anjaneya Kumar Ramisetty</h3>
                    </div>
                    
                    <ul className={menuOpen ? 'active' : ''}>
                        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                        <li><Link to="/skills" onClick={toggleMenu}>Skills</Link></li>
                        <li><Link to="/workspace" onClick={toggleMenu}>Workspace</Link></li>
                        <li><Link to='/achivements' onClick={toggleMenu}>Achivements</Link></li>
                        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
                    </ul>
                </div>

                <div className="navbar">
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/skills">Skills</Link></li>
                            <li><Link to="/workspace">Workspace</Link></li>
                            <li><Link to='/achivements'>Achivements</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </nav>
                </div>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/workspace" element={<Workspace />} />
                    <Route path='/achivements' element={<Achievements />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>
        </>
    );
}
