export default function CookiesPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Cookies Policy</h1>
        <p className="text-gray-600 mb-8">Last Updated: February 10, 2026</p>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit our website. 
              They are widely used to make websites work more efficiently and provide information to 
              website owners. Cookies help us understand how visitors interact with our website and 
              improve your browsing experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. How We Use Cookies</h2>
            <p className="mb-3">We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly, including authentication and security</li>
              <li><strong>Performance Cookies:</strong> Help us understand how visitors use our website by collecting anonymous analytics data</li>
              <li><strong>Functionality Cookies:</strong> Remember your preferences and settings to enhance your experience</li>
              <li><strong>Analytics Cookies:</strong> Collect information about how you use our website to help us improve it</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Session Cookies</h3>
            <p className="mb-3">
              These are temporary cookies that expire when you close your browser. They help us maintain 
              your session and remember your actions during a single browsing session.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Persistent Cookies</h3>
            <p className="mb-3">
              These cookies remain on your device for a set period or until you delete them. They help us 
              remember your preferences and settings for future visits.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">First-Party Cookies</h3>
            <p className="mb-3">
              These are cookies set by our website directly. We use them to provide essential functionality 
              and improve your user experience.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Third-Party Cookies</h3>
            <p className="mb-3">
              These are cookies set by third-party services we use, such as analytics providers. These 
              help us understand website performance and user behavior.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Specific Cookies We Use</h2>
            <p className="mb-3">Below is a list of the main cookies we use:</p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 mt-3">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Cookie Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">session_id</td>
                    <td className="border border-gray-300 px-4 py-2">Maintain user session</td>
                    <td className="border border-gray-300 px-4 py-2">Session</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">user_preferences</td>
                    <td className="border border-gray-300 px-4 py-2">Remember user settings</td>
                    <td className="border border-gray-300 px-4 py-2">1 year</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">analytics_id</td>
                    <td className="border border-gray-300 px-4 py-2">Track website analytics</td>
                    <td className="border border-gray-300 px-4 py-2">2 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Managing Cookies</h2>
            <p className="mb-3">
              You have the right to decide whether to accept or reject cookies. You can manage your cookie 
              preferences through:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings. You can set your browser to reject cookies or to alert you when cookies are being sent.</li>
              <li><strong>Cookie Consent Tool:</strong> When you first visit our website, you can use our cookie consent tool to accept or reject different categories of cookies.</li>
              <li><strong>Opt-Out Links:</strong> Some third-party cookie providers offer opt-out mechanisms through their websites.</li>
            </ul>
            <p className="mt-3">
              Please note that if you disable cookies, some features of our website may not function properly, 
              and your user experience may be affected.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Third-Party Services</h2>
            <p className="mb-3">
              We use third-party services that may set cookies on your device. These include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Google Analytics for website analytics</li>
              <li>Social media platforms for sharing functionality</li>
              <li>Payment processors for transaction processing</li>
              <li>Security services for fraud prevention</li>
            </ul>
            <p className="mt-3">
              These third parties have their own privacy policies and cookie policies. We recommend reviewing 
              their policies to understand how they use cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Updates to This Policy</h2>
            <p>
              We may update this Cookies Policy from time to time to reflect changes in our practices or 
              legal requirements. We will notify you of any significant changes by posting the updated 
              policy on this page with a new "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. More Information</h2>
            <p className="mb-3">
              For more information about how we handle your personal data, please refer to our Privacy Policy. 
              If you have any questions about our use of cookies, please contact us at:
            </p>
            <p className="font-medium">
              Email: <a href="mailto:support@glinlabs.com" className="text-blue-600 hover:text-blue-700">support@glinlabs.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
