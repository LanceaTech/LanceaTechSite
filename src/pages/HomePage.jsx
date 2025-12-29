import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { ChevronRight, ArrowRight, Brain, Code, Cpu, Zap } from 'lucide-react';
import ParticleSpearEffect from '../animations/ParticleSpearEffect';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

function FloatingElement({ delay = 0 }) {
  const rotation = Math.random() * 90 - 45;
  
  return (
    <motion.div
      className="absolute bg-accent/10"
      style={{
        width: Math.random() * 3 + 1 + 'px',
        height: Math.random() * 200 + 100 + 'px',
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        rotate: rotation,
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: Math.random() * 5 + 5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    />
  );
}

function ServiceCard({ service, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [iconVisible, setIconVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setTimeout(() => setIconVisible(true), index * 200 + 300);
    }
  }, [inView, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <Link to={service.link}>
        <div className={`group relative overflow-hidden p-8 clip-corner-large ${service.bgGradient}`}>
          <div className="absolute inset-0 bg-dark/80 transition-colors duration-300" />

          <div className="relative z-10">
            {/* Pixelating Icon Animation */}
            <div className="mb-6 relative w-16 h-16">
              <AnimatePresence>
                {iconVisible && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-16 h-16 text-accent" />
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Pixelation effect overlay */}
              {!iconVisible && (
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-0.5">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="bg-accent/30"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                      transition={{
                        duration: 0.6,
                        delay: i * 0.008,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
            <p className="text-silver mb-6">{service.description}</p>
            
            <div className="flex items-center text-accent font-semibold">
              <span>Learn More</span>
              <ArrowRight className="ml-2" size={20} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function HomePage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const services = [
    {
      title: 'ML/AI Development',
      icon: Brain,
      description: 'RAG chatbots, MCP systems, data analysis, and intelligent automation.',
      bgGradient: 'bg-gradient-to-br from-accent to-purple-600',
      link: '/mlai',
    },
    {
      title: 'Full Stack Development',
      icon: Code,
      description: 'React Native, Laravel, Vue, PostgreSQL - complete web and mobile solutions.',
      bgGradient: 'bg-gradient-to-br from-primary to-green-500',
      link: '/fullstack',
    },
    {
      title: 'Firmware Development',
      icon: Cpu,
      description: 'STM32, ESP32, Arduino - IoT devices, sensor integration, PCB design.',
      bgGradient: 'bg-gradient-to-br from-orange-500 to-silver',
      link: '/firmware',
    },
  ];

  const features = [
    { title: 'End-to-End Solutions', desc: 'From embedded firmware to cloud-scale AI systems.' },
    { title: 'Proven Expertise', desc: 'Deep technical knowledge across hardware and software stacks.' },
    { title: 'Rapid Deployment', desc: 'Agile development practices for fast time-to-market.' },
    { title: 'Ongoing Support', desc: 'Comprehensive maintenance and evolution of your systems.' },
  ];

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-primary/20 to-dark">
          <div className="absolute inset-0 opacity-30">
            {[...Array(20)].map((_, i) => (
              <FloatingElement key={i} delay={i * 0.2} />
            ))}
          </div>
        </div>

        {/* Particle Spear Formation Effect */}
        <div className="absolute inset-0 opacity-40">
          <ParticleSpearEffect />
        </div>

        {/* Hero Content */}
        <motion.div
          ref={heroRef}
          className="relative z-10 max-w-7xl mx-auto px-6 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={heroInView ? 'visible' : 'hidden'}
        >
          
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter"
          >
            LANCEA<span className="text-accent neon-text">TECH</span>
          </motion.h1>
          
          <motion.div variants={itemVariants} className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-accent/20 blur-xl" />
            <p className="relative text-2xl md:text-3xl text-silver font-light tracking-wide">
              Spearheading Innovation Across Three Frontiers
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-4 mt-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-accent text-dark font-bold hover:glow-accent-strong transition-all duration-300 clip-corner h-14"
              >
                <span>Get Started</span>
                <ChevronRight className="ml-2" size={20} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-10 py-4 border-2 border-accent text-accent font-bold hover:bg-accent hover:text-dark transition-all duration-300 clip-corner h-14"
              >
                View Products
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8"
          style={{ left: '50%', x: '-50%' }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-3 bg-accent rounded-full"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        className="relative py-24 bg-gradient-to-b from-dark to-primary/5"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Our <span className="text-accent">Core Services</span>
            </h2>
            <p className="text-silver text-lg max-w-2xl mx-auto">
              Three specialized teams delivering cutting-edge solutions in AI, development, and embedded systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Why Choose <span className="text-accent">LanceaTech</span>?
              </h2>
              <p className="text-silver text-lg mb-8">
                We don't just build solutions - we spearhead innovation with precision, expertise, and cutting-edge technology.
              </p>
              
              <div className="space-y-6">
                {features.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start space-x-4 group"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-accent mt-2 rotate-45"
                      whileHover={{ scale: 2, rotate: 90 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div>
                      <h4 className="text-white font-bold mb-1">{item.title}</h4>
                      <p className="text-silver text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-square bg-gradient-to-br from-primary to-accent/20 clip-corner-large overflow-hidden">
                <div className="absolute inset-0 bg-dark/80" />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Zap className="w-32 h-32 text-accent" />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-accent/20 to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(10)].map((_, i) => (
            <FloatingElement key={i} delay={i * 0.3} />
          ))}
        </div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Transform Your Vision?
          </h2>
          <p className="text-silver text-xl mb-10">
            Let's spearhead your next technological breakthrough together.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-accent text-dark font-bold text-lg hover:glow-accent-strong transition-all duration-300 clip-corner h-16"
              >
                <span>Start Your Project</span>
                <ChevronRight className="ml-2" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-dark transition-all duration-300 clip-corner h-16"
              >
                Explore Products
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
