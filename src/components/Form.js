import React, { Component } from 'react';

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
        this.props.addTrack(this.state)

        this.setState({
            name: ""
        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <h2>Search Song or Playlist</h2>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type='text' id='name' name='name' value={this.state.name} onChange={this.handleChange} />

                </div>
                <br />
                <input type='submit' value='Search Music' />
            </form>
        )
    }

}

export default Form;