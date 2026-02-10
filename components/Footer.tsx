import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-3">
              <Image 
                src="/images/glinlabs-logo.svg" 
                alt="GLINLABS Logo" 
                width={150} 
                height={45}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 mb-3">AI-Powered Security Intelligence for Everyone</p>
            <a href="mailto:support@glinlabs.com" className="text-blue-400 hover:text-blue-300 transition duration-300">
              support@glinlabs.com
            </a>
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
              <li><Link href="/terms-and-conditions" className="hover:text-blue-400 transition duration-300">Terms and Conditions</Link></li>
              <li><Link href="/cookies-policy" className="hover:text-blue-400 transition duration-300">Cookies Policy</Link></li>
              <li><Link href="/disclaimer" className="hover:text-blue-400 transition duration-300">Disclaimer</Link></li>
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
