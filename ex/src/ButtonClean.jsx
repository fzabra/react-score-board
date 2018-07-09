import React, { Component } from 'react';

class ButtonClean extends Component {
    handleClickZero(){
        this.props.cleanAll();
    }
    render() {
        return (
            <div>
                <button className='btn btn-primary' onClick={this.handleClickZero.bind(this)}>Clean</button>
            </div>
        );
    }
}

export default ButtonClean;