import React from "react";
import {useLocation, Link} from "react-router-dom";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Footer(){
    const location = useLocation();
    console.log (location.pathname);

    if (location.pathname == "/Discover"){
        return (
        <footer>
            <Link to="/Home"><img alt="home-button" src="https://github.com/FrankZiWANG-dev/movieBrowser/blob/main/src/images/home-button.png?raw=true"/></Link>
            <Link to="/Discover" ><img alt='discover-button' src='https://github.com/FrankZiWANG-dev/movieBrowser/blob/main/src/images/discover-button-orange.png?raw=true'/></Link>
            <Link to="/Profile" ><img alt='profile-button' src='https://github.com/FrankZiWANG-dev/movieBrowser/blob/main/src/images/profile-button.png?raw=true'/></Link>
        </footer>
    )}

    else if (location.pathname == "/Profile"){
        return (
        <footer>
            <Link to="/Home"><img alt="home-button" src="https://github.com/FrankZiWANG-dev/movieBrowser/blob/main/src/images/home-button.png?raw=true"/></Link>
            <Link to="/Discover" ><img alt='discover-button' src='https://github.com/FrankZiWANG-dev/movieBrowser/blob/main/src/images/discover-button.png?raw=true'/></Link>
            <Link to="/Profile" ><FontAwesomeIcon icon={faUser} id='user-icon'/></Link>
        </footer>
    )}
    
    else if (location.pathname == "/Home") {
        return (
        <footer>
            <Link to="/Home"><img alt="home-button" src="https://github.com/FrankZiWANG-dev/movieBrowser/blob/main/src/images/home-button-orange.png?raw=true"/></Link>
            <Link to="/Discover" ><img alt='discover-button' src='https://github.com/FrankZiWANG-dev/movieBrowser/blob/main/src/images/discover-button.png?raw=true'/></Link>
            <Link to="/Profile" ><img alt='profile-button' src='https://github.com/FrankZiWANG-dev/movieBrowser/blob/main/src/images/profile-button.png?raw=true'/></Link>
        </footer>
    )}

    else {
        return (
        <footer>
            <Link to="/Home"><img alt="home-button" src="https://github.com/FrankZiWANG-dev/movieBrowser/blob/main/src/images/home-button.png?raw=true"/></Link>
            <Link to="/Discover" ><img alt='discover-button' src='https://github.com/FrankZiWANG-dev/movieBrowser/blob/main/src/images/discover-button-orange.png?raw=true'/></Link>
            <Link to="/Profile" ><img alt='profile-button' src='https://github.com/FrankZiWANG-dev/movieBrowser/blob/main/src/images/profile-button.png?raw=true'/></Link>
        </footer>
    )}
}