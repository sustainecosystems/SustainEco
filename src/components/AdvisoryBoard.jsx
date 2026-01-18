import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import FadeInSection from './FadeInSection';

const LOCAL_ADVISOR_IMAGES = {
  'Mr. Shashi Ranjan Chaudhary': new URL('../assets/images/Shashi Ranjan.jpeg', import.meta.url).href,
  'Mr. Sumeet Kumar Singh': new URL('../assets/images/Sumeet Kumar.jpeg', import.meta.url).href,
  'Mr. Sanjeev Satyanarayan': new URL('../assets/images/Sanjeev Satyanarayan .jpeg', import.meta.url).href,
};

const advisors = [
  {
    name: 'Mr. Shashi Ranjan Chaudhary',
    title: 'Founder & Principal Consultant',
    descriptionParts: [
      "Mr. Shashi Ranjan Chaudhary is the Founder and Principal Consultant of SustainEco Systems & Services. He holds a Master's degree in Ecology and Environmental Sciences from Pondicherry University and brings over 12 years of professional experience in the environmental and social development sectors.",
      'He has successfully led and contributed to more than 50 projects across India, with a strong focus on solid waste management, circular economy interventions, environmental assessments, and sustainable urban systems. His expertise spans baseline studies, system design, regulatory compliance, capacity building, and implementation support for urban local bodies, government agencies, and development organizations.',
      
    ],
    image_url: '',
  },
  {
    name: 'Mr. Sumeet Kumar Singh',
    title: 'Waste Management Expert',
    descriptionParts: [
      'Mr. Sumeet Kumar Singh is a seasoned waste management professional with over 25 years of hands-on leadership experience in Integrated Solid Waste Management (ISWM). His expertise spans the planning, implementation, and operational management of large-scale municipal waste systems.',
      'He brings a strong global perspective, having worked on waste management projects across India, Nigeria, and Ivory Coast. Mr. Singh has successfully managed and overseen city-scale waste management operations handling more than 2,500 tonnes per day, covering end-to-end processes from collection and transportation to treatment and disposal.',
      
    ],
    image_url: '',
  },
  {
    name: 'Mr. Sanjeev Satyanarayan',
    title: 'MIS & GIS Expert',
    descriptionParts: [
      'Mr. Sanjeev Satyanarayan is a senior Data Management, MIS/GIS, and Waste Management expert with over 25 years of multidisciplinary experience spanning solid waste, plastic waste, e-waste, environmental impact assessment, climate change, water resources, and large-scale infrastructure projects.',
      'He currently serves as General Manager (Geomatics & Information Technology / Waste Management) at IRG Systems South Asia Pvt. Ltd., where he has led and delivered complex national and international assignments for government agencies, multilateral institutions, and international organizations.',
      
    ],
    image_url: '',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const AdvisoryBoard = () => {
  return(
    <>
      <section
    id="advisory-board"
    className="relative py-16 sm:py-20 md:py-24 bg-white"
  >
    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 sm:mb-14"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
          Advisory Board
        </h2>
        <p className="text-gray-600 mt-3 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
          Our Advisory Board consists of visionary leaders and experts guiding us
          toward a sustainable and innovative future.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {advisors.map((advisor, index) => (
          <FadeInSection key={index} delay={index * 0.2}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
              }}
              className="relative bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl p-6 sm:p-8 text-center h-full text-white shadow-lg transition-all duration-300"
            >
              {LOCAL_ADVISOR_IMAGES[advisor.name] || advisor.image_url ? (
                <img
                  src={LOCAL_ADVISOR_IMAGES[advisor.name] || advisor.image_url}
                  alt={advisor.name}
                  className="w-16 h-16 rounded-full object-cover mb-4 sm:mb-6 mx-auto bg-white shadow"
                />
              ) : (
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <Users className="text-white" size={26} />
                </div>
              )}
              <h3 className="text-xl sm:text-2xl font-bold">
                {advisor.name}
              </h3>
              <p className="text-sm sm:text-base font-medium mt-1 mb-3 opacity-90">
                {advisor.title}
              </p>
              <div className="space-y-3 text-sm sm:text-base leading-relaxed opacity-90 text-left sm:text-center">
                {advisor.descriptionParts.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </motion.div>
          </FadeInSection>
        ))}
      </div>
    </div>
  </section>
    </>
  )
}

export default AdvisoryBoard;
