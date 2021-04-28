import React, { Component } from 'react'
import { connect } from 'react-redux';
import Track from './Track'
// import { fetchTracks} from '../actions/'

export class List extends Component {
    render() {
        let tracks
        if(this.props.tracks) {
            tracks = this.props.tracks.map((t, index) => <Track key={index} name={t.name} image={t.image} artist={t.artist} />)
        // jobs = this.props.jobs.map( (job, index) => <Job key={index} title={job.title} company={ job.company } location={ job.location } schedule={ job.type } description={ job.description } url={ job.url }/>)
        } else {
            tracks = "Loading..."
        }

        return (
            <div>
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
