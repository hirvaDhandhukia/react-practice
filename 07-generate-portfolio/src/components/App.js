import React, {Component} from 'react';
import Header from "./Bootstrap/Header";

class App extends Component {
  state = {
    Dark: true
  };

  // toggle to dark and light modes
  toggleHeader = () => {
    this.setState({
      Dark: !this.state.Dark
    });
  };

  changeHandler = (e) => {
    this.setState({
      Name: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <Header dark={this.state.Dark} className="Header">
          <span>Portfolio Generatinator</span>
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
        </Header>
        
        {/* .container-fluid>.row>.col-12.text-center */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-6">
              Form
            </div>
            <div className="col-12 col-sm-6">
              Code
            </div>
          </div>
        </div>
        
        
      </div>
    );
  }
}

export default App;
