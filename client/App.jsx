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
      setlist: []
    }

    this.handleSongFormSubmit = this.handleSongFormSubmit.bind(this);
  }

  componentDidMount() {
    this.getSetlist();
  }

  handleSongFormSubmit(song) {

    $.ajax({
      method: 'POST',
      url: 'http://localhost:5150/songs',
      contentType: 'application/json',
      data: JSON.stringify(song),
      processData: false,
      success: (data) => {
        this.getSetlist();
      },
      error: (err) => {
        console.log('POST request failed: ', err);
      }
    });
  }

  getSetlist() {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:5150/songs',
      success: (data) => {
        this.setState({
          setlist: data
        });
      },
      err: (err) => {
        console.log('GET request failed: ', err);
      }
    });
  }

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