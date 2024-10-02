import React from 'react';

const ChatInterface = ({ output }) => {
  return (
    <div>
      <h3>AI Assistant</h3>
      <p>{output || "Ask me anything..."}</p>
      <textarea placeholder="Type your question here" />
    </div>
  );
};

export const DeployWorkflow = ({ output }) => {
  const handleDeploy = () => {
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`<h3>AI Assistant Chat</h3><p>${output || "No response yet."}</p>`);
  };

  return (
    <button onClick={handleDeploy}>Deploy & Open Chat</button>
  );
};