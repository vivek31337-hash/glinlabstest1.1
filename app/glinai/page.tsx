'use client';

import { useState, useEffect } from 'react';

// Interesting security questions for background display
const INTERESTING_QUESTIONS = [
  "How can I secure my API endpoints against unauthorized access?",
  "What are the best practices for password management?",
  "How do I protect my web application from XSS attacks?",
  "What is zero-trust security architecture?",
  "How can I implement multi-factor authentication?",
  "What are the latest trends in cloud security?",
  "How do I conduct a security audit for my application?",
  "What is the difference between encryption and hashing?",
  "How can I prevent SQL injection vulnerabilities?",
  "What are the key principles of secure coding?",
];

export default function GlinAI() {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([
    {
      role: 'assistant',
      content: 'Hello! I\'m GlinAI, your AI-powered security assistant. How can I help you today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Rotate questions every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuestionIndex((prev) => (prev + 1) % INTERESTING_QUESTIONS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array - INTERESTING_QUESTIONS is a constant outside component

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;

    // Add user message
    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response after a delay
    setTimeout(() => {
      const responses = [
        'That\'s an interesting security question. For more detailed assistance, please check out our Learn section for comprehensive guides.',
        'I can help with that! GLINLABS offers specialized services to address security concerns. Visit our Services page to learn more.',
        'Great question about cybersecurity! Our team of experts is ready to help. Would you like to explore our services?',
        'That falls within our area of expertise. Feel free to reach out through our contact page to discuss your specific needs.',
        'Security is our passion! For professional consultation, consider reaching out to our team for personalized guidance.'
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { role: 'assistant', content: randomResponse }]);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="min-h-[300px] flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50 px-4 py-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">GlinAI</h1>
          <p className="text-xl text-gray-600">Your AI-powered security assistant</p>
          <p className="text-gray-500 mt-2">Powered by open-source security AI</p>
        </div>
        
        {/* Beta Version Label */}
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
          Beta Version
        </div>
      </section>

      {/* Chat Interface */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden flex flex-col h-[600px] relative">
          
          {/* Background Rotating Questions */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden" aria-hidden="true">
            <div className="text-center px-8 max-w-2xl">
              <p className="text-2xl md:text-3xl font-light text-gray-300 opacity-20 transition-opacity duration-1000">
                {INTERESTING_QUESTIONS[currentQuestionIndex]}
              </p>
            </div>
          </div>
          
          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-white to-gray-50 relative z-10">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md xl:max-w-lg px-4 py-3 rounded-lg ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-gray-200 text-gray-900 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm md:text-base break-words">{msg.content}</p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-900 px-4 py-3 rounded-lg rounded-bl-none">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-300 bg-white p-4 relative z-10">
            <form onSubmit={handleSendMessage} className="flex gap-3">
              <input
                type="text"
                placeholder="Ask me about security..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 disabled:bg-gray-100"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 disabled:bg-gray-400 cursor-pointer font-semibold"
              >
                Send
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3 text-center">
              💡 Tip: GlinAI provides general security guidance. For detailed analysis, contact our consulting team.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
