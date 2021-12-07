import React, {Component} from 'react';
import Header from "./Bootstrap/Header";

class App extends Component {
  state = {
    Dark: false
  };
  render() {
    return (
      <div className="App">
        <Header dark={this.state.Dark}>Portfolio Generatinator</Header>
        {/* .container>.row>.col-12.text-center */}
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              Hi
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
