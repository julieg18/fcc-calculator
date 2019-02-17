import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Javascript Calculator</h1>
        <div id="calculator">
          <div id="display"></div>
          <div><button id="clear">C</button></div>
          <div><button id="divide">÷</button></div>
          <div><button id="seven">7</button></div>
          <div><button id="eight">8</button></div>
          <div><button id="nine">9</button></div>
          <div><button id="four">4</button></div>
          <div><button id="five">5</button></div>
          <div><button id="six">6</button></div>
          <div><button id="one">1</button></div>
          <div><button id="two">2</button></div>
          <div><button id="three">3</button></div>
          <div><button id="zero">0</button></div>
          <div><button id="decimal">.</button></div>
          <div><button id="equals">=</button></div>
        </div>
      </div>
    );
  }
}

export default App;
