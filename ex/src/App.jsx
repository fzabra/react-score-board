import 'modules/bootstrap/dist/css/bootstrap.min.css'
import '../css/style.css'
import React, { Component } from 'react';

import ScoreContainer from './ScoreContainer'

const data ={
    game:{
        stadium: "Vila Belmiro/SP",
        day: "01/07/2018",
        hour: "18h"
    },
    home:{
        name:"Santos"
    },
    visitor:{
        name:"Palmeiras"
    }
}

class App extends Component {
    render() {
        return (
            <div className="container containerStyle">
                <ScoreContainer 
                    home={data.home}
                    game={data.game}
                    visitor={data.visitor}
                />              
            </div>
        );
    }
}

export default App;