import React from "react";
import {Link} from "react-router-dom";
import './Nav.css';

function Nav() {
    return(
        <nav>
          <Link to='/'> Home icon </Link>
          <Link to='https://developers.themoviedb.org/'> Powered by The Movie DB </Link>
        </nav>
    );
}

export default Nav;