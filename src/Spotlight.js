import React from 'react';
import './Spotlight.css';

export default class Spotlight extends React.Component{
    state = {
        loading: true,
        person: null,
    }

    async componentDidMount(){
        const url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=26f07839b664a690dcfc2af24210b786';
        const response = await fetch(url);
        const data = await response.json();

        const spotlight = data.results[Math.floor(Math.random()*data.results.length)];
        const spotlightTitle = spotlight.original_title;
        const spotlightPoster = 'https://image.tmdb.org/t/p/original/' + spotlight.poster_path;
        
        this.setState({
            spotlight: spotlight,
            spotlightTitle : spotlightTitle,
            spotlightPoster : spotlightPoster,
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
        if (!this.state.spotlight){
            return (
                <div id="spotlight">
                    Movie not found
                </div>
            )
        }
        return (
            <div id="spotlight">
                <img id="spotlight-poster" alt="spotlight-poster" src={this.state.spotlightPoster}/>
                <div id="spotlight-title">
                    <img id="spotlight-title-play" src="https://github.com/FrankZiWANG-dev/movieBrowser/blob/main/src/images/Icon.png?raw=true" alt="play-button"/>
                    <div id="spotlight-title-column2">
                        <p id="spotlight-title-tagline">Movie Spotlight </p>
                        <p id="spotlight-title-content">{this.state.spotlightTitle}</p>
                    </div>
                </div>
            </div>
        )
    };        
}
