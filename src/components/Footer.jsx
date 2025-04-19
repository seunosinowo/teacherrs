import { Link } from 'react-router-dom';
import { 
  AcademicCapIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  BuildingOfficeIcon 
} from '@heroicons/react/24/outline';

export default function Footer() {
  return (
   
    <footer className="bg-gray-900">
    <div className="max-w-[90%] mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center">
            <AcademicCapIcon className="h-8 w-8 text-[#f49c30]" />
            <span className="ml-2 text-xl font-bold text-white">Teacherrs</span>
          </div>
          <p className="mt-4 text-gray-400">
            Connecting teachers and students across Nigeria
          </p>
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-3">Download Our Apps</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Google Play Store</span>
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.8-6.4l-2.298 2.3 8.633 8.635-6.335-10.935zm-14.4 1.4L17.792 12 3.609 22.186V1.814z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Apple App Store</span>
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Quick Links</h3>
          <ul className="mt-4 space-y-4">
            <li>
              <Link to="/" className="text-base text-gray-300 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/teachers" className="text-base text-gray-300 hover:text-white">
                Find Teachers
              </Link>
            </li>
            <li>
              <Link to="/jobs" className="text-base text-gray-300 hover:text-white">
                Browse Jobs
              </Link>
            </li>
            <li>
              <Link to="/feedback" className="text-base text-gray-300 hover:text-white">
                Feedback
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-base text-gray-300 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
          <ul className="mt-4 space-y-4">
            <li className="flex items-center text-base text-gray-300">
              <PhoneIcon className="h-5 w-5 mr-2" />
              +234 123 456 7890
            </li>
            <li className="flex items-center text-base text-gray-300">
              <EnvelopeIcon className="h-5 w-5 mr-2" />
              info@teacherrs.com
            </li>
            <li className="flex items-start text-base text-gray-300">
              <BuildingOfficeIcon className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
              <span>2nd Floor, Tapa House,<br />
              3/5 Imam Dauda Street, off Eric Moore Rd,<br />
              Surulere, Lagos 101271, Nigeria</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Follow Us</h3>
          <div className="mt-4 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6 border-t border-gray-800 pt-4">
        <p className="text-sm text-gray-400 text-center">
          &copy; 2025 Teacherrs. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  );
} 