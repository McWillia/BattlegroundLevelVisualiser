import React from 'react';
import {LEVEL_COSTS} from './App'
import TavernTurn from './TavernTurn'

export default class TavernTier extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            levelOn:-1,
            startingCost:LEVEL_COSTS[this.props.tier+1+this.props.modifier]
        }
    }


    render(){
        let values =[]
        let turn = this.props.turn+1;
        for (var i = this.state.startingCost; i >= 0 ; i--) {
            values.push({
                t:turn,
                c:i,
                s:0
            })

            turn++;
        }

        return(
            <table>
                <tbody>
                    <tr>
                        <td>{this.props.tier}</td>
                        <td>{values.map((val)=>{
                            return(
                                <TavernTurn
                                    t={val.t}
                                    c={val.c}
                                    s={val.s}
                                />
                            )
                        })}</td>
                    </tr>
                </tbody>
            </table>

        );
    }
}
