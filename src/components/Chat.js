import React from 'react';
import Input from './Input';
import MessageList from './MessageList';
import './Chat.css';
import 'firebase/auth';
import 'firebase/database';
import { v4 as uuidv4 } from 'uuid';



class Chat extends React.Component {

  constructor(props) {
    super(props);
    this.firebase = props.firebase;
    this.state = {
      current: "",
      messages: undefined,
      user: {},
    };

    this.sendMessage = this.sendMessage.bind(this);

  }

  componentDidMount() {
    this.auth();
  }

  auth() {
    var firebase = this.props.firebase;
    firebase.auth().signInAnonymously().catch(this._onAuthError);

    firebase.auth().onAuthStateChanged(function (user) {

    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }


  sendMessage(message) {
    var uid = uuidv4();
    const data = {
      [uid]: message,
    }

    var messageRef = this.firebase.database().ref('chat/').push();
    messageRef.set(data);

  }

  _onAuthError(err) {
    alert('Could not sign in' + err);
  }

  render() {

    return (
      <div className="flex-container" >
        <div className="chat">
          <div className="chat--header">
            <div className="chat--deco"></div>
          </div>
          <div className="chat--content">
            <MessageList firebase={this.props.firebase}></MessageList>
          </div>
          <div className="chat--footer">
            <Input sendMessage={this.sendMessage}></Input>
          </div>
        </div>
      </div>
    );

  }

}

export default Chat;