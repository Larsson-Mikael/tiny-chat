import React from 'react';
import Input from './Input';
import MessageList from './MessageList';
import './Chat.css';



class Chat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: "",
      messages: []
    };

    // Functions to this proprety
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="flex-container" >
        <div className="chat">
          <div className="chat--header">
            <div className="chat--deco"></div>
          </div>
          <div className="chat--content">

            <MessageList></MessageList>
          </div>
          <div className="chat--footer">
            <Input></Input>
          </div>
        </div>
      </div>
    );

  }

}

export default Chat;