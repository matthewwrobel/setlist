import React from 'react';
import Song from './Song.jsx';

const Setlist = (props) => (
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Composer</th>
        <th>Tuning</th>
        <th>Tension(lbs)</th>
        <th className="remove-btn"></th>
        <th className="edit-btn"></th>
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
          url={song.url}
          deleteSong={props.deleteSong}
        />
      )
      )}
    </tbody>
  </table>
);

export default Setlist;