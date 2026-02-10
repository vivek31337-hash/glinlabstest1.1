// Type definitions for GLINLABS

export type NavLink = {
  href: string;
  label: string;
};

export type Service = {
  title: string;
  description: string;
  icon: string;
  features: string[];
};

export type PricingPlan = {
  name: string;
  price: number | null;
  period: string | null;
  description: string;
  features: string[];
  highlighted: boolean;
};

export type Message = {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: Date;
  points?: number;
  model?: string;
};

export type LLMModel = {
  id: string;
  name: string;
  provider: string;
  free: boolean;
  description: string;
};

export type UserPoints = {
  total: number;
  history: PointsTransaction[];
};

export type PointsTransaction = {
  amount: number;
  reason: string;
  timestamp: Date;
  questionQuality: 'interesting' | 'normal' | 'low-quality';
};

export type FooterSection = {
  label: string;
  href: string;
};
