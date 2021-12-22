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
      Email: "doofenshmirtz@inator.com",
      Socials: {
        Linkedin: "https://www.linkedin.com/in/hirva-dhandhukia-9415231a0/",
        Github: "https://github.com/hirvaDhandhukia",
        Twitter: "Doofenshmirtz",
        Facebook: "Doofenshmirtz",
        Codesandbox: "https://codesandbox.io/u/hirva.dhandhukia",
        StackOverflow: "123456789"
      },
      // Evil Scientist (during the show until Last Day of Summer)
      // Businessman
      // O.W.C.A. agent (temporarily in "Agent Doof" and "O.W.C.A. Files")
      // Acting Mayor of Danville (temporarily in "The Beak")
      // Science Teacher at Danville High (currently)
      Experience: [
        {
          Role: "Evil Scientist - CEO",
          Company: "Doofenshmirtz Evil Incorporated",
          Desc: "Making my inators, Curse you Perry the Platypus",
          Start: "yo",
          End: "today"
        },
        {
          Role: "O.W.C.A. agent",
          Company: "Agent Doof",
          Desc: "I'm an agent too",
          Start: "it was sadly temporary",
          End: "yesterday"
        }
      ], 
      Education: [
        {
          Degree: "Evil Science",
          Institute: "Online degree purchase hehee",
          Desc: "",
          Start: "_",
          End: "_"
        }
      ], 
      Skills : {
        Tools: ["Inator making", "html5", "css3", "react"],
        Workflow: [
          "Mobile-First, Responsive Design",
          "Cross Browser Testing & Debugging",
          "Cross Functional Teams",
          "Agile Development & Scrum"
        ]
      }, 
      Interests: [
        "Inventing Inators",
        "Finding financial funding and partnership for new inventions"
      ],
      Awards: [
        "Google Analytics Certified Developer",
        "Mobile Web Specialist - Google Certification",
        "1 st Place - University of Colorado Boulder - Emerging Tech Competition 2009",
        "1 st Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)",
        "2 nd Place - University of Colorado Boulder - Emerging Tech Competition 2008",
        "1 st Place - James Buchanan High School - Hackathon 2006",
        "3 rd Place - James Buchanan High School - Hackathon 2005"
      ]
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