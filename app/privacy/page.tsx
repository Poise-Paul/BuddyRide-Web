import React from "react";
import { Shield, Lock, Eye, Users, Database, Globe } from "lucide-react";

const PrivacyPolicy = () => {
  const lastUpdated = "December 2025";

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* --- Hero Header --- */}
      <section className="bg-slate-50 border-b border-slate-100 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-600 mb-6">
            Your trust is our priority. Learn how we handle your data across
            Nigeria and the UK.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm text-sm font-medium text-slate-500">
            <Globe size={16} />
            Last Updated: {lastUpdated}
          </div>
        </div>
      </section>

      {/* --- Main Content --- */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-xl leading-relaxed text-slate-700 mb-12">
          This Privacy Policy explains how BuddyRide (“we”, “our”, “the
          Platform”) collects, uses, and protects your personal information when
          you use our web and mobile services.
        </p>

        {/* --- Section 1: Collection --- */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Database className="text-blue-600" size={28} />
            <h2 className="text-3xl text-left font-bold text-slate-900">
              1. What Information We Collect
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-left">
              <h3 className="text-xl font-semibold text-slate-800">
                1.1 Information You Provide
              </h3>
              <ul className="space-y-2 list-disc list-inside text-slate-600">
                <li>Name, email address, and phone number</li>
                <li>Profile details and ride-sharing preferences</li>
                <li>Driver documentation (License, vehicle details)</li>
                <li>Communication logs via the BuddyRide platform</li>
              </ul>
            </div>
            <div className="space-y-4 text-left">
              <h3 className="text-xl font-semibold text-slate-800">
                1.2 Automated & Ride Data
              </h3>
              <ul className="space-y-2 list-disc list-inside text-slate-600">
                <li>GPS location (for ride matching and safety)</li>
                <li>Device info (IP address, OS, browser type)</li>
                <li>Ride history (Timestamps, pickup/drop-off points)</li>
                <li>Ratings and community feedback</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="border-slate-100 mb-16" />

        {/* --- Section 2 & 3: Usage & Sharing --- */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-blue-600" size={24} />
              <h2 className="text-2xl font-bold text-slate-900">
                2. How We Use Data
              </h2>
            </div>
            <p className="text-slate-600 text-left leading-relaxed">
              Data is used to facilitate ride-matching, process multi-currency
              payments (NGN/GBP), support fraud prevention, and comply with
              safety regulations in Nigeria and the UK.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-blue-600" size={24} />
              <h2 className="text-2xl text-left font-bold text-slate-900">
                3. Sharing Information
              </h2>
            </div>
            <p className="text-slate-600 text-left leading-relaxed">
              We share your info with users you ride with and verified payment
              processors.
              <strong>
                {" "}
                BuddyRide does not sell or trade your personal information.
              </strong>
            </p>
          </section>
        </div>

        {/* --- Section 4: Security (Feature Box) --- */}
        <section className="bg-slate-900 text-white p-8 rounded-3xl mb-16 flex flex-col md:flex-row items-center gap-8">
          <div className="bg-primary p-4 rounded-2xl">
            <Lock size={40} />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">
              4. Data Security & Retention
            </h2>
            <p className="text-slate-300">
              We use bank-grade encryption and secure servers. Your account data
              is retained as long as your account is active, while ride history
              is kept to comply with local transport laws.
            </p>
          </div>
        </section>

        {/* --- Section 5: User Rights --- */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="text-blue-600" size={28} />
            <h2 className="text-3xl font-bold text-slate-900">
              5. Your Legal Rights
            </h2>
          </div>
          <div className="prose text-left prose-slate max-w-none text-slate-600">
            <p>
              Under the GDPR (UK) and NDPR (Nigeria), you have the right to
              access, correct, or delete your personal data. You may also object
              to data processing or request data portability at any time.
            </p>
          </div>
        </section>

        {/* --- Contact / Support --- */}
        <section className="bg-blue-50 border border-blue-100 md:p-10 p-6 rounded-3xl text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Privacy Concerns?
          </h2>
          <p className="text-slate-600 mb-6">
            Our data protection team is here to help you with any questions.
          </p>
          <a
            href="mailto:support@buddyridenow.com"
            className="inline-block bg-primary text-white md:px-8 px-4 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors"
          >
            support@buddyridenow.com
          </a>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
