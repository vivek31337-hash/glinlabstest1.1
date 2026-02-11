'use client';

import { useState, useEffect } from 'react';
import { LLM_MODELS, POINTS_CONFIG } from '@/lib/constants';
import { 
  evaluateQuestionQuality, 
  calculatePoints, 
  autoSelectModel,
  callLLM,
  getInitialPoints,
  savePoints,
  getPointsHistory,
  savePointsHistory
} from '@/lib/llm';
import type { Message, LLMModel } from '@/lib/types';

export default function GlinAI() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '👋 Welcome to GlinAI! Ask me questions and earn reward points based on the quality of your questions. Interesting and detailed questions earn more points!',
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [points, setPoints] = useState(0);
  const [isAutoSelect, setIsAutoSelect] = useState(true);
  const [selectedModel, setSelectedModel] = useState<LLMModel>(LLM_MODELS[0]);
  const [lastPointsChange, setLastPointsChange] = useState<number | null>(null);

  // Load points from localStorage on mount
  useEffect(() => {
    setPoints(getInitialPoints());
  }, []);

  // Save points to localStorage when they change
  useEffect(() => {
    savePoints(points);
  }, [points]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;

    const userMessage = input.trim();
    
    // Evaluate question quality
    const quality = evaluateQuestionQuality(userMessage);
    const pointsChange = calculatePoints(quality);
    
    // Auto-select or use selected model
    const modelToUse = isAutoSelect ? autoSelectModel(userMessage) : selectedModel;
    
    // Add user message
    setMessages(prev => [...prev, { 
      role: 'user', 
      content: userMessage,
      timestamp: new Date(),
      points: pointsChange,
      model: modelToUse.name
    }]);
    
    setInput('');
    setIsLoading(true);
    setLastPointsChange(pointsChange);

    // Update points
    const newPoints = points + pointsChange;
    setPoints(newPoints);
    
    // Save to history
    const history = getPointsHistory();
    const maxLength = POINTS_CONFIG.MAX_HISTORY_REASON_LENGTH;
    history.push({
      amount: pointsChange,
      reason: userMessage.substring(0, maxLength) + (userMessage.length > maxLength ? '...' : ''),
      timestamp: new Date(),
      questionQuality: quality
    });
    savePointsHistory(history);

    try {
      // Call LLM API
      const response = await callLLM(userMessage, modelToUse);
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: response,
        timestamp: new Date(),
        model: modelToUse.name
      }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'I apologize, but I encountered an error processing your question. Please try again.',
        timestamp: new Date(),
      }]);
    } finally {
      setIsLoading(false);
      // Clear points change indicator after 3 seconds
      setTimeout(() => setLastPointsChange(null), 3000);
    }
  };

  return (
    <div className="w-full">
      {/* Hero with Points Display */}
      <section className="min-h-[250px] flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50 px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-slate-900">GlinAI</h1>
          <p className="text-xl text-gray-600 mb-3">Ask Questions, Get Rewarded!</p>
          
          {/* Points Display */}
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-lg border-2 border-emerald-500">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏆</span>
              <div className="text-left">
                <p className="text-xs text-gray-500 uppercase tracking-wide">Your Points</p>
                <p className="text-2xl font-bold text-emerald-600">{points}</p>
              </div>
            </div>
            
            {lastPointsChange !== null && (
              <div className={`animate-bounce text-lg font-bold ${
                lastPointsChange > 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {lastPointsChange > 0 ? '+' : ''}{lastPointsChange}
              </div>
            )}
          </div>
          
          <p className="text-sm text-gray-500 mt-3">
            💡 Interesting questions earn more points!
          </p>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden flex flex-col h-[600px]">
          
          {/* Model Selection Header */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200 p-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">AI Model:</span>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isAutoSelect}
                    onChange={(e) => setIsAutoSelect(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-600">Auto-Select</span>
                </label>
              </div>
              
              {!isAutoSelect && (
                <select
                  value={selectedModel.id}
                  onChange={(e) => {
                    const model = LLM_MODELS.find(m => m.id === e.target.value);
                    if (model) setSelectedModel(model);
                  }}
                  className="flex-1 sm:flex-initial text-sm border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  {LLM_MODELS.map(model => (
                    <option key={model.id} value={model.id}>
                      {model.name} ({model.provider})
                    </option>
                  ))}
                </select>
              )}
              
              {isAutoSelect && (
                <span className="text-xs text-gray-500 italic">
                  AI will auto-select the best model for your question
                </span>
              )}
            </div>
          </div>
          
          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-white to-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx}>
                <div
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
                    
                    {msg.model && (
                      <p className={`text-xs mt-2 ${
                        msg.role === 'user' ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        🤖 {msg.model}
                      </p>
                    )}
                  </div>
                </div>
                
                {msg.role === 'user' && msg.points !== undefined && (
                  <div className={`flex justify-end mt-1`}>
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${
                      msg.points > 0 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {msg.points > 0 ? `+${msg.points}` : msg.points} points
                      {msg.points > 0 && msg.points >= 10 && ' 🌟'}
                    </span>
                  </div>
                )}
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
                placeholder="Ask an interesting question to earn points..."
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
            
            <div className="mt-3 flex flex-col sm:flex-row gap-2 text-xs text-gray-500">
              <span>💎 Interesting questions: +10 pts</span>
              <span>📝 Normal questions: +5 pts</span>
              <span>⚠️ Low quality: -3 pts</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
