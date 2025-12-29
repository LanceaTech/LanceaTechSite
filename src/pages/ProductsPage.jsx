import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Radio, MessageSquare, BarChart3, ChevronRight } from 'lucide-react';

export default function ProductsPage() {
  const products = [
    {
      icon: Radio,
      title: 'IoT Device Platform',
      desc: 'LoRaWAN and MQTT-enabled devices for industrial and commercial applications.',
      features: ['Long-range connectivity', 'Low power consumption', 'Cloud integration', 'Custom sensors'],
    },
    {
      icon: MessageSquare,
      title: 'Agentic Chatbot System',
      desc: 'Enterprise AI chatbots with RAG, custom knowledge bases, and MCP architecture.',
      features: ['Context-aware responses', 'Multi-channel deployment', 'Analytics dashboard', 'Easy integration'],
    },
    {
      icon: BarChart3,
      title: 'Analytics & Dashboarding',
      desc: 'Real-time data visualization and business intelligence tools.',
      features: ['Custom dashboards', 'Real-time updates', 'Data export', 'Role-based access'],
    },
  ];

  return (
    <div className="min-h-screen bg-dark pt-20 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Our <span className="text-accent">Products</span>
          </h1>
          <p className="text-xl text-silver max-w-3xl mx-auto">
            Production-ready solutions and platforms to accelerate your technological initiatives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-primary/20 to-accent/10 p-8 clip-corner-large hover-lift flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6">
                <product.icon className="w-16 h-16 text-accent" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 min-h-[4rem] flex items-center">
                {product.title}
              </h3>
              
              <p className="text-silver mb-6 flex-grow">{product.desc}</p>
              
              <div className="space-y-2 mb-6">
                {product.features.map((feature, j) => (
                  <div key={j} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-accent rotate-45 flex-shrink-0 mt-2" />
                    <span className="text-silver text-sm flex-1">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="inline-flex items-center text-accent font-semibold hover:translate-x-2 transition-transform mt-auto">
                Learn More
                <ChevronRight className="ml-2" size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
