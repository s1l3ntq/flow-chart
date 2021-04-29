import React, { Component } from 'react'
import { connect } from 'react-redux';
import Track from './Track'
import Form from './Form'
import Header from './Header'
// import { fetchTracks} from '../actions/'

export class List extends Component {
    render() {
    
        let tracks
        if(this.props.tracks) {
            tracks = this.props.tracks.map((t, index) => <Track key={index} name={t.name} image={t.image} artist={t.artists} preview_url={t.preview_url} />)
       } else {
            tracks = "No Songs Yet"
        }

        return (
            <div>
                <h1>Hello</h1>
                <Header />
                <Form />
                {tracks}
               {/* <p>{this.props.tracks[0]}</p> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tracks: state.tracks
    }
}

export default connect(mapStateToProps)(List)
