import React, { Component } from 'react';

class ButtonGol extends Component {
    handleClick(event){
        //event.preventDefault();
        this.props.markGol();
    }
    render() {
        return (
            <div>
                <button className='btn btn-primary' onClick={this.handleClick.bind(this)}>Gol</button>
            </div>
        );
    }
}

export default ButtonGol;