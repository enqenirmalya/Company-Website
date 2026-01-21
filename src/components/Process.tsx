import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Truck, ClipboardList, Wrench, Recycle, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Truck,
    title: 'Collect',
    description: 'We collect e-Waste from your doorstep with our professional pickup service.',
    color: 'bg-blue-500',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Segregate',
    description: 'Our experts segregate the e-Waste as per their materials and components.',
    color: 'bg-purple-500',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Dismantle',
    description: 'We dismantle and prepare the items to recover valuable materials safely.',
    color: 'bg-orange-500',
  },
  {
    number: '04',
    icon: Recycle,
    title: 'Recycle',
    description: 'Recovered materials are then recycled and given a new lease of life.',
    color: 'bg-green-500',
  },
];

export const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="process" className="section-padding bg-secondary" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mt-4 mb-6">
            How We <span className="text-primary">Recycle</span> Your e-Waste
          </h2>
          <p className="text-secondary-foreground/70 text-lg">
            Our streamlined 4-step process ensures environmentally responsible disposal of your electronic waste.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Card */}
                <div className="relative bg-card rounded-2xl p-8 shadow-lg border border-border z-10 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                  {/* Step Number */}
                  <div className={`absolute -top-4 -left-4 w-12 h-12 ${step.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <span className="font-display font-bold text-primary-foreground text-lg">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 mt-4">
                    <div className={`inline-flex p-4 rounded-full bg-accent`}>
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - Mobile/Tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <ArrowRight className="h-6 w-6 text-primary rotate-90 md:rotate-0" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto shadow-lg border border-border">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Dispose Your e-Waste Responsibly?
            </h3>
            <p className="text-muted-foreground mb-6">
              Schedule a pickup today and contribute to a cleaner, greener environment.
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-primary/90 hover:shadow-lg btn-shine"
            >
              Schedule e-Waste Pickup
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
