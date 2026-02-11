'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  pointsEarned?: number;
  model?: string;
}

// Simulated LLM models for scoring/demo purposes only.
// These entries do not represent live model integrations. Any real API use for the providers shown
// (e.g., OpenAI, Anthropic, Google, xAI, Meta) may require paid access and is not implied to be free.
const LLM_MODELS = [
  { id: 'gpt', name: 'GPT (OpenAI)', description: 'Simulated general-purpose model (real OpenAI API may require paid access)' },
  { id: 'grok', name: 'Grok (xAI)', description: 'Simulated real-time, witty model (real xAI API may require paid access)' },
  { id: 'gemini', name: 'Gemini (Google)', description: 'Simulated multimodal, fast model (real Google API may require paid access)' },
  { id: 'claude', name: 'Claude (Anthropic)', description: 'Simulated helpful assistant (real Anthropic API may require paid access)' },
  { id: 'llama', name: 'LLaMA (Meta)', description: 'Simulated open-source, efficient model (real Meta API may require paid access)' },
];

// Points calculation constants
const POINTS_CONFIG = {
  SHORT_QUESTION: { min: 0, max: 2 },
  MEDIUM_QUESTION: { min: 2, max: 5 },
  LONG_QUESTION: { min: 4, max: 8 },
  VERY_LONG_QUESTION: { min: 5, max: 10 },
  SECURITY_BONUS: 2,
  TECH_BONUS: 1,
  QUESTION_MARK_BONUS: 1,
  LOW_QUALITY_MIN: -1,
  LOW_QUALITY_MAX: 0,
  WORD_COUNT_THRESHOLDS: {
    SHORT: 3,
    MEDIUM: 8,
    LONG: 20,
  },
  MIN_POINTS: -5,
  MAX_POINTS: 10,
};

const POINTS_CRITERIA = {
  simple: {
    min: POINTS_CONFIG.SHORT_QUESTION.min,
    max: POINTS_CONFIG.SHORT_QUESTION.max,
    description: 'Simple or basic questions',
  },
  relevant: {
    min: POINTS_CONFIG.MEDIUM_QUESTION.min,
    max: POINTS_CONFIG.MEDIUM_QUESTION.max,
    description: 'Relevant and well-structured questions',
  },
  interesting: {
    min: POINTS_CONFIG.VERY_LONG_QUESTION.min,
    max: POINTS_CONFIG.MAX_POINTS,
    description: 'Interesting and thought-provoking questions',
  },
  unclear: {
    min: POINTS_CONFIG.LOW_QUALITY_MIN,
    max: POINTS_CONFIG.LOW_QUALITY_MAX,
    description: 'Unclear or poorly structured questions',
  },
  irrelevant: {
    min: POINTS_CONFIG.MIN_POINTS,
    max: POINTS_CONFIG.LOW_QUALITY_MAX,
    description: 'Off-topic or irrelevant questions',
  },
};

export default function KnowledgeBase() {
  SHORT_QUESTION: { min: 0, max: 2 },
  MEDIUM_QUESTION: { min: 2, max: 5 },
  LONG_QUESTION: { min: 4, max: 8 },
  VERY_LONG_QUESTION: { min: 5, max: 10 },
  SECURITY_BONUS: 2,
  TECH_BONUS: 1,
  QUESTION_MARK_BONUS: 1,
  LOW_QUALITY_MIN: -1,
  LOW_QUALITY_MAX: 0,
  WORD_COUNT_THRESHOLDS: {
    SHORT: 3,
    MEDIUM: 8,
    LONG: 20,
  MIN_POINTS: -1,
  MIN_POINTS: -5,
  MAX_POINTS: 10,
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
    const wordCount = question.trim().split(/\s+/).filter(word => word.length > 0).length;
    
    // Check for security/tech-related keywords
    const securityKeywords = ['security', 'vulnerability', 'threat', 'attack', 'protection', 'encryption', 'cybersecurity', 'malware', 'phishing', 'firewall', 'authentication', 'authorization'];
    const techKeywords = ['ai', 'machine learning', 'algorithm', 'code', 'programming', 'data', 'network', 'system', 'software', 'hardware'];
    
    const hasSecurityKeyword = securityKeywords.some(keyword => lowerQuestion.includes(keyword));
    const hasTechKeyword = techKeywords.some(keyword => lowerQuestion.includes(keyword));
    
    // Calculate points based on various factors
    let points = 0;
    
    // Length and structure
    if (wordCount < POINTS_CONFIG.WORD_COUNT_THRESHOLDS.SHORT) {
      const range = POINTS_CONFIG.SHORT_QUESTION.max - POINTS_CONFIG.SHORT_QUESTION.min + 1;
      points = Math.floor(Math.random() * range) + POINTS_CONFIG.SHORT_QUESTION.min;
    } else if (wordCount >= POINTS_CONFIG.WORD_COUNT_THRESHOLDS.SHORT && wordCount < POINTS_CONFIG.WORD_COUNT_THRESHOLDS.MEDIUM) {
      const range = POINTS_CONFIG.MEDIUM_QUESTION.max - POINTS_CONFIG.MEDIUM_QUESTION.min + 1;
      points = Math.floor(Math.random() * range) + POINTS_CONFIG.MEDIUM_QUESTION.min;
    } else if (wordCount >= POINTS_CONFIG.WORD_COUNT_THRESHOLDS.MEDIUM && wordCount < POINTS_CONFIG.WORD_COUNT_THRESHOLDS.LONG) {
      const range = POINTS_CONFIG.LONG_QUESTION.max - POINTS_CONFIG.LONG_QUESTION.min + 1;
      points = Math.floor(Math.random() * range) + POINTS_CONFIG.LONG_QUESTION.min;
    } else {
      const range = POINTS_CONFIG.VERY_LONG_QUESTION.max - POINTS_CONFIG.VERY_LONG_QUESTION.min + 1;
      points = Math.floor(Math.random() * range) + POINTS_CONFIG.VERY_LONG_QUESTION.min;
    }
    
    // Bonus for relevant keywords
    if (hasSecurityKeyword) points += POINTS_CONFIG.SECURITY_BONUS;
    if (hasTechKeyword) points += POINTS_CONFIG.TECH_BONUS;
    
    // Bonus for question marks (proper questions)
    if (question.includes('?')) points += POINTS_CONFIG.QUESTION_MARK_BONUS;
    
    // Check for common low-quality patterns
    if (/^(hi|hello|hey|test|ok|yes|no)$/i.test(question.trim())) {
      const range = POINTS_CONFIG.LOW_QUALITY_MAX - POINTS_CONFIG.LOW_QUALITY_MIN + 1;
      const lowQualityPoints = Math.floor(Math.random() * range) + POINTS_CONFIG.LOW_QUALITY_MIN;
      // Always normalize known low-quality patterns to the low-quality score range
      points = lowQualityPoints;
    }
    
    // Ensure points are within reasonable bounds
    points = Math.max(POINTS_CONFIG.MIN_POINTS, Math.min(POINTS_CONFIG.MAX_POINTS, points));
    
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
            <span
              className={`font-bold text-3xl ${getPointsColor(totalPoints)}`}
              aria-live="polite"
              aria-atomic="true"
            >
              {totalPoints}
              {totalPoints >= 7 && ' (Excellent)'}
              {totalPoints >= 3 && totalPoints < 7 && ' (Good)'}
              {totalPoints >= 0 && totalPoints < 3 && ' (Fair)'}
              {totalPoints < 0 && ' (Needs Improvement)'}
            </span>
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
                  aria-expanded={showModelSelector}
                  aria-controls="manual-model-selection-panel"
                >
                  {showModelSelector ? 'Hide' : 'Show'} Manual Selection
                </button>
                
                {showModelSelector && (
                  <div
                    id="manual-model-selection-panel"
                    className="space-y-2 mt-2 pl-2 border-l-2 border-gray-200"
                  >
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
                  aria-expanded={showPointsCriteria}
                  aria-controls="points-criteria-content"
                >
                  {showPointsCriteria ? 'Hide' : 'Show'}
                </button>
              </div>
              
              {showPointsCriteria && (
                <div id="points-criteria-content" className="space-y-2 text-sm">
                  {Object.entries(POINTS_CRITERIA).map(([key, criteria]) => (
                    <div key={key} className="pb-2 border-b border-gray-100 last:border-0">
                      <div className="flex items-center justify-between">
                        <span className="font-medium capitalize text-gray-700">{key}</span>
                        <span className={getPointsColor(criteria.min)}>
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
                    key={`${msg.role}-${msg.model ?? 'nomodel'}-${msg.pointsEarned ?? 'nopoints'}-${msg.content}`}
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
                          {msg.pointsEarned > 0 ? '+' : ''}{msg.pointsEarned} points{' '}
                          {msg.pointsEarned >= 7 && '(High) 🌟'}
                          {msg.pointsEarned >= 3 && msg.pointsEarned < 7 && '(Medium) ✨'}
                          {msg.pointsEarned < 0 && '(Low) ⚠️'}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start" role="status" aria-live="polite" aria-busy="true">
                    <div className="bg-gray-200 text-gray-900 px-4 py-3 rounded-lg rounded-bl-none">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                      </div>
                      <span className="sr-only">Loading response...</span>
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
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold"
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
