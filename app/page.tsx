import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[600px] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            AI-Powered Security Intelligence for Everyone
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            GLINLABS provides cutting-edge security consulting, advanced AI analysis, and powerful open-source intelligence tools to protect what matters most.
          </p>
          
          {/* Prominent GlinAI Button */}
          <div className="mb-8">
            <Link 
              href="/glinai"
              className="inline-flex items-center px-12 py-4 text-xl font-bold text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <span className="mr-2">🤖</span>
              Try GlinAI
              <span className="ml-2 px-2 py-1 text-xs bg-white/20 rounded-full">BETA</span>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/services"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition duration-300"
            >
              Get Started
            </Link>
            <Link 
              href="/learn"
              className="px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-700 bg-opacity-50 p-6 rounded-lg backdrop-blur">
              <h3 className="text-xl font-bold mb-2">Security Consulting</h3>
              <p className="text-gray-300">Expert guidance to identify and mitigate security risks</p>
            </div>
            <div className="bg-slate-700 bg-opacity-50 p-6 rounded-lg backdrop-blur">
              <h3 className="text-xl font-bold mb-2">AI Analysis</h3>
              <p className="text-gray-300">Machine learning-powered threat detection and analysis</p>
            </div>
            <div className="bg-slate-700 bg-opacity-50 p-6 rounded-lg backdrop-blur">
              <h3 className="text-xl font-bold mb-2">Open-Source Tools</h3>
              <p className="text-gray-300">Free, community-driven security intelligence tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* GlinAI Features Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">GlinAI Features</h2>
              <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-bold rounded-full">BETA</span>
            </div>
            <p className="text-xl text-gray-600">Your AI-powered security assistant with advanced capabilities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Points System */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Points System</h3>
              <p className="text-gray-600">Earn points for queries and interactions. Track your usage and unlock premium features.</p>
            </div>

            {/* Multiple LLMs */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Multiple LLMs</h3>
              <p className="text-gray-600">Choose from various AI models optimized for different security tasks and expertise levels.</p>
            </div>

            {/* Security Questions */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Security Verification</h3>
              <p className="text-gray-600">Rotating security questions to ensure safe and authorized access to sensitive features.</p>
            </div>

            {/* Image Input (Premium) */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute top-4 right-4">
                <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">PREMIUM</span>
              </div>
              <div className="text-4xl mb-4">🖼️</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Image Analysis</h3>
              <p className="text-gray-600">Upload images for AI-powered security analysis and threat detection.</p>
            </div>

            {/* Voice Input (Premium) */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute top-4 right-4">
                <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">PREMIUM</span>
              </div>
              <div className="text-4xl mb-4">🎤</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Voice Commands</h3>
              <p className="text-gray-600">Interact with GlinAI using voice commands for hands-free security operations.</p>
            </div>

            {/* Real-time Monitoring */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Real-time Insights</h3>
              <p className="text-gray-600">Get instant security recommendations and threat intelligence as you interact.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
