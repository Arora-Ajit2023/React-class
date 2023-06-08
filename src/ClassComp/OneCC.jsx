import React from 'react';
import { Component } from 'react';

import { ThreeCC } from './ThreeCC';

export class OneCC extends Component {
    state = {
        counter: 0
    }

    onIncrement = (e) => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <div>
                <p>Counter:{this.state.counter}</p>
                <button onClick={this.onIncrement}>Increment</button>
            </div>
        )
    }
}


