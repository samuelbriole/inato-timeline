import React, { Component } from "react";
import trials from "./trials";
import TimelineItem from "./components/TimelineItem";
import { computeTrialBounds, computeTrialHeights } from "./services";
import "./App.css";

const renderClinicalTrials = trials => {
  const enhancedTrials = computeTrialHeights(computeTrialBounds(trials));
  return (
    <div className="timeline">
      {enhancedTrials.map((trial, index) => (
        <TimelineItem trial={trial} key={index} />
      ))}
    </div>
  );
};

class App extends Component {
  render() {
    return <div className="App">{renderClinicalTrials(trials)}</div>;
  }
}

export default App;
