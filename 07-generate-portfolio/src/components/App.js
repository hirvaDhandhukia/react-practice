import React, {Component} from 'react';
import Header from "./Bootstrap/Header";

class App extends Component {
  state = {
    Dark: false
  };

  // toggle to dark and light modes
  toggleHeader = () => {
    this.setState({
      Dark: !this.state.Dark
    })
  }

  changeHandler = (e) => {
    this.setState({
      Name: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Header dark={this.state.Dark} className="mb-4">Portfolio Generatinator</Header>
        
        {/* .container>.row>.col-12.text-center */}
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              {/* <button 
                className={`btn btn${
                  this.state.Dark ? "-outline" : ""
                }-primary`}
                onClick={this.toggleHeader}
                >
                  Toggle Dark Mode
              </button> */}
              <button
            className="btn btn-sm btn-outline-primary rounded-circle"
            onClick={this.toggleHeader}
          >
            <i
              className={"fa fa-" + (this.state.Dark ? "sun" : "moon") + "-o"}
            ></i>
          </button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <input type="text" className="form-control mt-3"
            value = {this.state.Name}
            onChange={this.changeHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
