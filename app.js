// run python -m SimpleHTTPServer in terminal
// go to localhost:8000 -> it won't work with index in the browser
// for css use sass --watch css/main.scss css/main.css in terminal
class App extends React.Component {
  
  render = () => {
    return (   <div className="container">
        <div id="output" className="screen">0
        </div>
        <button className="clear" id="clear" name="C">C</button>

        <div className="calculator">

            <button className="num">1</button>
            <button className="num">2</button>
            <button className="num">3</button>
            <button className="operator">+</button>


            <button className="num">4</button>
            <button className="num">5</button>
            <button className="num">6</button>
            <button className="operator">-</button>


            <button className="num">7</button>
            <button className="num">8</button>
            <button className="num">9</button>
            <button className="operator">x</button>


            <button className="num">0</button>
            <button className="num">.</button>
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
