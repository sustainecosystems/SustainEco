import React from 'react';
import { motion } from 'framer-motion';

const STATIC_CONTENT = {
  title: 'Who We Are',
  description: [
    'SustainEco Systems & Services is an environmental consultancy and project advisory firm dedicated to building sustainable, resilient, and resource-efficient urban and industrial systems. We work at the intersection of waste management, circular economy, and environmental sustainability, supporting governments, urban local bodies, industries, and development agencies with practical, data-driven solutions.',
    'With a strong focus on implementation-oriented consulting, we specialize in baseline assessments, system design, process optimization, and technology-enabled monitoring solutions such as real-time IT dashboards for Solid Waste Management and Material Recovery Facilities. Our approach combines on-ground experience with analytical rigor to ensure that strategies are not only compliant with regulatory frameworks but are also operationally viable and scalable.',
    'At SustainEco, we believe sustainability must translate into measurable outcomes. By integrating policy understanding, technical expertise, and digital tools, we help our clients improve environmental performance, enhance operational efficiency, and advance circular economy objectives.'
  ],
  highlights: [
    
  ]
};

const AboutUsSection = () => {
  const content = STATIC_CONTENT;

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Title */}
          <div className="text-center mb-8 sm:mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
            >
              {content.title}
            </motion.h1>
            
            {content.subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 font-semibold"
              >
                {content.subtitle}
              </motion.p>
            )}
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 border border-gray-100"
          >
            <div className="space-y-4">
              {content.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base sm:text-lg text-gray-700 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-6">
              <ul className="space-y-3 text-base sm:text-lg text-gray-700 leading-relaxed list-disc list-inside">
                {content.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;