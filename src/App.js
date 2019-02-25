import React, { Component } from 'react';
import './App.css';
import update from 'immutability-helper';

const math = require('mathjs');

class App extends Component {
  constructor() {
    super()
    this.state = {
      operations: [0],
      zeroStatus: "zero",
      symbolStatus: "none",
      decimalStatus: "none",
    };
    
    this.handleClick = this.handleClick.bind(this);
  };
  
  handleClick = e => {
    const dataValue = e.target.getAttribute('data-value');
    switch (dataValue) {
      case 'clear':
        this.setState({
          operations: [0],
          zeroStatus: "zero",
          symbolStatus: "none",
          decimalStatus: "none",
        });
        break;
      case 'equal':
        this.calculateAnswer();
        break;
      case '+':
        this.setState({
          decimalStatus: 'none',
        });
        if (this.state.symbolStatus === "none") {
          this.getNewOperations(dataValue);
          this.setState({
            symbolStatus: "one",
          });
        } else {
          this.replaceLastOperation('+');
        }
      break;
      case '-':
        this.setState({
          decimalStatus: 'none',
        });
        if (this.state.symbolStatus === "none") {
          this.getNewOperations(dataValue);
          this.setState({
            symbolStatus: "one",
          });
        } else {
          this.replaceLastOperation('-');
        }
      break;
      case '/':
        this.setState({
          decimalStatus: "none",
        });
        if (this.state.symbolStatus === "none") {
          this.getNewOperations(dataValue);
          this.setState({
            symbolStatus: "one",
          });
        } else {
          this.replaceLastOperation('/');
        }
      break;
      case '*':
        this.setState({
          decimalStatus: 'none',
        });
        if (this.state.symbolStatus === "none") {
          this.getNewOperations(dataValue);
          this.setState({
            symbolStatus: "one",
          });
        } else {
          this.replaceLastOperation('*');
        }
      break;
      case '.':
        if (this.state.decimalStatus === "none") {
          this.getNewOperations(dataValue);
          this.setState({
            decimalStatus: 'one',
          });
        }
      break;
      case '0':
        if (this.state.zeroStatus === "zero") {  
          this.setState({ operations: [0], });
        } else {
          this.getNewOperations(dataValue);
        }
        break;
      default:
      if (this.state.zeroStatus === "zero") {
        this.setState({ operations: [], zeroStatus: "not zero", symbolStatus: "none", }, () => {
          this.getNewOperations(dataValue);
        })
      } else {
        this.getNewOperations(dataValue);
      }
      break;
    };
  };
  
  replaceLastOperation = (symbol) => {
    let array = this.state.operations;
    array.pop();
    array.push(symbol);
    this.setState({
      operations: array,
      symbolStatus: "one",
    });  
  }

  calculateAnswer = () => {
    let result = this.state.operations.join('')
    if (result) {
      result = math.eval(result);
      result = math.format(result, { precision: 14 });
      result = String(result);
      this.setState({
        operations: [result],
        zeroStatus: 'not zero',
      });
    };
  };

  getNewOperations = (value) => {
    const newOperations = update(this.state.operations, {
      $push: [value]
    });
    this.setState({
      operations: newOperations,
      zeroStatus: 'not zero',
      symbolStatus: 'none',
    });
  }
  
  render() {
    return (
      <div id="body">
        <h1>Javascript Calculator</h1>
        <div id="calculator">
          <Display info={this.state.operations} />
          <Buttons onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

class Display extends React.Component {
  render() {
    const screenDisplay = this.props.info.join('');
    return (
      <div id="display"> <p>{screenDisplay}</p> </div>
    )
  };
}



class Buttons extends React.Component {
  render() {
    return (
      <div id="buttons" className="buttons">
        <button onClick={this.props.onClick} className="long-btns" id="clear" data-value="clear" data-label="AC">AC</button>
        <button onClick={this.props.onClick} className="sq-btns" id="divide" data-value="/" data-label="÷">÷</button>
        <button onClick={this.props.onClick} className="sq-btns" id="multiply" data-value="*" data-label="X">X</button>
        <button onClick={this.props.onClick} className="sq-btns num-btns" id="seven" data-value="7" data-label="7">7</button>
        <button onClick={this.props.onClick} className="sq-btns num-btns" id="eight" data-value="8" data-label="8">8</button>
        <button onClick={this.props.onClick} className="sq-btns num-btns" id="nine" data-value="9" data-label="9">9</button>
        <button onClick={this.props.onClick} className="sq-btns" id="subtract" data-value="-" data-label="-">-</button>
        <button onClick={this.props.onClick} className="sq-btns num-btns" id="four" data-value="4" data-label="4">4</button>
        <button onClick={this.props.onClick} className="sq-btns num-btns" id="five" data-value="5" data-label="5">5</button>
        <button onClick={this.props.onClick} className="sq-btns num-btns" id="six" data-value="6" data-label="6">6</button>
        <button onClick={this.props.onClick} className="sq-btns" id="add" data-value="+" data-label="+">+</button>
        <button onClick={this.props.onClick} className="sq-btns num-btns" id="one" data-value="1" data-label="1">1</button>
        <button onClick={this.props.onClick} className="sq-btns num-btns" id="two" data-value="2" data-label="2">2</button>
        <button onClick={this.props.onClick} className="sq-btns num-btns" id="three" data-value="3" data-label="3">3</button>
        <button onClick={this.props.onClick} className="tall-btns num-btns" id="zero" data-value="0" data-label="0">0</button>
        <button onClick={this.props.onClick} className="sq-btns" id="decimal" data-value="." data-label=".">.</button>
        <button onClick={this.props.onClick} className="tall-btns" id="equals" data-value="equal" data-label="=">=</button>
      </div>
    )
  }
}

export default App;
