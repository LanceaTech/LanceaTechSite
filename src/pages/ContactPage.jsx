import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, ChevronRight } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'mlai',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Thank you for your interest! We will contact you shortly.');
    setFormData({ name: '', email: '', service: 'mlai', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-dark pt-20">
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="text-xl text-silver max-w-2xl mx-auto">
              Ready to spearhead your next technological breakthrough? Let's talk.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="glass p-8 clip-corner-large"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-silver mb-2 font-semibold">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-dark/50 border border-accent/30 text-white focus:border-accent focus:outline-none clip-corner-small transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-silver mb-2 font-semibold">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-dark/50 border border-accent/30 text-white focus:border-accent focus:outline-none clip-corner-small transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-silver mb-2 font-semibold">Service Interest</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-3 bg-dark/50 border border-accent/30 text-white focus:border-accent focus:outline-none clip-corner-small transition-colors"
                  >
                    <option value="mlai">ML/AI Development</option>
                    <option value="fullstack">Full Stack Development</option>
                    <option value="firmware">Firmware Development</option>
                    <option value="products">Products & Solutions</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-silver mb-2 font-semibold">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-dark/50 border border-accent/30 text-white focus:border-accent focus:outline-none clip-corner-small resize-none transition-colors"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-accent text-dark font-bold hover:glow-accent-strong transition-all duration-300 clip-corner flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  {!isSubmitting && <ChevronRight />}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin size={24} className="text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold">Location</p>
                      <p className="text-silver">Singapore</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail size={24} className="text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <a href="mailto:info@lanceatech.com" className="text-silver hover:text-accent transition-colors">
                        info@lanceatech.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone size={24} className="text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold">Phone</p>
                      <a href="tel:+6512345678" className="text-silver hover:text-accent transition-colors">
                        +65 1234 5678
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass p-8 clip-corner-large">
                <h3 className="text-2xl font-bold text-white mb-4">Office Hours</h3>
                <div className="space-y-2 text-silver">
                  <p><span className="text-white font-semibold">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                  <p><span className="text-white font-semibold">Saturday:</span> 10:00 AM - 2:00 PM</p>
                  <p><span className="text-white font-semibold">Sunday:</span> Closed</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-8 clip-corner-large">
                <h3 className="text-2xl font-bold text-white mb-4">Quick Response</h3>
                <p className="text-silver">
                  We typically respond to inquiries within 24 hours during business days. 
                  For urgent matters, please indicate in your message.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
