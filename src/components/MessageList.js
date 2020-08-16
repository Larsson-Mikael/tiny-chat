import React from 'react';
import './MessageList.css'
import 'firebase/database';

class MessageList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firebase: props.firebase,
      messages: undefined
    }
    this.fetchMessages = this.fetchMessages.bind(this);
  }

  componentDidMount() {
    this.fetchMessages();
  }

  fetchMessages = () => {
    var firebase = this.state.firebase;
    var ref = firebase.database().ref('chat/');

    ref.on('value', (snap) => {
      this.setState({ 'messages': snap.val() });
    }, (err) => { console.log(err) });
  }

  renderList() {
    // render messages
    var messageArray = Object.entries(this.state.messages);
    var list = [];

    messageArray.forEach((post) => {
      var opost = Object.entries(post[1]);
      list.push(opost.map((message, index) => {
        return <p key={index}> >{message[1]}</p>;
      }));
    });

    return list;
  }

  //{this.renderList()}
  render() {
    const loading = this.state.messages !== undefined ? this.renderList() : <p>Loading...</p>;
    return (
      <div>
        {loading}
      </div>
    )
  }
}

export default MessageList;
