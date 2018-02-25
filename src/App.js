import React, { Component } from "react";
import trials from "./trials";

const renderClinicalTrials = trials => null;

class App extends Component {
  render() {
    return <div className="App">{renderClinicalTrials(trials)}</div>;
  }
}

export default App;
