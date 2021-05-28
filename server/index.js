const express = require('express');
const path = require('path');
const { saveSong, deleteSong, updateSong, saveTuning, getTuning, getTensionSortedSetlist, getTuningList } = require(path.join(__dirname, '..', 'database'));
const { addTensionProperty } = require(path.join(__dirname, 'helpers.js'));
const { getSpotifyLink } = require(path.join(__dirname, 'spotify.js'));
const port = 5150;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.post('/songs', (req, res) => {

  let song = req.body;

  getSpotifyLink(song.title, song.composer)
    .then((result) => {
      // console.log(result);
      let url = result.data.tracks.items[0].external_urls.spotify;
      song.url = url;
    })
    .catch((err) => {
      console.log(err);
    })
    .then(() => {
      return getTuning(song.tuning)
    })
    .then((tuning) => {
      song.tension = tuning.tension;
    })
    .then(() => {
      return saveSong(song);
    })
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });

});

app.get('/songs', (req, res) => {

  getTensionSortedSetlist()
    .then((setlist) => {
      res.status(200).send(setlist);
    })
    .catch((err) => {
      res.status(500).send('error getting setlist');
    })

});

app.put('/songs', (req, res) => {

  let updatedSong = req.body;

  getTuning(updatedSong.tuning)
    .then((tuning) => {
      updatedSong.tension = tuning.tension;
    })
    .then(() => {
      let id = updatedSong._id;
      delete updatedSong._id;
      return updateSong({_id: id}, updatedSong);
    })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(500).send(err);
    });

});

app.delete('/songs', (req, res) => {

  let song = req.body;

  deleteSong(song)
    .then((result) => {
      res.status(200).send('song removed from setlist');
    })
    .catch((err) => {
      res.status(500).send('error removing song from database');
    });

});

app.post('/tunings', (req, res) => {

  let tuning = req.body;

  saveTuning(tuning)
    .then((result) => {
      res.status(201).send('tuning added to database');
    })
    .catch((err) => {
      res.status(500).send('error saving tuning to database');
    });

});

app.get('/tunings', (req, res) => {

  getTuningList()
    .then((tunings) => {
      res.status(200).send(tunings);
    })
    .catch((err) => {
      res.status(500).send('error getting tunings');
    })

});

app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}!`)
});