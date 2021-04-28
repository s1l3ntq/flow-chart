import React, { Component } from 'react'
import { connect } from 'react-redux';
import Track from './Track'

export class MyFavorites extends Component {
    render() {
        let tracks
        if(this.props.tracks) {
            tracks = this.props.tracks.map((t, index) => <Track key={index} name={t.name} image={t.image} artist={t.artists} preview_url={t.preview_url} />)
       } else {
            tracks = "Loading..."
        }

        return (
            <div>
                {tracks}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tracks: state.favoriteTracks
    }
}

export default connect(mapStateToProps)(MyFavorites)