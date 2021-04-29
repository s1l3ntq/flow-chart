import React, { Component } from 'react'
import { deleteTrack } from '../actions/deleteTrack'
import {connect} from 'react-redux'


export class FaveTrack extends Component {

    handleDelete = () => {
        this.props.deleteTrack(this.props.id)
        
    }

    render() {
        const {name, artist, image, preview_url} = this.props
        return (
            <div className="track-item">
                <h3> {name} </h3>
                <p> {artist} </p>
                <br></br>
                <img className="thumbnail" src={image} alt={name} />
                <br></br>
                <audio controls>
                <source src={preview_url} type="audio/mpeg" />
                </audio>
                <p><button onClick={this.handleDelete}>Delete</button></p>

                
            </div>
        )
    }
}

export default connect(null, { deleteTrack })(FaveTrack)