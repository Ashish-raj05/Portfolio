import React from "react";
import './projects.css';
import project1 from "./image/project1.png"
import project2 from "./image/project2.png"
import project3 from "./image/project3.png"
import project0 from "./image/project0.png"

export default function Projects() {
    return (
        <div >
            <hr id="projects" />
            <div className="center" >
            <p className="heading" >Projects</p>
                <div className="projects">
                
                <div className="project">
                    
                    <img src={project0} />
                    
                    <div className="ptext">
                        <h2>HostHive</h2>
                            <p><b>JavaScript, EJS, MongoDB</b></p>
                            <p>- This is a online listing website for accommodation details and there prices.</p>
                            <p>- You can also add your own listing with the functionality of edit and delete button.</p>
                             <a href="https://github.com/Ashish-raj05/HostHive">Source Code<i className="fa-brands fa-github"></i></a>
                    </div>
                </div>

                    <div className="project" >
                    
                        <img src={project2} />
                        
                        <div className="ptext">
                            <h2>Amazon Clone</h2>
                                <p><b>HTML, CSS</b></p>
                                <p>- This is a clone of Amazon official web page using the concept of HTML and CSS.</p>
                                <p>- I made this clone to enhance my web designing skill.</p>
                                 <a href="https://github.com/Ashish-raj05/AmazonClone">Source Code<i className="fa-brands fa-github"></i></a>
                        </div>
                    </div>


                    <div className="project">
                    
                        <img src={project1} />
                        
                        <div className="ptext">
                            <h2>Weather Forecasting</h2>
                                <p><b>HTML, CSS, JavaScript, API</b></p>
                                <p>- I have made a Weather Forecasting web page using Weather APIs from where I fetch live data to give accurate details.</p>
                                <p>- You can access weather information for any city by simply entering its name into the search box..</p>
                                 <a href="https://github.com/Ashish-raj05/Weather_Info">Source Code<i className="fa-brands fa-github"></i></a>
                        </div>
                    </div>


                    <div className="project">
                    
                        <img src={project3} />
                        
                        <div className="ptext">
                            <h2>Online Meal</h2>
                                <p><b>HTML, CSS</b></p>
                                <p>- I have made online food odering web page using concept of HTML, CSS. </p>
                                <p>- It contains Navigation functionality to different section like Home, Service.</p>
                                 <a href="https://github.com/Ashish-raj05/OnlineMeal">Source Code<i className="fa-brands fa-github"></i></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}