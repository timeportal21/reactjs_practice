import React, { Component } from 'react';

class Counter extends Component {
    state = {
        counter: 0
    }

    handleIncrement = () => {
        this.setState({
            count: this.state.count +1
        });
    }
    render() {
        return(
            <div>
                <h1>Counter: {this.state.counter}</h1>
                <button onClick={this.handleIncrement}>increment</button>
            </div>
        )
    }
}

export default Counter;