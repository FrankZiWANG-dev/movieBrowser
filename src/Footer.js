import React from "react";
import {Link} from "react-router-dom";
import './Footer.css';

export default function Footer(){
    return (
        <footer>
            <Link to="/">Home</Link>
            <Link to="/Discover">Discover</Link>
            <Link to="/Profile">Profile</Link>
        </footer>
    );
}