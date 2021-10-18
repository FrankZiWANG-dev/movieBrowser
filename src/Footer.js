import React from "react";
import {Link} from "react-router-dom";
import './Footer.css';

export default function Footer(){
    return (
        <footer>
            <Link to="/"><img alt="home-button" src="https://github.com/FrankZiWANG-dev/movieBrowser/blob/main/src/images/home-button-orange.png?raw=true"/></Link>
            <Link to="/Discover" ><img alt='discover-button' src='https://github.com/FrankZiWANG-dev/movieBrowser/blob/main/src/images/discover-button.png?raw=true'/></Link>
            <Link to="/Profile" ><img alt='profile-button' src='https://github.com/FrankZiWANG-dev/movieBrowser/blob/main/src/images/profile-button-orange.png?raw=true'/></Link>
        </footer>
    );
}