import React, { useState, useEffect } from 'react';
import Loading from "./Loading";
import Conversation from "./Conversation";

export default function Conversations({ selectedConversationId, setSelectedConversationId }) {
  const [isLoading, setIsLoading] = useState(true);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    fetch('/conversations')
      .then(response => response.json())
      .then(data => {
        console.log(data.conversations);
        setConversations(data.conversations);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ul className="overflow-y-scroll">
      {conversations.map(c =>
        <Conversation
          key={c.id}
          conversation={c}
          isSelected={c.id === selectedConversationId}
          setSelectedConversationId={setSelectedConversationId}
        />
      )}
    </ul>
  );
}
