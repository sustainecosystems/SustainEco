import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const LOCAL_LOGOS = {
  'Ministry of Micro, Small and Medium Enterprises (MSME)': new URL(
    '../assets/images/Ministry of Micro, Small and Medium Enterprises (MSME).jpeg',
    import.meta.url,
  ).href,
  'Ministry of Urban Development, Government of India': new URL(
    '../assets/images/Ministry of Urban Development, Government of India.jpeg',
    import.meta.url,
  ).href,
  'Ladakh Ecological Development Group (LEDeG)': new URL(
    '../assets/images/Ladakh Ecological Development Group (LEDeG).jpeg',
    import.meta.url,
  ).href,
  'Central Water Commission (CWC)': new URL(
    '../assets/images/Central Water Commission (CWC).jpeg',
    import.meta.url,
  ).href,
  'Inland Waterways Authority of India (IWAI)': new URL(
    '../assets/images/Inland Waterways Authority of India (IWAI).jpeg',
    import.meta.url,
  ).href,
  'Chhattisgarh Environment Conservation Board (CECB)': new URL(
    '../assets/images/Chhattisgarh Environment Conservation Board (CECB).jpeg',
    import.meta.url,
  ).href,
  'Jharkhand State Pollution Control Board (JSPCB)': new URL(
    '../assets/images/Jharkhand State Pollution Control Board (JSPCB).jpeg',
    import.meta.url,
  ).href,
  'Maharashtra Pollution Control Board (MPCB)': new URL(
    '../assets/images/Maharashtra Pollution Control Board (MPCB).jpeg',
    import.meta.url,
  ).href,
  'Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)': new URL(
    '../assets/images/Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ).jpeg',
    import.meta.url,
  ).href,
  'United Nations Environment Programme (UNEP)': new URL(
    '../assets/images/United Nations Environment Programme (UNEP).jpeg',
    import.meta.url,
  ).href,
  'World Bank Group': new URL('../assets/images/World Bank Group.jpeg', import.meta.url).href,
  'Asian Development Bank (ADB)': new URL(
    '../assets/images/Asian Development Bank (ADB).jpeg',
    import.meta.url,
  ).href,
  'UPSIDA (Uttar Pradesh State Industrial Development Authority) – Lucknow': new URL(
    '../assets/images/UPSIDA (Uttar Pradesh State Industrial Development Authority) – Lucknow.jpeg',
    import.meta.url,
  ).href,
  'Department of Tourism, Government of Uttar Pradesh': new URL(
    '../assets/images/Department of Tourism, Government of Uttar Pradesh.jpeg',
    import.meta.url,
  ).href,
  'Construction & Design Services, U.P. Jal Nigam – Government of Uttar Pradesh': new URL(
    '../assets/images/Construction & Design Services, U.P. Jal Nigam – Government of Uttar Pradesh.jpeg',
    import.meta.url,
  ).href,
  'Kerala State Industrial Development Corporation (KSIDC) – Government of Kerala': new URL(
    '../assets/images/Kerala State Industrial Development Corporation (KSIDC) – Government of Kerala.jpeg',
    import.meta.url,
  ).href,
  'Directorate of Tribal Welfare – Government of Tripura': new URL(
    '../assets/images/Directorate of Tribal Welfare – Government of Tripura.jpeg',
    import.meta.url,
  ).href,
  'Flood and River Erosion Management Agency of Assam (FREMAA) – Government of Assam': new URL(
    '../assets/images/Flood and River Erosion Management Agency of Assam (FREMAA) – Government of Assam.jpeg',
    import.meta.url,
  ).href,
  'Bihar Aapda Punarwas Evam Punarnirman Society (BAPEPS) – Government of Bihar': new URL(
    '../assets/images/Bihar Aapda Punarwas Evam Punarnirman Society (BAPEPS) – Government of Bihar.jpeg',
    import.meta.url,
  ).href,
  'Meghalaya Basin Development Authority (MBDA) – Government of Meghalaya': new URL(
    '../assets/images/Meghalaya Basin Development Authority (MBDA) – Government of Meghalaya.jpeg',
    import.meta.url,
  ).href,
  'Department of Roads and Bridges, Government of Sikkim': new URL(
    '../assets/images/Department of Roads and Bridges, Government of Sikkim.jpeg',
    import.meta.url,
  ).href,
  'Bihar State Road Development Corporation Ltd. – Government of Bihar': new URL(
    '../assets/images/Bihar State Road Development Corporation Ltd. – Government of Bihar.jpeg',
    import.meta.url,
  ).href,
  'Nagar Palika Parishad Mawana': new URL(
    '../assets/images/Nagar Palika Parishad Mawana.jpeg',
    import.meta.url,
  ).href,
  'Lansdowne Cantonment Board': new URL(
    '../assets/images/Lansdowne Cantonment Board.jpeg',
    import.meta.url,
  ).href,
  'Nagar Nigam Haldwani': new URL('../assets/images/Nagar Nigam Haldwani.jpeg', import.meta.url)
    .href,
  'Chintan Environmental Research and Action Group': new URL(
    '../assets/images/Chintan Environmental Research and Action Group.jpeg',
    import.meta.url,
  ).href,
};

const STATIC_CLIENTS = [
  {
    name: 'Ministry of Micro, Small and Medium Enterprises (MSME)',
    logo_url: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Ministry_of_Micro%2C_Small_and_Medium_Enterprises_India_logo.png',
  },
  {
    name: 'Ministry of Urban Development, Government of India',
    logo_url: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Ministry_of_Housing_and_Urban_Affairs_logo.png',
  },
  {
    name: 'Ladakh Ecological Development Group (LEDeG)',
    logo_url: 'https://i.imgur.com/zjtyEtd.png',
  },
  {
    name: 'Central Water Commission (CWC)',
    logo_url: 'https://upload.wikimedia.org/wikipedia/en/9/92/Central_Water_Commission_logo.png',
  },
  {
    name: 'Inland Waterways Authority of India (IWAI)',
    logo_url: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Inland_Waterways_Authority_of_India_logo.png',
  },
  {
    name: 'Chhattisgarh Environment Conservation Board (CECB)',
    logo_url: 'https://i.imgur.com/6k6N3zC.png',
  },
  {
    name: 'Jharkhand State Pollution Control Board (JSPCB)',
    logo_url: 'https://i.imgur.com/FOhXcE8.png',
  },
  {
    name: 'Maharashtra Pollution Control Board (MPCB)',
    logo_url: 'https://i.imgur.com/Utpo6pt.png',
  },
  {
    name: 'Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)',
    logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Deutsche_Gesellschaft_f%C3%BCr_Internationale_Zusammenarbeit_logo.svg/512px-Deutsche_Gesellschaft_f%C3%BCr_Internationale_Zusammenarbeit_logo.svg.png',
  },
  {
    name: 'United Nations Environment Programme (UNEP)',
    logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/UN_Environment_Programme_logo.svg/512px-UN_Environment_Programme_logo.svg.png',
  },
  {
    name: 'World Bank Group',
    logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/World_Bank_logo.svg/512px-World_Bank_logo.svg.png',
  },
  {
    name: 'Asian Development Bank (ADB)',
    logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Asian_Development_Bank_logo.svg/512px-Asian_Development_Bank_logo.svg.png',
  },
  {
    name: 'UPSIDA (Uttar Pradesh State Industrial Development Authority) – Lucknow',
    logo_url: 'https://i.imgur.com/7w2iH3e.png',
  },
  {
    name: 'Department of Tourism, Government of Uttar Pradesh',
    logo_url: 'https://i.imgur.com/9RxxJjX.png',
  },
  {
    name: 'Construction & Design Services, U.P. Jal Nigam – Government of Uttar Pradesh',
    logo_url: 'https://i.imgur.com/Wo9nljH.png',
  },
  {
    name: 'Kerala State Industrial Development Corporation (KSIDC) – Government of Kerala',
    logo_url: 'https://i.imgur.com/3SgvJd5.png',
  },
  {
    name: 'Directorate of Tribal Welfare – Government of Tripura',
    logo_url: 'https://i.imgur.com/6Pex84E.png',
  },
  {
    name: 'Flood and River Erosion Management Agency of Assam (FREMAA) – Government of Assam',
    logo_url: 'https://i.imgur.com/83P1Whx.png',
  },
  {
    name: 'Bihar Aapda Punarwas Evam Punarnirman Society (BAPEPS) – Government of Bihar',
    logo_url: 'https://i.imgur.com/1w7sPju.png',
  },
  {
    name: 'Meghalaya Basin Development Authority (MBDA) – Government of Meghalaya',
    logo_url: 'https://i.imgur.com/paUo1da.png',
  },
  {
    name: 'Department of Roads and Bridges, Government of Sikkim',
    logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Emblem_of_Sikkim.svg/512px-Emblem_of_Sikkim.svg.png',
  },
  {
    name: 'Bihar State Road Development Corporation Ltd. – Government of Bihar',
    logo_url: 'https://i.imgur.com/dmQozUR.png',
  },
  {
    name: 'Nagar Palika Parishad Mawana',
    logo_url: 'https://i.imgur.com/NXFXzXc.png',
  },
  {
    name: 'Lansdowne Cantonment Board',
    logo_url: 'https://i.imgur.com/pd2LgHP.png',
  },
  {
    name: 'Nagar Nigam Haldwani',
    logo_url: 'https://i.imgur.com/v5qTJ7P.png',
  },
  {
    name: 'Chintan Environmental Research and Action Group',
    logo_url: 'https://i.imgur.com/qTJVnEB.png',
  },
];

const ClientsPartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(5);
  const [clients] = useState(() =>
    STATIC_CLIENTS.map((client) => ({
      ...client,
      logo_url: LOCAL_LOGOS[client.name] || client.logo_url,
    })),
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setSlidesPerView(1);
      else if (window.innerWidth < 768) setSlidesPerView(2);
      else if (window.innerWidth < 1024) setSlidesPerView(3);
      else if (window.innerWidth < 1280) setSlidesPerView(4);
      else setSlidesPerView(5);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, clients.length - slidesPerView);

  const next = () => setCurrentIndex((p) => Math.min(p + 1, maxIndex));
  const prev = () => setCurrentIndex((p) => Math.max(p - 1, 0));

  useEffect(() => {
    if (!isInView) return;
    const id = setInterval(() => {
      setCurrentIndex((p) => (p >= maxIndex ? 0 : p + 1));
    }, 4000);
    return () => clearInterval(id);
  }, [isInView, maxIndex]);

  return (
    <section id="clients" ref={ref} className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Clients <span className=" bg-clip-text bg-gradient-to-r from-[var(--brand-blue-600)] to-[var(--brand-green-600)]">& Partners</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading organizations worldwide
          </p>
        </motion.div>

        {clients.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl shadow-sm border border-gray-200">
            <p className="text-gray-500 text-sm sm:text-base">No clients or partners added yet. Add them from the admin panel.</p>
          </div>
        ) : (
          <div className="relative">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-4 z-10 bg-white rounded-full p-2 sm:p-2.5 md:p-3 shadow-lg hover:shadow-xl transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-blue-700" />
            </button>

            <button
              onClick={next}
              disabled={currentIndex >= maxIndex}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-4 z-10 bg-white rounded-full p-2 sm:p-2.5 md:p-3 shadow-lg hover:shadow-xl transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-blue-700" />
            </button>

            <div className="overflow-hidden py-[10px]">
            <motion.div
              className="flex gap-6"
              animate={{
                x: `calc(-${currentIndex * (100 / slidesPerView)}% - ${currentIndex * (24 / slidesPerView)}px)`,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {clients.map((c, idx) => (
                <motion.div
                  key={idx}
                  initial={{  scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  style={{
                    flex: `0 0 calc(${100 / slidesPerView}% - ${(slidesPerView - 1) * (24 / slidesPerView)}px)`,
                    width: `calc(${100 / slidesPerView}% - ${(slidesPerView - 1) * (24 / slidesPerView)}px)`,
                  }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all h-full">
                    <div className="p-6 sm:p-7 md:p-8 flex flex-col items-center text-center">
                      <div className="w-24 h-14 sm:w-28 sm:h-16 md:w-32 md:h-20 rounded-xl mb-4  from-gray-50 to-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden">
                        {c.logo_url ? (
                          <img 
                            src={c.logo_url} 
                            alt={c.name}
                            className="w-full h-full object-contain p-2"
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                        ) : null}
                        <div 
                          className="w-full h-full flex items-center justify-center"
                          style={{ display: c.logo_url ? 'none' : 'flex' }}
                        >
                          <span className="text-xs sm:text-sm font-medium text-gray-400">
                            {c.name.split(' ').map(word => word[0]).join('').slice(0, 3)}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-800 leading-snug">
                        {c.name}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            </div>

            <div className="flex justify-center gap-2 mt-6 sm:mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all ${i === currentIndex ? 'w-8 sm:w-10 bg-blue-700' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClientsPartnersSection;
