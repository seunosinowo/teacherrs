import { Link } from 'react-router-dom';
import { 
  StarIcon, 
  MapPinIcon, 
  ClockIcon, 
  CurrencyDollarIcon,
  AcademicCapIcon,
  UserGroupIcon,
  BookOpenIcon,
  ChatBubbleLeftIcon
} from '@heroicons/react/24/outline';

export default function TeacherCard({ teacher }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="relative">
        <img 
          src={teacher.image || '/placeholder-image.jpg'} 
          alt={teacher.name || 'Teacher'} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-sm">
          <CurrencyDollarIcon className="h-5 w-5 text-[#f49c30]" />
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-semibold text-lg">{teacher.name || 'Teacher'}</h3>
            <p className="text-gray-600">{teacher.subject || 'Subject not specified'}</p>
          </div>
          <div className="flex items-center">
            <StarIcon className="h-5 w-5 text-yellow-400" />
            <span className="ml-1 text-gray-700">{teacher.rating || 'N/A'}</span>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <MapPinIcon className="h-4 w-4 mr-2 text-[#f49c30]" />
            <span>{teacher.location || 'Location not specified'}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <ClockIcon className="h-4 w-4 mr-2 text-[#f49c30]" />
            <span>{teacher.experience ? `${teacher.experience} experience` : 'Experience not specified'}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <AcademicCapIcon className="h-4 w-4 mr-2 text-[#f49c30]" />
            <span>{teacher.education && teacher.education.length > 0 ? teacher.education[0].degree : 'Education not specified'}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <UserGroupIcon className="h-4 w-4 mr-2 text-[#f49c30]" />
            <span>{teacher.reviews ? `${teacher.reviews} reviews` : 'No reviews yet'}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {teacher.subjects && teacher.subjects.slice(0, 3).map((subject, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-[#f49c30]/10 text-[#f49c30] rounded-full text-xs"
            >
              {subject}
            </span>
          ))}
          {teacher.subjects && teacher.subjects.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
              +{teacher.subjects.length - 3} more
            </span>
          )}
        </div>

        <div className="flex space-x-2">
          <Link 
            to={`/teacher/${teacher.id}`}
            className="flex-1 flex items-center justify-center bg-[#f49c30] text-white py-2 rounded-lg hover:bg-[#e68a1a] transition-colors"
          >
            <BookOpenIcon className="h-4 w-4 mr-1" />
            <span>View Details</span>
          </Link>
          <Link 
            to={`/messages/${teacher.id}`}
            className="flex-1 flex items-center justify-center border border-[#f49c30] text-[#f49c30] py-2 rounded-lg hover:bg-[#f49c30]/10 transition-colors"
          >
            <ChatBubbleLeftIcon className="h-4 w-4 mr-1" />
            <span>Message</span>
          </Link>
        </div>
      </div>
    </div>
  );
}