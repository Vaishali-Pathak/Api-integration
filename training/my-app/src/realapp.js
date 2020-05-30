import React, { Component } from "react";
import Card from "./card";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=100")
      .then((response) => {
        console.log(response.data.results[0].name.first);

        console.log(response.data.results[0].picture.large);
        this.setState({ data: response.data.results });
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {});
  }

  render() {
    return (
      <ul>
        {this.state.data.map((person, i) => (
          <li key={i}>
            <h1> {person.name.first}</h1>
            <img src={person.picture.large} />
          </li>
        ))}
      </ul>
    );
  }
}

export default App;
