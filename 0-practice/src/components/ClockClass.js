import React, { Component } from 'react'

export default class ClockClass extends React.Component {
    // doing the same clock but without using hooks (in class components)
    // Super(): It is used to call the constructor of its parent class. 
    // This is required when we need to access some variables of its parent class.
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.variable = setInterval(()=>
            this.tick()
        , 1000);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Time is: {this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}
