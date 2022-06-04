import React from 'react';

export default function Conversation({ conversation, isSelected, setSelectedConversationId }) {

  const handleClick = () => {
    setSelectedConversationId(conversation.id);
  }

  return (
    <li className="border-b border-slate-300">
      <button className={`hover:bg-slate-300 py-2 w-full ${isSelected ? 'bg-slate-200' : ''}`} onClick={handleClick}>
        { conversation.name }
      </button>
    </li>
  );
}
