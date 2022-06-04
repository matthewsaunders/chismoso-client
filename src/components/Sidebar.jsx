import React, {useState} from 'react';

import Conversations from './Conversations';
import Messages from './Messages';
import Editor from './Editor';

export default function Sidebar({ selectedConversationId, setSelectedConversationId }) {
  const [searchStr, setSearchStr] = useState('');

  return (
    <div className="border-solid border-2 border-red-600 w-1/4 flex flex-col">
      <div>
        <input className="" placeholder="Search"/>
      </div>
      <Conversations
        selectedConversationId={selectedConversationId}
        setSelectedConversationId={setSelectedConversationId}
      />
    </div>
  );
}
