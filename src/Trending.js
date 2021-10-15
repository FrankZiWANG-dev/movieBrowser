import React from 'react';
import './Trending.css';

export default class Trending extends React.Component{

    state = {
        loading: true,
        person: null,
    }

    async componentDidMount(){
        const url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=26f07839b664a690dcfc2af24210b786';
        const response = await fetch(url);
        const data = await response.json();
        
        this.setState({
            movies: data.results,
            loading: false, 
            poster: 'https://image.tmdb.org/t/p/original/' + data.results[0].poster_path
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
                            <img class='film-image' src={this.state.poster}/>
                            <p>{movie.original_title}</p>
                        </div>
                        ))}
                    
                </div>
            </div>
        )
    };        
};