// LLM Integration utilities for Glin AI
import { LLM_MODELS, POINTS_CONFIG, QUALITY_INDICATORS } from './constants';
import type { LLMModel } from './types';

/**
 * Evaluates the quality of a user's question
 * Returns: 'interesting', 'normal', or 'low-quality'
 */
export function evaluateQuestionQuality(question: string): 'interesting' | 'normal' | 'low-quality' {
  const lowerQuestion = question.toLowerCase().trim();
  
  // Check for low-quality indicators
  const hasLowQualityIndicators = QUALITY_INDICATORS.LOW.some(
    indicator => lowerQuestion === indicator || lowerQuestion.split(' ').includes(indicator)
  );
  
  if (hasLowQualityIndicators || lowerQuestion.length < 10) {
    return 'low-quality';
  }
  
  // Check for high-quality indicators
  const highQualityCount = QUALITY_INDICATORS.HIGH.filter(
    indicator => lowerQuestion.includes(indicator)
  ).length;
  
  // Check for question marks and complexity
  const hasQuestionMark = lowerQuestion.includes('?');
  const wordCount = lowerQuestion.split(/\s+/).length;
  const hasComplexity = wordCount > 8;
  
  if (highQualityCount >= 2 || (highQualityCount >= 1 && hasQuestionMark && hasComplexity)) {
    return 'interesting';
  }
  
  if (highQualityCount >= 1 || hasComplexity) {
    return 'normal';
  }
  
  return 'low-quality';
}

/**
 * Calculates points based on question quality
 */
export function calculatePoints(quality: 'interesting' | 'normal' | 'low-quality'): number {
  switch (quality) {
    case 'interesting':
      return POINTS_CONFIG.INTERESTING_QUESTION;
    case 'normal':
      return POINTS_CONFIG.NORMAL_QUESTION;
    case 'low-quality':
      return POINTS_CONFIG.LOW_QUALITY_QUESTION;
    default:
      return 0;
  }
}

/**
 * Auto-selects the best LLM model based on question characteristics
 */
export function autoSelectModel(question: string): LLMModel {
  const quality = evaluateQuestionQuality(question);
  const questionLength = question.length;
  
  // For high-quality complex questions, use the most powerful model
  if (quality === 'interesting' && questionLength > 100) {
    return LLM_MODELS[0]; // Groq Llama 3.1 70B
  }
  
  // For security-related questions, use a specialized model
  if (question.toLowerCase().includes('security') || 
      question.toLowerCase().includes('vulnerability') ||
      question.toLowerCase().includes('threat')) {
    return LLM_MODELS[0]; // Groq Llama 3.1 70B
  }
  
  // For quick questions, use faster models
  if (questionLength < 50) {
    return LLM_MODELS[2]; // HuggingFace Mistral 7B
  }
  
  // Default to Mixtral for balanced performance
  return LLM_MODELS[1]; // Groq Mixtral 8x7B
}

/**
 * Calls the LLM API to get a response
 * This is a mock implementation that simulates API calls
 * In production, this would call actual LLM APIs
 */
export async function callLLM(
  question: string,
  model: LLMModel,
  apiKey?: string
): Promise<string> {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Mock responses based on question content and model
  const securityKeywords = ['security', 'vulnerability', 'threat', 'attack', 'exploit', 'breach'];
  const isSecurityQuestion = securityKeywords.some(
    keyword => question.toLowerCase().includes(keyword)
  );
  
  if (isSecurityQuestion) {
    return generateSecurityResponse(question, model);
  }
  
  return generateGeneralResponse(question, model);
}

function generateSecurityResponse(question: string, model: LLMModel): string {
  const responses = [
    `Based on your security question, I'd recommend implementing multiple layers of defense. ${model.name} suggests conducting a thorough risk assessment first. This involves identifying critical assets, evaluating potential threats, and determining vulnerabilities in your current security posture. Would you like me to elaborate on any specific aspect?`,
    
    `Great security question! From a cybersecurity perspective, this requires careful consideration of both technical and organizational factors. ${model.name} recommends starting with the principle of least privilege and implementing defense-in-depth strategies. Key considerations include access control, encryption, monitoring, and incident response planning.`,
    
    `Excellent question about security! ${model.name} analyzes this from multiple angles: First, consider the threat model - who are potential attackers and what are their capabilities? Second, evaluate your current security controls and identify gaps. Third, implement compensating controls where direct mitigation isn't feasible. The NIST Cybersecurity Framework provides an excellent structure for this approach.`,
    
    `This is a nuanced security topic. ${model.name} suggests breaking this down into components: authentication, authorization, data protection, and monitoring. For authentication, consider multi-factor authentication (MFA). For authorization, implement role-based access control (RBAC). Always encrypt sensitive data both at rest and in transit. Set up comprehensive logging and monitoring to detect anomalies.`,
    
    `Interesting security inquiry! ${model.name} recommends a risk-based approach. Start by categorizing data based on sensitivity, then apply appropriate security controls for each category. This might include encryption, access restrictions, data loss prevention (DLP), and regular security audits. Remember that security is an ongoing process, not a one-time implementation.`
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
}

function generateGeneralResponse(question: string, model: LLMModel): string {
  const quality = evaluateQuestionQuality(question);
  
  if (quality === 'interesting') {
    return `That's a thought-provoking question! Using ${model.name}, I can provide you with a comprehensive answer. This topic has several important aspects to consider, and I'll break them down for you systematically. Based on best practices and current industry standards, here's what you should know: The key is to approach this methodically, considering both immediate needs and long-term implications. Would you like me to dive deeper into any particular aspect?`;
  }
  
  if (quality === 'normal') {
    return `Good question! ${model.name} suggests looking at this from a practical perspective. Here are the main points to consider: First, understand the fundamentals and requirements. Second, evaluate your options based on your specific context. Third, implement the solution incrementally while monitoring results. Let me know if you need clarification on any of these points.`;
  }
  
  return `I'd be happy to help, but could you provide more details or context about what you're asking? This would help ${model.name} give you a more accurate and useful response. Try asking a more specific question about what you'd like to learn or accomplish.`;
}

/**
 * Gets initial user points from localStorage or returns default
 */
export function getInitialPoints(): number {
  if (typeof window === 'undefined') return POINTS_CONFIG.INITIAL_POINTS;
  
  const stored = localStorage.getItem('glinai_points');
  return stored ? parseInt(stored, 10) : POINTS_CONFIG.INITIAL_POINTS;
}

/**
 * Saves user points to localStorage
 */
export function savePoints(points: number): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('glinai_points', points.toString());
}

/**
 * Gets points history from localStorage
 */
export function getPointsHistory(): Array<{
  amount: number;
  reason: string;
  timestamp: Date;
  questionQuality: 'interesting' | 'normal' | 'low-quality';
}> {
  if (typeof window === 'undefined') return [];
  
  const stored = localStorage.getItem('glinai_points_history');
  if (!stored) return [];
  
  try {
    const history = JSON.parse(stored);
    return history.map((item: any) => ({
      ...item,
      timestamp: new Date(item.timestamp)
    }));
  } catch {
    return [];
  }
}

/**
 * Saves points history to localStorage
 */
export function savePointsHistory(history: Array<{
  amount: number;
  reason: string;
  timestamp: Date;
  questionQuality: 'interesting' | 'normal' | 'low-quality';
}>): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('glinai_points_history', JSON.stringify(history));
}
