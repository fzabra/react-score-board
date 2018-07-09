import React, { Component } from 'react';

import ButtonClean from './ButtonClean'

class Match extends Component {
    render() {
        return (
            <div>
                <ButtonClean cleanAll={this.props.cleanAll}/>
                <div className='score'>
                    <h3>{this.props.stadium}</h3>
                    <div>
                        <span>{this.props.day}</span>
                        <span> - </span>
                        <span>{this.props.hour}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Match;