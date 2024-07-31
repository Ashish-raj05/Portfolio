import React from "react";
import './footer.css';

export default function Footer(){
    return (
        <>
         <div className="f-info">
        <div className="f-info-socials">
        <a href="https://github.com/Ashish-raj05"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/ashish-raj-482a47255/"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com/ashishraj6219/?hl=en"><i className="fa-brands fa-instagram"></i></a>
        </div>
        <div className="f-info-brand"> &copy; Copyright, All rights reserved!</div>
        
    </div>
        </>
    );
}