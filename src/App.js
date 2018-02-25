import React, { Component } from "react";
import trials from "./trials";
import TimelineItem from "./components/TimelineItem";
import "./App.css";

const renderClinicalTrials = trials => {
  return (
    <div className="timeline">
      {trials.map(trial => <TimelineItem trial={trial} />)}
    </div>
  );
};

class App extends Component {
  render() {
    return <div className="App">{renderClinicalTrials(trials)}</div>;
  }
}

export default App;
