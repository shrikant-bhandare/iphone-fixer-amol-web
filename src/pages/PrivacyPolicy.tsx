import React from 'react';

const PrivacyPolicy = () => (
  <div className="bg-tech-950 min-h-screen py-16">
    <div className="container mx-auto px-4 max-w-3xl text-tech-100">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-tech-300 to-tech-500 text-transparent bg-clip-text">
        Privacy Policy
      </h1>
      <p className="mb-4 text-tech-200">
        Your privacy is important to us. This policy explains how we collect, use, and protect your information.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-tech-200">
        <li>We only collect information necessary to provide our services.</li>
        <li>Your data is never sold or shared with third parties.</li>
        <li>All transactions are secured with industry-standard encryption.</li>
        <li>You may request deletion of your data at any time.</li>
      </ul>
      <p className="mt-8 text-tech-300">
        For questions, please{' '}
        <a href="/contact" className="text-tech-400 underline">
          contact us
        </a>
        .
      </p>
    </div>
  </div>
);

export default PrivacyPolicy;
