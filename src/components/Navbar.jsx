import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bars3Icon, 
  XMarkIcon,
  AcademicCapIcon,
  UserGroupIcon,
  BookOpenIcon,
  StarIcon,
  ChatBubbleLeftIcon,
  MapPinIcon,
  ClockIcon,
  CurrencyDollarIcon,
  BriefcaseIcon,
  HomeIcon,
  UserIcon
} from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm w-full">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <AcademicCapIcon className="h-8 w-8 text-[#f49c30]" />
                <span className="ml-2 text-xl font-bold text-gray-900">Teacherrs</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className="flex flex-col items-center px-3 pt-2 pb-1 text-gray-500 hover:text-gray-700"
              >
                <HomeIcon className="h-6 w-6 mb-1" />
                <span className="text-xs">Home</span>
              </Link>
              <Link
                to="/teachers"
                className="flex flex-col items-center px-3 pt-2 pb-1 text-gray-500 hover:text-gray-700"
              >
                <UserGroupIcon className="h-6 w-6 mb-1" />
                <span className="text-xs">Teachers</span>
              </Link>
              <Link
                to="/jobs"
                className="flex flex-col items-center px-3 pt-2 pb-1 text-gray-500 hover:text-gray-700"
              >
                <BriefcaseIcon className="h-6 w-6 mb-1" />
                <span className="text-xs">Jobs</span>
              </Link>
              <Link
                to="/feedback"
                className="flex flex-col items-center px-3 pt-2 pb-1 text-gray-500 hover:text-gray-700"
              >
                <StarIcon className="h-6 w-6 mb-1" />
                <span className="text-xs">Feedback</span>
              </Link>
              <Link
                to="/contact"
                className="flex flex-col items-center px-3 pt-2 pb-1 text-gray-500 hover:text-gray-700"
              >
                <ChatBubbleLeftIcon className="h-6 w-6 mb-1" />
                <span className="text-xs">Contact</span>
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link
              to="/signin"
              className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#f49c30] hover:bg-[#e68a1a]"
            >
              Sign Up
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#f49c30]"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="bg-[#f49c30]/10 border-[#f49c30] text-[#f49c30] block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >
            <div className="flex items-center">
              <HomeIcon className="h-5 w-5 mr-2" />
              <span>Home</span>
            </div>
          </Link>
          <Link
            to="/teachers"
            className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >
            <div className="flex items-center">
              <UserGroupIcon className="h-5 w-5 mr-2" />
              <span>Teachers</span>
            </div>
          </Link>
          <Link
            to="/jobs"
            className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >
            <div className="flex items-center">
              <BriefcaseIcon className="h-5 w-5 mr-2" />
              <span>Jobs</span>
            </div>
          </Link>
          <Link
            to="/feedback"
            className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >
            <div className="flex items-center">
              <StarIcon className="h-5 w-5 mr-2" />
              <span>Feedback</span>
            </div>
          </Link>
          <Link
            to="/contact"
            className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >
            <div className="flex items-center">
              <ChatBubbleLeftIcon className="h-5 w-5 mr-2" />
              <span>Contact</span>
            </div>
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="space-y-1">
            <Link
              to="/signin"
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}