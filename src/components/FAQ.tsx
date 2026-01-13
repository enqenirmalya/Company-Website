import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What types of E-Waste do you accept?',
    answer: 'We accept all types of electronic waste including computers, laptops, mobile phones, tablets, televisions, cameras, electrical appliances, IT equipment, and more. If you\'re unsure about a specific item, please contact us.',
  },
  {
    question: 'How do I schedule an E-Waste pickup?',
    answer: 'You can schedule a pickup by filling out our contact form, calling us at 9152579812, or emailing us at info@e-neermalya.com. Our team will arrange a convenient pickup time at your location.',
  },
  {
    question: 'Is there a minimum quantity for pickup?',
    answer: 'We handle E-Waste of all quantities, from individual items to large commercial volumes. For smaller quantities, you can also drop off at our collection center in Mumbai.',
  },
  {
    question: 'What happens to my data on old devices?',
    answer: 'We follow strict data destruction protocols. All storage devices go through secure data wiping or physical destruction processes. We can provide certificates of data destruction upon request.',
  },
  {
    question: 'Do you provide certificates for E-Waste disposal?',
    answer: 'Yes, we provide official E-Waste disposal certificates as per regulatory requirements. These certificates are important for compliance and can be used for CSR reporting.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We provide services across India. Contact us to check availability in your location — We serve PAN India..',
  },
];

export const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="section-padding bg-muted/30" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Find answers to common questions about our E-Waste recycling services. If you can't find what you're looking for, feel free to contact us.
            </p>

            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
              <h4 className="font-display font-bold text-foreground mb-2">
                Still have questions?
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                Our team is here to help you with any queries about E-Waste management.
              </p>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-primary font-semibold text-sm hover:underline"
              >
                Contact Our Experts →
              </button>
            </div>
          </motion.div>

          {/* Right Content - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-lg transition-shadow"
                >
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary py-5 [&[data-state=open]>svg]:rotate-180">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
