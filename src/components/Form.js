import React, { Component } from 'react';

class Form extends Component {

    render() {
        return(
            <form>
                <h2>Search Song or Playlist</h2>
                <div>
                    <label>Name</label>
                    <input type='text' />

                </div>
                <br />
                <input type='submit' value='Search Music' />
            </form>
        )
    }

}

export default Form;