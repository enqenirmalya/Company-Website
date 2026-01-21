import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Recycle, Leaf, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';
import logo from '@/assets/logo.png';

const heroSlides = [
  {
    title: 'Responsible e-Waste Management',
    subtitle: 'MASSRR e-NEERMALYA LLP',
    description: 'Leading the way in sustainable electronic waste recycling for a cleaner tomorrow.',
    icon: Recycle,
  },
  {
    title: 'India Among Top 5 e-Waste Producers',
    subtitle: 'Making a Difference',
    description: 'We are committed to scientifically disposing e-Waste and protecting our environment.',
    icon: Globe,
  },
  {
    title: 'One Earth, Zero e-Waste',
    subtitle: 'Our Mission',
    description: 'Join us in creating a sustainable future by recycling your electronic waste responsibly.',
    icon: Leaf,
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="e-Waste Recycling Facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-20 -right-20 w-96 h-96 border border-primary/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] border border-primary/10 rounded-full"
        />
      </div>

      <div className="container-custom relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30"
                >
                  {(() => {
                    const Icon = heroSlides[currentSlide].icon;
                    return <Icon className="h-5 w-5 text-primary" />;
                  })()}
                  <span className="text-primary-foreground text-sm font-medium">
                    {heroSlides[currentSlide].subtitle}
                  </span>
                </motion.div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground text-shadow leading-tight">
                  {heroSlides[currentSlide].title}
                </h1>

                <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl mx-auto lg:mx-0">
                  {heroSlides[currentSlide].description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                  <Button
                    size="lg"
                    onClick={handleContactClick}
                    className="btn-shine text-lg px-8 py-6"
                  >
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-lg px-8 py-6 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Our Services
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slide Indicators */}
            <div className="flex gap-3 justify-center lg:justify-start mt-10">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'w-8 bg-primary'
                      : 'w-2 bg-primary-foreground/40 hover:bg-primary-foreground/60'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Logo Animation */}
          <div className="hidden lg:flex justify-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full scale-110" />
              <div className="relative bg-primary-foreground/10 backdrop-blur-sm rounded-full p-8 border border-primary-foreground/20">
                <img
                  src={logo}
                  alt="e-Neermalya Logo"
                  className="w-64 h-64 object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-primary-foreground rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
