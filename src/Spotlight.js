import React from 'react';
import {Link} from "react-router-dom";
import './Spotlight.css';

export default class Spotlight extends React.Component{
    state = {
        loading: true,
    }

    async componentDidMount(){
        const url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=26f07839b664a690dcfc2af24210b786';
        const response = await fetch(url);
        const data = await response.json();

        const spotlight = data.results[Math.floor(Math.random()*data.results.length)];
        const spotlightTitle = spotlight.original_title;
        const spotlightPoster = 'https://image.tmdb.org/t/p/original/' + spotlight.poster_path;
        
        const spotlightID = spotlight.id;
        const url2 = 'https://api.themoviedb.org/3/movie/'+ spotlightID +'/videos?api_key=26f07839b664a690dcfc2af24210b786&language=en-US';
        const response2 = await fetch(url2);
        const data2 = await response2.json();
        const spotlightVideo =  'https://www.youtube.com/watch?v=' + data2.results[0].key;

        sessionStorage.setItem('detailID', spotlightID);
        sessionStorage.setItem('detailTitle', spotlightTitle);
        sessionStorage.setItem('spotlightTitle', spotlightTitle);

        this.setState({
            spotlight: spotlight,
            spotlightTitle : spotlightTitle,
            spotlightPoster : spotlightPoster,
            spotlightVideo: spotlightVideo,
            loading: false 
        });
        
        
    }
    
    render() {
        
        if (this.state.loading){
            return (
                <div id="spotlight">
                    Loading...
                </div>
            )
        }
        else if (!this.state.spotlight){
            return (
                <div id="spotlight">
                    Movie not found
                </div>
            )
        }
        else {
           
            return (
            <Link to={this.state.spotlightTitle}>
            <div id="spotlight">
                <img id="spotlight-poster" alt="spotlight-poster" src={this.state.spotlightPoster}/>
                <div id="spotlight-title">
                    <a href={ this.state.spotlightVideo } target="_blank">
                        <img id="spotlight-title-play" src="https://github.com/FrankZiWANG-dev/movieBrowser/blob/main/src/images/play-button.png?raw=true" alt="play-button"/>
                    </a>
                    <div id="spotlight-title-column2">
                        <p id="spotlight-title-tagline">Movie Spotlight </p>
                        <p id="spotlight-title-content">{this.state.spotlightTitle}</p>
                    </div>
                </div>
            </div>
            </Link>
            )
        } 
    };      
}