import React, { Component } from 'react';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="NavBar">
                <input />
             <button> Sign in/up </button>
             <button> My Account </button>
             <button> Shop </button>
        
            </div>
        );
    };
}

export default NavBar;