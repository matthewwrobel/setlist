import React from 'react';

const Song = (props) => (
  <tr>
    <td>{props.title}</td>
    <td>{props.composer}</td>
    <td>{props.tuning}</td>
    <td>{props.tension}</td>
  </tr>

);

export default Song;