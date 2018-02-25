import React, { Component } from "react";
import randomColor from "randomcolor";

const style = ({ bounds, heightLevel, overlap }) => ({
  position: "absolute",
  left: `${bounds.start}%`,
  right: `${100 - bounds.end}%`,
  top: `${heightLevel / overlap * 100}%`,
  height: `${100 / overlap}%`,
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
