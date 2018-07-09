import React, { Component } from 'react';

import Time from './Time';
import Match from './Match';

class ScoreContainer extends Component {
    constructor () {
        super (),
        this.state = {
            gols_home: 0,
            gols_visitor: 0
        }
    }

    markGolHome() {
        this.setState({
            gols_home: this.state.gols_home + 1,
        })
    }

    markGolVisitor() {
        this.setState({
            gols_visitor: this.state.gols_visitor + 1,
        })
    }

    cleanGols(){
        this.setState({
            gols_home: 0,
            gols_visitor: 0,
        })
    }

    render() {
        return (
            <div className='row boxPlacar'>
                <div className='col-sm-4 text-center'>
                    <h4>Home</h4>
                    <Time name={this.props.home.name}
                          gols={this.state.gols_home}
                          markGol={this.markGolHome.bind(this)}
                          /> 
                </div>
                <div className='col-sm-4 text-center'>
                    <Match cleanAll={this.cleanGols.bind(this)}
                             stadium={this.props.game.stadium}
                             day={this.props.game.day}
                             hour={this.props.game.hour}/>
                </div>
                <div className='col-sm-4 text-center'>
                    <h4>Visitante</h4>
                    <Time name={this.props.visitor.name}
                          gols={this.state.gols_visitor}
                          markGol={this.markGolVisitor.bind(this)}
                          />                
                </div>                
            </div>
        );
    }
}

export default ScoreContainer;