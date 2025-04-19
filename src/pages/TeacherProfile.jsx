import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  StarIcon, 
  MapPinIcon, 
  ClockIcon, 
  CurrencyDollarIcon,
  AcademicCapIcon,
  UserGroupIcon,
  BookOpenIcon,
  ChatBubbleLeftIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function TeacherProfile() {
  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading teacher data
    const fetchTeacher = () => {
      // In a real app, this would be an API call
      setTimeout(() => {
        // Sample data - in a real app, this would come from an API
        const teacherData = {
          id: parseInt(id),
          name: 'John Doe',
          subject: 'Mathematics',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          coverImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          rating: 4.8,
          reviews: 124,
          location: 'Lagos',
          experience: '5 years',
          hourlyRate: '₦5,000',
          education: [
            { degree: 'B.Sc. Mathematics', school: 'University of Lagos', year: '2015-2019' },
            { degree: 'M.Sc. Applied Mathematics', school: 'University of Ibadan', year: '2019-2021' }
          ],
          certifications: [
            'Certified Mathematics Teacher',
            'Advanced Teaching Techniques',
            'Online Education Specialist'
          ],
          about: 'I am a passionate mathematics teacher with 5 years of experience teaching at both high school and university levels. I specialize in calculus, algebra, and statistics. My teaching approach focuses on making complex concepts accessible and engaging for students of all levels.',
          subjects: ['Mathematics', 'Calculus', 'Algebra', 'Statistics', 'Geometry'],
          availability: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
          languages: ['English', 'French'],
          contact: {
            phone: '+234 123 456 7890',
            email: 'john.doe@example.com',
            website: 'www.johndoe.com'
          },
          testimonials: [
            {
              id: 1,
              student: 'Michael Brown',
              rating: 5,
              comment: "John is an exceptional teacher. He explains complex mathematical concepts in a way that's easy to understand. My grades improved significantly after just a few sessions with him.",
              date: '2 months ago'
            },
            {
              id: 2,
              student: 'Sarah Johnson',
              rating: 5,
              comment: 'I was struggling with calculus until I started taking lessons with John. His patience and clear explanations helped me master the subject. Highly recommended!',
              date: '1 month ago'
            },
            {
              id: 3,
              student: 'David Wilson',
              rating: 4,
              comment: 'John is very knowledgeable and professional. He helped me prepare for my university entrance exams and I got into my first-choice school.',
              date: '3 months ago'
            }
          ]
        };
        
        setTeacher(teacherData);
        setLoading(false);
      }, 1000);
    };

    fetchTeacher();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-[90%] mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#f49c30]"></div>
        </div>
      </div>
    );
  }

  if (!teacher) {
    return (
      <div className="max-w-[90%] mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Teacher not found</h2>
          <p className="mt-2 text-gray-600">The teacher you're looking for doesn't exist or has been removed.</p>
          <Link to="/teachers" className="mt-4 inline-block text-[#f49c30] hover:text-[#e68a1a]">
            Return to Teachers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[90%] mx-auto px-4 py-8">
      {/* Cover Image */}
      <div className="relative h-64 rounded-lg overflow-hidden mb-6">
        <img 
          src={teacher.coverImage} 
          alt="Cover" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <div className="flex items-end">
            <div className="relative h-24 w-24 mr-4">
              <img 
                src={teacher.image} 
                alt={teacher.name} 
                className="w-full h-full object-cover rounded-full border-4 border-white"
              />
            </div>
            <div className="text-white">
              <h1 className="text-2xl font-bold">{teacher.name}</h1>
              <p className="text-lg">{teacher.subject} Teacher</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* About Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <p className="text-gray-700 mb-4">{teacher.about}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 text-[#f49c30] mr-2" />
                <span className="text-gray-700">{teacher.location}</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 text-[#f49c30] mr-2" />
                <span className="text-gray-700">{teacher.experience} experience</span>
              </div>
              <div className="flex items-center">
                <CurrencyDollarIcon className="h-5 w-5 text-[#f49c30] mr-2" />
                <span className="text-gray-700">{teacher.hourlyRate}/hr</span>
              </div>
              <div className="flex items-center">
                <StarIcon className="h-5 w-5 text-yellow-400 mr-2" />
                <span className="text-gray-700">{teacher.rating} ({teacher.reviews} reviews)</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {teacher.subjects.map((subject, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-[#f49c30]/10 text-[#f49c30] rounded-full text-sm"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <AcademicCapIcon className="h-6 w-6 text-[#f49c30] mr-2" />
              Education
            </h2>
            <div className="space-y-4">
              {teacher.education.map((edu, index) => (
                <div key={index} className="border-l-4 border-[#f49c30] pl-4">
                  <h3 className="font-medium">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.school}</p>
                  <p className="text-gray-500 text-sm">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <CheckCircleIcon className="h-6 w-6 text-[#f49c30] mr-2" />
              Certifications
            </h2>
            <ul className="space-y-2">
              {teacher.certifications.map((cert, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonials Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Testimonials</h2>
            <div className="space-y-6">
              {teacher.testimonials.map((testimonial) => (
                <div key={testimonial.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium">{testimonial.student}</p>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon 
                          key={i} 
                          className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-1">{testimonial.comment}</p>
                  <p className="text-gray-500 text-sm">{testimonial.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          {/* Contact Card */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-[#f49c30] mr-2" />
                <span className="text-gray-700">{teacher.contact.phone}</span>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 text-[#f49c30] mr-2" />
                <span className="text-gray-700">{teacher.contact.email}</span>
              </div>
              <div className="flex items-center">
                <GlobeAltIcon className="h-5 w-5 text-[#f49c30] mr-2" />
                <span className="text-gray-700">{teacher.contact.website}</span>
              </div>
            </div>
            <div className="mt-6 flex space-x-2">
              <Link 
                to={`/messages/${teacher.id}`}
                className="flex-1 flex items-center justify-center bg-[#f49c30] text-white py-2 rounded-lg hover:bg-[#e68a1a] transition-colors"
              >
                <ChatBubbleLeftIcon className="h-4 w-4 mr-1" />
                <span>Message</span>
              </Link>
              <button 
                className="flex-1 flex items-center justify-center border border-[#f49c30] text-[#f49c30] py-2 rounded-lg hover:bg-[#f49c30]/10 transition-colors"
              >
                <BookOpenIcon className="h-4 w-4 mr-1" />
                <span>Book Session</span>
              </button>
            </div>
          </div>

          {/* Availability Card */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Availability</h2>
            <div className="flex flex-wrap gap-2">
              {teacher.availability.map((day, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                >
                  {day}
                </span>
              ))}
            </div>
          </div>

          {/* Languages Card */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Languages</h2>
            <div className="flex flex-wrap gap-2">
              {teacher.languages.map((language, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 