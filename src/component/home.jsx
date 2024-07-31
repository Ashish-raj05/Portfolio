import React from "react";
import './home.css'
import profile from './image/profile.png'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export default function Home() {
    let [text] = useTypewriter({
        words: ['Fullstack Developer', 'Coder'],
        loop: {},
        typeSpeed: 120,
    });
    return (
        <>
        <hr id="home"/>
        <div className="profile" >
            <div className="text">
                <h1>Hi, I'm Ashish Raj</h1>
                <p className="p1">I am a <span className="auto-type" >{text}</span>
                    <span><Cursor /></span>
                </p>
                <p className="p2">I am a full stack developer with expertise in front-end and back-end technologies. Here you'll explore my experience as a developer.</p>
            </div>
            <div>
            <img src={profile} alt="profile" className="image" />

            </div>
           
            <a href="#contact"><button className="rbtn">Let's Contact</button></a>
        </div>
        </>
    )

}