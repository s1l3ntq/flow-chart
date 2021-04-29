import React, { Component } from 'react'
import { connect } from 'react-redux';
import FaveTrack from './FaveTrack'
import Header from './Header'
import Form from './Form'

class MyFavorites extends Component {
    render() {
        let tracks
        if(this.props.tracks) {
            tracks = this.props.tracks.map((t, index) => <FaveTrack key={index} id={t.id} name={t.name} image={t.image} artist={t.artists} preview_url={t.preview_url} />)
       } else {
            tracks = "No Faves Yet"
        }

        return (
            <div>
                <Header />
                <Form />
                {tracks}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("mapStateToProps")
    return {
        tracks: state.favoriteTracks
    }
}

export default connect(mapStateToProps)(MyFavorites)