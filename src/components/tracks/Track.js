import React from 'react'
import { Link } from 'react-router-dom';

const Track = (props) => {
    const {track} = props;
    return (
        <div className='col s12 m12'>
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <small className="card-title"><i className='fas fa-user'></i> {track.artist_name}</small>
                    <h5 className="card-title"> <i className="fas fa-play-circle"></i> {track.track_name}</h5>
                   <strong className=''><i className="fas fa-music"></i> {" "}{track.album_name}</strong>
                </div>
                <div className="card-action">
                    <Link to={`lyrics/track/${track.track_id}`} className='waves-effect btn btn-small'>View Lyrics</Link>
                </div>
            </div>
        </div>
    )
}

export default Track;