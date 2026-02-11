'use client';

import { useState } from 'react';

export default function GlinAI() {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([
    {
      role: 'assistant',
      content: 'Hello! I\'m GlinAI, your AI-powered security assistant. How can I help you today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [points, setPoints] = useState(100);
  const [selectedLLM, setSelectedLLM] = useState('gpt-4');
  const [securityQuestion, setSecurityQuestion] = useState('What is your primary security concern?');

  const securityQuestions = [
    'What is your primary security concern?',
    'What type of threat are you investigating?',
    'Which security domain interests you most?',
    'What security framework do you follow?'
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;

    // Deduct points
    if (points > 0) {
      setPoints(prev => Math.max(0, prev - 5));
    }

    // Rotate security question
    const currentIndex = securityQuestions.indexOf(securityQuestion);
    const nextIndex = (currentIndex + 1) % securityQuestions.length;
    setSecurityQuestion(securityQuestions[nextIndex]);

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
      <section className="min-h-[300px] flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50 px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">GlinAI</h1>
            <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-bold rounded-full">BETA</span>
          </div>
          <p className="text-xl text-gray-600">Your AI-powered security assistant</p>
          <p className="text-gray-500 mt-2">Powered by open-source security AI</p>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Points and Settings Bar */}
        <div className="mb-4 flex flex-wrap gap-4 justify-between items-center bg-white p-4 rounded-lg shadow border border-gray-200">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <div>
                <p className="text-sm text-gray-600">Points</p>
                <p className="text-lg font-bold text-slate-900">{points}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🧠</span>
              <div>
                <p className="text-sm text-gray-600">AI Model</p>
                <select 
                  value={selectedLLM}
                  onChange={(e) => setSelectedLLM(e.target.value)}
                  className="text-sm font-semibold text-slate-900 border-none bg-transparent focus:outline-none cursor-pointer"
                >
                  <option value="gpt-4">GPT-4</option>
                  <option value="claude-3">Claude 3</option>
                  <option value="gemini-pro">Gemini Pro</option>
                  <option value="llama-2">Llama 2</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Premium Features */}
          <div className="flex gap-2">
            <button className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 flex items-center gap-2 transition-colors relative group">
              <span>🖼️</span>
              <span className="hidden sm:inline">Image</span>
              <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">PRO</span>
            </button>
            <button className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 flex items-center gap-2 transition-colors relative group">
              <span>🎤</span>
              <span className="hidden sm:inline">Voice</span>
              <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">PRO</span>
            </button>
          </div>
        </div>

        {/* Security Question */}
        <div className="mb-4 bg-blue-50 border border-blue-200 p-3 rounded-lg">
          <div className="flex items-start gap-2">
            <span className="text-lg">🔒</span>
            <div>
              <p className="text-sm font-semibold text-blue-900">Security Check</p>
              <p className="text-sm text-blue-700">{securityQuestion}</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden flex flex-col h-[600px]">
          
          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-white to-gray-50">
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
          <div className="border-t border-gray-300 bg-white p-4">
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
