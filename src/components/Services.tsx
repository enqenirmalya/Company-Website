import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Laptop, Camera, Smartphone, Plug, Tv, HardDrive, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Laptop,
    title: 'Laptops & Computers',
    description: 'We accept and recycle old laptops, broken laptops with the latest processes. Discarded computers, hard disks, keyboards, monitors, and printers.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Camera,
    title: 'Camera & Electronics',
    description: 'Photography equipment such as digital cameras, DSLRs, camcorders, camera lenses, and flash. Other household consumer electronics including toys, music systems.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Smartphone,
    title: 'Smartphones & Tablets',
    description: 'We collect and process old and broken mobile phones, smartphones, mobile displays, batteries, earphones, Bluetooth speakers, and accessories.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Plug,
    title: 'Electrical Appliances',
    description: 'White goods, domestic and commercial household electronics including fans, lights, geysers, heaters, and more electrical equipment.',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    icon: Tv,
    title: 'Displays & Televisions',
    description: 'All types of display units from CRT monitors to modern LED/LCD TVs. We ensure proper disposal of hazardous materials in screens.',
    color: 'from-red-500 to-rose-500',
  },
  {
    icon: HardDrive,
    title: 'IT Equipment',
    description: 'Servers, networking equipment, data storage devices, and enterprise IT infrastructure. Secure data destruction available.',
    color: 'from-indigo-500 to-violet-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="section-padding bg-muted/50" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Featured Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Comprehensive e-Waste{' '}
            <span className="gradient-text">Recycling Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            In addition to e-Waste recycling, we also specialize in e-Waste lifecycle services such as special collection drives, donations, and more.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="h-full bg-card rounded-2xl p-8 shadow-sm border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-primary/20">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Arrow 
                <div className="mt-6 flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </div>*/}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-shine"
          >
            Contact Our Experts
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
