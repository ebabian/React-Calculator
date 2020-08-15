// run python -m SimpleHTTPServer in terminal
// go to localhost:8000 -> it won't work with index in the browser
// for css use sass --watch css/main.scss css/main.css in terminal
import React from 'react';
import ReactDOM from 'react-dom';
import '../css/main.css'

class App extends React.Component {
  state = {
    val1: '',
    val2: '',
    operator: '',
    dot: '.'
  }

  // display the value of the button on click
    displayNum = (event) => {
      event.preventDefault();
      if (this.state.operator === '') {
        let numSelected = this.state.val1 += event.target.value
        this.setState({
          val1: numSelected
        })
        console.log(`Val1: ${this.state.val1}`);
    } else {
      let secondNum = this.state.val2 += event.target.value
      this.setState({
        val2: secondNum
      })
      console.log(`Val2: ${this.state.val2}`);
    }
  }

  //operator on click
  operator = (event) => {
    event.preventDefault();
    this.setState({
      operator: event.target.value
    })
    console.log(`Operator: ${this.state.operator}`);
  }

  // calculations
  calculate = () => {
    event.preventDefault();
    if(this.state.operator === '+') {
      let result = parseFloat(this.state.val1) + parseFloat(this.state.val2)
      this.setState({
        val2: result
      })
      console.log(`Result: ${result}`);
    } else if (this.state.operator === '-') {
        let result = parseFloat(this.state.val1) - parseFloat(this.state.val2)
        this.setState({
          val2: result
        })
        console.log(`Result: ${result}`);
    } else if (this.state.operator === 'x') {
        let result = parseFloat(this.state.val1) * parseFloat(this.state.val2)
        this.setState({
          val2: result
        })
        console.log(`Result: ${result}`);
    } else if (this.state.operator === '/') {
        let result = parseFloat(this.state.val1) / parseFloat(this.state.val2)
        this.setState({
          val2: result
        })
        console.log(`Result: ${result}`);
    }
  }

  //clear the calc screen when 'C' btn is clicked
  clearScreen = (event) => {
    this.setState({
      val1: '',
      val2: '',
      operator: ''
    })
    console.log(`cleared!`);
  }

  render = () => {
    return (   <div className="container">
        <div id="output" className="screen">{ this.state.operator === '' ? this.state.val1 : this.state.val2 }
        </div>
        <button onClick={this.clearScreen} className="clear" id="clear" name="C">C</button>

        <div className="calculator">

            <button onClick={this.displayNum} value="1" className="num">1</button>
            <button onClick={this.displayNum} value="2" className="num">2</button>
            <button onClick={this.displayNum} value="3" className="num">3</button>
            <button onClick={this.operator} value="+" className="operator">+</button>


            <button onClick={this.displayNum} value="4" className="num">4</button>
            <button onClick={this.displayNum} value="5" className="num">5</button>
            <button onClick={this.displayNum} value="6" className="num">6</button>
            <button onClick={this.operator} value="-" className="operator">-</button>


            <button onClick={this.displayNum} value="7" className="num">7</button>
            <button onClick={this.displayNum} value="8" className="num">8</button>
            <button onClick={this.displayNum} value="9" className="num">9</button>
            <button onClick={this.operator} value="x" className="operator">x</button>


            <button onClick={this.displayNum} value="0" className="num">0</button>
            <button onClick={this.displayNum} value="." className="num">.</button>
            <button onClick={this.calculate} value="=" className="equals">=</button>
            <button onClick={this.operator} value="/" className="operator">/</button>
      </div>
    </div>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.querySelector('main')
)
