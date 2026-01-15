export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      description: 'Perfect for getting started',
      features: [
        'Access to basic security guides',
        'Limited GlinAI queries',
        'Community forum access',
        'Monthly security newsletter',
      ],
    },
    {
      name: 'Pro',
      price: '$99',
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
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Everything in Pro',
        'Dedicated security consultant',
        'Custom integrations',
        'Advanced compliance tools',
        'SLA guarantees',
        '24/7 support',
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="min-h-[400px] flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-50 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600">Choose the plan that's right for your security needs</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-lg overflow-hidden transition duration-300 ${
                plan.highlighted
                  ? 'border-2 border-blue-600 shadow-xl transform md:scale-105'
                  : 'border border-gray-300 shadow-md'
              }`}
            >
              <div className={`p-8 ${plan.highlighted ? 'bg-blue-50' : 'bg-white'}`}>
                {plan.highlighted && (
                  <div className="text-center mb-4">
                    <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-600">{plan.period}</span>}
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition duration-300 mb-6 ${
                    plan.highlighted
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                  }`}
                >
                  Coming Soon
                </button>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start text-gray-700 text-sm">
                      <span className="text-green-600 font-bold mr-3">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Can I upgrade or downgrade my plan?</h4>
              <p className="text-gray-600">Yes! You can change your plan anytime. Changes take effect on your next billing cycle.</p>
            </div>

            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Is there a contract?</h4>
              <p className="text-gray-600">No long-term contracts required. All plans are month-to-month with the flexibility to cancel anytime.</p>
            </div>

            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Do you offer discounts for annual billing?</h4>
              <p className="text-gray-600">Yes! Annual plans come with a 20% discount. Contact our sales team to learn more.</p>
            </div>

            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-slate-900 mb-2">What about enterprise customization?</h4>
              <p className="text-gray-600">Our Enterprise plan is fully customizable. Contact us to discuss your specific needs and requirements.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
