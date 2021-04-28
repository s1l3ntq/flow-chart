import React, { Component } from 'react'
import { favoriteTrack } from '../actions/favoriteTrack'
import {connect} from 'react-redux'

export class Track extends Component {

    handleFavorites = () => {
        const track = this.props
        this.props.favoriteTrack(track)


    }

    render() {
        const {name, artist, image, preview_url} = this.props
        return (
            <div>
                <h3> {name} </h3>
                <p> {artist} </p>
                <br></br>
                <img className="thumbnail" src={image} alt={name} />
                <br></br>
                <audio controls>
                <source src={preview_url} type="audio/mpeg" />
                </audio>
                <p><button onClick={this.handleFavorites}>Fave</button></p>

                
            </div>
        )
    }
}

export default connect(null, { favoriteTrack })(Track)
