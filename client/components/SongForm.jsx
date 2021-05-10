import React from 'react';

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
    console.log(this.state);
    this.setState({
      title: '',
      composer: '',
      tuning: ''
    });
  }

  render() {
    return (
      <form onSubmit={(e) => {
        this.handleSubmit(e);
        this.props.handleSongFormSubmit(this.state);
      }}>
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
          <input
            name="tuning"
            type="text"
            value={this.state.tuning}
            onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Add Song" />
      </form>
    )
  }
}

export default SongForm;