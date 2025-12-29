import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Brain, BarChart3, MessageSquare, Zap, ChevronRight } from 'lucide-react';
import NeuralNetworkScene from '../animations/NeuralNetworkScene';

export default function MLAIPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });

  const capabilities = [
    { icon: Brain, title: 'Natural Language Processing', desc: 'Advanced chatbots and language understanding' },
    { icon: BarChart3, title: 'Data Analysis & ML', desc: 'Predictive models and actionable insights' },
    { icon: MessageSquare, title: 'RAG Systems', desc: 'Context-aware AI with custom knowledge' },
    { icon: Zap, title: 'Real-time Processing', desc: 'Low-latency inference and streaming' },
  ];

  const projects = [
    {
      title: 'RAG Chatbot System',
      description: 'Enterprise-grade retrieval-augmented generation chatbots with custom knowledge bases.',
      tags: ['NLP', 'RAG', 'MCP'],
      icon: '🤖',
    },
    {
      title: 'Data Analytics Platform',
      description: 'Real-time data processing and visualization with ML-powered insights.',
      tags: ['Analytics', 'ML', 'Dashboards'],
      icon: '📊',
    },
    {
      title: 'Predictive Maintenance',
      description: 'IoT sensor data analysis for predictive equipment maintenance.',
      tags: ['IoT', 'Prediction', 'Time Series'],
      icon: '🔮',
    },
    {
      title: 'Computer Vision System',
      description: 'Custom object detection and classification for industrial applications.',
      tags: ['CV', 'Detection', 'Classification'],
      icon: '👁️',
    },
  ];

  return (
    <div className="min-h-screen bg-dark pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <NeuralNetworkScene />
        </div>
        
        <motion.div
          ref={heroRef}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="inline-block mb-6"
          >
            <Brain className="w-20 h-20 text-accent" />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            ML/AI <span className="text-accent neon-text">Development</span>
          </h1>
          
          <p className="text-xl text-silver mb-10">
            Building intelligent systems that learn, adapt, and deliver actionable insights.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent text-dark font-bold hover:glow-accent-strong transition-all duration-300 clip-corner"
            >
              Discuss Your AI Project
              <ChevronRight className="ml-2" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-gradient-to-b from-dark to-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl font-black text-white mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our <span className="text-accent">AI Capabilities</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                className="group bg-gradient-to-br from-accent/10 to-purple-600/10 p-6 clip-corner hover-lift cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <cap.icon className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">{cap.title}</h3>
                <p className="text-silver text-sm">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl font-black text-white mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Featured <span className="text-accent">Projects</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                className="group bg-gradient-to-br from-primary/20 to-accent/5 p-8 clip-corner-large hover-lift cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-6xl flex-shrink-0 w-20 h-20 flex items-center justify-center">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-silver mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, j) => (
                        <span key={j} className="px-3 py-1 bg-accent/20 text-accent text-sm font-semibold clip-corner-small">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-accent/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-6">
            Ready to Leverage AI?
          </h2>
          <p className="text-silver text-xl mb-10">
            Transform your data into intelligent, actionable systems.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="inline-flex items-center px-10 py-5 bg-accent text-dark font-bold text-lg hover:glow-accent-strong transition-all duration-300 clip-corner"
            >
              Start Your AI Journey
              <ChevronRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
