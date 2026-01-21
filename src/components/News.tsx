import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const news = [
  /**{
    date: '18 February 2023',
    title: 'Bhoomi Poojan of Our New e-Waste Recycling Facility',
    excerpt: 'We laid the foundation for our new e-Waste recycling facility at Nagpur. Bhoomi Poojan was conducted on the auspicious occasion.',
  },**/ 
  {
    date: '18 January 2023',
    title: 'e-Waste Collection Drive at Dr. Jadhav Hospital',
    excerpt: 'e-Neermalya partnered with prestigious Dr. Jadhav Hospital to conduct e-Waste collection at their premises.',
  },
  {
    date: '20 December 2022',
    title: "e-Waste Collection Drive at Pratibha's Class",
    excerpt: "An e-Waste collection drive was conducted at Pratibha's Class. Our team also educated the youngsters about e-Waste pollution.",
  },
  {
    date: '15 December 2022',
    title: 'e-Waste Collection Drive at Mahavir Platinum',
    excerpt: 'An e-Waste awareness and collection drive was conducted at Mahavir Platinum residential complex.',
  },
];

export const News = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Latest News
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            News & <span className="gradient-text">Updates</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Stay updated with our latest e-Waste collection drives, partnerships, and initiatives.
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {news.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <Calendar className="h-4 w-4" />
                  {item.date}
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                {/*<button className="inline-flex items-center text-primary font-semibold text-sm hover:gap-3 transition-all">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </button>*/}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
