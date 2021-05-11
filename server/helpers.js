const tuningTension = {
  'open D Lydian': 137.97,
  'open C': 154.55,
  'drop D': 169.14,
  'standard': 174.54,
  'open D': 155.08,
  'open Dm': 151.86,
  'E flat': 155.48
}

const addTensionProperty = (song) => {
  song.tension = tuningTension[song.tuning];
}

module.exports.addTensionProperty = addTensionProperty