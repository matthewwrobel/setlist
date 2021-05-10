import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

import SongForm from './components/SongForm.jsx';
import Setlist from './components/Setlist.jsx';
import sampleSetlist from '../sampleSetlist.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      setlist: sampleSetlist
    }

    this.handleSongFormSubmit = this.handleSongFormSubmit.bind(this);
  }

  // this may or may not be working
  // eventually this sends a get request to the server and renders the page with the fetched setlist
  componentDidMount() {

  }

  // handleSongFormSubmit function gets passed to SongForm as props
  handleSongFormSubmit(song) {
    console.log('song submitted', song);
    // takes a song obj as a param
    // makes an ajax post request, sending that song to the server and database...
    // on success
      // get request is made and page is updated
  }

  // getSetlist
    // makes a get request to the server
    // on success
      // sets the state of the app, triggering a page re-render


  render() {
    return (
      <div>
        <h2> Matt's Setlist </h2>
        <Setlist setlist={this.state.setlist}/>
        <SongForm handleSongFormSubmit={this.handleSongFormSubmit}/>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('App'));