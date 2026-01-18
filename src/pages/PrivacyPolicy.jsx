import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8"
  >
    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
    <div className="space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base">
      {children}
    </div>
  </motion.div>
);

const PrivacyPolicy = () => {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2 mt-2 "
        >
          <h1 className="text-3xl sm:text-4xl font-bold uppercase text-blue-600">Privacy Policy</h1>
         
        </motion.div>

        <Section title="1. Information We Collect">
          <p>
            We may collect personal details you provide (name, email, phone), professional information (organization, role), and
            project-related data shared during engagements. We also collect limited usage and device data (browser type, pages
            visited, and timestamps) through analytics to improve site performance.
          </p>
        </Section>

        <Section title="2. How We Use Information">
          <ul className="list-disc list-inside space-y-2">
            <li>To respond to inquiries, proposals, and support requests.</li>
            <li>To deliver consulting engagements and project updates.</li>
            <li>To improve our website, services, and user experience.</li>
            <li>To meet legal, compliance, and security obligations.</li>
          </ul>
        </Section>

        <Section title="3. Cookies & Analytics">
          <p>
            We use cookies and analytics to understand site performance and user interactions. You can control cookies through your
            browser settings; disabling them may limit certain features.
          </p>
        </Section>

        <Section title="4. Data Sharing">
          <p>
            We do not sell personal data. We may share information with trusted service providers (hosting, analytics, communication
            tools) under confidentiality obligations, and when required by law or to protect rights and safety.
          </p>
        </Section>

        <Section title="5. Data Security">
          <p>
            We apply reasonable technical and organizational measures—including encryption in transit, access controls, and logging—to
            protect data against unauthorized access, alteration, or loss.
          </p>
        </Section>

        <Section title="6. Data Retention">
          <p>
            We retain personal data only as long as necessary for the purposes described above, to fulfill legal requirements, or to
            resolve disputes. When no longer needed, data is deleted or anonymized.
          </p>
        </Section>

        <Section title="7. Your Rights">
          <p>
            You may request access, correction, or deletion of your personal data, and you may withdraw consent where applicable. To
            exercise these rights, contact us using the details below.
          </p>
        </Section>

        <Section title="8. Contact">
          <p>
            For privacy questions or requests, email us at <a className="text-blue-700 underline" href="mailto:info@sustaineco.co.in">info@sustaineco.co.in</a>.
          </p>
        </Section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
