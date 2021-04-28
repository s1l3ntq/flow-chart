import React, { Component } from 'react'

export class Track extends Component {
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

                
            </div>
        )
    }
}

export default Track
