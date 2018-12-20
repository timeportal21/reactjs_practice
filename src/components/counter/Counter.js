import React, { Component } from 'react';

class Counter extends Component {
    state = {
        counter: 0
        
    };

    handleIncrement = () => {
        this.setState({ 
            counter: this.state.counter +1 
        });
    };

    handleDecrement = () => {
        let counter = this.state.counter -1;
        if(counter< 0){
            counter = 0;
        } 
        this.setState({
            counter: counter
        })
    }

    render() {
        return(
            <div>
                <h1>Counter: {this.state.counter}</h1>
                <button onClick={this.handleIncrement}>increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
            </div>
        )
    }
}

export default Counter;