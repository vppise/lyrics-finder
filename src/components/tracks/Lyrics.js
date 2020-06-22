import React, { Component, Fragment } from 'react'
import axios from 'axios';
import Spinner from '../layouts/Spinner'
import { Link } from 'react-router-dom';

 class Lyrics extends Component {
    state = {
        track: {},
        lyrics: {}
    }

    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(res => {
            console.log(res.data)
            this.setState({lyrics: res.data.message.body.lyrics});
            // localStorage.setItem('cmd_id',res.data.message.body.track.commontrack_id);
        })
        return axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(res => {
            console.log(res.data);
            this.setState({track: res.data.message.body.track})
            localStorage.setItem('album_id',res.data.message.body.track.album_id);
        })

        .catch(err => console.log(err));
    }


    render() {
        const {track, lyrics} = this.state;
       if(track === undefined || lyrics === undefined || Object.keys(track).length === 0 || Object.keys(lyrics).length === 0){
            return <Spinner />
       } else{
            return (
                <Fragment>
                    <br></br>
                    <Link to='/' className='btn btn-small'><i className='material-icons left'>arrow_back</i>Back to Search</Link>
                    <br/>
                    <div className='col m12'>
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <strong className='card-title'>{track.track_name}</strong> <h5>By {track.artist_name}</h5>
                    <p>{lyrics.lyrics_body}</p>
                </div>
                
                {/* <div className="card-action">
                    <Link to={`lyrics/track/${track.track_id}`} className='waves-effect btn btn-primary'>View Lyrics</Link>
                </div> */}
            </div>
        </div>
                </Fragment>
            )
       }
    }
}

export default Lyrics;