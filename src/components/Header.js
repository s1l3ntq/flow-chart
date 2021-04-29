import React from 'react';

class Header extends React.Component {

    constructor(props) { 
        super(props);
    
        this.state = {
            color: "black"
        }
    }

    handleClick= (e) => {
        this.setState({
            color: "blue"
        })
    }
    
    render() {
        
        console.log(this.state.color)
        return <h1 onClick={this.handleClick} style={ {color: this.state.color} }>{ this.props.appname }</h1>
    }
}

export default Header;