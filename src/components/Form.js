import React, { Component } from 'react';
import { fetchTracks} from '../actions/fetchTracks'
import {connect} from 'react-redux'

class Form extends Component {

    state = {
        name: ""
    }

    handleChange = e => {
        this.setState( prevSate => {
            return {
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.fetchTracks(this.state.name)

        this.setState({
            name: ""
        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                
                <div>   
                    <input type='text' id='name' name='name' placeholder='Search for songs or artist...' value={this.state.name} onChange={this.handleChange} />

                </div>
                <br />
                <input type='submit' value='Search Music' />
            </form>
        )
    }

}
export default connect(null, { fetchTracks })(Form);