import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Database, Cloud } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface StatCardProps {
  number: string;
  label: string;
}

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Custom Software Development Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We build innovative software solutions that help businesses grow and succeed in the digital age.
              </p>
              <button 
                onClick={() => navigate('/contact')}
                className="bg-black text-white px-8 py-3 rounded-full inline-flex items-center space-x-2 hover:bg-gray-800 transition-colors"
              >
                <span>Let's talk</span>
                <ArrowRight size={20} />
              </button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Code />}
              title="Web Development"
              description="Custom web applications built with modern technologies"
            />
            <ServiceCard
              icon={<Smartphone />}
              title="Mobile Development"
              description="Native and cross-platform mobile applications"
            />
            <ServiceCard
              icon={<Database />}
              title="Database Solutions"
              description="Scalable and secure database architectures"
            />
            <ServiceCard
              icon={<Cloud />}
              title="Cloud Services"
              description="Cloud-native applications and infrastructure"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <StatCard number="9" label="years in the Tech Industry" />
            <StatCard number="100%" label="Expert custom software developers" />
            <StatCard number="85%" label="Staff retention reflects team stability" />
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-lg shadow-md"
  >
    <div className="text-black mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const StatCard: React.FC<StatCardProps> = ({ number, label }) => (
  <div>
    <h3 className="text-4xl font-bold mb-2">{number}</h3>
    <p className="text-gray-600">{label}</p>
  </div>
);

export default Home;