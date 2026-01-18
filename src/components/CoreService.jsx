import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const LOCAL_SERVICE_IMAGES = {
  'Waste Management & Circular Economy': new URL(
    '../assets/images/Waste Management & Circular Economy.jpeg',
    import.meta.url,
  ).href,
  'Environmental Sustainability': new URL(
    '../assets/images/Environmental Sustainability.jpeg',
    import.meta.url,
  ).href,
  'Social Development & Socio-Economic Studies': new URL(
    '../assets/images/Social Development & Socio-Economic Studies.jpeg',
    import.meta.url,
  ).href,
  'Natural Resource Management': new URL(
    '../assets/images/Natural Resource Management.jpeg',
    import.meta.url,
  ).href,
  'Climate Change Mitigation & Adaptation': new URL(
    '../assets/images/Climate Change Mitigation & Adaptation.jpeg',
    import.meta.url,
  ).href,
  'GIS Mapping & Real-Time Data Dashboards': new URL(
    '../assets/images/GIS Mapping & Real-Time Data Dashboards.jpeg',
    import.meta.url,
  ).href,
};

const services = [
  {
    title: "Waste Management & Circular Economy",
    image:
      LOCAL_SERVICE_IMAGES["Waste Management & Circular Economy"] ||
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80",
    points: [
      "Comprehensive consultancy for Solid, Plastic, Legacy, Biomedical, and E-waste management.",
      "Planning, design, and implementation of integrated waste systems: door-to-door collection, source segregation, treatment, processing, and scientific disposal.",
      "Circular economy interventions, EPR advisory, bioremediation, and landfill reclamation to promote sustainable urban systems."
    ],
  },
  {
    title: "Environmental Sustainability",
    image:
      LOCAL_SERVICE_IMAGES["Environmental Sustainability"] ||
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
    points: [
      "Environmental Impact Assessment (EIA), Environmental Management Plans (EMP), and audits for industrial, infrastructure, and development projects.",
      "Sustainability and ESG strategies with SDG alignment, BRSR, and GRI reporting.",
      "Resource efficiency, pollution prevention, and support for LEED, GRIHA, and ISO 14001 certifications."
    ],
  },
  {
    title: "Social Development & Socio-Economic Studies",
    image:
      LOCAL_SERVICE_IMAGES["Social Development & Socio-Economic Studies"] ||
      "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=900&q=80",
    points: [
      "Socio-economic surveys and baseline assessments for planning, policy formulation, and project evaluation.",
      "Awareness generation and BCC campaigns for Urban Local Bodies, industries, and communities.",
      "Community engagement, inclusion of informal sector workers, and CSR-driven livelihood development programs."
    ],
  },
  {
    title: "Natural Resource Management",
    image:
      LOCAL_SERVICE_IMAGES["Natural Resource Management"] ||
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80",
    points: [
      "Planning and implementation support for afforestation, watershed management, and rainwater harvesting.",
      "Biodiversity conservation, land reclamation, and promotion of sustainable agriculture practices.",
      "Participatory natural resource governance and ecosystem valuation to enhance ecological and community resilience."
    ],
  },
  {
    title: "Climate Change Mitigation & Adaptation",
    image:
      LOCAL_SERVICE_IMAGES["Climate Change Mitigation & Adaptation"] ||
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    points: [
      "Carbon footprint assessment, GHG inventories, and MRV systems at policy, program, and project levels.",
      "Climate resilience and disaster risk reduction planning for government and private sector clients.",
      "Renewable energy advisory plus Net Zero and low-carbon transition strategies."
    ],
  },
  {
    title: "GIS Mapping & Real-Time Data Dashboards",
    image:
      LOCAL_SERVICE_IMAGES["GIS Mapping & Real-Time Data Dashboards"] ||
      "https://images.unsplash.com/photo-1526413232644-8a40f03cc03c?auto=format&fit=crop&w=900&q=80",
    points: [
      "Development of GIS-based mapping, spatial analysis, and visualization tools for environmental and social datasets.",
      "Spatial planning and monitoring of waste systems, natural resources, and community infrastructure.",
      "Design and deployment of real-time dashboards and decision-support systems for data-driven management, monitoring, and reporting."
    ],
  }
];

const CoreServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [servicesDetails] = useState(services);

  return (
    <section
      id="services"
      ref={ref}
      className="py-12 sm:py-16 md:py-20 bg-white mt-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Core <span className="text-blue-700">Services</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive environmental and sustainability solutions tailored to meet your organizational goals
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesDetails.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-all group overflow-hidden border border-gray-100 flex flex-col"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-44 sm:h-52 md:h-56 object-cover rounded-t-xl sm:rounded-t-2xl"
              />

              {/* Title */}
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-4">
                  {service.title}
                </h3>

                {/* Points */}
                <ul className="space-y-3">
                  {service.points.map((point, pointIdx) => (
                    <li
                      key={pointIdx}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle
                        className="text-green-500 flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-sm text-gray-700 leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServicesSection;
