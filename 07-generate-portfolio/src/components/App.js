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
      </div>
    );
  }
}

export default App;
