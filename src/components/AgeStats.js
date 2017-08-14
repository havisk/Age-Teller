import React, {Component} from 'react';
import congrats from '../assets/congrats.png'

class AgeStates extends Component {
    timeSince(date) {
        let today = new Date().getTime();
        let otherDate = new Date(date).getTime();
        let diff = Math.abs(today - otherDate);

        let days = Math.floor(diff/(1000*3600*24));
        let years = Math.floor(days/365);
        days -=years*365;
        let months = Math.floor(days/31);
        days -= months*31;


        return `${years} years, ${months} months, and ${days} days`

    };

    render() {
        return(
            <div>
                <h3>{this.props.date}</h3>
                <h4>Congrats You are {this.timeSince((this.props.date))}!!</h4>
                <img src={congrats} alt="congrats" className="congrats"/>
            </div>
        )
    };
}


export default AgeStates;