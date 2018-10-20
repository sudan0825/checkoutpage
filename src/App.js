import React, { Component } from 'react';
import './App.css';
import Checkout from './containers/Checkout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <main>
          <Checkout/>
      </main>
      </div>
    );
  }
}

export default App;
