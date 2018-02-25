import React, { Component } from "react";

const style = trial => ({
  position: "absolute",
  right: `${trial.bounds.start}%`,
  left: `${100 - trial.bounds.end}%`
});

class TimelineItem extends Component {
  render() {
    const { trial } = this.props;
    return <div style={style(trial)}>{trial.title}</div>;
  }
}

export default TimelineItem;
