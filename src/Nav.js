import React from "react";
import {Link} from "react-router-dom";
import './Nav.css';

function Nav() {
    return(
        <nav>
          <Link to='/'><span style={{textDecoration: 'none', color:'#FF8F71', fontSize:'120%', textAlign:'left' }}>Movie</span><span style={{textDecoration: 'none', color:'white', fontSize:'120%'}}>Browser</span></Link>
          <a href="https://www.themoviedb.org/" target="_blank" style={{textDecoration: 'none', color:'white', textAlign:'right'}}> Powered by MovieDatabase </a>
        </nav>
    );
}

export default Nav;