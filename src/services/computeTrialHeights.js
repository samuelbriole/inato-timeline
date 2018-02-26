export default trials => {
  const sortedTrials = trials
    .sort((trialA, trialB) => trialA.start - trialB.start)
    // set the overlap to 0
    .map(trial => ({
      ...trial,
      heightLevel: 0, // all trials start at the same height level
      overlap: 1 // all trials start with the same overlap
    }));

  // let's compute the heightLevel and the overlap of each trial
  for (let i = 0; i < sortedTrials.length; i++) {
    for (let j = i + 1; j < sortedTrials.length; j++) {
      // overlap case
      if (sortedTrials[j].start < sortedTrials[i].end) {
        // if they have the same height level, we need increment the heightLevel of the overlapping trial (j)
        // and the overlap of the current trial (i)
        if (sortedTrials[i].heightLevel === sortedTrials[j].heightLevel) {
          sortedTrials[j].heightLevel += 1;
          sortedTrials[i].overlap += 1;
        }
        // we increase the overlap of the overlapping trial (j)
        sortedTrials[j].overlap = sortedTrials[i].overlap;
      } else {
        break; // no need to go further because the trials are sorted by start date
      }
    }
  }
  return sortedTrials;
};
