import React from 'react';

const Song = (props) => (
  <tr id={props.id}>
    <td>{props.title}</td>
    <td>{props.composer}</td>
    <td>{props.tuning}</td>
    <td>{props.tension}</td>
    <td>
      <button onClick={(e) => {
        props.deleteSong(e.target.parentElement.parentElement.id);
      }}> remove song </button>
    </td>
    <td>
      <button onClick={(e) => {}}> edit song </button>
    </td>
  </tr>
);

export default Song;