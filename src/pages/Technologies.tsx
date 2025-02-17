import React from 'react';

const Technologies = () => {
  const techStacks = [
    {
      category: "Back-end",
      technologies: ["JavaScript", "PHP", "Python", "Java", "Ruby on Rails", "C/C++", ".Net", "Node.js"]
    },
    {
      category: "Front-end",
      technologies: ["React.js", "Angular", "Vue.js"]
    },
    {
      category: "Mobile",
      technologies: ["iOS", "Android", "Flutter", "React Native"]
    },
    {
      category: "Databases",
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "AWS DynamoDB", "Firebase", "Couchbase"]
    },
    {
      category: "Cloud",
      technologies: ["AWS", "Microsoft Azure", "Google Cloud Platform"]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Technologies we use</h1>
          <p className="text-xl text-gray-600">
            Our expertise spans across multiple technologies and platforms
          </p>
        </div>

        <div className="space-y-12">
          {techStacks.map((stack, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">{stack.category}</h2>
              <div className="flex flex-wrap gap-4">
                {stack.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="bg-gray-100 px-4 py-2 rounded-lg text-gray-800 hover:bg-gray-200 transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;