import React, { Component } from "react";
import "./App.css";
import { client } from "./client";
import Posts from './comps/Posts'

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Persons: [],
    };
  }

  componentDidMount() {
    client
      .getEntries()
      .then((res) => {
        this.setState({ Persons: res.items });
      })
      .catch(console.log("error is there"));
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <header>
            <div className="wrapper">
              <span>React and Contentful By Sachin</span>
            </div>
          </header>
          <main>
            <div className="wrapper">
              <Posts persons={this.state.Persons}/>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
