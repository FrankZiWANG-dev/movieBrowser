import React from "react";
import "./DetailInfo.css";

export default class DetailInfo extends React.Component{
    state = {
        loading: true,
        person: null,
    };

    async componentDidMount(){
        const DetailID = sessionStorage.getItem('detailID');
        const url = 'https://api.themoviedb.org/3/movie/'+ DetailID +'?api_key=26f07839b664a690dcfc2af24210b786&language=en-US';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({
            information : data,
            loading: false 
        });
    }
    
    render() {
        
        if (this.state.loading){
            return (
                <div id="DetailInfo">
                    Loading...
                </div>
            )
        }
        else if (!this.state.information){
            return (
                <div id="DetailInfo">
                    Information not found
                </div>
            )
        }
        else {
            return (
                <div id="DetailInfo">
                    <div>{this.state.information.original_title}</div>
                    <div>{this.state.information.runtime}</div>
                    <div>{this.state.information.vote_average}</div>
                    <div>{this.state.information.release_date}</div>
                    <div>{this.state.information.genres.map(genre => (
                        <div>{genre.name}</div>
                    ))}</div>
                    <div>{this.state.information.overview}</div>
                </div>
            );
        }; 
    };      
};
