import React, { Component } from 'react'

export default class WelcomeClass extends Component {
    render() {
        return (
            <h2>
                helo, {this.props.name}
            </h2>
        )
    }
}
