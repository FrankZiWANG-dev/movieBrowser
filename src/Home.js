import react from "react";
import Nav from './Nav.js';
import Footer from './Footer.js';
import './Home.css';

export default function Home() {
    return (
        <>
        <Nav/>
        <div id="spotlight">
            <div id="spotlight-label">
                Movie Spotlight
            </div>
        </div>
        <div id="trending">
            <h2> Trending </h2>
            <div id="carrousel">
                <div id='carrousel-images'>
                    <div id='imdb-rating'>
                        IMDb rating
                    </div>
                    Carrousel images
                    <div id='carrousel-film-title'>
                        Film title
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
        </>
    );
}