import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context'

class Search extends Component {
    state = {
        trackTitle: ''
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state.trackTitle);
    }

    findTrack = (dispatch, e) => {
        e.preventDefault();
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(res => {
            dispatch({
                type: 'SEARCH_TRACKS',
                payload: res.data.message.body.track_list 
            })
            this.setState({trackTitle: ''});
        })
        .catch(err => console.log(err));
    }
    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value
                    return (
                        <div className="row">
                            <div className="col s12 m12">
                                <div className="card blue-grey darken-1">
                                    <div className="card-content white-text">
                                        <div className='card-title center'> <h3><i className=' material-icons medium prefix'>music_note</i>Search For Any Song </h3></div>
                                        <h5 className='center'>Search any song and get lyrics</h5>
                                    </div>

                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col m12">
                                        <form onSubmit={this.findTrack.bind(this, dispatch)} autoComplete='off'>
                                            <input placeholder="Enter song" type="text"
                                                name='trackTitle'
                                                value={this.state.trackTitle}
                                                onChange={this.onChange}
                                            />
                                            <button className="btn btn-primary center" type="submit" style={{ width: 645 }}>Get The Lyrics<i className="material-icons right">send</i>
                                            </button>

                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Search;