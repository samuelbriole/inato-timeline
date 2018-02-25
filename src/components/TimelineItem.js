import React, { Component } from "react";
import randomColor from "randomcolor";

const style = trial => ({
  position: "absolute",
  right: `${trial.bounds.start}%`,
  left: `${100 - trial.bounds.end}%`,
  backgroundColor: randomColor({
    luminosity: "light",
    format: "rgba",
    alpha: 0.5
  })
});

class TimelineItem extends Component {
  render() {
    const { trial } = this.props;
    return <div style={style(trial)}>{trial.title}</div>;
  }
}

export default TimelineItem;
