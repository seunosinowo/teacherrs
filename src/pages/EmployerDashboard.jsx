import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChartBarIcon, 
  BriefcaseIcon, 
  UserGroupIcon, 
  CalendarIcon,
  PencilIcon,
  TrashIcon
} from '@heroicons/react/24/outline';

export default function EmployerDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Teachers', value: '45', icon: UserGroupIcon },
    { label: 'Active Jobs', value: '8', icon: BriefcaseIcon },
    { label: 'Total Spent', value: '₦180,000', icon: ChartBarIcon },
    { label: 'Completed Sessions', value: '124', icon: CalendarIcon },
  ];

  const activeJobs = [
    { id: 1, title: 'Mathematics Teacher', applicants: 12, budget: '₦5,000/hr', status: 'Active' },
    { id: 2, title: 'Physics Instructor', applicants: 8, budget: '₦6,000/hr', status: 'Active' },
    { id: 3, title: 'Chemistry Tutor', applicants: 15, budget: '₦4,500/hr', status: 'Active' },
  ];

  const recentApplications = [
    { id: 1, teacher: 'John Doe', position: 'Mathematics Teacher', date: '2024-03-15', status: 'Pending' },
    { id: 2, teacher: 'Jane Smith', position: 'Physics Instructor', date: '2024-03-16', status: 'Reviewed' },
    { id: 3, teacher: 'Mike Johnson', position: 'Chemistry Tutor', date: '2024-03-17', status: 'Shortlisted' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Employer Dashboard</h1>
        <Link 
          to="/post-job" 
          className="bg-[#f49c30] text-white px-4 py-2 rounded-lg hover:bg-[#e68a1a]"
        >
          Post New Job
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
            {['overview', 'jobs', 'applications', 'spending'].map((tab) => (
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
                <h3 className="text-lg font-semibold mb-4">Active Jobs</h3>
                <div className="space-y-4">
                  {activeJobs.map((job) => (
                    <div key={job.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">{job.title}</h4>
                          <p className="text-gray-500">{job.applicants} applicants</p>
                          <p className="text-[#f49c30] font-medium">{job.budget}</p>
                        </div>
                        <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                          {job.status}
                        </span>
                      </div>
                      <div className="mt-4 flex space-x-4">
                        <button className="text-[#f49c30] hover:text-[#e68a1a]">View Applications</button>
                        <button className="text-gray-500 hover:text-gray-700">Edit</button>
                        <button className="text-red-500 hover:text-red-700">Close</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Recent Applications</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Teacher</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Position</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {recentApplications.map((application) => (
                        <tr key={application.id}>
                          <td className="px-6 py-4 whitespace-nowrap">{application.teacher}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{application.position}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{application.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              application.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                              application.status === 'Reviewed' ? 'bg-blue-100 text-blue-800' :
                              'bg-green-100 text-green-800'
                            }`}>
                              {application.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button className="text-[#f49c30] hover:text-[#e68a1a] mr-2">View</button>
                            <button className="text-gray-500 hover:text-gray-700">Message</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'jobs' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">All Jobs</h3>
              {/* Add jobs content */}
            </div>
          )}

          {activeTab === 'applications' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">All Applications</h3>
              {/* Add applications content */}
            </div>
          )}

          {activeTab === 'spending' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Spending Overview</h3>
              {/* Add spending content */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 