const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/setlist', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connected to mongoDB!'));

// SCHEMA
const songSchema = new mongoose.Schema({
  title: String,
  composer: String,
  tuning: String,
  tension: Number
});

// MODEL
const Song = mongoose.model('Song', songSchema);

const saveSong = (song) => {
  return new Promise ((resolve, reject) => {
    Song(song).save((err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const getTensionSortedSetlist = () => {
  // returns a promise
  return Song.find().sort('tension').exec();
}

module.exports.saveSong = saveSong;
module.exports.getTensionSortedSetlist = getTensionSortedSetlist;



// TESTS

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
