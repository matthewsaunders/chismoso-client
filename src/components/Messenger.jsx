import React, { useState } from 'react';

import Conversations from './Conversations';
import Messages from './Messages';
import Editor from './Editor';
import Sidebar from './Sidebar';
import Content from './Content';

export default function Messenger() {
  const [selectedConversationId, setSelectedConversationId] = useState(null);

  return (
    <div className="border-solid border-2 w-screen h-screen border-orange-600 flex flex-row">
      <Sidebar
        selectedConversationId={selectedConversationId}
        setSelectedConversationId={setSelectedConversationId}
      />
      <Content
        selectedConversationId={selectedConversationId}
      />
    </div>
  );
}
