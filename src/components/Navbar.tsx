import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Our Process', href: '#process' },
  { name: 'Team', href: '#team' },
  { name: 'Contact Us', href: '#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when at the top or scrolling up
      if (currentScrollY < 50) {
        setIsVisible(true);
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
        // Hide when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
          setIsOpen(false); // Close mobile menu when hiding
        } else {
          setIsVisible(true);
        }
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="e-Neermalya" className="h-12 w-12 md:h-14 md:w-14" />
            <div className={`hidden sm:block transition-colors duration-300 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
              <span className="text-xs font-medium block">MASSRR</span>
              <span className="font-display font-bold text-lg">e-NEERMALYA LLP</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`font-medium text-sm transition-colors duration-200 hover:text-primary ${
                  isScrolled ? 'text-foreground' : 'text-primary-foreground'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:9152579812"
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              }`}
            >
              <Phone className="h-4 w-4" />
              9152579812
            </a>
            <Button
              onClick={() => handleNavClick('#contact')}
              className="btn-shine"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-foreground' : 'text-primary-foreground'
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border"
          >
            <div className="container-custom py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left font-medium text-foreground py-2 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
                <div className="pt-4 border-t border-border flex flex-col gap-3">
                  <a
                    href="tel:9152579812"
                    className="flex items-center gap-2 text-foreground hover:text-primary"
                  >
                    <Phone className="h-4 w-4" />
                    9152579812
                  </a>
                  <a
                    href="mailto:info@e-neermalya.com"
                    className="flex items-center gap-2 text-foreground hover:text-primary"
                  >
                    <Mail className="h-4 w-4" />
                    info@e-neermalya.com
                  </a>
                  <Button
                    onClick={() => handleNavClick('#contact')}
                    className="w-full mt-2"
                  >
                    Get in Touch
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
