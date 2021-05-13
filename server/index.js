const express = require('express');
const path = require('path');
const { saveSong, getTuning, getTensionSortedSetlist } = require(path.join(__dirname, '..', 'database'));
const { addTensionProperty } = require(path.join(__dirname, 'helpers.js'));
const port = 5150;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.post('/songs', (req, res) => {

  let song = req.body;

  getTuning(song.tuning)
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

// add post route for tunings

// add get route for tunings

app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}!`)
});