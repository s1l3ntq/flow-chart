import React, { Component } from 'react'

export class Track extends Component {
    render() {
        const {name, artist, image} = this.props
        return (
            <div>
                <h3> {name} </h3>
                <p> {artist} </p>
                <br></br>
                <img className="thumbnail" src={image} alt={name} />
                
            </div>
        )
    }
}

export default Track
