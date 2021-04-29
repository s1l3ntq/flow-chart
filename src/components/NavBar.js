import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <ul className="navbar-list">
                    <div className="navbar-complete">
                        <li name="/" className="navbar-item"><Link to="/">Home</Link></li>
                        <div className="text-nav-item">
                            <li name="/about" className="navbar-item"><Link to="/about">About FlowChart</Link></li>
                            <li name="/tracks" className="navbar-item"><Link to="/tracks">Search Music</Link></li>
                            <li name="/favorites" className="navbar-item"><Link to="/favorites">My Favorites</Link></li>
                        </div>
                    </div>
                </ul>
            </div>
        )
    }
}

export default NavBar
