import React from 'react';
import './Input.css';

class Input extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      'value': ""
    }

  }

  handleChange = (e) => {
    this.setState({ 'value': e.target.value });

  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ 'value': '' });
    this.props.sendMessage(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input onChange={this.handleChange} value={this.state.value} className="chat--input"></input>
      </form>
    )
  }

}

export default Input;