// run python -m SimpleHTTPServer in terminal
// go to localhost:8000 -> it won't work with index in the browser
// for css use sass --watch css/main.scss css/main.css in terminal
class App extends React.Component {
  state = {
    val1: '',
    val2: '',
    operator: '',
  }

  // display the value of the button on click
    displayNum = (event) => {
      event.preventDefault();
      if (this.state.operator === '') {
        this.setState({
          val1: event.target.value
        })
        console.log(`Val1: ${this.state.val1}`);
    }
  }

  //clear the calc screen when 'C' btn is clicked
  clearScreen = (event) => {
    this.setState({
      val1: ''
    })
    console.log(`cleared!`);
  }

  render = () => {
    return (   <div className="container">
        <div id="output" className="screen">{this.state.val1}
        </div>
        <button onClick={this.clearScreen} className="clear" id="clear" name="C">C</button>

        <div className="calculator">

            <button onClick={this.displayNum} value="1" className="num">1</button>
            <button onClick={this.displayNum} value="2" className="num">2</button>
            <button onClick={this.displayNum} value="3" className="num">3</button>
            <button className="operator">+</button>


            <button onClick={this.displayNum} value="4" className="num">4</button>
            <button onClick={this.displayNum} value="5" className="num">5</button>
            <button onClick={this.displayNum} value="6" className="num">6</button>
            <button className="operator">-</button>


            <button onClick={this.displayNum} value="7" className="num">7</button>
            <button onClick={this.displayNum} value="8" className="num">8</button>
            <button onClick={this.displayNum} value="9" className="num">9</button>
            <button className="operator">x</button>


            <button onClick={this.displayNum} value="0" className="num">0</button>
            <button onClick={this.displayNum} value="." className="num">.</button>
            <button className="equals">=</button>
            <button className="operator">/</button>

      </div>
    </div>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.querySelector('main')
)
