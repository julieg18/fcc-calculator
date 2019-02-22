import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      operations: [],
    }
  }

  render() {
    return (
      <div id="body">
        <h1>Javascript Calculator</h1>
        <div id="calculator">
          <Display/>
          <Buttons/>
        </div>
      </div>
    );
  }
}

class Display extends React.Component {
  render() {
    return (
      <div id="display"></div>
    )
  };
}

class Buttons extends React.Component {
  render() {
    return (
      <div id="buttons" className="buttons">
        <button className="long-btns" id="clear">AC</button>
        <button className="sq-btns" id="divide">÷</button>
        <button className="sq-btns" id="multiply">X</button>
        <button className="sq-btns num-btns" id="seven">7</button>
        <button className="sq-btns num-btns" id="eight">8</button>
        <button className="sq-btns num-btns" id="nine">9</button>
        <button className="sq-btns" id="subtract">-</button>
        <button className="sq-btns num-btns" id="four">4</button>
        <button className="sq-btns num-btns" id="five">5</button>
        <button className="sq-btns num-btns" id="six">6</button>
        <button className="sq-btns" id="add">+</button>
        <button className="sq-btns num-btns" id="one">1</button>
        <button className="sq-btns num-btns" id="two">2</button>
        <button className="sq-btns num-btns" id="three">3</button>
        <button className="tall-btns num-btns" id="zero">0</button>
        <button className="sq-btns" id="decimal">.</button>
        <button className="tall-btns" id="equals">=</button>
      </div>
    )
  }
}

/*class Calculator extends React.Component {
  constructor(props) {
    super(props)
    //s);
  }
  
    handleClick(keyType) {   
    if (keyType === "clear") {
      console.log("clear");
    } else if (keyType === "divide") {
      console.log("divide");
    } else if (keyType === "multiply") {
      console.log("multiply");
    } else if (keyType === "seven") {
      console.log("seven");  
    } else if (keyType === "eight") {
      console.log("eight");
    } else if (keyType === "nine") {
      console.log("nine");
    } else if (keyType === "subtract") {
      console.log("subtract");
    } else if (keyType === "four") {
      console.log("four");
    } else if (keyType === "five") {
      console.log("five");
    } else if (keyType === "six") {
      console.log("six");
    } else if (keyType === "add") {
      console.log("add");
    } else if (keyType === "one") {
      console.log("one");
    } else if (keyType === "two") {
      console.log("two");
    } else if (keyType === "three") {
      console.log("three");
    } else if (keyType === "zero") {
      console.log("zero");
    } else if (keyType === "decimal") {
      console.log("subtract");
    } else if (keyType === "subtract") {
      console.log("subtract");
    }
  };
    
  render() {
    return (
        <div id="calculator" className="calculator">
          <div id="display"></div>
          <div id="buttons" className="buttons">
            <button className="long-btns" id="clear" data-action="clear">AC</button>
            <button onClick={)} className="sq-btns" id="divide" data-action="divide">÷</button>
            <button onClick={y")} className="sq-btns" id="multiply" data-action="multiply">X</button>
            <button onClick={)} className="sq-btns num-btns" id="seven">7</button>
            <button onClick={)} className="sq-btns num-btns" id="eight">8</button>
            <button onClick={)} className="sq-btns num-btns" id="nine">9</button>
            <button onClick={t")} className="sq-btns" id="subtract" data-action="sutract">-</button>
            <button onClick={)} className="sq-btns num-btns" data-action="number" id="four">4</button>
            <button onClick={)} className="sq-btns num-btns" id="five">5</button>
            <button onClick={)} className="sq-btns num-btns" id="six">6</button>
            <button onClick={className="sq-btns" id="add" data-action="add">+</button>
            <button onClick={)} className="sq-btns num-btns" id="one">1</button>
            <button onClick={)} className="sq-btns num-btns" id="two">2</button>
            <button onClick={)} className="sq-btns num-btns" id="three">3</button>
            <button onClick={)} className="tall-btns num-btns" id="zero">0</button>
            <button onClick={")} className="sq-btns" id="decimal" data-action="decimal">.</button>
            <button onClick={)} className="tall-btns key-equal" id="equals" data-action="calculate">=</button>
          </div>
        </div>
    );
  }
}*/

export default App;
