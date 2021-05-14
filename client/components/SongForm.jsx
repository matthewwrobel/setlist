import React from 'react';
import Tuning from './Tuning.jsx';

class SongForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      composer: '',
      tuning: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    // if (this.state.tuning === '') {
    //   alert('Please Select a Tuning');
    // } else {
      this.props.handleSongFormSubmit(this.state);
      this.setState({
        title: '',
        composer: '',
        tuning: ''
      });
    // }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Composer:
          <input
            name="composer"
            type="text"
            value={this.state.composer}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Tuning:
          <select value={this.state.tuning} name={"tuning"} onChange={this.handleInputChange}>
            <option> select a tuning </option>
            {this.props.tunings.map((tuning, index) => <Tuning key={index} tuning={tuning} />)}
          </select>
        </label>
        <input type="submit" value="Add Song" />
      </form>
    )
  }
}

export default SongForm;