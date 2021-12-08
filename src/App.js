import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

class Counter extends Component {
  state = {
    count: 0
  };
  handleClick = () => {
    this.setState((prevState, { count }) => ({
      count: prevState.count + 1 
    }));
  };
  render() {
    return <button class="button1" onClick={this.handleClick}>Click Me {this.state.count}</button>;
  }
}

export default App;
