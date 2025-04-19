import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-primary text-2xl font-bold">Teacherrs</span>
          </Link>

          {/* Search Bar */}
          <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 w-96">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search teachers..."
              className="ml-2 bg-transparent outline-none w-full"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="text-gray-600 hover:text-primary">Dashboard</Link>
            <Link to="/feedback" className="text-gray-600 hover:text-primary">Feedback</Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary">Contact</Link>
            <div className="flex space-x-2">
              <button className="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white">
                Sign In
              </button>
              <button className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-orange-600">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}