import React from "react";
import ReactPlayer from 'react-player';
import "./DetailTrailer.css";

export default class DetailTrailer extends React.Component{
    state = {
        loading: true,
        person: null,
    }

    async componentDidMount(){
        const DetailID = sessionStorage.getItem('detailID');
        const url = 'https://api.themoviedb.org/3/movie/'+ DetailID +'/videos?api_key=26f07839b664a690dcfc2af24210b786&language=en-US';
        const response = await fetch(url);
        const data = await response.json();
        const trailerVideo =  'https://www.youtube.com/watch?v=' + data.results[0].key;
        
        this.setState({
            trailerVideo : trailerVideo,
            loading: false 
        });

    }
    
    render() {
        
        if (this.state.loading){
            return (
                <div id="trailer">
                    Loading...
                </div>
            )
        }
        else if (!this.state.trailerVideo){
            return (
                <div id="trailer">
                    Trailer not found
                </div>
            )
        }
        else {
            return (
                <div id="trailer">
                    <ReactPlayer id="player" width="100%"  url = {this.state.trailerVideo}/>
                </div>
            );
        } 
    };      
}