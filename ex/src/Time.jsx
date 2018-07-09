import React, { Component } from 'react';

import ButtonGol  from './ButtonGol';

class Time extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.gols}</h2>
                <ButtonGol markGol={this.props.markGol}/>
            </div>
        );
    }
}

export default Time;