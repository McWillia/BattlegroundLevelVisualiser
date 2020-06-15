import React from 'react';
import Card from 'react-bootstrap/Card'

export default class TavernTurn extends React.Component {

    constructor(props){
        super(props);

    }


    render(){
        let {t, c, s} = this.props;
        return(
            <Card border="info" style={{ width: '18rem' }}>
                <Card.Header>Turn {t}</Card.Header>
                <Card.Body>
                    Cost: {c}<br/>
                    Gold: {t+2 > 10 ? 10 : t+2}<br/>
                    Swabbies played: {s}
                </Card.Body>
                
            </Card>
        )
    }
}
