import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import rsmLogo from '@/assets/clients/rsm.jpeg';
import bmcLogo from '@/assets/clients/bmc.png';
import nicLogo from '@/assets/clients/nic.jpg';
import apnaBank from '@/assets/clients/apna-bank.png';
import efficientPlastech from '@/assets/clients/efficient-plastech.png';
import LTLogo from '@/assets/clients/LT.png';
import CiplaLogo from '@/assets/clients/Cipla_logo.svg.png';
import AdityaBirlaLogo from '@/assets/clients/AdityaBirlaCapital.png';
import PolycabLogo from '@/assets/clients/Polycab.png';
import CDSLLogo from '@/assets/clients/CDSL.png';
import CGSTLogo from '@/assets/clients/CGST.png';
import AirportLogo from '@/assets/clients/AirportAuthority.png';
import MTNLLogo from '@/assets/clients/MTNL.png';

const clients = [
  { name: 'RSM International', logo: rsmLogo },
  { name: 'L&T', logo: LTLogo },
  { name: 'Polycab', logo: PolycabLogo },
  { name: 'Aditya Birla Capital', logo: AdityaBirlaLogo },
  { name: 'Cipla', logo: CiplaLogo },
  { name: 'BMC Mumbai', logo: bmcLogo },
  { name: 'Airports Authority of India', logo: AirportLogo },
  { name: 'MTNL', logo: MTNLLogo },
  { name: 'CDSL', logo: CDSLLogo },
  { name: 'CGST', logo: CGSTLogo },
  { name: 'NIC India Ltd', logo: nicLogo },
  { name: 'Apna Sahakari Bank', logo: apnaBank },
  { name: 'Efficient Plastech', logo: efficientPlastech },
];

export const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  // const animationDuration = clients.length * 4;

  // Double the clients array for infinite scroll effect
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-muted/50 overflow-hidden" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Clients
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-4">
            Trusted by Leading Organizations
          </h2>
        </motion.div>
      </div>

      {/* Client Logo Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/50 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Container */}
        <div className="flex animate-marquee">
          {duplicatedClients.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 group"
            >
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border w-48 h-32 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
