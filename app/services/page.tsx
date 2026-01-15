export default function Services() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="min-h-[400px] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Our Services</h1>
          <p className="text-xl text-gray-600">Comprehensive security solutions powered by AI and expert knowledge</p>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Security Consulting */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-600 hover:shadow-lg transition duration-300">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-white text-xl">🔒</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Security Consulting</h3>
            <p className="text-gray-600 mb-6">
              Expert guidance to identify vulnerabilities, assess risks, and develop comprehensive security strategies tailored to your organization's needs.
            </p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>✓ Vulnerability assessments</li>
              <li>✓ Risk analysis</li>
              <li>✓ Security strategy development</li>
              <li>✓ Compliance consulting</li>
            </ul>
          </div>

          {/* AI Security Analysis */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-600 hover:shadow-lg transition duration-300">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-white text-xl">🤖</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">AI Security Analysis</h3>
            <p className="text-gray-600 mb-6">
              Machine learning-powered threat detection and analysis. Identify patterns and anomalies that human analysis might miss.
            </p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>✓ Threat detection</li>
              <li>✓ Anomaly analysis</li>
              <li>✓ Pattern recognition</li>
              <li>✓ Predictive security</li>
            </ul>
          </div>

          {/* Open-Source Tools */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-600 hover:shadow-lg transition duration-300">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-white text-xl">⚙️</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Open-Source Intelligence</h3>
            <p className="text-gray-600 mb-6">
              Free, community-driven tools and resources for security analysis. Access powerful intelligence gathering capabilities.
            </p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>✓ OSINT tools</li>
              <li>✓ Community resources</li>
              <li>✓ Security scripts</li>
              <li>✓ Analysis frameworks</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 px-4 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to enhance your security?</h2>
          <p className="text-xl mb-8 text-blue-100">Contact us to discuss how GLINLABS can help protect your organization.</p>
          <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition duration-300">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
