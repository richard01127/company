import React from 'react';

const CaseStudies = () => {
  const cases = [
    {
      title: "E-commerce Platform Modernization",
      description: "Complete rebuild of a legacy e-commerce system using modern technologies",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800",
      tags: ["React", "Node.js", "AWS"]
    },
    {
      title: "Healthcare Management System",
      description: "Secure and scalable platform for managing patient data and appointments",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800",
      tags: ["Angular", "Python", "MongoDB"]
    },
    {
      title: "Mobile Banking Application",
      description: "Cross-platform mobile app for seamless banking operations",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800",
      tags: ["React Native", "Node.js", "PostgreSQL"]
    },
    {
      title: "IoT Fleet Management",
      description: "Real-time monitoring system for vehicle fleet management",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800",
      tags: ["Vue.js", "Python", "AWS IoT"]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Work</h1>
          <p className="text-xl text-gray-600">
            We take great pride in the projects we undertake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((caseStudy, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{caseStudy.title}</h3>
                <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;