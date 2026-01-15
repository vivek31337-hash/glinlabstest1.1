import React, { useState } from 'react';
import { Shield, CheckCircle, Sparkles, BookOpen, Lock, Users, TrendingUp, MessageSquare, Send, AlertCircle } from 'lucide-react';

// ============================================================================
// MAIN APP COMPONENT (Simulates Next.js App Router)
// ============================================================================
export default function GlinlabsApp() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main>
        {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'learn' && <LearnPage />}
        {currentPage === 'glinai' && <GlinAIPage />}
        {currentPage === 'pricing' && <PricingPage />}
      </main>

      <Footer />
    </div>
  );
}

// ============================================================================
// NAVBAR COMPONENT
// ============================================================================
function Navbar({ currentPage, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'learn', label: 'Learn' },
    { id: 'glinai', label: 'GlinAI', icon: Sparkles },
    { id: 'pricing', label: 'Pricing' }
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <Shield className="w-8 h-8 text-green-600" />
            <span className="text-xl font-bold text-gray-900">Glinlabs</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => setCurrentPage(link.id)}
                className={`flex items-center gap-1 px-3 py-2 rounded-md font-medium transition ${
                  currentPage === link.id
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                }`}
              >
                {link.icon && <link.icon className="w-4 h-4" />}
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => setCurrentPage('pricing')}
            className="hidden md:block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 font-medium transition"
          >
            Create Account
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-gray-600"></span>
              <span className="w-full h-0.5 bg-gray-600"></span>
              <span className="w-full h-0.5 bg-gray-600"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => {
                  setCurrentPage(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 ${
                  currentPage === link.id ? 'bg-green-50 text-green-600' : 'text-gray-700'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => setCurrentPage('pricing')}
              className="w-full mt-4 bg-green-600 text-white px-4 py-3 rounded-lg"
            >
              Create Account
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

// ============================================================================
// HOME PAGE
// ============================================================================
function HomePage({ setCurrentPage }) {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Security, Trust, and Data Integrity
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-3xl mx-auto">
              Glinlabs provides software solutions that help organizations protect their systems, 
              build customer trust, and maintain data integrity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setCurrentPage('pricing')}
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
              >
                Get Started Free
              </button>
              <button
                onClick={() => setCurrentPage('glinai')}
                className="bg-green-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-900 transition flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Try GlinAI
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Glinlabs?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform helps businesses of all sizes strengthen their security posture
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield className="w-12 h-12 text-green-600" />}
              title="Security First"
              description="Built with security best practices to protect your data and systems from threats"
            />
            <FeatureCard
              icon={<Lock className="w-12 h-12 text-green-600" />}
              title="Data Integrity"
              description="Ensure your data remains accurate, consistent, and trustworthy throughout its lifecycle"
            />
            <FeatureCard
              icon={<Users className="w-12 h-12 text-green-600" />}
              title="Build Trust"
              description="Demonstrate your commitment to security and earn customer confidence"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of companies protecting their systems with Glinlabs
          </p>
          <button
            onClick={() => setCurrentPage('pricing')}
            className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition"
          >
            View Pricing Plans
          </button>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
      <div className="bg-green-50 w-20 h-20 rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// ============================================================================
// SERVICES PAGE
// ============================================================================
function ServicesPage() {
  const services = [
    {
      title: 'Security Assessment Platform',
      description: 'Evaluate your organization\'s security posture with comprehensive assessments and actionable recommendations',
      features: ['Automated security checklists', 'Risk scoring', 'Compliance tracking', 'Detailed reporting']
    },
    {
      title: 'Data Protection Tools',
      description: 'Implement robust data protection measures to safeguard sensitive information',
      features: ['Access control management', 'Encryption guidance', 'Data classification', 'Privacy compliance']
    },
    {
      title: 'Security Training Platform',
      description: 'Educate your team on security best practices and common threats',
      features: ['Interactive learning modules', 'Phishing simulations', 'Knowledge assessments', 'Progress tracking']
    },
    {
      title: 'Compliance Management',
      description: 'Streamline your compliance journey with guided workflows and documentation',
      features: ['SOC 2 preparation', 'GDPR compliance tools', 'Audit-ready reports', 'Policy templates']
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive software solutions designed to help your organization improve security and maintain compliance
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// LEARN PAGE
// ============================================================================
function LearnPage() {
  const topics = [
    {
      category: 'Fundamentals',
      level: 'Beginner',
      articles: [
        { title: 'Introduction to Cybersecurity', time: '5 min read' },
        { title: 'Understanding Common Threats', time: '7 min read' },
        { title: 'Security Best Practices for Startups', time: '6 min read' }
      ]
    },
    {
      category: 'Data Protection',
      level: 'Intermediate',
      articles: [
        { title: 'Encryption Basics', time: '8 min read' },
        { title: 'Access Control Strategies', time: '10 min read' },
        { title: 'Data Backup and Recovery', time: '9 min read' }
      ]
    },
    {
      category: 'Compliance',
      level: 'Advanced',
      articles: [
        { title: 'SOC 2 Compliance Guide', time: '15 min read' },
        { title: 'GDPR for Software Companies', time: '12 min read' },
        { title: 'Building an Audit-Ready Organization', time: '20 min read' }
      ]
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Learning Center</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expand your knowledge with our comprehensive guides on security best practices
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {topics.map((topic, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">{topic.category}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  topic.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                  topic.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {topic.level}
                </span>
              </div>
              <ul className="space-y-4">
                {topic.articles.map((article, aIdx) => (
                  <li key={aIdx} className="pb-4 border-b border-gray-200 last:border-0">
                    <div className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{article.title}</h4>
                        <p className="text-sm text-gray-500">{article.time}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-green-50 rounded-xl p-8 text-center">
          <Sparkles className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Want personalized learning?</h2>
          <p className="text-gray-600 mb-6">Try our AI-powered assistant for interactive Q&A</p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Try GlinAI
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// GLINAI PAGE
// ============================================================================
function GlinAIPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const suggestedQuestions = [
    'What is phishing?',
    'How do I protect sensitive data?',
    'What is multi-factor authentication?',
    'Explain SOC 2 compliance'
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const aiMessage = {
        role: 'assistant',
        content: 'This is a demo response. In production, this would connect to an AI service to provide educational information about cybersecurity topics. All responses are for educational purposes only.'
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 p-2 rounded-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">GlinAI</h1>
              <p className="text-sm text-gray-600">Educational Security Assistant</p>
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-yellow-900 mb-1">Educational Purposes Only</p>
              <p className="text-yellow-700">
                This assistant provides general educational information about cybersecurity. 
                For specific security concerns, consult with a qualified professional.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        {messages.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-3">How can I help you learn today?</h2>
            <p className="text-gray-600 mb-8">Ask me anything about cybersecurity best practices</p>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {suggestedQuestions.map((question, idx) => (
                <button
                  key={idx}
                  onClick={() => setInput(question)}
                  className="bg-white border-2 border-gray-200 rounded-lg p-4 text-left hover:border-green-400 hover:shadow-md transition"
                >
                  <MessageSquare className="w-5 h-5 text-green-600 mb-2" />
                  <p className="font-medium text-sm">{question}</p>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-4 mb-6">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-2xl ${
                  msg.role === 'user' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-white border border-gray-200'
                } rounded-lg px-4 py-3`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="max-w-4xl mx-auto flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask a security question..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleSend}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 flex items-center gap-2"
          >
            <Send className="w-5 h-5" />
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// PRICING PAGE
// ============================================================================
function PricingPage() {
  const plans = [
    {
      name: 'Free',
      price: 0,
      description: 'Perfect for getting started',
      features: [
        'Basic security assessments',
        '5 team members',
        'Community support',
        'Monthly reports'
      ],
      stripePriceId: 'price_free' // Test mode price ID
    },
    {
      name: 'Starter',
      price: 29,
      description: 'Great for small teams',
      features: [
        'Advanced assessments',
        '15 team members',
        'Email support',
        'Weekly reports',
        'GlinAI access (50 messages/month)'
      ],
      stripePriceId: 'price_starter_test',
      popular: true
    },
    {
      name: 'Pro',
      price: 99,
      description: 'For growing organizations',
      features: [
        'Enterprise assessments',
        'Unlimited team members',
        'Priority support',
        'Daily reports',
        'GlinAI unlimited',
        'Compliance tools',
        'API access'
      ],
      stripePriceId: 'price_pro_test'
    }
  ];

  const handleCheckout = (priceId, planName) => {
    if (planName === 'Free') {
      alert('Free plan selected! In production, this would create a free account.');
      return;
    }
    
    // In production, this would redirect to Stripe Checkout
    alert(`Stripe Checkout (Test Mode)\n\nPrice ID: ${priceId}\n\nIn production, this would redirect to:\nhttps://checkout.stripe.com/...`);
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include our core security features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div key={idx} className={`bg-white rounded-xl shadow-lg p-8 ${
              plan.popular ? 'ring-2 ring-green-600 relative' : ''
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleCheckout(plan.stripePriceId, plan.name)}
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  plan.popular
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.name === 'Free' ? 'Get Started' : 'Start Free Trial'}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">All paid plans include a 14-day free trial. No credit card required.</p>
          <p className="text-sm text-gray-500">
            🔒 Payments processed securely via Stripe (Test Mode)
          </p>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// FOOTER
// ============================================================================
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-green-500" />
              <span className="text-xl font-bold">Glinlabs</span>
            </div>
            <p className="text-gray-400 text-sm">
              Security, trust, and data integrity for modern organizations.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Security</a></li>
              <li><a href="#" className="hover:text-white">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Glinlabs, Inc. All rights reserved. Built in the United States.</p>
        </div>
      </div>
    </footer>
  );
}