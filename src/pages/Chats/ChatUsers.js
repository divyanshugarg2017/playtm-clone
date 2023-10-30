import React from "react";
import "./Chats.css";
import user from "../../assets/images/user1.png";

const ChatUsers = () => {
  return (
    <div className="chat-friends">
      <div className="chat-friends-top">
        <span className="chat-friends-top-txt">Chats</span>
        <div className="friends-chat-container">
          <div className="friends-list">
            <img
              src={user}
              alt="user"
              style={{ margin: " 17px 10px 10px 25px" }}
            />
            <span className="friend-user">Strikers</span>
            <span className="friend-user-txt">Seena sent a message .1h</span>
          </div>
          <div className="friends-list">
            <img
              src={user}
              alt="user"
              style={{ margin: " 17px 10px 10px 25px" }}
            />
            <span className="friend-user">Bangalore FC</span>
            <span className="friend-user-txt">Seena sent a message .1d</span>
          </div>
          <div className="friends-list">
            <img
              src={user}
              alt="user"
              style={{ margin: " 17px 10px 10px 25px" }}
            />
            <span className="friend-user">Smashers</span>
            <span className="friend-user-txt">Seena sent a message .4d</span>
          </div>
          <div className="friends-list">
            <img
              src={user}
              alt="user"
              style={{ margin: " 17px 10px 10px 25px" }}
            />
            <span className="friend-user">Boomers</span>
            <span className="friend-user-txt">Seena sent a message .1h</span>
          </div>
          <div className="friends-list">
            <img
              src={user}
              alt="user"
              style={{ margin: " 17px 10px 10px 25px" }}
            />
            <span className="friend-user">Strikers</span>
            <span className="friend-user-txt">Seena sent a message .1h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatUsers;
