import React from "react";
import photo from './photo.jpg';
import menuIcon from './menu-svgrepo-com.svg'

function NavBar() {
    return(
        <nav>
            <div className="nav-logo">
                <img src={photo} />
                <span>Igor Hajduk</span>
            </div>
            <div className="nav-links">
                <ul>
                    <li><a href="#a">Home</a></li>
                    <li><a href="#b">Projects</a></li>
                    <li><a href="#c">Skills</a></li>
                    <li><a href="mailto: contact.me@gmail.com">Contact</a></li>
                </ul>
                <img id="menu-icon" src={menuIcon} />
            </div>
        </nav>
    )
}

export default NavBar;