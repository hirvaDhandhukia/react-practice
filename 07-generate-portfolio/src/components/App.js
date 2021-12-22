import React, {Component} from 'react';
import Header from "./Bootstrap/Header";
import Form from "./Form";
import Code from "./Code";

class App extends Component {
  state = {
    Dark: true,
    FormData: {
      FirstName: "Dr. Heinz",
      LastName: "Doofenshmirtz",
      Thumbnail: "https://tvline.com/wp-content/uploads/2013/05/sharktank_drdoof_300.jpg?w=300",
      URL: "https://phineasandferb.fandom.com/wiki/Heinz_Doofenshmirtz",
      Description: "I am the head of Doofenshmirtz Evil Incorporated. Despite true dedication to my missions, almost all of my plans and inators have been thwarted by my nemesis Perry the Platypus. Though most of my plans are frequently flawful at best and my doctorate was purchased off the internet, some of my inventions (almost always suffixed with '-inator') have been fairly impressive and successful.",
      KeyWords: "Evil Science, Scientist, Inator, Cartoon, Phineas and Ferb",
      Address: "Doofenshmirtz Evil Incorporated, Tri-State Area, 9297 Polly Parkway",
      Phone: "911-Evil-101",
      Email: "doofenshmirtz@inator.com"
    }
  };

  // toggle to dark and light modes
  toggleHeader = () => {
    this.setState({
      Dark: !this.state.Dark
    });
  };

  changeHandler = (e) => {
    this.setState({
      // Name: e.target.value
      FormData: {
        ...this.state.FormData,
        [e.target.name]: e.target.value
      }
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
              {/* calling the functional component */}
              < Form 
                FormData={{
                  FullName: `${this.state.FormData.FirstName} ${this.state.FormData.LastName}`,
                  ...this.state.FormData
                }}
                onChange={this.changeHandler} 
              />
            </div>
            <div className="col-12 col-sm-6">
              <Code 
                FullName={`${this.state.FormData.FirstName} ${this.state.FormData.LastName}`}
                {...this.state.FormData}
              />
            </div>
          </div>
        </div>
        
        
      </div>
    );
  }
}

export default App;
//  {...Data} :- here ... is called the spread operator