import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Cpu, ChevronRight } from 'lucide-react';
import CircuitBoardScene from '../animations/CircuitBoardScene';

export default function FirmwarePage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });

  return (
    <div className="min-h-screen bg-dark pt-20">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <CircuitBoardScene />
        </div>
        
        <motion.div
          ref={heroRef}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
        >
          <Cpu className="w-20 h-20 text-orange-500 mx-auto mb-6" />
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Firmware <span className="text-orange-500">Development</span>
          </h1>
          <p className="text-xl text-silver mb-10">
            Embedded systems expertise from sensor to cloud.
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-orange-500 text-dark font-bold clip-corner">
            Start Your IoT Project
            <ChevronRight className="ml-2" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
