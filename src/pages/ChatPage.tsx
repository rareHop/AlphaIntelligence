import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Send, Bot, User, Loader, ArrowLeft } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI learning assistant. I can help you understand artificial intelligence, machine learning, and other computer science topics. What would you like to learn about?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Replace with your actual Gemini API key
  const API_KEY = 'AIzaSyC7Ytz3RPsDLDxdXc0R3NoGcXfJs-uX9Vk'; // You need to replace this
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const buildPrompt = (message: string) => {
    return `You are an AI education assistant for a computer science student project called "AI Spectrum". 
    You help students learn about artificial intelligence, machine learning, programming, and computer science topics.
    
    Guidelines:
    - Provide clear, educational responses suitable for high school/college students
    - Use simple language and practical examples
    - Be encouraging and supportive
    - Keep responses concise but informative (2-3 paragraphs max)
    - Focus on AI and computer science topics
    - If asked about non-CS topics, gently redirect to AI/CS subjects
    
    Student question: ${message}
    
    Provide a helpful educational response:`;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const prompt = buildPrompt(inputValue);
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const aiResponse = response.text();

      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: aiResponse,
          sender: 'bot',
          timestamp: new Date()
        };

        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1000);

    } catch (error) {
      console.error('Error calling Gemini API:', error);
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I'm having trouble connecting right now. Please make sure the Gemini API key is configured correctly. You can still explore the AI topics on the main page!",
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What is machine learning?",
    "How do neural networks work?",
    "What's the difference between AI and ML?",
    "Explain deep learning simply",
    "What is computer vision?",
    "How does NLP work?"
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-4 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Assistant
              </span>
            </h1>
            <p className="text-slate-300">
              Ask questions about AI and get instant educational answers
            </p>
          </div>
        </div>

        {/* Chat Container */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
          {/* Chat Header */}
          <div className="flex items-center p-4 border-b border-slate-700 bg-slate-800/70">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <div className="ml-3">
              <h3 className="font-semibold text-white">AI Learning Assistant</h3>
              <p className="text-sm text-green-400">● Online</p>
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4 bg-slate-900/20">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-3 max-w-3xl ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.sender === 'user' 
                      ? 'bg-blue-600' 
                      : 'bg-purple-600'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="h-4 w-4 text-white" />
                    ) : (
                      <Bot className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <div className={`px-4 py-3 rounded-2xl max-w-md ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700 text-slate-100'
                  }`}>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                    <p className="text-xs mt-2 opacity-70">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-3 max-w-3xl">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl bg-slate-700 text-slate-100">
                    <div className="flex items-center space-x-2">
                      <Loader className="h-4 w-4 animate-spin text-blue-400" />
                      <span className="text-sm">Thinking...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length <= 1 && (
            <div className="p-4 border-t border-slate-700 bg-slate-800/30">
              <p className="text-sm text-slate-400 mb-3">Try asking:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setInputValue(question)}
                    className="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 text-sm rounded-lg transition-colors text-left"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-slate-700 bg-slate-800/50">
            <div className="flex items-center space-x-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about AI, machine learning, or computer science..."
                disabled={isTyping}
                className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="p-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* API Key Notice */}
        <div className="mt-6 p-4 bg-yellow-600/20 border border-yellow-500/30 rounded-lg">
          <p className="text-yellow-200 text-sm">
            <strong>Note:</strong> Use the Chatbot In less Amount , Currently in Development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
