import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Recycle, ChevronLeft, ChevronRight } from 'lucide-react';
import FadeInSection from './FadeInSection';

const LOCAL_PROJECT_IMAGES = {
  'Baseline Assessment and IT Dashboard Development – Ayodhya City (Uttar Pradesh)': new URL(
    '../assets/images/Baseline Assessment and IT Dashboard Development – Ayodhya City (Uttar Pradesh).jpeg',
    import.meta.url,
  ).href,
  'Waste Characterization Study – Haldwani Kathgodam Nagar Nigam (Uttarakhand, 2025)': new URL(
    '../assets/images/Waste Characterization Study – Haldwani Kathgodam Nagar Nigam (Uttarakhand, 2025).jpeg',
    import.meta.url,
  ).href,
  'Detailed Project Report for Legacy Waste Remediation – Lansdowne Cantonment (Uttarakhand, 2025)': new URL(
    "../assets/images/Detailed Project Report for Legacy Waste Remediation – Lansdowne Cantonment (Uttarakhand,.jpeg",
    import.meta.url,
  ).href,
  'Legacy Waste DPR – Makhdumpur, Meerut (Uttar Pradesh, 2023)': new URL(
    '../assets/images/Legacy Waste DPR – Makhdumpur, Meerut (Uttar Pradesh, 2023).jpeg',
    import.meta.url,
  ).href,
  'Environmental and Social Impact Assessments (EIA/EMP) – Bihar State Highways (ADB-funded, 2023–ongoing)': new URL(
    '../assets/images/Environmental and Social Impact Assessments (EIAEMP) – Bihar State Highways (ADB-funded,.jpeg',
    import.meta.url,
  ).href,
  'Gender Assessment and Gender Action Plan – Meghalaya Integrated Transport Project (World Bank, 2022–ongoing)': new URL(
    '../assets/images/Gender Assessment and Gender Action Plan – Meghalaya Integrated Transport Project (World Bank, 2022–ongoing).jpeg',
    import.meta.url,
  ).href,
  'Environmental & Social Audit – Bihar Kosi Basin Development Project (World Bank, 2021–2023)': new URL(
    '../assets/images/Environmental & Social Audit – Bihar Kosi Basin Development Project (World Bank, 2021–2023).jpeg',
    import.meta.url,
  ).href,
  'E-Waste Inventorization Studies (Maharashtra, Jharkhand, Chhattisgarh, Uttar Pradesh, 2016–2018)': new URL(
    '../assets/images/E-Waste Inventorization Studies (Maharashtra, Jharkhand, Chhattisgarh, Uttar Pradesh, 2016–2018).jpeg',
    import.meta.url,
  ).href,
  'Plastic Waste Leakage Study – Ganga River Cities (UNEP, 2020)': new URL(
    '../assets/images/Plastic Waste Leakage Study – Ganga River Cities (UNEP, 2020).jpeg',
    import.meta.url,
  ).href,
  'Preparation of DPRs for Solid Waste Management – Various ULBs in Karnataka, Uttar Pradesh, and Kerala (2014–2018)': new URL(
    '../assets/images/Preparation of DPRs for Solid Waste Management – Various ULBs in Karnataka, Uttar Pradesh, and Kerala (2014–2018).jpeg',
    import.meta.url,
  ).href,
};

const STATIC_PROJECTS = [
  {
    id: 1,
    title: 'Baseline Assessment and IT Dashboard Development – Ayodhya City (Uttar Pradesh)',
    description: 'Conducted baseline environmental and socio-economic assessment across four wards of Ayodhya and developed a real-time IT dashboard for data visualization and decision support in urban service delivery and waste management.',
    logo_url:
      LOCAL_PROJECT_IMAGES['Baseline Assessment and IT Dashboard Development – Ayodhya City (Uttar Pradesh)'] ||
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Waste Characterization Study – Haldwani Kathgodam Nagar Nigam (Uttarakhand, 2025)',
    description: 'Carried out detailed waste characterization to analyze physical composition, density, and generation patterns of municipal solid waste to guide scientific management and policy interventions.',
    logo_url:
      LOCAL_PROJECT_IMAGES['Waste Characterization Study – Haldwani Kathgodam Nagar Nigam (Uttarakhand, 2025)'] ||
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'Detailed Project Report for Legacy Waste Remediation – Lansdowne Cantonment (Uttarakhand, 2025)',
    description: 'Prepared DPR for legacy waste dumpsite remediation including baseline survey, waste quantification, engineering design, cost estimates, and environmental management plan.',
    logo_url:
      LOCAL_PROJECT_IMAGES['Detailed Project Report for Legacy Waste Remediation – Lansdowne Cantonment (Uttarakhand, 2025)'] ||
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    title: 'Legacy Waste DPR – Makhdumpur, Meerut (Uttar Pradesh, 2023)',
    description: 'Developed DPR for scientific remediation and disposal of legacy waste with stakeholder consultations, design, and cost planning.',
    logo_url:
      LOCAL_PROJECT_IMAGES['Legacy Waste DPR – Makhdumpur, Meerut (Uttar Pradesh, 2023)'] ||
      'https://images.unsplash.com/photo-1503594384566-461fe158e797?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    title: 'Environmental and Social Impact Assessments (EIA/EMP) – Bihar State Highways (ADB-funded, 2023–ongoing)',
    description: 'Served as Ecology & Biodiversity Specialist for SH-92 (Ganpatganj–Parwaha Road) and SH-52 (Sitamarhi–Pupri–Benipatti Road) under Bihar State Road Development Corporation.',
    logo_url:
      LOCAL_PROJECT_IMAGES['Environmental and Social Impact Assessments (EIA/EMP) – Bihar State Highways (ADB-funded, 2023–ongoing)'] ||
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 6,
    title: 'Gender Assessment and Gender Action Plan – Meghalaya Integrated Transport Project (World Bank, 2022–ongoing)',
    description: 'Conducted household, passenger, and institutional surveys with a focus on gender equity in transport systems.',
    logo_url:
      LOCAL_PROJECT_IMAGES['Gender Assessment and Gender Action Plan – Meghalaya Integrated Transport Project (World Bank, 2022–ongoing)'] ||
      'https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 7,
    title: 'Environmental & Social Audit – Bihar Kosi Basin Development Project (World Bank, 2021–2023)',
    description: 'Reviewed compliance with ESMF and safeguard documents, assessing effectiveness of environmental and social management in flood-prone districts.',
    logo_url:
      LOCAL_PROJECT_IMAGES['Environmental & Social Audit – Bihar Kosi Basin Development Project (World Bank, 2021–2023)'] ||
      'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 8,
    title: 'E-Waste Inventorization Studies (Maharashtra, Jharkhand, Chhattisgarh, Uttar Pradesh, 2016–2018)',
    description: 'Executed state-level inventorization and quantification of e-waste for Pollution Control Boards and DeitY, analyzing recycling systems, stakeholder capacities, and environmental sustainability.',
    logo_url:
      LOCAL_PROJECT_IMAGES['E-Waste Inventorization Studies (Maharashtra, Jharkhand, Chhattisgarh, Uttar Pradesh, 2016–2018)'] ||
      'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 9,
    title: 'Plastic Waste Leakage Study – Ganga River Cities (UNEP, 2020)',
    description: 'Conducted macroplastic analysis and GIS-based hotspot mapping in Haridwar, Agra, Prayagraj, and Patna to support UNEP’s CounterMEASURE initiative.',
    logo_url:
      LOCAL_PROJECT_IMAGES['Plastic Waste Leakage Study – Ganga River Cities (UNEP, 2020)'] ||
      'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 10,
    title: 'Preparation of DPRs for Solid Waste Management – Various ULBs in Karnataka, Uttar Pradesh, and Kerala (2014–2018)',
    description: 'Designed integrated waste management systems, including composting, landfill engineering, and financial models for over 30 ULBs.',
    logo_url:
      LOCAL_PROJECT_IMAGES['Preparation of DPRs for Solid Waste Management – Various ULBs in Karnataka, Uttar Pradesh, and Kerala (2014–2018)'] ||
      'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1200&q=80',
  },
];

const ProjectsSection = () => {
  const [projects] = useState(STATIC_PROJECTS);
  // const projects = [
  //   {
  //     title: "Urban Waste Management System",
  //     desc: "Comprehensive waste segregation and recycling initiative across 50+ cities",
  //     bgClass: "bg-brand-diag"
  //   },
  //   {
  //     title: "Climate Action Framework",
  //     desc: "Strategic planning for carbon neutrality in metropolitan regions",
  //     bgClass: "bg-brand-diag-alt"
  //   },
  //   {
  //     title: "Water Conservation Program",
  //     desc: "Innovative solutions for sustainable water resource management",
  //     bgClass: "bg-brand-deep"
  //   }
  // ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setSlidesPerView(1);
      else if (window.innerWidth < 1024) setSlidesPerView(2);
      else setSlidesPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, projects.length - slidesPerView);

  const nextSlide = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  useEffect(() => {
    if (!isInView) return; // Start auto-slide only when in view

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isInView, maxIndex]);

  return (
    <section id="projects" ref={ref} className="py-24 bg-gradient-to-b from-white via-emerald-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-emerald-600 to-indigo-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transforming environmental challenges into sustainable opportunities
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-emerald-50"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-emerald-600" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-emerald-50"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-emerald-600" />
          </button>

          {/* Slider */}
          <div className="overflow-hidden py-[20px]">
            <motion.div
              className="flex gap-8"
              animate={{
                x: `calc(-${currentIndex * (100 / slidesPerView)}% - ${currentIndex * (2 / slidesPerView)}rem)`,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  style={{
                    flex: `0 0 calc(${100 / slidesPerView}% - ${
                      (slidesPerView - 1) * 2 / slidesPerView
                    }rem)`,
                    width: `calc(${100 / slidesPerView}% - ${
                      (slidesPerView - 1) * 2 / slidesPerView
                    }rem)`,
                  }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-gradient-to-br from-emerald-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover-scale border-2 border-transparent hover:border-emerald-200"
                >
                  <div
                    className={`w-full h-48 rounded-xl mb-4 flex items-center justify-center overflow-hidden ${project?.logo_url ? '' : 'bg-brand-diag'}`}
                  >
                    {project?.logo_url ? (
                      <img
                        src={project?.logo_url}
                        alt={project?.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Recycle className="w-20 h-20 text-white" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project?.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project?.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex
                    ? "w-8 bg-gradient-to-r from-emerald-600 to-indigo-600"
                    : "w-2 bg-gray-300 hover:bg-emerald-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;