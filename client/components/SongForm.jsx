import React from 'react';

class SongForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      composer: '',
      tuning: '',
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleComposerChange = this.handleComposerChange.bind(this);
    this.handleTuningChange = this.handleTuningChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }
  handleComposerChange(event) {
    this.setState({composer: event.target.value});
  }
  handleTuningChange(event) {
    this.setState({tuning: event.target.value});
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
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
        </label>
        <label>
          Composer:
          <input type="text" value={this.state.composer} onChange={this.handleComposerChange} />
        </label>
        <label>
          Tuning:
          <input type="text" value={this.state.tuning} onChange={this.handleTuningChange} />
        </label>
        <input type="submit" value="Add Song" />
      </form>
    )
  }
}

export default SongForm;