import React, { Component } from 'react'
import { deleteTrack } from '../actions/deleteTrack'
import {connect} from 'react-redux'


export class FaveTrack extends Component {

    constructor(props) {
        super(props)
        this.state = {
            likes: 0
        }
    }

    handleDelete = () => {
        this.props.deleteTrack(this.props.id)
        
    }

    handleLike = () => {
        this.props.addLikes(this.props.id)
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
                <p><button onClick={this.handleLike}>Likes</button></p>

                
            </div>
        )
    }
}

export default connect(null, { deleteTrack })(FaveTrack)