// calculates the horizontal bounds of each trial, in percentage
export default trials => {
  const timelineStart = Math.min(...trials.map(trial => trial.start));
  const timelineEnd = Math.max(...trials.map(trial => trial.end));
  const timelineLength = timelineEnd - timelineStart;

  return trials.map(trial => ({
    ...trial,
    bounds: {
      start: (trial.start - timelineStart) / timelineLength * 100,
      end: (trial.end - timelineStart) / timelineLength * 100
    }
  }));
};
