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
  tension: Number,
  url: String
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

const updateSong = (id, newInfo) => {
  return Song.updateOne(id, newInfo);
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
module.exports.updateSong = updateSong;
