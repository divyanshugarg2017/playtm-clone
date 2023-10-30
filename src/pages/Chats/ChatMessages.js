import React from "react";
import "./Chats.css";
import smile from '../../assets/images/smile.png'
import {RiAttachment2} from 'react-icons/ri'

const ChatMessages = () => {
  return (
    <div className="messages-container">
      <div className="messages-container-top">
        <span className="messages-container-txt">Bangalore FC</span>
        <span className="messages-subtxt">Seena sent a message   .1d</span>
      </div>
      <div className="messages-all-container"></div>
      <div className="messages-input">
        <img src={smile} className='input-icon'/>
        <input placeholder="Messages....." className="msg-input-box"></input>
        <RiAttachment2 className="input-attachment"/>
      </div>
    </div>
  );
};

export default ChatMessages;
