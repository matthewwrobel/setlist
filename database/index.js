const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/setlist', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connected to mongoDB!'));

// SCHEMAS
const songSchema = new mongoose.Schema({
  title: String,
  composer: String,
  tuning: String,
  tension: Number
});

const tuningSchema = new mongoose.Schema({
  tuning: String,
  tension: Number
});

// MODELS
const Song = mongoose.model('Song', songSchema);
const Tuning = mongoose.model('Tuning', tuningSchema);

const saveSong = (song) => {
  return Song(song).save();
};

const deleteSong = (id) => {
  return Song.deleteOne(id);
}

const saveTuning = (tuning) => {
  return Tuning(tuning).save();
};

const getTuning = (tuning) => {
  return Tuning.findOne({tuning: tuning}).exec();
};

const getTensionSortedSetlist = () => {
  return Song.find().sort('tension').exec();
};

const getTuningList = () => {
  return Tuning.find().exec();
}

module.exports.saveSong = saveSong;
module.exports.deleteSong = deleteSong;
module.exports.getTensionSortedSetlist = getTensionSortedSetlist;
module.exports.getTuning = getTuning;
module.exports.getTuningList = getTuningList;
module.exports.saveTuning = saveTuning;



// TESTS

// deleteSong({_id: '609ea9db80e6687c4f47a494'})
//   .then((result) => console.log(result));

// getTuningList().then((list) => console.log(list));

// Tuning.insertMany([{
//   tuning: 'open D Lydian',
//   tension: 137.97
// },
// {
//   tuning: 'open C',
//   tension: 154.55
// },
// {
//   tuning: 'drop D',
//   tension: 169.14
// },
// {
//   tuning: 'standard',
//   tension: 174.54,
// },
// {
//   tuning: 'open D',
//   tension: 155.08
// },
// {
//   tuning: 'open Dm',
//   tension: 151.86,
// },
// {
//   tuning: 'E flat',
//   tension: 155.48
// }]);

// saveTuning({
//   tuning: 'open E',
//   tension: 175
// })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// getTensionSortedSetlist().then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.log(err);
// });

// const leavesAndBranches = Song({
//   title: "Leaves and Branches",
//   composer: "Matt Wrobel",
//   tuning: "open D lydian",
//   tension: 137.97
// });

// console.log(leavesAndBranches._id);

// leavesAndBranches.save((err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('data:', data);
//   }
// });

// saveSong({
//   title: "Leaves and Branches",
//   composer: "Matt Wrobel",
//   tuning: "open D lydian",
//   tension: 137.97
// }).then((data) => {console.log(data)});

// Song.insertMany([
//   {
//     title: "Asher",
//     composer: "Matt Wrobel",
//     tuning: "open C",
//     tension: 154.55
//   },
//   {
//     title: "Going to California",
//     composer: "Jimmy Page",
//     tuning: "drop D",
//     tension: 169.14
//   },
//   {
//     title: "Leaves and Branches",
//     composer: "Matt Wrobel",
//     tuning: "open D lydian",
//     tension: 137.97
//   }

// ], (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
