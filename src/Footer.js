import React from "react";
import {Link} from "react-router-dom";
import './Footer.css';

export default function Footer(){
    return (
        <footer>
            <Link to="/" style={{textDecoration: 'none', color:'white'}}>Home</Link>
            <Link to="/Discover" style={{textDecoration: 'none', color:'white'}}>Discover</Link>
            <Link to="/Profile" style={{textDecoration: 'none', color:'white'}}>Profile</Link>
        </footer>
    );
}