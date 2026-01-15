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
};

export type FooterSection = {
  label: string;
  href: string;
};
