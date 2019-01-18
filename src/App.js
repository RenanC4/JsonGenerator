import React, { Component } from 'react';

import './App.css';
import { red } from 'ansi-colors';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header" Style={{backgroundColor:red}}>
         header
        </div>
      </div>
    );
  }
}

export default App;
