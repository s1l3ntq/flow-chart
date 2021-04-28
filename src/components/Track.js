import React, { Component } from 'react'

export class Track extends Component {
    render() {
        const {name} = this.props
        return (
            <div>
                <p> {name} </p>
            </div>
        )
    }
}

export default Track
