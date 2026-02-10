import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-2">GLINLABS</h3>
            <p className="text-gray-400">AI-Powered Security Intelligence for Everyone</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services" className="hover:text-blue-400 transition duration-300">Services</Link></li>
              <li><Link href="/glinai" className="hover:text-blue-400 transition duration-300">GlinAI</Link></li>
              <li><Link href="/pricing" className="hover:text-blue-400 transition duration-300">Pricing</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/learn" className="hover:text-blue-400 transition duration-300">Learn</Link></li>
              <li><a href="#" className="hover:text-blue-400 transition duration-300">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition duration-300">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/privacy-policy" className="hover:text-blue-400 transition duration-300">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-blue-400 transition duration-300">Terms of Service</Link></li>
              <li><a href="#" className="hover:text-blue-400 transition duration-300">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            &copy; {currentYear} GLINLABS. All rights reserved. | Made with ❤️ for security
          </p>
        </div>
      </div>
    </footer>
  );
}
