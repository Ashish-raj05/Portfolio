import expressLogo from './image/expressLogo.png'
import mongoLogo from './image/mongoLogo.png'
import cppLogo from './image/cppLogo.png'
import React from "react";
import './skills.css';

export default function Skills() {
    return (
        <>
        <hr id='skills'/>
            <div className="center" >
                <p className='heading' >Skills</p>
                <div className="skills">
                    <div className="subSkill"><i className="fa-brands fa-react"></i>React.js</div>
                    <div className="subSkill"><i className="fa-brands fa-bootstrap"></i>Bootstrap</div>
                    <div className="subSkill"><i className="fa-brands fa-node"></i>Node.js</div>
                    <div className="subSkill"><img src={expressLogo}/>Express.js</div>
                    <div className="subSkill"><img src={mongoLogo}/>mongoDB</div>
                    <div className="subSkill"><i className="fa-brands fa-js"></i>JavaScript</div>
                    <div className="subSkill"><i className="fa-solid fa-database"></i>SQL</div>
                    <div className="subSkill"><i className="fa-brands fa-css3-alt"></i>CSS</div>
                    <div className="subSkill"><i className="fa-brands fa-html5"></i>HTML</div>
                    <div className="subSkill"><i className="fa-brands fa-github"></i>Git/GitHub</div>
                    <div className="subSkill"><img src={cppLogo}/></div>
                    
                </div>
            </div>
        </>
    )
};
