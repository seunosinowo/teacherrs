import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  StarIcon, 
  MapPinIcon, 
  AcademicCapIcon, 
  ClockIcon, 
  LanguageIcon,
  EnvelopeIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

export default function TeacherDetails() {
  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch teacher details
    const fetchTeacherDetails = () => {
      setLoading(true);
      
      // Simulate network delay
      setTimeout(() => {
        // Create different teacher data based on the ID
        let teacherData;
        
        if (id === '1') {
          teacherData = {
            id: 1,
            name: 'Jane Smith',
            subject: 'Physics',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            rating: 4.9,
            reviews: 98,
            location: 'Surulere, Lagos',
            experience: '7 years',
            hourlyRate: '₦6,000',
            about: 'Experienced physics teacher with a passion for making complex concepts accessible to students. Specializes in mechanics, thermodynamics, and quantum physics.',
            education: [
              { degree: 'M.Sc. Physics', institution: 'University of Lagos', year: '2018' },
              { degree: 'B.Sc. Physics', institution: 'University of Ibadan', year: '2015' }
            ],
            certifications: [
              { name: 'Advanced Physics Teaching', issuer: 'Nigerian Institute of Physics', year: '2019' },
              { name: 'STEM Education Specialist', issuer: 'International STEM Education Association', year: '2020' }
            ],
            testimonials: [
              { name: 'John A.', text: 'Jane is an excellent teacher who made physics enjoyable and understandable.', rating: 5 },
              { name: 'Sarah B.', text: 'Her teaching methods are effective and she is very patient with students.', rating: 5 },
              { name: 'Michael C.', text: 'I improved significantly in my physics exams after taking lessons with Jane.', rating: 4 }
            ],
            availability: 'Weekdays: 9 AM - 5 PM, Weekends: 10 AM - 2 PM',
            languages: ['English', 'French'],
            contact: {
              email: 'jane.smith@gmail.com',
              phone: '+234 801 234 5678'
            },
            subjects: ['Physics', 'Mathematics', 'Chemistry']
          };
        } else if (id === '2') {
          teacherData = {
            id: 2,
            name: 'John Doe',
            subject: 'Mathematics',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            rating: 4.8,
            reviews: 124,
            location: 'Ikoyi, Lagos',
            experience: '5 years',
            hourlyRate: '₦5,000',
            about: 'Dedicated mathematics teacher with expertise in calculus, algebra, and statistics. Focuses on building strong foundational knowledge and problem-solving skills.',
            education: [
              { degree: 'B.Sc. Mathematics', institution: 'University of Lagos', year: '2015-2019' },
              { degree: 'M.Sc. Applied Mathematics', institution: 'University of Ibadan', year: '2019-2021' }
            ],
            certifications: [
              { name: 'Advanced Mathematics Teaching', issuer: 'Nigerian Mathematical Society', year: '2020' },
              { name: 'Online Education Specialist', issuer: 'Global Online Teaching Institute', year: '2021' }
            ],
            testimonials: [
              { name: 'David E.', text: 'John has a unique way of explaining complex mathematical concepts.', rating: 5 },
              { name: 'Lisa F.', text: 'His patience and dedication helped me overcome my fear of mathematics.', rating: 5 },
              { name: 'Robert G.', text: 'Excellent teacher who goes above and beyond to ensure students understand.', rating: 4 }
            ],
            availability: 'Weekdays: 10 AM - 6 PM, Weekends: 11 AM - 3 PM',
            languages: ['English', 'Yoruba'],
            contact: {
              email: 'john.doe@gmail.com',
              phone: '+234 802 345 6789'
            },
            subjects: ['Mathematics', 'Calculus', 'Algebra', 'Statistics', 'Geometry']
          };
        } else if (id === '3') {
          teacherData = {
            id: 3,
            name: 'Mike Johnson',
            subject: 'Chemistry',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            rating: 4.7,
            reviews: 156,
            location: 'Lekki, Lagos',
            experience: '4 years',
            hourlyRate: '₦4,500',
            about: 'Passionate chemistry teacher with a background in organic and inorganic chemistry. Makes chemistry engaging through practical examples and experiments.',
            education: [
              { degree: 'B.Sc. Chemistry', institution: 'University of Port Harcourt', year: '2016-2020' }
            ],
            certifications: [
              { name: 'Chemistry Education Specialist', issuer: 'Nigerian Chemical Society', year: '2021' },
              { name: 'Laboratory Safety Certification', issuer: 'International Safety Council', year: '2020' }
            ],
            testimonials: [
              { name: 'Emma H.', text: 'Mike makes chemistry fun and interesting with his practical approach.', rating: 5 },
              { name: 'James I.', text: 'His teaching methods helped me excel in my chemistry exams.', rating: 4 },
              { name: 'Patricia J.', text: 'Very knowledgeable and always willing to help students.', rating: 5 }
            ],
            availability: 'Weekdays: 9 AM - 5 PM, Weekends: 10 AM - 2 PM',
            languages: ['English', 'Igbo'],
            contact: {
              email: 'mike.johnson@gmail.com',
              phone: '+234 803 456 7890'
            },
            subjects: ['Chemistry', 'Organic Chemistry', 'Inorganic Chemistry']
          };
        } else if (id === '4') {
          teacherData = {
            id: 4,
            name: 'Sarah Williams',
            subject: 'Biology',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            rating: 4.9,
            reviews: 112,
            location: 'Ikeja, Lagos',
            experience: '6 years',
            hourlyRate: '₦5,500',
            about: 'Experienced biology teacher with a passion for life sciences. Specializes in cell biology, genetics, and ecology. Makes complex biological concepts accessible to students.',
            education: [
              { degree: 'M.Sc. Biology', institution: 'University of Ibadan', year: '2017' },
              { degree: 'B.Sc. Biology', institution: 'University of Lagos', year: '2014' }
            ],
            certifications: [
              { name: 'Biology Education Specialist', issuer: 'Nigerian Biological Society', year: '2018' },
              { name: 'Science Education Advanced', issuer: 'International Science Teaching Association', year: '2019' }
            ],
            testimonials: [
              { name: 'Thomas K.', text: 'Sarah has an amazing way of explaining biological processes.', rating: 5 },
              { name: 'Olivia L.', text: 'Her enthusiasm for biology is contagious. I learned so much!', rating: 5 },
              { name: 'William M.', text: 'Excellent teacher who helped me excel in my biology exams.', rating: 4 }
            ],
            availability: 'Weekdays: 9 AM - 5 PM, Weekends: 10 AM - 2 PM',
            languages: ['English', 'Yoruba'],
            contact: {
              email: 'sarah.williams@gmail.com',
              phone: '+234 804 567 8901'
            },
            subjects: ['Biology', 'Anatomy', 'Physiology']
          };
        } else if (id === '5') {
          teacherData = {
            id: 5,
            name: 'David Brown',
            subject: 'English',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            rating: 4.8,
            reviews: 89,
            location: 'Surulere, Lagos',
            experience: '8 years',
            hourlyRate: '₦5,000',
            about: 'Dedicated English teacher with expertise in literature, grammar, and composition. Focuses on developing strong communication skills and critical thinking abilities.',
            education: [
              { degree: 'M.A. English Literature', institution: 'University of Lagos', year: '2015' },
              { degree: 'B.A. English', institution: 'University of Ibadan', year: '2012' }
            ],
            certifications: [
              { name: 'TEFL Certification', issuer: 'International TEFL Academy', year: '2016' },
              { name: 'Advanced English Teaching', issuer: 'British Council', year: '2018' }
            ],
            testimonials: [
              { name: 'Sophia N.', text: 'David helped me improve my writing skills significantly.', rating: 5 },
              { name: 'Daniel O.', text: 'His approach to teaching literature made it enjoyable and understandable.', rating: 5 },
              { name: 'Emma P.', text: 'Excellent teacher who goes the extra mile to help students succeed.', rating: 4 }
            ],
            availability: 'Weekdays: 10 AM - 6 PM, Weekends: 11 AM - 3 PM',
            languages: ['English', 'French'],
            contact: {
              email: 'david.brown@gmail.com',
              phone: '+234 805 678 9012'
            },
            subjects: ['English', 'Literature', 'Grammar']
          };
        } else if (id === '6') {
          teacherData = {
            id: 6,
            name: 'Emily Davis',
            subject: 'History',
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            rating: 4.7,
            reviews: 76,
            location: 'Ikoyi, Lagos',
            experience: '5 years',
            hourlyRate: '₦4,800',
            about: 'Passionate history teacher with expertise in world history, African history, and historical research methods. Makes history engaging through storytelling and critical analysis.',
            education: [
              { degree: 'M.A. History', institution: 'University of Abuja', year: '2018' },
              { degree: 'B.A. History', institution: 'University of Lagos', year: '2015' }
            ],
            certifications: [
              { name: 'History Education Specialist', issuer: 'Nigerian Historical Society', year: '2019' },
              { name: 'Social Studies Teaching', issuer: 'International Education Association', year: '2020' }
            ],
            testimonials: [
              { name: 'James Q.', text: 'Emily makes history come alive with her engaging teaching style.', rating: 5 },
              { name: 'Sophia R.', text: 'Her knowledge of African history is impressive and enlightening.', rating: 5 },
              { name: 'William S.', text: 'Excellent teacher who helped me understand complex historical events.', rating: 4 }
            ],
            availability: 'Weekdays: 9 AM - 5 PM, Weekends: 10 AM - 2 PM',
            languages: ['English', 'Hausa'],
            contact: {
              email: 'emily.davis@gmail.com',
              phone: '+234 806 789 0123'
            },
            subjects: ['History', 'World History', 'African History']
          };
        } else if (id === '7') {
          teacherData = {
            id: 7,
            name: 'Michael Wilson',
            subject: 'Geography',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            rating: 4.6,
            reviews: 92,
            location: 'Lekki, Lagos',
            experience: '6 years',
            hourlyRate: '₦4,500',
            about: 'Experienced geography teacher with expertise in physical geography, human geography, and environmental studies. Uses maps, visual aids, and real-world examples to make geography engaging.',
            education: [
              { degree: 'M.Sc. Geography', institution: 'University of Port Harcourt', year: '2017' },
              { degree: 'B.Sc. Geography', institution: 'University of Lagos', year: '2014' }
            ],
            certifications: [
              { name: 'Geography Education Specialist', issuer: 'Nigerian Geographical Society', year: '2018' },
              { name: 'Environmental Education', issuer: 'International Environmental Association', year: '2019' }
            ],
            testimonials: [
              { name: 'Olivia T.', text: 'Michael has a unique way of explaining geographical concepts.', rating: 5 },
              { name: 'Daniel U.', text: 'His knowledge of African geography is impressive and comprehensive.', rating: 4 },
              { name: 'Sophia V.', text: 'Excellent teacher who makes geography interesting and relevant.', rating: 5 }
            ],
            availability: 'Weekdays: 9 AM - 5 PM, Weekends: 10 AM - 2 PM',
            languages: ['English', 'Igbo'],
            contact: {
              email: 'michael.wilson@gmail.com',
              phone: '+234 807 890 1234'
            },
            subjects: ['Geography', 'Physical Geography', 'Human Geography']
          };
        } else if (id === '8') {
          teacherData = {
            id: 8,
            name: 'Jennifer Taylor',
            subject: 'Art',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            rating: 4.9,
            reviews: 108,
            location: 'Ikeja, Lagos',
            experience: '7 years',
            hourlyRate: '₦5,200',
            about: 'Creative art teacher with expertise in drawing, painting, and sculpture. Encourages artistic expression and helps students develop their unique style. Believes in the power of art to express emotions and ideas.',
            education: [
              { degree: 'M.F.A. Fine Arts', institution: 'University of Lagos', year: '2016' },
              { degree: 'B.F.A. Fine Arts', institution: 'University of Ibadan', year: '2013' }
            ],
            certifications: [
              { name: 'Art Education Specialist', issuer: 'Nigerian Art Council', year: '2017' },
              { name: 'Creative Teaching Methods', issuer: 'International Art Education Association', year: '2018' }
            ],
            testimonials: [
              { name: 'William W.', text: 'Jennifer has helped me discover my artistic potential.', rating: 5 },
              { name: 'Emma X.', text: 'Her teaching methods are innovative and inspiring.', rating: 5 },
              { name: 'James Y.', text: 'Excellent teacher who provides constructive feedback and encouragement.', rating: 4 }
            ],
            availability: 'Weekdays: 10 AM - 6 PM, Weekends: 11 AM - 3 PM',
            languages: ['English', 'Yoruba'],
            contact: {
              email: 'jennifer.taylor@gmail.com',
              phone: '+234 808 901 2345'
            },
            subjects: ['Art', 'Drawing', 'Painting', 'Sculpture']
          };
        } else if (id === '9') {
          teacherData = {
            id: 9,
            name: 'Robert Anderson',
            subject: 'Music',
            image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            rating: 4.8,
            reviews: 84,
            location: 'Surulere, Lagos',
            experience: '5 years',
            hourlyRate: '₦4,800',
            about: 'Passionate music teacher with expertise in piano, guitar, and music theory. Believes in making music education accessible and enjoyable for students of all ages and skill levels.',
            education: [
              { degree: 'M.M. Music', institution: 'University of Ibadan', year: '2018' },
              { degree: 'B.M. Music', institution: 'University of Lagos', year: '2015' }
            ],
            certifications: [
              { name: 'Music Education Specialist', issuer: 'Nigerian Music Society', year: '2019' },
              { name: 'Piano Teaching Certification', issuer: 'Royal Schools of Music', year: '2017' }
            ],
            testimonials: [
              { name: 'Sophia Z.', text: 'Robert has a patient and encouraging teaching style.', rating: 5 },
              { name: 'Daniel A.', text: 'His knowledge of music theory is impressive and comprehensive.', rating: 5 },
              { name: 'Olivia B.', text: 'Excellent teacher who makes learning music fun and engaging.', rating: 4 }
            ],
            availability: 'Weekdays: 9 AM - 5 PM, Weekends: 10 AM - 2 PM',
            languages: ['English', 'Yoruba'],
            contact: {
              email: 'robert.anderson@gmail.com',
              phone: '+234 809 012 3456'
            },
            subjects: ['Music', 'Piano', 'Guitar', 'Music Theory']
          };
        } else if (id === '10') {
          teacherData = {
            id: 10,
            name: 'Lisa Martinez',
            subject: 'Physical Education',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            rating: 4.7,
            reviews: 96,
            location: 'Ikoyi, Lagos',
            experience: '6 years',
            hourlyRate: '₦4,500',
            about: 'Energetic physical education teacher with expertise in sports, fitness, and athletics. Promotes healthy living and physical activity through engaging lessons and activities. Believes in the importance of physical education for overall well-being.',
            education: [
              { degree: 'M.Ed. Physical Education', institution: 'University of Abuja', year: '2017' },
              { degree: 'B.Ed. Physical Education', institution: 'University of Lagos', year: '2014' }
            ],
            certifications: [
              { name: 'Physical Education Specialist', issuer: 'Nigerian Sports Council', year: '2018' },
              { name: 'Fitness Training Certification', issuer: 'International Fitness Association', year: '2019' }
            ],
            testimonials: [
              { name: 'William C.', text: 'Lisa makes physical education fun and engaging.', rating: 5 },
              { name: 'Emma D.', text: 'Her enthusiasm for sports and fitness is contagious.', rating: 5 },
              { name: 'James E.', text: 'Excellent teacher who promotes healthy living and physical activity.', rating: 4 }
            ],
            availability: 'Weekdays: 9 AM - 5 PM, Weekends: 10 AM - 2 PM',
            languages: ['English', 'Hausa'],
            contact: {
              email: 'lisa.martinez@gmail.com',
              phone: '+234 810 123 4567'
            },
            subjects: ['Physical Education', 'Sports', 'Fitness', 'Athletics']
          };
        } else {
          // Default teacher data if ID doesn't match
          teacherData = {
            id: parseInt(id),
            name: 'Teacher Not Found',
            subject: 'N/A',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            rating: 0,
            reviews: 0,
            location: 'N/A',
            experience: 'N/A',
            hourlyRate: 'N/A',
            about: 'Teacher information not available.',
            education: [],
            certifications: [],
            testimonials: [],
            availability: 'N/A',
            languages: [],
            contact: {
              email: 'N/A',
              phone: 'N/A'
            },
            subjects: []
          };
        }
        
        setTeacher(teacherData);
        setLoading(false);
      }, 1000);
    };

    fetchTeacherDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#f49c30]"></div>
        </div>
      </div>
    );
  }

  if (!teacher || teacher.name === 'Teacher Not Found') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Teacher Not Found</h2>
          <p className="text-gray-600">The teacher you are looking for does not exist or has been removed.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Teacher Header */}
        <div className="relative h-48 bg-gradient-to-r from-[#f49c30] to-[#e68a1a]">
          <div className="absolute -bottom-16 left-8">
            <img 
              src={teacher.image} 
              alt={teacher.name} 
              className="w-32 h-32 rounded-full border-4 border-white object-cover"
            />
          </div>
        </div>
        
        <div className="pt-20 px-8 pb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{teacher.name}</h1>
              <p className="text-xl text-gray-600">{teacher.subject} Teacher</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center">
              <div className="flex items-center mr-4">
                <StarIcon className="h-5 w-5 text-yellow-400 mr-1" />
                <span className="font-medium">{teacher.rating}</span>
                <span className="text-gray-500 ml-1">({teacher.reviews} reviews)</span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 text-gray-400 mr-1" />
                <span className="text-gray-600">{teacher.location}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              {/* About Section */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
                <p className="text-gray-600">{teacher.about}</p>
              </div>

              {/* Education Section */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Education</h2>
                <div className="space-y-4">
                  {teacher.education.map((edu, index) => (
                    <div key={index} className="flex items-start">
                      <AcademicCapIcon className="h-6 w-6 text-[#f49c30] mr-3 mt-1" />
                      <div>
                        <h3 className="font-medium text-gray-900">{edu.degree}</h3>
                        <p className="text-gray-600">{edu.institution}</p>
                        <p className="text-gray-500 text-sm">{edu.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications Section */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Certifications</h2>
                <div className="space-y-4">
                  {teacher.certifications.map((cert, index) => (
                    <div key={index} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-[#f49c30] flex items-center justify-center text-white mr-3 mt-1">
                        <span className="text-xs">✓</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{cert.name}</h3>
                        <p className="text-gray-600">{cert.issuer}</p>
                        <p className="text-gray-500 text-sm">{cert.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials Section */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Testimonials</h2>
                <div className="space-y-6">
                  {teacher.testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon 
                              key={i} 
                              className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <span className="ml-2 font-medium text-gray-900">{testimonial.name}</span>
                      </div>
                      <p className="text-gray-600">{testimonial.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Contact Information */}
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <EnvelopeIcon className="h-5 w-5 text-gray-400 mr-3" />
                    <span className="text-gray-600">{teacher.contact.email}</span>
                  </div>
                  <div className="flex items-center">
                    <PhoneIcon className="h-5 w-5 text-gray-400 mr-3" />
                    <span className="text-gray-600">{teacher.contact.phone}</span>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Availability</h2>
                <div className="flex items-start">
                  <ClockIcon className="h-5 w-5 text-gray-400 mr-3 mt-1" />
                  <p className="text-gray-600">{teacher.availability}</p>
                </div>
              </div>

              {/* Languages */}
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Languages</h2>
                <div className="flex items-start">
                  <LanguageIcon className="h-5 w-5 text-gray-400 mr-3 mt-1" />
                  <div className="flex flex-wrap gap-2">
                    {teacher.languages.map((language, index) => (
                      <span key={index} className="bg-white px-3 py-1 rounded-full text-sm text-gray-600 border border-gray-200">
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Subjects */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Subjects</h2>
                <div className="flex flex-wrap gap-2">
                  {teacher.subjects.map((subject, index) => (
                    <span key={index} className="bg-[#f49c30] bg-opacity-10 px-3 py-1 rounded-full text-sm text-[#f49c30]">
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 