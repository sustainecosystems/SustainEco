import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

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
    description:
      'Conducted baseline environmental and socio-economic assessment across four wards of Ayodhya and developed a real-time IT dashboard for data visualization and decision support in urban service delivery and waste management.',
    logo_url:
      LOCAL_PROJECT_IMAGES['Baseline Assessment and IT Dashboard Development – Ayodhya City (Uttar Pradesh)'] ||
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Waste Characterization Study – Haldwani Kathgodam Nagar Nigam (Uttarakhand, 2025)',
    description:
      'Carried out detailed waste characterization to analyze physical composition, density, and generation patterns of municipal solid waste to guide scientific management and policy interventions.',
    logo_url:
      LOCAL_PROJECT_IMAGES['Waste Characterization Study – Haldwani Kathgodam Nagar Nigam (Uttarakhand, 2025)'] ||
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'Detailed Project Report for Legacy Waste Remediation – Lansdowne Cantonment (Uttarakhand, 2025)',
    description:
      'Prepared DPR for legacy waste dumpsite remediation including baseline survey, waste quantification, engineering design, cost estimates, and environmental management plan.',
    logo_url:
      LOCAL_PROJECT_IMAGES['Detailed Project Report for Legacy Waste Remediation – Lansdowne Cantonment (Uttarakhand, 2025)'] ||
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    title: 'Legacy Waste DPR – Makhdumpur, Meerut (Uttar Pradesh, 2023)',
    description:
      'Developed DPR for scientific remediation and disposal of legacy waste with stakeholder consultations, design, and cost planning.',
    logo_url:
      LOCAL_PROJECT_IMAGES['Legacy Waste DPR – Makhdumpur, Meerut (Uttar Pradesh, 2023)'] ||
      'https://images.unsplash.com/photo-1503594384566-461fe158e797?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    title: 'Environmental and Social Impact Assessments (EIA/EMP) – Bihar State Highways (ADB-funded, 2023–ongoing)',
    description:
      'Served as Ecology & Biodiversity Specialist for SH-92 (Ganpatganj–Parwaha Road) and SH-52 (Sitamarhi–Pupri–Benipatti Road) under Bihar State Road Development Corporation.',
    logo_url:
      LOCAL_PROJECT_IMAGES['Environmental and Social Impact Assessments (EIA/EMP) – Bihar State Highways (ADB-funded, 2023–ongoing)'] ||
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 6,
    title: 'Gender Assessment and Gender Action Plan – Meghalaya Integrated Transport Project (World Bank, 2022–ongoing)',
    description:
      'Conducted household, passenger, and institutional surveys with a focus on gender equity in transport systems.',
    logo_url:
      LOCAL_PROJECT_IMAGES['Gender Assessment and Gender Action Plan – Meghalaya Integrated Transport Project (World Bank, 2022–ongoing)'] ||
      'https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 7,
    title: 'Environmental & Social Audit – Bihar Kosi Basin Development Project (World Bank, 2021–2023)',
    description:
      'Reviewed compliance with ESMF and safeguard documents, assessing effectiveness of environmental and social management in flood-prone districts.',
    logo_url:
      LOCAL_PROJECT_IMAGES['Environmental & Social Audit – Bihar Kosi Basin Development Project (World Bank, 2021–2023)'] ||
      'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 8,
    title: 'E-Waste Inventorization Studies (Maharashtra, Jharkhand, Chhattisgarh, Uttar Pradesh, 2016–2018)',
    description:
      'Executed state-level inventorization and quantification of e-waste for Pollution Control Boards and DeitY, analyzing recycling systems, stakeholder capacities, and environmental sustainability.',
    logo_url:
      LOCAL_PROJECT_IMAGES['E-Waste Inventorization Studies (Maharashtra, Jharkhand, Chhattisgarh, Uttar Pradesh, 2016–2018)'] ||
      'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 9,
    title: 'Plastic Waste Leakage Study – Ganga River Cities (UNEP, 2020)',
    description:
      'Conducted macroplastic analysis and GIS-based hotspot mapping in Haridwar, Agra, Prayagraj, and Patna to support UNEP’s CounterMEASURE initiative.',
    logo_url:
      LOCAL_PROJECT_IMAGES['Plastic Waste Leakage Study – Ganga River Cities (UNEP, 2020)'] ||
      'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 10,
    title: 'Preparation of DPRs for Solid Waste Management – Various ULBs in Karnataka, Uttar Pradesh, and Kerala (2014–2018)',
    description:
      'Designed integrated waste management systems, including composting, landfill engineering, and financial models for over 30 ULBs.',
    logo_url:
      LOCAL_PROJECT_IMAGES['Preparation of DPRs for Solid Waste Management – Various ULBs in Karnataka, Uttar Pradesh, and Kerala (2014–2018)'] ||
      'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1200&q=80',
  },
  
];

const ProjectsSection = () => {
  const projects = STATIC_PROJECTS;

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Projects</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming environmental challenges into sustainable solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        {projects.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl shadow-sm border border-gray-200">
            <Briefcase className="w-12 h-12 mx-auto mb-3 text-gray-400" />
            <p className="text-gray-500 text-sm sm:text-base">No projects available.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100 group"
              >
                {/* Project Image/Logo */}
                <div className="relative h-48 sm:h-56 bg-white flex items-center justify-center overflow-hidden">
                  {project.logo_url ? (
                    <img
                      src={project.logo_url}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div
                    className="w-full h-full flex items-center justify-center bg-gray-50"
                    style={{ display: project.logo_url ? 'none' : 'flex' }}
                  >
                    <Briefcase className="w-16 h-16 sm:w-20 sm:h-20 text-gray-300" />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;