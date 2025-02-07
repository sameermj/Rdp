import React, { useEffect, useState } from 'react';
import { sendMessage, subscribeToMessages } from '../services/websocket';

const ChatRoom: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState<string>('');

    useEffect(() => {
        const unsubscribe = subscribeToMessages((newMessage: string) => {
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const handleSendMessage = () => {
        if (input.trim()) {
            sendMessage(input);
            setInput('');
        }
    };

    return (
        <div className="chat-room">
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className="message">
                        {msg}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
};

export default ChatRoom;