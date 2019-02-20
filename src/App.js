import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="body">
        <h1>Javascript Calculator</h1>
        <Calculator/>
      </div>
    );
  }
}

class Calculator extends React.Component {
  render() {
    return (
        <div id="calculator">
          <div id="display"></div>
          <div id="buttons">
            <button class="long-btns" id="clear" data-action="clear">AC</button>
            <button class="sq-btns key-operator" id="divide" data-action="divide">÷</button>
            <button class="sq-btns key-operator" id="multiply" data-action="multiply">X</button>
            <button class="sq-btns num-btns" id="seven">7</button>
            <button class="sq-btns num-btns" id="eight">8</button>
            <button class="sq-btns num-btns" id="nine">9</button>
            <button class="sq-btns key-operator" id="subtract" data-action="sutract">-</button>
            <button class="sq-btns num-btns" id="four">4</button>
            <button class="sq-btns num-btns" id="five">5</button>
            <button class="sq-btns num-btns" id="six">6</button>
            <button class="sq-btns key-operator" id="add" data-action="add">+</button>
            <button class="sq-btns num-btns" id="one">1</button>
            <button class="sq-btns num-btns" id="two">2</button>
            <button class="sq-btns num-btns" id="three">3</button>
            <button class="tall-btns num-btns" id="zero">0</button>
            <button class="sq-btns" id="decimal" data-action="decimal">.</button>
            <button class="tall-btns" id="equals key-equal" data-action="calculate">=</button>
          </div>
        </div>
    );
  }
}

export default App;
