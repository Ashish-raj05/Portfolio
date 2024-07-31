
import { useState } from 'react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {

  let [isMenu, setIsMenu] = useState(false);
let toggleLike = () =>{
    setIsMenu(!isMenu);
};
 
  
  return (
    <>
      <div className='nav'>
        <a href="/" className='logoAcnchor'><label className='logo'>Portfolio</label></a>
        <button onClick={toggleLike} className='menuBtn'>{ isMenu ? <i className="fa-solid fa-xmark"></i> : <i className= "fa-solid fa-bars"></i>}</button>
        <nav className={isMenu ? "drop navBar" : "navBar"}>
          <div className='link'>
            <a className="navlink" href="#home"><li>Home</li></a>
            <a className="navlink" href="#skills"><li>Skills</li></a>
            <a className="navlink" href="#projects"><li>Projects</li></a>
          </div>
          <div className='media'>
            <div className='icons'>
            <a href="https://github.com/Ashish-raj05"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/ashish-raj-482a47255/"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com/ashishraj6219/?hl=en"><i className="fa-brands fa-instagram"></i></a>
            </div>
            <a href="#contact"><button className='btn'>Let's Contact</button></a>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
