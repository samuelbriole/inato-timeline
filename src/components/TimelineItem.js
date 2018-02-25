import React, { Component } from "react";

const style = trial => ({
  position: "absolute"
});

class TimelineItem extends Component {
  render() {
    const { trial } = this.props;
    return <div style={style(trial)}>{trial.title}</div>;
  }
}

export default TimelineItem;
