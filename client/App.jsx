import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      setlist: []
    }
  }

  render() {
    return (
      <div>
        <h1> THE APP HAS RENDERED </h1>
        <h1> WEBPACK IS WATCHING FOR CHANGES </h1>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('App'));