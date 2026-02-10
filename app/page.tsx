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
          
          {/* Prominent Glin AI Button */}
          <div className="mb-8">
            <Link 
              href="/glinai"
              className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 rounded-2xl font-bold text-xl transition duration-300 shadow-2xl transform hover:scale-105 animate-pulse"
            >
              🤖 Try Glin AI - Chat with Intelligence
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
    </div>
  );
}
