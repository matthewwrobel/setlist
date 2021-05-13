import React from 'react';

const Tuning = (props) => (
  <option value={`${props.tuning}`}>
    {props.tuning}
  </option>
);

export default Tuning;