import React from 'react';

const TermsOfService = () => (
  <div className="bg-tech-950 min-h-screen flex items-start">
    <div className="container mx-auto px-4 max-w-3xl text-tech-100 py-16">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-tech-300 to-tech-500 text-transparent bg-clip-text">
        Terms of Service
      </h1>
      <p className="mb-4 text-tech-200">
        Welcome to Iphone Fixer Amol. By using our website and services, you agree to the following terms and conditions.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-tech-200">
        <li>All repairs are performed by certified technicians.</li>
        <li>Warranty applies only to parts replaced by us.</li>
        <li>We are not responsible for data loss during repair.</li>
        <li>Payment is due upon completion of service.</li>
        <li>For full terms, please contact our support team.</li>
      </ul>
      <p className="mt-8 text-tech-300">
        If you have any questions, please <a href="/contact" className="text-tech-400 underline">contact us</a>.
      </p>
    </div>
  </div>
);

export default TermsOfService;
