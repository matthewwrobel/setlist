import React from 'react';
import Song from './Song.jsx'

const Setlist = (props) => (
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Composer</th>
        <th>Tuning</th>
        <th>Tension</th>
      </tr>
    </thead>
    <tbody>
      {props.setlist.map((song, index) => (
          <Song key={index} title={song.title} composer={song.composer} tuning={song.tuning} tension={song.tension}/>
        )
      )}
    </tbody>
  </table>
);

export default Setlist