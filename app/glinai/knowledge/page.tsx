'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  pointsEarned?: number;
  model?: string;
}

const LLM_MODELS = [
  { id: 'gpt', name: 'GPT (OpenAI)', description: 'General-purpose, highly capable' },
  { id: 'grok', name: 'Grok (xAI)', description: 'Real-time knowledge, witty' },
  { id: 'gemini', name: 'Gemini (Google)', description: 'Multimodal, fast' },
  { id: 'claude', name: 'Claude (Anthropic)', description: 'Helpful, harmless, honest' },
  { id: 'llama', name: 'LLaMA (Meta)', description: 'Open-source, efficient' },
];

const POINTS_CRITERIA = {
  relevant: { min: 3, max: 5, description: 'Relevant and well-structured questions' },
  interesting: { min: 6, max: 10, description: 'Interesting and thought-provoking questions' },
  simple: { min: 0, max: 2, description: 'Simple or basic questions' },
  unclear: { min: -2, max: 0, description: 'Unclear or poorly structured questions' },
  irrelevant: { min: -5, max: -2, description: 'Off-topic or irrelevant questions' },
};

export default function KnowledgeBase() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Welcome to Glin AI Knowledge Base! Ask me anything and earn points for quality questions. The better your question, the more points you earn!',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const [selectedModel, setSelectedModel] = useState<string>('auto');
  const [showModelSelector, setShowModelSelector] = useState(false);
  const [showPointsCriteria, setShowPointsCriteria] = useState(false);

  // Evaluate question quality and assign points
  const evaluateQuestion = (question: string): number => {
    const lowerQuestion = question.toLowerCase();
    const wordCount = question.split(/\s+/).length;
    
    // Check for security/tech-related keywords
    const securityKeywords = ['security', 'vulnerability', 'threat', 'attack', 'protection', 'encryption', 'cybersecurity', 'malware', 'phishing', 'firewall', 'authentication', 'authorization'];
    const techKeywords = ['ai', 'machine learning', 'algorithm', 'code', 'programming', 'data', 'network', 'system', 'software', 'hardware'];
    
    const hasSecurityKeyword = securityKeywords.some(keyword => lowerQuestion.includes(keyword));
    const hasTechKeyword = techKeywords.some(keyword => lowerQuestion.includes(keyword));
    
    // Calculate points based on various factors
    let points = 0;
    
    // Length and structure
    if (wordCount < 3) {
      points = Math.floor(Math.random() * 3); // 0-2 points for very short questions
    } else if (wordCount >= 3 && wordCount < 8) {
      points = Math.floor(Math.random() * 4) + 2; // 2-5 points
    } else if (wordCount >= 8 && wordCount < 20) {
      points = Math.floor(Math.random() * 5) + 4; // 4-8 points
    } else {
      points = Math.floor(Math.random() * 6) + 5; // 5-10 points
    }
    
    // Bonus for relevant keywords
    if (hasSecurityKeyword) points += 2;
    if (hasTechKeyword) points += 1;
    
    // Bonus for question marks (proper questions)
    if (question.includes('?')) points += 1;
    
    // Check for common low-quality patterns
    if (/^(hi|hello|hey|test|ok|yes|no)$/i.test(question.trim())) {
      points = Math.floor(Math.random() * 2) - 1; // -1 to 0 points
    }
    
    // Ensure points are within reasonable bounds
    points = Math.max(-5, Math.min(10, points));
    
    return points;
  };

  // Auto-select best model based on question
  const selectBestModel = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('code') || lowerQuestion.includes('programming')) {
      return 'gpt';
    } else if (lowerQuestion.includes('real-time') || lowerQuestion.includes('current')) {
      return 'grok';
    } else if (lowerQuestion.includes('image') || lowerQuestion.includes('multimodal')) {
      return 'gemini';
    } else if (lowerQuestion.includes('analyze') || lowerQuestion.includes('think')) {
      return 'claude';
    } else if (lowerQuestion.includes('open source') || lowerQuestion.includes('efficiency')) {
      return 'llama';
    }
    
    // Default rotation for variety
    const models = ['gpt', 'grok', 'gemini', 'claude', 'llama'];
    return models[Math.floor(Math.random() * models.length)];
  };

  // Generate AI response based on question
  const generateResponse = (question: string, model: string): string => {
    const modelName = LLM_MODELS.find(m => m.id === model)?.name || 'AI';
    
    const responses = [
      `Great question! From a cybersecurity perspective, ${question.toLowerCase().includes('security') ? 'security measures should be implemented at multiple layers' : 'this requires careful analysis of potential vulnerabilities'}.`,
      `Interesting! In the context of ${question.toLowerCase().includes('ai') ? 'AI and machine learning' : 'modern technology'}, this is a crucial consideration for maintaining robust security protocols.`,
      `That's a thoughtful question. The answer depends on various factors including your threat model, available resources, and specific use case. Would you like me to elaborate on any particular aspect?`,
      `Excellent inquiry! This relates to several important concepts in ${question.toLowerCase().includes('network') ? 'network security' : 'information security'}. Let me break it down for you.`,
      `Thanks for asking! This is a common concern in cybersecurity. The best practice would be to implement a defense-in-depth strategy that includes multiple protective layers.`,
    ];
    
    const response = responses[Math.floor(Math.random() * responses.length)];
    return `[${modelName}] ${response}`;
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;

    const userMessage = input.trim();
    const pointsEarned = evaluateQuestion(userMessage);
    const modelToUse = selectedModel === 'auto' ? selectBestModel(userMessage) : selectedModel;
    
    // Add user message with points
    setMessages(prev => [...prev, { 
      role: 'user', 
      content: userMessage, 
      pointsEarned,
      model: modelToUse 
    }]);
    
    setInput('');
    setIsLoading(true);
    setTotalPoints(prev => prev + pointsEarned);

    // Simulate AI response
    setTimeout(() => {
      const response = generateResponse(userMessage, modelToUse);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: response,
        model: modelToUse 
      }]);
      setIsLoading(false);
    }, 1000);
  };

  const getPointsColor = (points: number) => {
    if (points >= 7) return 'text-green-600';
    if (points >= 3) return 'text-blue-600';
    if (points >= 0) return 'text-gray-600';
    return 'text-red-600';
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[250px] flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Glin AI Knowledge Base</h1>
          <p className="text-xl text-gray-200 mb-2">Ask questions, earn points, and learn!</p>
          <div className="flex items-center justify-center gap-2 text-lg">
            <span className="text-gray-300">Total Points:</span>
            <span className={`font-bold text-3xl ${getPointsColor(totalPoints)}`}>{totalPoints}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Sidebar - Model Selection & Info */}
          <div className="lg:col-span-1 space-y-4">
            
            {/* Model Selection */}
            <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4">
              <h3 className="font-bold text-lg mb-3 text-gray-900">AI Model</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="model"
                    value="auto"
                    checked={selectedModel === 'auto'}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">Auto-Select (Recommended)</span>
                </label>
                
                <button
                  onClick={() => setShowModelSelector(!showModelSelector)}
                  className="text-sm text-blue-600 hover:text-blue-700 underline"
                >
                  {showModelSelector ? 'Hide' : 'Show'} Manual Selection
                </button>
                
                {showModelSelector && (
                  <div className="space-y-2 mt-2 pl-2 border-l-2 border-gray-200">
                    {LLM_MODELS.map((model) => (
                      <label key={model.id} className="flex items-start gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="model"
                          value={model.id}
                          checked={selectedModel === model.id}
                          onChange={(e) => setSelectedModel(e.target.value)}
                          className="w-4 h-4 mt-0.5"
                        />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-700">{model.name}</div>
                          <div className="text-xs text-gray-500">{model.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Points Criteria */}
            <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-lg text-gray-900">Points System</h3>
                <button
                  onClick={() => setShowPointsCriteria(!showPointsCriteria)}
                  className="text-xs text-blue-600 hover:text-blue-700"
                >
                  {showPointsCriteria ? 'Hide' : 'Show'}
                </button>
              </div>
              
              {showPointsCriteria && (
                <div className="space-y-2 text-sm">
                  {Object.entries(POINTS_CRITERIA).map(([key, criteria]) => (
                    <div key={key} className="pb-2 border-b border-gray-100 last:border-0">
                      <div className="flex items-center justify-between">
                        <span className="font-medium capitalize text-gray-700">{key}</span>
                        <span className={getPointsColor((criteria.min + criteria.max) / 2)}>
                          {criteria.min} to {criteria.max} pts
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{criteria.description}</p>
                    </div>
                  ))}
                </div>
              )}
              
              {!showPointsCriteria && (
                <p className="text-sm text-gray-600">
                  Earn points based on question quality, relevance, and structure.
                </p>
              )}
            </div>

            {/* Quick Tips */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg shadow-sm p-4">
              <h3 className="font-bold text-sm mb-2 text-gray-900">💡 Quick Tips</h3>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Ask clear, specific questions</li>
                <li>• Include relevant context</li>
                <li>• Security topics earn bonus points</li>
                <li>• Proper grammar helps</li>
                <li>• Avoid one-word answers</li>
              </ul>
            </div>

          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden flex flex-col h-[600px]">
              
              {/* Messages Container */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-white to-gray-50">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className="max-w-xs lg:max-w-md xl:max-w-lg">
                      <div
                        className={`px-4 py-3 rounded-lg ${
                          msg.role === 'user'
                            ? 'bg-blue-600 text-white rounded-br-none'
                            : 'bg-gray-200 text-gray-900 rounded-bl-none'
                        }`}
                      >
                        <p className="text-sm md:text-base break-words">{msg.content}</p>
                      </div>
                      
                      {msg.role === 'user' && msg.pointsEarned !== undefined && (
                        <div className={`text-xs text-right mt-1 font-semibold ${getPointsColor(msg.pointsEarned)}`}>
                          {msg.pointsEarned > 0 ? '+' : ''}{msg.pointsEarned} points
                          {msg.pointsEarned >= 7 && ' 🌟'}
                          {msg.pointsEarned >= 3 && msg.pointsEarned < 7 && ' ✨'}
                          {msg.pointsEarned < 0 && ' ⚠️'}
                        </div>
                      )}
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
                    placeholder="Ask a question to earn points..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={isLoading}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 disabled:bg-gray-100 text-gray-900"
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 disabled:bg-gray-400 cursor-pointer font-semibold"
                  >
                    Send
                  </button>
                </form>
                <div className="flex items-center justify-between mt-3">
                  <p className="text-xs text-gray-500">
                    💡 Model: <span className="font-medium">
                      {selectedModel === 'auto' ? 'Auto-Selected' : LLM_MODELS.find(m => m.id === selectedModel)?.name}
                    </span>
                  </p>
                  <Link href="/glinai" className="text-xs text-blue-600 hover:text-blue-700 underline">
                    Back to GlinAI Chat
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
