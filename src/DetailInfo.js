import React from "react";
import "./DetailInfo.css";

export default class DetailInfo extends React.Component{
    state = {
        loading: true,
    };

    async componentDidMount(){
        const DetailID = sessionStorage.getItem('detailID');
        const url = 'https://api.themoviedb.org/3/movie/'+ DetailID +'?api_key=26f07839b664a690dcfc2af24210b786&language=en-US';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        const date = new Date (data.release_date);
            const dateMonthIndex = date.getMonth();
            const months = {
                0: 'January',
                1: 'February',
                2: 'March',
                3: 'April',
                4: 'May',
                5: 'June',
                6: 'July',
                7: 'August',
                8: 'September',
                9: 'October',
                10: 'November',
                11: 'December'
              }
            const dateMonth = months[dateMonthIndex];
            const dateDay = date.getDate();
            const dateYear = date.getFullYear();
        const formattedDate = dateMonth + ' ' + dateDay + ', ' + dateYear;

        this.setState({
            information : data,
            date: formattedDate,
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
                    <h3 id='DetailTitle'>{this.state.information.original_title}</h3>
                    <div id="DetailSection1">
                        <div id='DetailRuntime'>
                            <img id='clock' alt='clock' src='https://github.com/FrankZiWANG-dev/movieBrowser/blob/main/src/images/clock.png?raw=true' />
                                {this.state.information.runtime} minutes
                        </div>
                        <div id='DetailVote'>
                        <img id='grey-star' alt='grey-star' src='https://github.com/FrankZiWANG-dev/movieBrowser/blob/main/src/images/star-grey.png?raw=true' />
                            {this.state.information.vote_average} (IMDb)
                        </div>
                    </div>
                    <hr/>
                    <div id='DetailSection2'>
                        <div id='DetailDate'>
                            <h4>Release date</h4>
                            {this.state.date}
                        </div>
                        <div id='DetailGenre'>
                            <h4>Genre</h4>
                            {this.state.information.genres.map(genre => (
                            <div>{genre.name}</div>
                            ))}
                        </div>
                    </div>
                    <hr/>
                </div>
            );
        }; 
    };      
};
