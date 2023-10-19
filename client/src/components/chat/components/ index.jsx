import React from 'react';
import Sidebar from './sidebar/sidebar.jsx';
import Body from './body/body.jsx';
import MessageBlock from './message-block/message-block.jsx';
import styles from './style.module.css';

const ChatPage = ({ socket }) => {
  return (
    <div className="{styles.chat}">
      <Sidebar />
      <main className="{styles.main}">
        <Body />
        <MessageBlock />
      </main>
    </div>
  );
};

export default ChatPage;
