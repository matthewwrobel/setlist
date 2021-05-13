import React from 'react';

class TuningForm extends React.Component {
  constructor() {
    super();
    this.state = {
      tuning: '',
      tension: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange (event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    })
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.handleTuningFormSubmit(this.state);
    this.setState({
      tuning: '',
      tension: 0
    });
  }

  render() {

    return (
      <form onSubmit={(e) => {
        this.handleSubmit(e);
        // this.props.handleTuningFormSubmit(this.state);
      }}>
        <label>
          Tuning
          <input
            name={'tuning'}
            type={'text'}
            value={this.state.tuning}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          String Tension
          <input
            name={'tension'}
            type={'number'}
            value={this.state.tension}
            onChange={this.handleInputChange}
          />
        </label>
        <input type={'submit'} value={'Add Tuning'}/>
      </form>

    )
  }
}

export default TuningForm;