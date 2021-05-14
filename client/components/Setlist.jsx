import React from 'react';
import Song from './Song.jsx'

const Setlist = (props) => (
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Composer</th>
        <th>Tuning</th>
        <th>Tension(lbs)</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {props.setlist.map((song) => (
          <Song
            id={song._id}
            key={song._id}
            title={song.title}
            composer={song.composer}
            tuning={song.tuning}
            tension={song.tension}
            deleteSong={props.deleteSong}
          />
        )
      )}
    </tbody>
  </table>
);

export default Setlist