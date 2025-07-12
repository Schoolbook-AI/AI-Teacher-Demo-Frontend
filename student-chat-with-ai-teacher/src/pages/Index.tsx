
import { useState } from 'react';
import ChatHeader from '../components/ChatHeader';
import ChatBubble from '../components/ChatBubble';
import ChatInput from '../components/ChatInput';

interface Message {
  id: string;
  text: string;
  images?: string[];
  sender: 'student' | 'teacher';
  timestamp: Date;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello Arya! I'm Ms Saraswati, your AI Teacher. I'm here to help you with any questions you have about your studies. Feel free to ask me anything or upload photos of problems you'd like help with! 📚✨",
      sender: 'teacher',
      timestamp: new Date()
    }
  ]);

  const handleSendMessage = (text: string, images?: File[]) => {
    if (!text.trim() && (!images || images.length === 0)) return;

    // Add student message
    const studentMessage: Message = {
      id: Date.now().toString(),
      text,
      images: images?.map(file => URL.createObjectURL(file)),
      sender: 'student',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, studentMessage]);

    // Simulate AI teacher response
    setTimeout(() => {
      const teacherResponses = [
        "Great question! Let me help you understand this step by step. 🧠",
        "I can see the problem in your image. Here's how we can solve it together! 🔍",
        "That's an excellent topic to explore! Let me break it down for you. 📖",
        "I notice you're working on this concept. Here's a clear explanation to help you! 💡"
      ];
      
      const teacherMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: teacherResponses[Math.floor(Math.random() * teacherResponses.length)],
        sender: 'teacher',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, teacherMessage]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex flex-col">
      <ChatHeader />
      
      <div className="flex-1 overflow-hidden flex flex-col">
        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
          {messages.map((message) => (
            <ChatBubble key={message.id} message={message} />
          ))}
        </div>

        {/* Input Area */}
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default Index;
