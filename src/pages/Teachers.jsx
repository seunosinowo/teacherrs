import { useState } from 'react';
import { 
  MagnifyingGlassIcon, 
  FunnelIcon, 
  MapPinIcon, 
  AcademicCapIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline';
import TeacherCard from '../components/TeacherCard';
import { Link } from 'react-router-dom';

export default function Teachers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [priceRange, setPriceRange] = useState('');

  // Sample data for teachers
  const teachers = [
    {
      id: 1,
      name: 'Jane Smith',
      subject: 'Physics',
      image: '/images/teacher_1.jpg',
      rating: 4.9,
      reviews: 98,
      location: 'Surulere, Lagos',
      experience: '7 years',
      hourlyRate: '₦6,000',
      education: [
        { degree: 'M.Sc. Physics', institution: 'University of Lagos', year: '2018' },
        { degree: 'B.Sc. Physics', institution: 'University of Ibadan', year: '2015' }
      ],
      subjects: ['Physics', 'Mathematics', 'Chemistry']
    },
    {
      id: 2,
      name: 'John Doe',
      subject: 'Mathematics',
      image: '/images/teacher_2.jpg',
      rating: 4.8,
      reviews: 124,
      location: 'Ikoyi, Lagos',
      experience: '5 years',
      hourlyRate: '₦5,000',
      education: [
        { degree: 'B.Sc. Mathematics', institution: 'University of Lagos', year: '2015-2019' },
        { degree: 'M.Sc. Applied Mathematics', institution: 'University of Ibadan', year: '2019-2021' }
      ],
      subjects: ['Mathematics', 'Calculus', 'Algebra', 'Statistics', 'Geometry']
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      subject: 'Chemistry',
      image: '/images/teacher_3.jpg',
      rating: 4.9,
      reviews: 112,
      location: 'Lekki, Lagos',
      experience: '6 years',
      hourlyRate: '₦5,500',
      education: [
        { degree: 'B.Sc. Chemistry', institution: 'University of Port Harcourt', year: '2016-2020' }
      ],
      subjects: ['Chemistry', 'Organic Chemistry', 'Inorganic Chemistry']
    },
    {
      id: 4,
      name: 'Mike Brown',
      subject: 'Biology',
      image: '/images/teacher_4.jpg',
      rating: 4.7,
      reviews: 87,
      location: 'Ikeja, Lagos',
      experience: '4 years',
      hourlyRate: '₦4,500',
      education: [
        { degree: 'M.Sc. Biology', institution: 'University of Ibadan', year: '2017' },
        { degree: 'B.Sc. Biology', institution: 'University of Lagos', year: '2014' }
      ],
      subjects: ['Biology', 'Anatomy', 'Physiology']
    },
    {
      id: 5,
      name: 'Emily Davis',
      subject: 'English',
      image: '/images/teacher_5.jpg',
      rating: 4.8,
      reviews: 95,
      location: 'Surulere, Lagos',
      experience: '8 years',
      hourlyRate: '₦5,000',
      education: [
        { degree: 'M.A. English Literature', institution: 'University of Lagos', year: '2015' },
        { degree: 'B.A. English', institution: 'University of Ibadan', year: '2012' }
      ],
      subjects: ['English', 'Literature', 'Grammar']
    },
    {
      id: 6,
      name: 'David Wilson',
      subject: 'History',
      image: '/images/teacher_6.jpg',
      rating: 4.7,
      reviews: 78,
      location: 'Ikoyi, Lagos',
      experience: '5 years',
      hourlyRate: '₦4,800',
      education: [
        { degree: 'M.A. History', institution: 'University of Abuja', year: '2018' },
        { degree: 'B.A. History', institution: 'University of Lagos', year: '2015' }
      ],
      subjects: ['History', 'World History', 'African History']
    },
    {
      id: 7,
      name: 'Lisa Martinez',
      subject: 'Geography',
      image: '/images/teacher_7.jpg',
      rating: 4.6,
      reviews: 65,
      location: 'Lekki, Lagos',
      experience: '6 years',
      hourlyRate: '₦4,500',
      education: [
        { degree: 'M.Sc. Geography', institution: 'University of Port Harcourt', year: '2017' },
        { degree: 'B.Sc. Geography', institution: 'University of Lagos', year: '2014' }
      ],
      subjects: ['Geography', 'Physical Geography', 'Human Geography']
    },
    {
      id: 8,
      name: 'Robert Anderson',
      subject: 'Art',
      image: '/images/teacher_8.jpg',
      rating: 4.9,
      reviews: 92,
      location: 'Ikeja, Lagos',
      experience: '7 years',
      hourlyRate: '₦5,200',
      education: [
        { degree: 'M.F.A. Fine Arts', institution: 'University of Lagos', year: '2016' },
        { degree: 'B.F.A. Fine Arts', institution: 'University of Ibadan', year: '2013' }
      ],
      subjects: ['Art', 'Drawing', 'Painting', 'Sculpture']
    },
    {
      id: 9,
      name: 'Jennifer Taylor',
      subject: 'Music',
      image: '/images/teacher_9.jpg',
      rating: 4.8,
      reviews: 84,
      location: 'Surulere, Lagos',
      experience: '5 years',
      hourlyRate: '₦4,800',
      education: [
        { degree: 'M.M. Music', institution: 'University of Ibadan', year: '2018' },
        { degree: 'B.M. Music', institution: 'University of Lagos', year: '2015' }
      ],
      subjects: ['Music', 'Piano', 'Guitar', 'Music Theory']
    },
    {
      id: 10,
      name: 'Michael Clark',
      subject: 'Physical Education',
      image: '/images/teacher_10.jpg',
      rating: 4.7,
      reviews: 76,
      location: 'Ikoyi, Lagos',
      experience: '6 years',
      hourlyRate: '₦4,500',
      education: [
        { degree: 'M.Ed. Physical Education', institution: 'University of Abuja', year: '2017' },
        { degree: 'B.Ed. Physical Education', institution: 'University of Lagos', year: '2014' }
      ],
      subjects: ['Physical Education', 'Sports', 'Fitness', 'Athletics']
    }
  ];

  // Filter options
  const subjects = ['All Subjects', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'History', 'Geography', 'Art', 'Music', 'Physical Education'];
  const locations = ['All Locations', 'Surulere, Lagos', 'Ikoyi, Lagos', 'Lekki, Lagos', 'Ikeja, Lagos'];
  const experienceLevels = ['All Experience', '1-3 years', '4-6 years', '7+ years'];
  const priceRanges = ['All Prices', 'Under ₦4,000', '₦4,000 - ₦5,000', '₦5,000 - ₦6,000', 'Over ₦6,000'];

  // Filter teachers based on search term and filters
  const filteredTeachers = teachers.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         teacher.subject.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSubject = selectedSubject === '' || selectedSubject === 'All Subjects' || 
                          teacher.subject === selectedSubject;
    
    const matchesLocation = selectedLocation === '' || selectedLocation === 'All Locations' || 
                           teacher.location === selectedLocation;
    
    const matchesExperience = selectedExperience === '' || selectedExperience === 'All Experience' || 
                             (selectedExperience === '1-3 years' && parseInt(teacher.experience) <= 3) ||
                             (selectedExperience === '4-6 years' && parseInt(teacher.experience) >= 4 && parseInt(teacher.experience) <= 6) ||
                             (selectedExperience === '7+ years' && parseInt(teacher.experience) >= 7);
    
    const matchesPrice = priceRange === '' || priceRange === 'All Prices' || 
                        (priceRange === 'Under ₦4,000' && parseInt(teacher.hourlyRate.replace('₦', '').replace(',', '')) < 4000) ||
                        (priceRange === '₦4,000 - ₦5,000' && parseInt(teacher.hourlyRate.replace('₦', '').replace(',', '')) >= 4000 && parseInt(teacher.hourlyRate.replace('₦', '').replace(',', '')) <= 5000) ||
                        (priceRange === '₦5,000 - ₦6,000' && parseInt(teacher.hourlyRate.replace('₦', '').replace(',', '')) > 5000 && parseInt(teacher.hourlyRate.replace('₦', '').replace(',', '')) <= 6000) ||
                        (priceRange === 'Over ₦6,000' && parseInt(teacher.hourlyRate.replace('₦', '').replace(',', '')) > 6000);
    
    return matchesSearch && matchesSubject && matchesLocation && matchesExperience && matchesPrice;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Find a Teacher</h1>
        <p className="text-gray-600">Browse through our qualified teachers and find the perfect match for your learning needs.</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4">
          <div className="relative flex-grow mb-4 md:mb-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by name or subject..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-[#f49c30] focus:border-[#f49c30] sm:text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#f49c30] hover:bg-[#e68a1a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f49c30]">
            <FunnelIcon className="h-5 w-5 mr-2" />
            Filters
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <select
              id="subject"
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-[#f49c30] focus:border-[#f49c30] sm:text-sm rounded-md"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              {subjects.map((subject) => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <select
              id="location"
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-[#f49c30] focus:border-[#f49c30] sm:text-sm rounded-md"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              {locations.map((location) => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
              Experience
            </label>
            <select
              id="experience"
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-[#f49c30] focus:border-[#f49c30] sm:text-sm rounded-md"
              value={selectedExperience}
              onChange={(e) => setSelectedExperience(e.target.value)}
            >
              {experienceLevels.map((level) => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
              Price Range
            </label>
            <select
              id="price"
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-[#f49c30] focus:border-[#f49c30] sm:text-sm rounded-md"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              {priceRanges.map((range) => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">
          {filteredTeachers.length} {filteredTeachers.length === 1 ? 'Teacher' : 'Teachers'} Found
        </h2>
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-2">Sort by:</span>
          <select className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-[#f49c30] focus:border-[#f49c30] sm:text-sm rounded-md">
            <option>Most Popular</option>
            <option>Highest Rated</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Teachers Grid */}
      {filteredTeachers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTeachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-2">No teachers found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
} 