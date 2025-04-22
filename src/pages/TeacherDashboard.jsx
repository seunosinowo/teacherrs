import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChartBarIcon, 
  BriefcaseIcon, 
  UserGroupIcon, 
  CalendarIcon,
  PencilIcon,
  TrashIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export default function TeacherDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Students', value: '156', icon: UserGroupIcon },
    { label: 'Active Sessions', value: '12', icon: CalendarIcon },
    { label: 'Total Earnings', value: '₦245,000', icon: ChartBarIcon },
    { label: 'Job Offers', value: '8', icon: BriefcaseIcon },
  ];

  const teachers = [
    {
      id: 1,
      name: 'John Doe',
      subject: 'Mathematics',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      rating: 4.8,
      reviews: 124,
      location: 'Lagos',
      experience: '5 years',
      hourlyRate: '₦5,000'
    },
    {
      id: 2,
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
      id: 3,
      name: 'Mike Johnson',
      subject: 'Chemistry',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      rating: 4.7,
      reviews: 156,
      location: 'Port Harcourt',
      experience: '4 years',
      hourlyRate: '₦4,500'
    },
    {
      id: 4,
      name: 'Sarah Williams',
      subject: 'Biology',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      rating: 4.9,
      reviews: 112,
      location: 'Ibadan',
      experience: '6 years',
      hourlyRate: '₦5,500'
    },
    {
      id: 5,
      name: 'David Brown',
      subject: 'English',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      rating: 4.8,
      reviews: 89,
      location: 'Lagos',
      experience: '8 years',
      hourlyRate: '₦5,000'
    },
    {
      id: 6,
      name: 'Emily Davis',
      subject: 'History',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      rating: 4.7,
      reviews: 76,
      location: 'Abuja',
      experience: '5 years',
      hourlyRate: '₦4,800'
    },
    {
      id: 7,
      name: 'Michael Wilson',
      subject: 'Geography',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      rating: 4.6,
      reviews: 92,
      location: 'Port Harcourt',
      experience: '6 years',
      hourlyRate: '₦4,500'
    },
    {
      id: 8,
      name: 'Jennifer Taylor',
      subject: 'Art',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      rating: 4.9,
      reviews: 108,
      location: 'Lagos',
      experience: '7 years',
      hourlyRate: '₦5,200'
    },
    {
      id: 9,
      name: 'Robert Anderson',
      subject: 'Music',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      rating: 4.8,
      reviews: 84,
      location: 'Ibadan',
      experience: '5 years',
      hourlyRate: '₦4,800'
    },
    {
      id: 10,
      name: 'Lisa Martinez',
      subject: 'Physical Education',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      rating: 4.7,
      reviews: 96,
      location: 'Abuja',
      experience: '6 years',
      hourlyRate: '₦4,500'
    }
  ];

  const recentSessions = [
    { id: 1, student: 'John Doe', subject: 'Mathematics', date: '2024-03-15', status: 'Completed' },
    { id: 2, student: 'Jane Smith', subject: 'Physics', date: '2024-03-16', status: 'Scheduled' },
    { id: 3, student: 'Mike Johnson', subject: 'Chemistry', date: '2024-03-17', status: 'Pending' },
  ];

  const jobOffers = [
    { id: 1, title: 'Mathematics Tutor', client: 'ABC School', rate: '₦5,000/hr', status: 'New' },
    { id: 2, title: 'Physics Teacher', client: 'XYZ Academy', rate: '₦6,000/hr', status: 'New' },
    { id: 3, title: 'Chemistry Instructor', client: '123 College', rate: '₦4,500/hr', status: 'Viewed' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
        <Link 
          to="/profile/edit" 
          className="bg-[#f49c30] text-white px-4 py-2 rounded-lg hover:bg-[#e68a1a]"
        >
          Edit Profile
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
              <stat.icon className="h-8 w-8 text-[#f49c30]" />
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm mb-8">
        <div className="border-b">
          <nav className="flex">
            {['overview', 'teachers', 'sessions', 'job-offers', 'earnings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === tab
                    ? 'border-b-2 border-[#f49c30] text-[#f49c30]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Recent Sessions</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {recentSessions.map((session) => (
                        <tr key={session.id}>
                          <td className="px-6 py-4 whitespace-nowrap">{session.student}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{session.subject}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{session.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              session.status === 'Completed' ? 'bg-green-100 text-green-800' :
                              session.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {session.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button className="text-gray-500 hover:text-[#f49c30]">
                              <PencilIcon className="h-5 w-5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Recent Job Offers</h3>
                <div className="space-y-4">
                  {jobOffers.map((job) => (
                    <div key={job.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">{job.title}</h4>
                          <p className="text-gray-500">{job.client}</p>
                          <p className="text-[#f49c30] font-medium">{job.rate}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          job.status === 'New' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {job.status}
                        </span>
                      </div>
                      <div className="mt-4 flex space-x-4">
                        <button className="text-[#f49c30] hover:text-[#e68a1a]">Accept</button>
                        <button className="text-gray-500 hover:text-gray-700">Decline</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'teachers' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">All Teachers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {teachers.map((teacher) => (
                  <Link key={teacher.id} to={`/teacher/${teacher.id}`} className="block">
                    <div className="bg-white border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative h-48">
                        <img 
                          src={teacher.image} 
                          alt={teacher.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h4 className="font-semibold text-lg">{teacher.name}</h4>
                          <p className="text-sm opacity-90">{teacher.subject}</p>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center mb-2">
                          <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                          <span className="text-sm font-medium">{teacher.rating}</span>
                          <span className="text-sm text-gray-500 ml-1">({teacher.reviews} reviews)</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>{teacher.location}</span>
                          <span>{teacher.hourlyRate}/hr</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'sessions' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">All Sessions</h3>
              {/* Add sessions content */}
            </div>
          )}

          {activeTab === 'job-offers' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">All Job Offers</h3>
              {/* Add job offers content */}
            </div>
          )}

          {activeTab === 'earnings' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Earnings Overview</h3>
              {/* Add earnings content */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 