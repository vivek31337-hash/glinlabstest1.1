'use client';

import { useState, useEffect } from 'react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
  model?: string;
};

type PointChange = {
  amount: number;
  reason: string;
  timestamp: number;
};

type QuestionEvaluation = {
  quality: 'interesting' | 'normal' | 'low';
  points: number;
  reason: string;
};

const LLM_MODELS = [
  { id: 'gpt-3.5', name: 'GPT-3.5 Turbo', icon: '🤖' },
  { id: 'gemini', name: 'Google Gemini', icon: '✨' },
  { id: 'claude', name: 'Claude', icon: '🧠' },
  { id: 'llama', name: 'LLaMA 2', icon: '🦙' },
  { id: 'mistral', name: 'Mistral', icon: '🌬️' }
];

const INTERESTING_QUESTIONS = [
  "How can quantum computing affect current encryption methods?",
  "What are zero-day vulnerabilities and how are they discovered?",
  "How does blockchain technology enhance security?",
  "What's the difference between penetration testing and vulnerability assessment?",
  "How do AI systems detect and prevent cyber threats in real-time?",
  "What are the security implications of IoT devices?",
  "How does end-to-end encryption work?",
  "What is the role of ethical hacking in cybersecurity?",
];

// Constants for timeouts and intervals
const QUESTION_ROTATION_INTERVAL_MS = 5000;
const NOTIFICATION_DURATION_MS = 3000;
const RESPONSE_DELAY_MS = 1000;

export default function GlinAI() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m GlinAI, your AI-powered security assistant. Ask me interesting questions to earn points! 🎯',
      model: 'gpt-3.5'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [points, setPoints] = useState(100);
  const [selectedModel, setSelectedModel] = useState('auto');
  const [autoSelect, setAutoSelect] = useState(true);
  const [pointChange, setPointChange] = useState<PointChange | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Rotate interesting questions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuestion(prev => (prev + 1) % INTERESTING_QUESTIONS.length);
    }, QUESTION_ROTATION_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  // Clear point change notification
  useEffect(() => {
    if (pointChange) {
      const timeout = setTimeout(() => setPointChange(null), NOTIFICATION_DURATION_MS);
      return () => clearTimeout(timeout);
    }
  }, [pointChange]);

  const evaluateQuestionQuality = (question: string): QuestionEvaluation => {
    const lowerQuestion = question.toLowerCase();
    const wordCount = question.split(' ').length;
    
    // Keywords for interesting questions
    const interestingKeywords = ['how', 'why', 'explain', 'what is', 'difference between', 'security', 'vulnerability', 'encryption', 'threat', 'attack', 'protect', 'prevent', 'quantum', 'ai', 'blockchain', 'zero-day'];
    const hasInterestingKeywords = interestingKeywords.some(keyword => lowerQuestion.includes(keyword));
    
    if (wordCount < 3) {
      return { quality: 'low', points: -5, reason: 'Question too short' };
    } else if (wordCount > 10 && hasInterestingKeywords) {
      return { quality: 'interesting', points: 15, reason: 'Excellent detailed question!' };
    } else if (hasInterestingKeywords) {
      return { quality: 'interesting', points: 10, reason: 'Great question!' };
    } else if (wordCount > 5) {
      return { quality: 'normal', points: 5, reason: 'Good question' };
    } else {
      return { quality: 'low', points: 0, reason: 'Simple question' };
    }
  };

  const selectBestModel = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('quantum') || lowerQuestion.includes('advanced')) {
      return 'claude';
    } else if (lowerQuestion.includes('google') || lowerQuestion.includes('search')) {
      return 'gemini';
    } else if (lowerQuestion.includes('code') || lowerQuestion.includes('programming')) {
      return 'gpt-3.5';
    } else if (lowerQuestion.includes('explain') || lowerQuestion.includes('simple')) {
      return 'llama';
    } else {
      return 'mistral';
    }
  };

  const generateResponse = (question: string, quality: string): string => {
    const responses = {
      interesting: [
        'Excellent question! That\'s a complex topic in cybersecurity. ',
        'Great insight! This is an important area of security. ',
        'Fascinating question! Let me explain this thoroughly. ',
        'Outstanding query! This relates to cutting-edge security. '
      ],
      normal: [
        'Good question! Here\'s what you need to know: ',
        'That\'s a valid concern in security. ',
        'Let me help you with that. ',
        'Here\'s the answer to your question: '
      ],
      low: [
        'I can help with that, but could you provide more details? ',
        'That\'s quite brief. Could you elaborate more? ',
        'I need a bit more context to give you a good answer. '
      ]
    };

    const responseArray = responses[quality as keyof typeof responses];
    const baseResponse = responseArray[Math.floor(Math.random() * responseArray.length)];
    
    const detailedAnswers = [
      'In cybersecurity, this involves multiple layers of protection including network security, application security, and data encryption. Best practices include regular security audits, implementing zero-trust architecture, and staying updated with the latest threat intelligence.',
      'This is handled through a combination of automated tools and manual analysis. Security professionals use frameworks like NIST, ISO 27001, and CIS Controls to establish comprehensive security programs.',
      'The key is to understand that security is not a one-time setup but an ongoing process. It requires continuous monitoring, regular updates, user education, and incident response planning.',
      'Modern approaches leverage AI and machine learning for threat detection, behavioral analytics for anomaly detection, and automation for rapid response to security incidents.'
    ];

    return baseResponse + detailedAnswers[Math.floor(Math.random() * detailedAnswers.length)];
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;

    const userMessage = input.trim();
    const evaluation = evaluateQuestionQuality(userMessage);
    
    // Update points
    const newPoints = points + evaluation.points;
    setPoints(newPoints);
    setPointChange({
      amount: evaluation.points,
      reason: evaluation.reason,
      timestamp: Date.now()
    });

    // Select model
    const modelToUse = autoSelect ? selectBestModel(userMessage) : selectedModel;
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const response = generateResponse(userMessage, evaluation.quality);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: response,
        model: modelToUse 
      }]);
      setIsLoading(false);
    }, RESPONSE_DELAY_MS);
  };

  return (
    <div className="w-full relative min-h-screen">
      {/* Background with rotating questions */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 -z-10">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-slate-600 text-sm animate-pulse">
            {INTERESTING_QUESTIONS[currentQuestion]}
          </div>
          <div className="absolute top-20 right-10 text-slate-600 text-sm animate-pulse" style={{ animationDelay: '2s' }}>
            {INTERESTING_QUESTIONS[(currentQuestion + 1) % INTERESTING_QUESTIONS.length]}
          </div>
          <div className="absolute bottom-20 left-20 text-slate-600 text-sm animate-pulse" style={{ animationDelay: '4s' }}>
            {INTERESTING_QUESTIONS[(currentQuestion + 2) % INTERESTING_QUESTIONS.length]}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-8 pb-4 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">GlinAI</h1>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
              Beta Version
            </span>
          </div>
          <p className="text-xl text-gray-600 mb-2">Knowledge-Based Chat with Points System</p>
          <p className="text-sm text-gray-500">Earn points by asking interesting questions!</p>
        </div>
      </section>

      {/* Main Chat Container */}
      <section className="max-w-5xl mx-auto px-4 pb-8">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden">
          
          {/* Top Bar with Points and Model Selection */}
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              
              {/* Points Display */}
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-lg px-4 py-2 shadow-md">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <p className="text-xs text-gray-500">Your Points</p>
                      <p className="text-2xl font-bold text-slate-900">{points}</p>
                    </div>
                  </div>
                </div>
                
                {/* Point Change Notification */}
                {pointChange && (
                  <div className={`px-3 py-2 rounded-lg shadow-lg animate-bounce ${
                    pointChange.amount > 0 ? 'bg-green-500' : 'bg-red-500'
                  } text-white`}>
                    <p className="text-sm font-semibold">
                      {pointChange.amount > 0 ? '+' : ''}{pointChange.amount} pts
                    </p>
                    <p className="text-xs">{pointChange.reason}</p>
                  </div>
                )}
              </div>

              {/* Model Selection */}
              <div className="flex items-center gap-2">
                <label className="flex items-center gap-2 text-white text-sm">
                  <input
                    type="checkbox"
                    checked={autoSelect}
                    onChange={(e) => setAutoSelect(e.target.checked)}
                    className="rounded"
                  />
                  Auto-select Model
                </label>
                {!autoSelect && (
                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 bg-white border-0 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    {LLM_MODELS.map(model => (
                      <option key={model.id} value={model.id}>
                        {model.icon} {model.name}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>
          </div>

          {/* Messages Container */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-white to-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md xl:max-w-lg ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white rounded-2xl rounded-br-none'
                      : 'bg-white border border-gray-200 text-gray-900 rounded-2xl rounded-bl-none shadow-md'
                  } px-4 py-3`}
                >
                  {msg.role === 'assistant' && msg.model && (
                    <div className="flex items-center gap-1 mb-1">
                      <span className="text-xs text-gray-500">
                        {(() => {
                          const model = LLM_MODELS.find(m => m.id === msg.model);
                          return model ? `${model.icon} ${model.name}` : '';
                        })()}
                      </span>
                    </div>
                  )}
                  <p className="text-sm md:text-base break-words">{msg.content}</p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl rounded-bl-none shadow-md">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Premium Features Preview */}
          <div className="border-t border-gray-200 bg-gray-50 p-3">
            <div className="flex items-center justify-center gap-4 text-sm">
              <button
                disabled
                className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-500 rounded-lg cursor-not-allowed"
                title="Coming Soon"
              >
                📷 Image Upload <span className="text-xs">(Coming Soon)</span>
              </button>
              <button
                disabled
                className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-500 rounded-lg cursor-not-allowed"
                title="Coming Soon"
              >
                🎤 Voice Input <span className="text-xs">(Coming Soon)</span>
              </button>
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 bg-white p-4">
            <form onSubmit={handleSendMessage} className="flex gap-3">
              <input
                type="text"
                placeholder="Ask an interesting security question to earn points..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600 disabled:bg-gray-100 text-sm"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-xl hover:from-blue-700 hover:to-emerald-700 transition duration-300 disabled:from-gray-400 disabled:to-gray-400 cursor-pointer font-semibold text-sm shadow-lg"
              >
                Send
              </button>
            </form>
            <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
              <p>💡 Ask detailed questions about security to earn more points!</p>
              <p>Powered by {LLM_MODELS.length} free LLMs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
