import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  AcademicCapIcon, 
  UserGroupIcon, 
  BookOpenIcon, 
  StarIcon, 
  ChatBubbleLeftIcon, 
  MapPinIcon, 
  ClockIcon, 
  CurrencyDollarIcon,
  ArrowRightIcon,
  UserIcon,
  PhotoIcon,
  PaperAirplaneIcon,
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  ShareIcon,
  EllipsisHorizontalIcon,
  CheckCircleIcon,
  UserPlusIcon,
  MagnifyingGlassIcon,
  BuildingOfficeIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  PhoneIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  const [activeTab, setActiveTab] = useState('all');
  
  // Sample data for teacher posts
  const posts = [
    {
      id: 1,
      teacher: {
        id: 1,
        name: 'Jane Smith',
        subject: 'Physics',
        image: '/images/teacher_1.jpg',
      },
      content: "Just finished preparing my new lesson plan on Quantum Mechanics for my advanced physics students. Excited to see how they engage with these complex concepts! #PhysicsEducation #QuantumMechanics",
      timestamp: '2 hours ago',
      likes: 24,
      comments: 8,
      shares: 3
    },
    {
      id: 2,
      teacher: {
        id: 2,
        name: 'John Doe',
        subject: 'Mathematics',
        image: '/images/teacher_2.jpg',
      },
      content: "Teaching calculus through real-world applications has been incredibly effective. Today we explored how derivatives relate to velocity and acceleration in sports. Students were engaged and asking great questions!",
      timestamp: '5 hours ago',
      likes: 18,
      comments: 5,
      shares: 2
    },
    {
      id: 3,
      teacher: {
        id: 3,
        name: 'Sarah Johnson',
        subject: 'Chemistry',
        image: '/images/teacher_3.jpg',
      },
      content: "Virtual lab experiments are challenging but rewarding. Today we simulated a titration experiment and students were able to visualize the color change at the equivalence point. Technology is transforming how we teach science!",
      timestamp: '1 day ago',
      likes: 32,
      comments: 12,
      shares: 4
    }
  ];

  // Sample data for featured teachers
  const featuredTeachers = [
    {
      id: 1,
      name: 'Jane Smith',
      subject: 'Physics',
      image: '/images/teacher_1.jpg',
      rating: 4.9,
      reviews: 98,
      location: 'Surulere, Lagos',
      experience: '7 years',
      hourlyRate: '₦6,000'
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
      hourlyRate: '₦5,000'
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
      hourlyRate: '₦5,500'
    }
  ];

  // Sample data for recent feedback
  const recentFeedback = [
    {
      id: 1,
      student: 'Michael Brown',
      teacher: 'Jane Smith',
      rating: 5,
      comment: "Jane is an exceptional physics teacher. She explains complex concepts in a way that's easy to understand. My grades have improved significantly since I started taking lessons with her.",
      date: '2 days ago'
    },
    {
      id: 2,
      student: 'Emily Davis',
      teacher: 'John Doe',
      rating: 5,
      comment: "John's approach to mathematics is innovative and engaging. He uses real-world examples that make abstract concepts tangible. Highly recommended!",
      date: '3 days ago'
    },
    {
      id: 3,
      student: 'David Wilson',
      teacher: 'Sarah Johnson',
      rating: 4,
      comment: "Sarah is very knowledgeable in chemistry. Her virtual lab demonstrations are particularly helpful for understanding complex reactions.",
      date: '5 days ago'
    }
  ];

  // Steps to connect with teachers
  const steps = [
    {
      id: 1,
      title: 'Create an Account',
      description: 'Sign up as a student to access our network of qualified teachers.',
      icon: UserPlusIcon
    },
    {
      id: 2,
      title: 'Browse Teachers',
      description: 'Explore profiles, read reviews, and find the perfect teacher for your needs.',
      icon: MagnifyingGlassIcon
    },
    {
      id: 3,
      title: 'Connect & Learn',
      description: 'Message teachers, schedule sessions, and start your learning journey.',
      icon: ChatBubbleLeftIcon
    },
    {
      id: 4,
      title: 'Track Progress',
      description: 'Monitor your learning progress and provide feedback to help teachers improve.',
      icon: CheckCircleIcon
    }
  ];

  // Location data with images
  const locations = [
    {
      id: 1,
      name: 'Lagos',
      image: 'https://images.unsplash.com/photo-1525154660-7fdcf61269c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Nigeria\'s economic hub with numerous teaching opportunities in international schools and universities.'
    },
    {
      id: 2,
      name: 'Abuja',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'The capital city offers positions in government schools and private institutions.'
    },
    {
      id: 3,
      name: 'Port Harcourt',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Growing educational sector with opportunities in oil and gas industry training.'
    },
    {
      id: 4,
      name: 'Ibadan',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Home to Nigeria\'s first university, offering various teaching positions in higher education.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-white">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Education background"
          />
        </div>
        <div className="relative max-w-[90%] mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Connect with Expert Teachers
          </h1>
          <p className="mt-6 text-xl text-gray-500 max-w-3xl">
            Find the perfect teaching position or connect with qualified teachers across Nigeria.
          </p>
          <div className="mt-10">
            <Link
              to="/teachers"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#f49c30] hover:bg-[#e68a1a]"
            >
              Find Teachers
            </Link>
            <Link
              to="/jobs"
              className="ml-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#f49c30] bg-white hover:bg-gray-50"
            >
              Browse Jobs
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="max-w-[90%] mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Link to="/teachers" className="flex items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <UserGroupIcon className="h-8 w-8 text-[#f49c30]" />
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Find Teachers</h3>
              <p className="mt-1 text-sm text-gray-500">Browse qualified teachers</p>
            </div>
          </Link>
          <Link to="/jobs" className="flex items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <BriefcaseIcon className="h-8 w-8 text-[#f49c30]" />
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Browse Jobs</h3>
              <p className="mt-1 text-sm text-gray-500">Find teaching positions</p>
            </div>
          </Link>
          <Link to="/feedback" className="flex items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <ChatBubbleLeftIcon className="h-8 w-8 text-[#f49c30]" />
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Feedback</h3>
              <p className="mt-1 text-sm text-gray-500">Share your experience</p>
            </div>
          </Link>
          <Link to="/contact" className="flex items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <EnvelopeIcon className="h-8 w-8 text-[#f49c30]" />
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Contact Us</h3>
              <p className="mt-1 text-sm text-gray-500">Get in touch</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Main Content - 3 Column Layout */}
      <div className="max-w-[90%] mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Profile & Stats */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              <div className="p-6">
                <div className="flex items-center">
                  
                  <div>
                    <div className="flex items-center">
                      <h3 className="text-lg font-semibold text-gray-900">Welcome to Teacherrs</h3>
                    </div>
                    <p className="text-sm text-gray-500">Your learning journey starts here</p>
                  </div>
                </div>
                <div className="mt-4 border-t pt-4">
                  <div className="flex justify-between text-sm">
                    <div className="text-center">
                      <p className="font-semibold text-gray-900">500+</p>
                      <p className="text-gray-500">Teachers</p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-gray-900">10k+</p>
                      <p className="text-gray-500">Students</p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-gray-900">15k+</p>
                      <p className="text-gray-500">Sessions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-900">Quick Links</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-3">
                  <li>
                    <Link to="/teachers" className="flex items-center text-gray-700 hover:text-[#f49c30]">
                      <UserGroupIcon className="h-5 w-5 mr-2" />
                      <span>Find Teachers</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/jobs" className="flex items-center text-gray-700 hover:text-[#f49c30]">
                      <BriefcaseIcon className="h-5 w-5 mr-2" />
                      <span>Browse Jobs</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/feedback" className="flex items-center text-gray-700 hover:text-[#f49c30]">
                      <StarIcon className="h-5 w-5 mr-2" />
                      <span>Give Feedback</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="flex items-center text-gray-700 hover:text-[#f49c30]">
                      <ChatBubbleLeftIcon className="h-5 w-5 mr-2" />
                      <span>Contact Us</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Steps to Connect */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-900">Connect with Teachers</h3>
              </div>
              <div className="p-4">
                <div className="space-y-4">
                  {steps.map((step) => (
                    <div key={step.id} className="flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#f49c30]/10 flex items-center justify-center">
                        <step.icon className="h-5 w-5 text-[#f49c30]" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-sm font-medium text-gray-900">{step.title}</h4>
                        <p className="text-xs text-gray-500 mt-1">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Posts */}
          <div className="lg:col-span-6">
            {/* Create Post */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              <div className="p-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-3 bg-gray-100">
                    <UserIcon className="h-full w-full text-gray-400" />
                  </div>
                  <div className="flex-grow">
                    <input 
                      type="text" 
                      placeholder="Share your thoughts or ask a question..." 
                      className="w-full border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#f49c30] focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="mt-4 flex justify-between border-t pt-4">
                  <button className="flex items-center text-gray-500 hover:text-[#f49c30]">
                    <PhotoIcon className="h-5 w-5 mr-1" />
                    <span className="text-sm">Photo</span>
                  </button>
                  <button className="flex items-center text-gray-500 hover:text-[#f49c30]">
                    <PaperAirplaneIcon className="h-5 w-5 mr-1" />
                    <span className="text-sm">Post</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-6">
              {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Link to={`/teacher/${post.teacher.id}`} className="h-10 w-10 rounded-full overflow-hidden mr-3">
                          <img 
                            src={post.teacher.image} 
                            alt={post.teacher.name} 
                            className="h-full w-full object-cover"
                          />
                        </Link>
                        <div>
                          <Link to={`/teacher/${post.teacher.id}`} className="font-semibold text-gray-900 hover:text-[#f49c30]">
                            {post.teacher.name}
                          </Link>
                          <p className="text-xs text-gray-500">{post.teacher.subject} Teacher • {post.timestamp}</p>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <EllipsisHorizontalIcon className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="mt-4">
                      <p className="text-gray-800">{post.content}</p>
                    </div>
                    <div className="mt-4 flex justify-between border-t pt-4">
                      <button className="flex items-center text-gray-500 hover:text-[#f49c30]">
                        <HeartIcon className="h-5 w-5 mr-1" />
                        <span className="text-sm">{post.likes}</span>
                      </button>
                      <button className="flex items-center text-gray-500 hover:text-[#f49c30]">
                        <ChatBubbleOvalLeftIcon className="h-5 w-5 mr-1" />
                        <span className="text-sm">{post.comments}</span>
                      </button>
                      <button className="flex items-center text-gray-500 hover:text-[#f49c30]">
                        <ShareIcon className="h-5 w-5 mr-1" />
                        <span className="text-sm">{post.shares}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Featured Teachers & Feedback */}
          <div className="lg:col-span-3">
            {/* Featured Teachers */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-900">Featured Teachers</h3>
              </div>
              <div className="p-4">
                <div className="space-y-4">
                  {featuredTeachers.map((teacher) => (
                    <div key={teacher.id} className="flex items-start">
                      <Link to={`/teacher/${teacher.id}`} className="h-12 w-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
                        <img 
                          src={teacher.image} 
                          alt={teacher.name} 
                          className="h-full w-full object-cover"
                        />
                      </Link>
                      <div className="flex-grow">
                        <Link to={`/teacher/${teacher.id}`} className="font-medium text-gray-900 hover:text-[#f49c30]">
                          {teacher.name}
                        </Link>
                        <p className="text-sm text-gray-500">{teacher.subject}</p>
                        <div className="flex items-center mt-1">
                          <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                          <span className="text-xs font-medium">{teacher.rating}</span>
                          <span className="text-xs text-gray-500 ml-1">({teacher.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Link 
                    to="/teachers" 
                    className="inline-flex items-center text-sm font-medium text-[#f49c30] hover:text-[#e68a1a]"
                  >
                    View All Teachers
                    <ArrowRightIcon className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Recent Feedback */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-900">Recent Feedback</h3>
              </div>
              <div className="p-4">
                <div className="space-y-4">
                  {recentFeedback.map((feedback) => (
                    <div key={feedback.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-gray-900">{feedback.student}</p>
                          <p className="text-xs text-gray-500">for {feedback.teacher}</p>
                        </div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon 
                              key={i} 
                              className={`h-4 w-4 ${i < feedback.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">{feedback.comment}</p>
                      <p className="text-xs text-gray-500 mt-1">{feedback.date}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Link 
                    to="/feedback" 
                    className="inline-flex items-center text-sm font-medium text-[#f49c30] hover:text-[#e68a1a]"
                  >
                    Give Your Feedback
                    <ArrowRightIcon className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Teaching Positions Section */}
      <section className="py-16 bg-white">
        <div className="w-[90%] mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Teaching Positions in Nigeria</h2>
          <p className="text-gray-600 text-center mb-12">Explore teaching opportunities across major areas in Lagos</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/images/Surulere.png" alt="Surulere" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Surulere</h3>
                <p className="text-gray-600">Find teaching positions in Surulere and surrounding areas.</p>
                <div className="mt-4">
                  <Link to="/jobs" className="text-[#f49c30] hover:text-[#e68a1a] font-medium flex items-center">
                    View Jobs
                    <ArrowRightIcon className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/images/Ikoyi.png" alt="Ikoyi" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Ikoyi</h3>
                <p className="text-gray-600">Explore teaching opportunities in Ikoyi and Victoria Island.</p>
                <div className="mt-4">
                  <Link to="/jobs" className="text-[#f49c30] hover:text-[#e68a1a] font-medium flex items-center">
                    View Jobs
                    <ArrowRightIcon className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/images/Lekki.png" alt="Lekki" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Lekki</h3>
                <p className="text-gray-600">Discover teaching positions in Lekki and Ajah.</p>
                <div className="mt-4">
                  <Link to="/jobs" className="text-[#f49c30] hover:text-[#e68a1a] font-medium flex items-center">
                    View Jobs
                    <ArrowRightIcon className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/images/Ikeja.png" alt="Ikeja" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Ikeja</h3>
                <p className="text-gray-600">Find teaching opportunities in Ikeja and its environs.</p>
                <div className="mt-4">
                  <Link to="/jobs" className="text-[#f49c30] hover:text-[#e68a1a] font-medium flex items-center">
                    View Jobs
                    <ArrowRightIcon className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 