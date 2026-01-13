import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, Mail } from 'lucide-react';
import samirKolte from '@/assets/team/samir-kolte.png';
import rajeshDolas from '@/assets/team/rajesh-dolas.png';
import rituKolte from '@/assets/team/ritu-kolte.png';

const teamMembers = [
  {
    name: 'Dr. Samir Kolte',
    role: 'Business Team',
    image: samirKolte,
    bio: 'PhD from Aligarh University, M. Tech (Industrial Engineering) from VNIT, Nagpur. Over 27 years of experience in Management Consulting and Business Transformation at PwC India, KPMG India, RSM International, and more.',
  },
  {
    name: 'Rajesh M. Dolas',
    role: 'Business Team',
    image: rajeshDolas,
    bio: 'M. Tech (Industrial Engineering) from VNIT Nagpur, BE (Electrical Engineering), M Sc. (Ecology & Environment) from MAHE. Certified in Industrial Safety from Garware Institute.',
  },
  {
    name: 'Ritu Kolte',
    role: 'Business Team',
    image: rituKolte,
    bio: 'Postgraduate in Environmental Biology, Certified Lead Auditor with experience in Water, Air Pollution, Chemical Analysis, Safety & Environmental Systems. Overseas Strategy, Business Development & Compliance.',
  },
];

export const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="team" className="section-padding" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Meet Our <span className="gradient-text">Expert Leadership</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our experienced team brings over 200 man-years of combined expertise in environmental management and waste processing.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <div className="aspect-square bg-accent flex items-center justify-center p-8">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Social Overlay 
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div> */}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-4">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
