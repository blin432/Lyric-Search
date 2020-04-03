import React, { Component } from 'react';
import {Consumer} from '../../context.js';

class Tracks extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    console.log(value);
                    return <h1>asdf</h1>
                }}
            </Consumer>
        )
    }
}

export default Tracks;