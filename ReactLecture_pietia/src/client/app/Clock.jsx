import React from 'react';
import DigitalDisplay from './DigitalDisplay.jsx';

class Clock extends React.Component { 
    constructor(props) { 
        super(props); 
        this.launchClock();
        this.state = {
            currentTime: (new Date()).toLocaleString()
        } 
    }
    launchClock() { 
        setInterval(()=>{ 
            console.log('Updating time...');
            this.setState({ currentTime: (new Date()).toLocaleString() }) },
            1000);
    } 
    render() { 
        return <div><DigitalDisplay time={this.state.currentTime}/></div> 
    } 
}

export default Clock;



//do lifecycle events later 5
//do event handling later 6
