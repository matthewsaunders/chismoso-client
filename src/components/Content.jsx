import React, {useEffect, useState} from 'react';
import Loading from "./Loading";

export default function Content({ selectedConversationId }) {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (selectedConversationId === null) {
      return;
    }

    setIsLoading(true);

    fetch(`/conversations/${selectedConversationId}/messages`)
      .then(response => response.json())
      .then(data => {
        setMessages(data.messages);
        setIsLoading(false);
      });
  }, [selectedConversationId]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="border-solid border-2 border-indigo-600 w-3/4">
      <p>Selected conversation: {selectedConversationId}</p>

      {messages.map(msg => {
        return (
          <p key={msg.id}>
            {msg.content}
          </p>
        )
      })}
    </div>
  );
}
