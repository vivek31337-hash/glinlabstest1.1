export default function Learn() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="min-h-[400px] flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Security Learning Hub</h1>
          <p className="text-xl text-gray-600">Educational resources and guides for cybersecurity professionals and enthusiasts</p>
        </div>
      </section>

      {/* Content Placeholder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Article 1 */}
          <article className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition duration-300">
            <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
            <div className="p-6">
              <span className="text-blue-600 text-sm font-semibold">SECURITY BASICS</span>
              <h3 className="text-2xl font-bold mt-2 mb-2 text-slate-900">Introduction to Cybersecurity</h3>
              <p className="text-gray-600 mb-4">Learn the fundamentals of cybersecurity including common threats, defense mechanisms, and best practices.</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">Read More →</button>
            </div>
          </article>

          {/* Article 2 */}
          <article className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition duration-300">
            <div className="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
            <div className="p-6">
              <span className="text-green-600 text-sm font-semibold">THREAT ANALYSIS</span>
              <h3 className="text-2xl font-bold mt-2 mb-2 text-slate-900">Understanding Common Attack Vectors</h3>
              <p className="text-gray-600 mb-4">Explore the most prevalent cyber attacks and how to recognize and defend against them.</p>
              <button className="text-green-600 font-semibold hover:text-green-700">Read More →</button>
            </div>
          </article>

          {/* Article 3 */}
          <article className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition duration-300">
            <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600"></div>
            <div className="p-6">
              <span className="text-purple-600 text-sm font-semibold">TOOLS & TECHNIQUES</span>
              <h3 className="text-2xl font-bold mt-2 mb-2 text-slate-900">Hands-on Security Tools</h3>
              <p className="text-gray-600 mb-4">Master essential security tools and techniques used by professionals in the field.</p>
              <button className="text-purple-600 font-semibold hover:text-purple-700">Read More →</button>
            </div>
          </article>

          {/* Article 4 */}
          <article className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition duration-300">
            <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600"></div>
            <div className="p-6">
              <span className="text-orange-600 text-sm font-semibold">BEST PRACTICES</span>
              <h3 className="text-2xl font-bold mt-2 mb-2 text-slate-900">Security Compliance & Standards</h3>
              <p className="text-gray-600 mb-4">Learn about industry standards, regulations, and best practices for securing your organization.</p>
              <button className="text-orange-600 font-semibold hover:text-orange-700">Read More →</button>
            </div>
          </article>
        </div>

        {/* Placeholder Note */}
        <div className="mt-16 p-8 bg-blue-50 border-l-4 border-blue-600 rounded">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">📚 Coming Soon</h3>
          <p className="text-gray-700">
            We're building out our educational content library. Check back soon for in-depth tutorials, guides, and resources to help you master cybersecurity.
          </p>
        </div>
      </section>
    </div>
  );
}
