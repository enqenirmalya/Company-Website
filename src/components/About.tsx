import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Award, Users, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';
import makeInIndia from '@/assets/make-in-india.png';
import oneEarth from '@/assets/one-earth.jpg';

const highlights = [
  'State-of-the-art E-Waste processing facility',
  'Strong base in Mumbai with expansion plans',
  'MPCB, CPCB compliant operations',
  'Over 200 man-years of team experience',
  'Environmental friendly disposal methods',
  'Complete range of E-Waste handling',
];

const stats = [
  { value: '200+', label: 'Years Combined Experience', icon: Award },
  { value: '5%', label: 'Of India\'s E-Waste Properly Disposed', icon: MapPin },
  { value: '100%', label: 'Regulatory Compliance', icon: Check },
  { value: '24/7', label: 'Support Available', icon: Users },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Logo and Brand */}
            <div className="flex items-center gap-4">
              <img src={logo} alt="e-Neermalya" className="w-16 h-16" />
              <div>
                <span className="text-sm font-medium text-muted-foreground block">MASSRR</span>
                <h3 className="font-display text-2xl font-bold text-foreground">E-NEERMALYA LLP</h3>
              </div>
            </div>

            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                About Our Company
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Leading the Way in{' '}
                <span className="gradient-text">Sustainable E-Waste Management</span>
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              MASSRR e-Neermalya LLP is a professionally governed e-waste management organisation supporting Government Organisations, Corporates, Educational Institutes and Housing Societies in meeting environmental, social, and regulatory responsibilities through scientific recycling and structured community engagement.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              We work in close coordination with Regulatory Authorities like MPCB, CPCB and The Ministry of Environment & Forest (Government of India) to ensure appropriate compliances to stringent norms for disposal of hazardous substances during the disposal process.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Make in India Badge */}
            <div className="pt-4">
              <img src={makeInIndia} alt="Make in India" className="h-16 object-contain" />
            </div>
          </motion.div>

          {/* Right Content - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="rounded-2xl overflow-hidden shadow-lg"
                >
                  <img
                    src={oneEarth}
                    alt="One Earth Zero E-Waste"
                    className="w-full h-full object-cover" //changed made here
                  />
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="rounded-2xl bg-primary p-6 text-center"
                >
                  <h4 className="font-display text-4xl font-bold text-primary-foreground mb-2">5th</h4>
                  <p className="text-sm text-primary-foreground/80">Largest E-Waste Producer in the World</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="rounded-2xl overflow-hidden shadow-lg"
                >
                  <img
                    src={logo}
                    alt="e-Neermalya"
                    className="w-full h-65 object-contain bg-accent p-6"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="rounded-2xl overflow-hidden bg-secondary p-6 text-center"
                >
                  <h4 className="font-display text-lg font-bold text-secondary-foreground mb-2">Our Belief</h4>
                  <p className="text-sm text-secondary-foreground/80">One Earth, Zero E-Waste</p>
                </motion.div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -z-10 -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -z-10 -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-border"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex p-3 rounded-xl bg-accent mb-4">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </h4>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
