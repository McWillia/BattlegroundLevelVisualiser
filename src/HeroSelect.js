import React from 'react';


export default class HeroSelect extends React.Component{

    constructor(props){
        super(props);

    }


    render(){
        return(
            <select value={this.props.val} onChange={this.props.onChange}>
                <option value="Normal">Normal</option>
                <option value="Millhouse">Millhouse</option>
                <option value="Bartendotron">Bartendotron</option>
            </select>
        );
    }
}
