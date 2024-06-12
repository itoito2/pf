import React from "react";
import photo from './photo.jpg';

function About() {
    return(
        <div className="about-info" id="a">
            <div className="header">
                <div className="my-logo">
                    <img src={photo} />
                </div>
                <div className="personal-data">
                    <span className="fullstack">Full-stack Developer</span>
                    <span className="name">Igor Hajduk</span>
                </div>
            </div>
            <div className="introduction">
                I love programming, I am very creative and take great inspiration from people more experienced than I am. I always give my 100% for every project.
            </div>
        </div>
    )
}

export default About;