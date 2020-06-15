import React from 'react';
import TavernTier from './TavernTier'

export default class Visualiser extends React.Component{

    constructor(props){
        super(props);

    }


    render(){
        return(
            <div>
                {this.props.levelOnTurn.map((turn, i)=>{
                    return(
                        <TavernTier
                            key={"tier" + (i+1)}
                            modifier={this.props.modifier}
                            tier={i+1}
                            turn={turn}
                        />
                    )
                })}
            </div>

        );
    }
}
