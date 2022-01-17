import React from 'react';
import './MessageList.css'
import 'firebase/database';

class MessageList extends React.Component {

  messagesEndRef = React.createRef();

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
    this.scrollToBottom();
  }
  
  componentDidUpdate()
  {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
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
    let messagePool = Object.entries(this.state.messages["message-pool"]);

    let list = messagePool.map((post) => {
      const valueObj = Object.entries(post)[1][1];
      const entries = Object.entries(valueObj)[0];
      return <p key={entries[0]}> >{entries[1]}</p>;
    });

    return list;
  }

  //{this.renderList()}
  render() {
    const loading = this.state.messages !== undefined ? this.renderList() : <p>Loading...</p>;
    return (
      <div>
        {loading}
        <div ref={this.messagesEndRef} />
      </div>
    )
  }
}

export default MessageList;
