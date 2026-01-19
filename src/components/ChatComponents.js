import React, {useState} from "react";

function ChatComponents() {

    const [prompt, setPrompt] = useState('');
    const [chatResponses, setChatResponses] = useState('');

    const askAI = async () => {

        try {
          const response = await fetch(`http://localhost:8080/ask-ai?prompt=${prompt}`);
          const data = await response.text();
          setChatResponses(data);
        } catch (error) {
            console.error('Error generating chats:', error);
        }

    }
    return (
        <div className="tab-content">
        <h2>Chat Component</h2>
        <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your message to chat with AI">
        </input>
        <button onClick={askAI}>Ask AI</button>
        <div className="output">
            <p>{chatResponses}</p>
        </div>
        </div>
    );
}

export default ChatComponents;