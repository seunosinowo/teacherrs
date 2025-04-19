import { useState } from 'react';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: 'Email',
      details: 'support@teacherrs.com',
      description: "We'll respond within 24 hours"
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      details: '+234 123 456 7890',
      description: 'Mon-Fri from 8am to 5pm'
    },
    {
      icon: MapPinIcon,
      title: 'Office',
      details: '123 Education Street, Lagos',
      description: 'Lagos, Nigeria'
    },
    {
      icon: ClockIcon,
      title: 'Working Hours',
      details: 'Monday - Friday',
      description: '8:00 AM - 5:00 PM'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions or need assistance? We're here to help. Reach out to us through any of the following channels.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-[#f49c30]/10 p-3 rounded-lg">
                    <info.icon className="h-6 w-6 text-[#f49c30]" />
                  </div>
                  <div>
                    <h3 className="font-medium">{info.title}</h3>
                    <p className="text-gray-600">{info.details}</p>
                    <p className="text-sm text-gray-500">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-gray-600 hover:text-[#f49c30]"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-300 focus:border-[#f49c30] focus:ring-[#f49c30]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-300 focus:border-[#f49c30] focus:ring-[#f49c30]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-300 focus:border-[#f49c30] focus:ring-[#f49c30]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-lg border-gray-300 focus:border-[#f49c30] focus:ring-[#f49c30]"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#f49c30] text-white px-6 py-2 rounded-lg hover:bg-[#e68a1a]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="mt-12">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Our Location</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.6666666666667!2d3.3792056!3d6.5243793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzEnMzEuNyJOIDPCsDIyJzQ1LjEiRQ!5e0!3m2!1sen!2sng!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 