import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, FolderKanban, Users, MapPin } from 'lucide-react';
import FadeInSection from './FadeInSection';
import AnimatedCounter from './AnimatedCounter';
import IndiaMap from './IndiaMap';

const STATIC_METRICS = {
  clients: 100,
  projects: 150,
  lives_impacted: 50000,
  states_covered: 15,
};

const STATIC_FOOTPRINT = [
  { id: 1, state_code: 'UP', state_name: 'Uttar Pradesh' },
  { id: 2, state_code: 'BR', state_name: 'Bihar' },
  { id: 3, state_code: 'WB', state_name: 'West Bengal' },
  { id: 4, state_code: 'SK', state_name: 'Sikkim' },
  { id: 5, state_code: 'AS', state_name: 'Assam' },
  { id: 6, state_code: 'ML', state_name: 'Meghalaya' },
  { id: 7, state_code: 'TR', state_name: 'Tripura' },
  { id: 8, state_code: 'UT', state_name: 'Uttarakhand' },
  { id: 9, state_code: 'LA', state_name: 'Ladakh' },
  { id: 9.1, state_code: 'JK', state_name: 'Jammu and Kashmir' },
  { id: 10, state_code: 'MH', state_name: 'Maharashtra' },
  { id: 11, state_code: 'JH', state_name: 'Jharkhand' },
  { id: 12, state_code: 'KA', state_name: 'Karnataka' },
  { id: 13, state_code: 'KL', state_name: 'Kerala' },
  { id: 14, state_code: 'GJ', state_name: 'Gujarat' },
  { id: 15, state_code: 'CG', state_name: 'Chhattisgarh' },
];

const ImpactMatrixSection = () => {
  const [metrics] = useState(STATIC_METRICS);
  const [footprintStates] = useState(STATIC_FOOTPRINT);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-amber-50 to-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-emerald-600 to-indigo-600 bg-clip-text text-transparent">
              Our Impact
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              {/* Clients Card */}
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-white shadow-lg hover:shadow-2xl transition-shadow animate-pulse-glow"
              >
                <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-2 sm:mb-3 md:mb-4" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
                  <AnimatedCounter end={metrics.clients} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm md:text-base text-emerald-100">
                  Happy Clients
                </div>
              </motion.div>

              {/* Projects Card */}
              <motion.div 
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-white shadow-lg hover:shadow-2xl transition-shadow animate-pulse-glow"
              >
                <FolderKanban className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-2 sm:mb-3 md:mb-4" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
                  <AnimatedCounter end={metrics.projects} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm md:text-base text-amber-100">
                  Projects Completed
                </div>
              </motion.div>

              {/* Lives Impacted Card */}
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-white shadow-lg hover:shadow-2xl transition-shadow animate-pulse-glow"
              >
                <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-2 sm:mb-3 md:mb-4" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
                  <AnimatedCounter end={metrics.lives_impacted} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm md:text-base text-indigo-100">
                  Lives Impacted
                </div>
              </motion.div>

              {/* States Covered Card */}
              <motion.div 
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="bg-gradient-to-br from-amber-600 to-indigo-600 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-white shadow-lg hover:shadow-2xl transition-shadow animate-pulse-glow"
              >
                <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-2 sm:mb-3 md:mb-4" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
                  <AnimatedCounter end={metrics.states_covered} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm md:text-base text-amber-100">
                  States Covered
                </div>
              </motion.div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-emerald-50 to-indigo-50 rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 shadow-lg hover:shadow-2xl transition-shadow border-2 border-transparent hover:border-emerald-200"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 md:mb-6 text-gray-900">
                Project Footprint
              </h3>
              <div className="bg-white rounded-lg sm:rounded-xl p-5 sm:p-6">
                <>
                  <IndiaMap 
                    highlightedStates={footprintStates.map(s => s.state_code)} 
                    statesData={footprintStates}
                  />
                </>
              </div>
            </motion.div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default ImpactMatrixSection;