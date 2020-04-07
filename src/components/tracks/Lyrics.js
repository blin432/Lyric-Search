import React , {Component} from 'react';
import axios from 'axios';
import Spinner from '../layout/Spinner.js';
import {Link}  from 'react-router-dom';

 class Lyrics extends Component{
     state={
         track:{},
         lyrics:{}
     }

     componentDidMount(){
        axios.get(`https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
         .then( res => {
             console.log(res.data)
             this.setState({
                 lyrics:res.data.message.body.lyrics
             });
             return  axios.get(`https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
         })
         .then(res =>{
             console.log(res.data)
             this.setState({
                     track:res.data.message.body.track
             })
         })
         .catch(err => console.log(err));
     }
     render(){
         const {track, lyrics} = this.state;
        if (track ===undefined || lyrics === undefined || Object.keys(track).length ===0 || Object.keys(lyrics).length === 0){
            return <Spinner/>
        }else{
            return (
                <React.Fragment>
                    <Link to ='/' className ="btn btn-dark btn-sm mb-4">Go back</Link>
                    <div className ="card">
                        <h4 className="card-header">
                            {track.track_name} by <span className="text-secondary">{track.artist_name}</span>
                        </h4>
                        <div className="card-body">
                            <p className="card-text">
                                {lyrics.lyrics_body}
                            </p>
                        </div>
                        <p>
                            Explicit:{track.explicit === 0 ? 'no': 'yes'}
                        </p>
                    </div>
                </React.Fragment>
            )
        }
        


     }
}

export default Lyrics;