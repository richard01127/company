import React from 'react';
import { Users, Award, Clock, Briefcase } from 'lucide-react';
import CTO from '../../public/CTO.png'
const About = () => {
  const stats = [
    {
      icon: <Clock className="w-6 h-6" />,
      number: "9",
      label: "Years in Tech Industry"
    },
    {
      icon: <Users className="w-6 h-6" />,
      number: "30+",
      label: "Expert Developers"
    },
    {
      icon: <Award className="w-6 h-6" />,
      number: "85%",
      label: "Staff Retention Rate"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      number: "200+",
      label: "Projects Delivered"
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800",
      description: "Expert in cloud architecture and scalable systems"
    },
    {
      name: "Ivan Motuliak",
      role: "CTO",
      image: CTO,
      description: "9+ years of experience in software development and team leadership"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">About Kangston</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a team of passionate developers, designers, and innovators dedicated to creating exceptional software solutions.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4 text-black">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Mission Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-20">
            <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At Kangston, we believe in creating software that not only meets but exceeds our clients' expectations. Our mission is to deliver innovative, scalable, and reliable solutions that help businesses thrive in the digital age.
            </p>
            <p className="text-gray-600">
              We combine technical expertise with creative problem-solving to tackle complex challenges and create exceptional user experiences. Our commitment to quality and continuous improvement drives everything we do.
            </p>
          </div>

          {/* Team Section */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-center">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-gray-600 font-medium mb-2">{member.role}</p>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;