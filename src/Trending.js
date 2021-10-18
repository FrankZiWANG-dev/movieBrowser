import React from 'react';
import './Trending.css';

export default class Trending extends React.Component{
//fix carousel size images and remove movie from spotlight in it
    state = {
        loading: true,
        person: null,
    }

    async componentDidMount(){
        const url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=26f07839b664a690dcfc2af24210b786';
        const response = await fetch(url);
        const data = await response.json();

        const titles = []; 
        for (let x=0; x<10; x++) {
            titles.push(data.results[x].original_title);
        }
        
        const posters = []; 
        for (let x=0; x<10; x++) {
            posters.push('https://image.tmdb.org/t/p/original/' + data.results[x].poster_path);
        }

        const votes = []; 
        for (let x=0; x<10; x++) {
            votes.push(data.results[x].vote_average);
        }

        const movies = titles.map(function(x, i){
            return {title: x, poster: posters[i], vote: votes[i]};
        })
        
        this.setState({
            movies : movies,
            loading: false, 
        });
    }

    render() {
        if (this.state.loading){
            return (
                <div id="trending">
                    <h2> Trending </h2>
                    <div id="carrousel">
                        Loading...
                    </div>
                </div>
            )
        }
        if (!this.state.movies){
            return (
                <div id="trending">
                    <h2> Trending </h2>
                    <div id="carrousel">
                        Movie not found
                    </div>
                </div>
            )
        }
        return (
            <div id="trending">
                <h2> Trending </h2>
                <div id="carrousel">
                        {this.state.movies.map(movie => (
                        <div class='film-box'>
                            
                            <div class='film-vote'>
                                <span class='imdb'>IMDb</span><br/>
                                <img class='star' alt='star' src='https://github.com/FrankZiWANG-dev/movieBrowser/blob/main/src/images/Group%20262.png?raw=true' />
                                {movie.vote}
                            </div>
                           
                            <img class='film-image' alt='movie-poster' src={movie.poster}/>
                            
                            <div class='film-title'>{movie.title}</div>
                           
                        </div>
                        ))}
                    
                </div>
            </div>
        )
    };        
};