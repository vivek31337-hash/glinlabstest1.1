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
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            GLINLABS provides cutting-edge security consulting, advanced AI analysis, and powerful open-source intelligence tools to protect what matters most.
          </p>
          
          {/* Prominent Glin AI Button */}
          <div className="mb-12">
            <Link 
              href="/glinai"
              className="group relative inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-white bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/50 focus:outline-none focus:ring-4 focus:ring-emerald-300"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute inset-0 w-full h-full animate-pulse bg-white opacity-0 group-hover:opacity-10"></span>
              <svg 
                className="w-6 h-6 mr-3 transform group-hover:rotate-12 transition-transform duration-300" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd"/>
              </svg>
              <span className="relative z-10">Launch Glin AI</span>
              <svg 
                className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <p className="mt-6 text-sm text-gray-400 max-w-md mx-auto">
              🤖 Experience our AI-powered security assistant for instant guidance and insights
            </p>
          </div>

          {/* Secondary Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              href="/services"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Get Started
            </Link>
            <Link 
              href="/learn"
              className="px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Learn More
            </Link>
          </div>

          {/* Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-700 bg-opacity-50 p-6 rounded-lg backdrop-blur hover:bg-opacity-70 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2">Security Consulting</h3>
              <p className="text-gray-300">Expert guidance to identify and mitigate security risks</p>
            </div>
            <div className="bg-slate-700 bg-opacity-50 p-6 rounded-lg backdrop-blur hover:bg-opacity-70 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2">AI Analysis</h3>
              <p className="text-gray-300">Machine learning-powered threat detection and analysis</p>
            </div>
            <div className="bg-slate-700 bg-opacity-50 p-6 rounded-lg backdrop-blur hover:bg-opacity-70 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2">Open-Source Tools</h3>
              <p className="text-gray-300">Free, community-driven security intelligence tools</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
