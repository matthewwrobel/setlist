import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

import SongForm from './components/SongForm.jsx';
import TuningForm from './components/TuningForm.jsx';
import Setlist from './components/Setlist.jsx';
import sampleSetlist from '../sampleSetlist.js';
import sampleTunings from '../sampleTunings.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      setlist: [],
      tunings: []
    };

    this.handleSongFormSubmit = this.handleSongFormSubmit.bind(this);
    this.handleTuningFormSubmit = this.handleTuningFormSubmit.bind(this);
    this.deleteSong = this.deleteSong.bind(this);
  }

  componentDidMount() {
    this.getSetlist();
    this.getTunings();
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

  handleTuningFormSubmit(tuning) {

    $.ajax({
      method: 'POST',
      url: 'http://localhost:5150/tunings',
      contentType: 'application/json',
      data: JSON.stringify(tuning),
      processData: false,
      success: (data) => {
        this.getTunings();
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

  getTunings() {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:5150/tunings',
      success: (data) => {
        this.setState({
          tunings: data
        });
      },
      err: (err) => {
        console.log('GET request failed: ', err);
      }
    });

  }

  deleteSong(id) {
    $.ajax({
      method: 'DELETE',
      url: 'http://localhost:5150/songs',
      contentType: 'application/json',
      data: JSON.stringify({_id: id}),
      processData: false,
    })
      .then(() => {
        this.getSetlist();
      })
      .catch((err) => {
        console.log('error deleting song', err);
      });

  }

  render() {
    return (
      <div>
        <h2> Setlist </h2>
        <Setlist deleteSong={this.deleteSong} setlist={this.state.setlist}/>
        <h4> Add New Song </h4>
        <SongForm handleSongFormSubmit={this.handleSongFormSubmit} tunings={this.state.tunings.map((tuning) => tuning.tuning)}/>
        <h4> Add New Tuning </h4>
        <TuningForm handleTuningFormSubmit={this.handleTuningFormSubmit}/>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('App'));
