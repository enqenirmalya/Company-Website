import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowUp, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '@/assets/logo.png';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Our Process', href: '#process' },
  { name: 'Team', href: '#team' },
  { name: 'Contact Us', href: '#contact' },
];

const services = [
  'Laptop Recycling',
  'Mobile Phone Disposal',
  'Electrical Appliances',
  'IT Equipment',
  'Camera & Electronics',
  'Corporate E-Waste',
];

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/eNeermalyaLLP' },
  { icon: Twitter, href: 'https://x.com/eNeermalyaLLP' },
  { icon: Instagram, href: 'https://www.instagram.com/eneermalyallp/' },
  { icon: Linkedin, href: '#' },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      {/* CTA Banner */}
      <div className="bg-primary py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
                Ready to Recycle Your E-Waste?
              </h3>
              <p className="text-primary-foreground/80 mt-2">
                Schedule a pickup today and contribute to a cleaner environment.
              </p>
            </div>
            <button
              onClick={() => handleNavClick('#contact')}
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-background hover:shadow-lg flex-shrink-0"
            >
              Schedule Pickup
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img src={logo} alt="e-Neermalya" className="h-12 w-12" />
                <div>
                  <span className="text-xs font-medium text-muted-foreground block">MASSRR</span>
                  <span className="font-display font-bold text-lg text-background">E-NEERMALYA LLP</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Leading E-Waste Management Company committed to sustainable electronic waste recycling for a cleaner tomorrow.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center text-background hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-bold text-lg text-background mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display font-bold text-lg text-background mb-6">
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleNavClick('#services')}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-display font-bold text-lg text-background mb-6">
                Contact Us
              </h4>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground text-sm">
                    Office No-8 F-2 Building, Shankara Colony, Near Universal Majestic, Chembur (West), Mumbai - 400043
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href="tel:9152579812" className="text-muted-foreground hover:text-primary transition-colors">
                    9152579812
                  </a>
                </div>
                <div className="flex gap-3 items-center">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href="mailto:info@e-neermalya.com" className="text-muted-foreground hover:text-primary transition-colors">
                    info@e-neermalya.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10 py-6">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} MASSRR E-NEERMALYA LLP. All rights reserved.
          </p>
          {/*<div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>*/}
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center z-50 hover:shadow-xl transition-shadow"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  );
};
