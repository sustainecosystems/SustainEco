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

const TermsOfService = () => {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2 mt-4"
        >
          <p className="text-3xl sm:text-4xl font-bold uppercase text-blue-600 ">Terms of Service</p>
        </motion.div>

        <Section title="1. Acceptance of Terms">
          <p>
            By accessing this site or engaging our services, you agree to these Terms of Service. If you do not agree, please
            discontinue use of the site and services.
          </p>
        </Section>

        <Section title="2. Services">
          <p>
            We provide environmental, sustainability, and advisory services as described on this site or in written proposals. Scope,
            deliverables, timelines, and fees will be defined in project-specific agreements.
          </p>
        </Section>

        <Section title="3. Use of the Site">
          <ul className="list-disc list-inside space-y-2">
            <li>Do not misuse the site (e.g., introduce malware, attempt unauthorized access, scrape without consent).</li>
            <li>Content is provided for informational purposes; we may update or remove it without notice.</li>
            <li>Third-party links are provided for convenience; we are not responsible for their content or policies.</li>
          </ul>
        </Section>

        <Section title="4. Intellectual Property">
          <p>
            Unless otherwise stated, site content, branding, and materials are owned by SustaiNECO or licensors. You may not copy,
            modify, or redistribute without prior written consent, except for fair use with attribution.
          </p>
        </Section>

        <Section title="5. Confidentiality">
          <p>
            During engagements, each party may receive confidential information. Both parties agree to protect such information and
            use it only for the intended project purposes, subject to any applicable NDAs.
          </p>
        </Section>

        <Section title="6. Disclaimers">
          <p>
            Services and site content are provided "as is" without warranties of any kind. We do not guarantee uninterrupted access
            or error-free content. Regulatory outcomes and third-party actions are beyond our control.
          </p>
        </Section>

        <Section title="7. Liability">
          <p>
            To the maximum extent permitted by law, SustaiNECO is not liable for indirect, incidental, or consequential damages arising
            from use of the site or services. Our aggregate liability in connection with a project is limited to fees paid for that
            project.
          </p>
        </Section>

        <Section title="8. Payments">
          <p>
            Fees, invoicing, and payment terms are defined in project agreements. Late payments may incur finance charges as specified
            in the applicable agreement.
          </p>
        </Section>

        <Section title="9. Termination">
          <p>
            Either party may terminate a project or access to the site for material breach, misuse, or as otherwise provided in the
            applicable agreement. Rights and obligations that by nature should survive (e.g., confidentiality, IP, payment) will
            continue after termination.
          </p>
        </Section>

        <Section title="10. Governing Law">
          <p>
            These Terms are governed by the laws of India. Disputes will be subject to the exclusive jurisdiction of courts located in
            India, unless otherwise agreed in writing.
          </p>
        </Section>

        <Section title="11. Contact">
          <p>
            For questions about these Terms, email <a className="text-blue-700 underline" href="mailto:info@sustaineco.co.in">info@sustaineco.co.in</a>.
          </p>
        </Section>
      </div>
    </div>
  );
};

export default TermsOfService;
