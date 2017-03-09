import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    render() {
        return (
            <div>
                <button onClick={() => {this.setState({name: 'flowkater'});}}>Click Me</button>
                <h1>Hello!!@!! {this.state.name}</h1>
            </div>
        );
    }
}

export default App;