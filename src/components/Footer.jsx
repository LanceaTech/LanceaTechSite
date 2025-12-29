import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { to: '/mlai', label: 'ML/AI Development' },
    { to: '/fullstack', label: 'Full Stack Development' },
    { to: '/firmware', label: 'Firmware Development' },
  ];

  const products = [
    { to: '/products', label: 'IoT Devices' },
    { to: '/products', label: 'Chatbot Systems' },
    { to: '/products', label: 'Analytics Tools' },
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-dark border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rotate-45" />
              <span className="text-xl font-bold text-white">LANCEATECH</span>
            </div>
            <p className="text-silver text-sm mb-4">
              Spearheading innovation across AI, development, and embedded systems.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-silver hover:text-accent transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-3">Services</h3>
            <div className="space-y-2 text-sm">
              {services.map((service) => (
                <Link
                  key={service.to}
                  to={service.to}
                  className="block text-silver hover:text-accent transition-colors"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-3">Products</h3>
            <div className="space-y-2 text-sm">
              {products.map((product, index) => (
                <Link
                  key={index}
                  to={product.to}
                  className="block text-silver hover:text-accent transition-colors"
                >
                  {product.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <div className="space-y-2 text-sm text-silver">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-accent mt-1 flex-shrink-0" />
                <span>Singapore</span>
              </div>
              <div className="flex items-start space-x-2">
                <Mail size={16} className="text-accent mt-1 flex-shrink-0" />
                <a href="mailto:info@lanceatech.com" className="hover:text-accent transition-colors">
                  info@lanceatech.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Phone size={16} className="text-accent mt-1 flex-shrink-0" />
                <a href="tel:+6512345678" className="hover:text-accent transition-colors">
                  +65 1234 5678
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-primary/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-silver text-center md:text-left">
              © {currentYear} LanceaTech. All rights reserved. Spearheading Innovation.
            </p>
            <div className="flex space-x-6 text-sm text-silver">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
