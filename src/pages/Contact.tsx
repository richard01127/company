import React, { useState } from 'react';
import Axios from 'axios';
interface FormData {
  name: string;
  email: string;
  phone: string;
  hearAboutUs: string;
  goal: string;
  budget: string;
  technicalInfo: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    hearAboutUs: '',
    goal: '',
    budget: '',
    technicalInfo: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Axios.post('http://localhost:5000/api/submissions', formData)
    .then(res=>console.log(res))
    .catch(err=>console.log(err));
    console.log(formData);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact us</h1>
          <p className="text-xl text-gray-600">
            Get in touch with us for any inquiries or to schedule a consultation. We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=800"
              alt="Contact"
              className="rounded-lg shadow-xl"
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                How did you hear about us?
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                value={formData.hearAboutUs}
                onChange={(e) => setFormData({ ...formData, hearAboutUs: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                What do you want to achieve?
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                value={formData.goal}
                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                required
              >
                <option value="">Select an option</option>
                <option value="web">Web Development</option>
                <option value="mobile">Mobile Development</option>
                <option value="blockchain">Blockchain Development</option>
                <option value="cloud">Cloud Solutions</option>
                <option value="consulting">Technical Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                What is your approximate budget?
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                required
              >
                <option value="">Select an option</option>
                <option value="1k-5k">$1000 - $5000</option>
                <option value="5k-10k">$5000 - $10000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k+">$100,000+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Technical stack and additional information
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                rows={4}
                value={formData.technicalInfo}
                onChange={(e) => setFormData({ ...formData, technicalInfo: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;