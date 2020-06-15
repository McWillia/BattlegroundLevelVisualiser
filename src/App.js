import React from 'react';
import './App.css';
import HeroSelect from './HeroSelect'
import Visualiser from './Visualiser'

export const LEVEL_COSTS = {
    2:5,
    3:7,
    4:8,
    5:9,
    6:10
}

export default class App extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            heroPicked:"Normal",
            modifier:0,
            levelOnTurn:[0,6]
        }
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleSelectChange(val){
        this.setState({heroPicked:val.target.value})
        switch (val.target.value) {
            case "Normal":
                this.setState({
                    heroPicked:val.target.value,
                    modifier:0
                })
                break;
            case "Millhouse":
                this.setState({
                    heroPicked:val.target.value,
                    modifier:1
                })
                break;
            case "Bartendotron":
                this.setState({
                    heroPicked:val.target.value,
                    modifier:-1,
                })
                break;
            default:

        }
    }


    render(){
        return (
          <div className="App">
            <header className="App-header">
             Hearthstone Battlegrounds level visualiser
            </header>

            <HeroSelect
                val={this.state.heroPicked}
                onChange={this.handleSelectChange}
            />

            <Visualiser
                modifier={this.state.modifier}
                levelOnTurn={this.state.levelOnTurn}
            />

          </div>
        );
    }

}
