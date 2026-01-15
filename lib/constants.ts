// Application constants for GLINLABS

export const SITE_NAME = 'GLINLABS';
export const SITE_DESCRIPTION = 'AI-Powered Security Intelligence for Everyone';
export const SITE_URL = 'https://glinlabs.com';

export const NAVBAR_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/learn', label: 'Learn' },
  { href: '/glinai', label: 'GlinAI' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/login', label: 'Login' },
];

export const SERVICES = [
  {
    title: 'Security Consulting',
    description: 'Expert guidance to identify vulnerabilities and develop security strategies',
    icon: '🔒',
    features: ['Vulnerability assessments', 'Risk analysis', 'Security strategy', 'Compliance'],
  },
  {
    title: 'AI Security Analysis',
    description: 'Machine learning-powered threat detection and anomaly analysis',
    icon: '🤖',
    features: ['Threat detection', 'Anomaly analysis', 'Pattern recognition', 'Predictive security'],
  },
  {
    title: 'Open-Source Intelligence',
    description: 'Free community-driven security tools and intelligence gathering',
    icon: '⚙️',
    features: ['OSINT tools', 'Community resources', 'Security scripts', 'Analysis frameworks'],
  },
];

export const PRICING_PLANS = [
  {
    name: 'Free',
    price: 0,
    period: null,
    description: 'Perfect for getting started',
    features: [
      'Access to basic security guides',
      'Limited GlinAI queries',
      'Community forum access',
      'Monthly security newsletter',
    ],
    highlighted: false,
  },
  {
    name: 'Pro',
    price: 99,
    period: '/month',
    description: 'For growing teams',
    features: [
      'Everything in Free',
      'Unlimited GlinAI queries',
      'Priority support',
      'Advanced threat analysis',
      'Custom security reports',
      'Team collaboration tools',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: null,
    period: 'Custom',
    description: 'For large organizations',
    features: [
      'Everything in Pro',
      'Dedicated security consultant',
      'Custom integrations',
      'Advanced compliance tools',
      'SLA guarantees',
      '24/7 support',
    ],
    highlighted: false,
  },
];

export const FOOTER_SECTIONS = {
  product: [
    { label: 'Services', href: '/services' },
    { label: 'GlinAI', href: '/glinai' },
    { label: 'Pricing', href: '/pricing' },
  ],
  resources: [
    { label: 'Learn', href: '/learn' },
    { label: 'Documentation', href: '#' },
    { label: 'Blog', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Contact', href: '#' },
  ],
};

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/glinlabs',
  github: 'https://github.com/glinlabs',
  linkedin: 'https://linkedin.com/company/glinlabs',
};

export const CONTACT_EMAIL = 'support@glinlabs.com';
