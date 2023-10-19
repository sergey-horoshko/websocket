import React from 'react';

const MessageBlock = () => {
  return (
    <div className="message-block">
      <form>
        <input type="text" className="user-message"/>
        <button>Сказать</button>
      </form>
    </div>
  );
};

export default MessageBlock;
