import React from 'react';
import './Chat.css';



class Chat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: "",
      messages: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ 'current': event.target.value })
  }

  handleSubmit(event) {
    let messages = this.state.messages;
    messages.push(this.state.current);

    this.postMessage("> " + this.state.current);

    this.setState((this.state));
    this.setState({ 'current': '' })

    event.target.value = '';
    event.preventDefault();
  }

  renderList() {
    var list = this.state.messages.map(message => <p>{message.messages}</p>);
    return list;
  }

  componentDidMount() {
    this.fetchMessages();
  }

  postMessage(msg) {
    const options = {
      'method': 'POST',
      headers: {
        'x-apikey': '5ef11ad7a88dbf50d6601090',
        'content-type': 'application/json',
        'Access-Control-Request-Method': 'POST'


      },
      body: JSON.stringify({ 'messages': msg }),
      json: true,
    };

    fetch('https://messages-6b71.restdb.io/rest/messages?key=5ef11ad7a88dbf50d6601090', options);
  }

  fetchMessages() {
    const options = {
      'method': 'GET',
      headers: {
        'x-apikey': '5ef11ad7a88dbf50d6601090',
        'Access-Control-Request-Method': 'GET'
      }
    }

    fetch('https://messages-6b71.restdb.io/rest/messages?key=5ef11ad7a88dbf50d6601090', options)
      .then((res) => {
        res.json().then(data => {
          this.setState({ 'messages': data });
          this.fetchMessages();
        });
      });
  }

  render() {
    return (
      <div className="flex-container" >
        <div className="chat">
          <div className="chat--header">
            <div className="chat--deco"></div>
          </div>
          <div className="chat--content">
            {this.renderList()}
          </div>
          <div className="chat--footer">
            <form onSubmit={this.handleSubmit}>
              <input className="chat--input" value={this.state.current} onChange={this.handleChange}></input>
            </form>
          </div>
        </div>
      </div>
    );

  }

}

/*
        <div className="chat--content">
          <div className="chat--window">
            <p>Hello?</p>
            <p>Hi.</p>
            <p>wazzap!</p>
          </div>
        </div>
        <div className="chat--footer">
          <Input></Input>
        </div>

*/





export default Chat;