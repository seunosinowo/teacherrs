import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  PaperAirplaneIcon, 
  UserCircleIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';

export default function Messages() {
  const { id } = useParams();
  const [message, setMessage] = useState('');
  const [teacher, setTeacher] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call to fetch teacher details and messages
    // For now, we'll simulate loading with a timeout
    const fetchData = () => {
      setTimeout(() => {
        // Sample teacher data
        const teacherData = {
          id: parseInt(id),
          name: 'Jane Smith',
          subject: 'Physics',
          image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        };
        
        // Sample messages
        const messageData = [
          { id: 1, sender: 'user', text: "Hi Jane, I'm interested in taking physics lessons with you.", timestamp: '10:30 AM' },
          { id: 2, sender: 'teacher', text: "Hello! Thank you for your interest. I'd be happy to help you with physics. What specific topics are you looking to cover?", timestamp: '10:35 AM' },
          { id: 3, sender: 'user', text: "I'm struggling with mechanics and thermodynamics. Do you have availability next week?", timestamp: '10:40 AM' },
          { id: 4, sender: 'teacher', text: "Yes, I have some slots available next week. I can help you with both mechanics and thermodynamics. Would you prefer morning or evening sessions?", timestamp: '10:45 AM' }
        ];
        
        setTeacher(teacherData);
        setMessages(messageData);
        setLoading(false);
      }, 500);
    };

    fetchData();
  }, [id]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() === '') return;
    
    // In a real app, this would send the message to an API
    const newMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMessage]);
    setMessage('');
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#f49c30]"></div>
        </div>
      </div>
    );
  }

  if (!teacher) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Teacher not found</h2>
          <p className="mt-2 text-gray-600">The teacher you're trying to message doesn't exist or has been removed.</p>
          <Link to="/teachers" className="mt-4 inline-block text-[#f49c30] hover:text-[#e68a1a]">
            Back to Teachers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Chat Header */}
        <div className="border-b p-4 flex items-center">
          <Link to={`/teacher/${teacher.id}`} className="mr-4">
            <ArrowLeftIcon className="h-5 w-5 text-gray-500 hover:text-gray-700" />
          </Link>
          <div className="flex items-center">
            {teacher.image ? (
              <img 
                src={teacher.image} 
                alt={teacher.name} 
                className="h-10 w-10 rounded-full object-cover mr-3"
              />
            ) : (
              <UserCircleIcon className="h-10 w-10 text-gray-400 mr-3" />
            )}
            <div>
              <h2 className="font-semibold text-gray-900">{teacher.name}</h2>
              <p className="text-sm text-gray-500">{teacher.subject} Teacher</p>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="p-4 h-[500px] overflow-y-auto">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`mb-4 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
            >
              <div 
                className={`inline-block max-w-[70%] rounded-lg px-4 py-2 ${
                  msg.sender === 'user' 
                    ? 'bg-[#f49c30] text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <p>{msg.text}</p>
                <p className={`text-xs mt-1 ${
                  msg.sender === 'user' ? 'text-white/80' : 'text-gray-500'
                }`}>
                  {msg.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="border-t p-4">
          <form onSubmit={handleSendMessage} className="flex">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-grow border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-[#f49c30] focus:border-[#f49c30]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              className="bg-[#f49c30] text-white px-4 py-2 rounded-r-lg hover:bg-[#e68a1a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f49c30]"
            >
              <PaperAirplaneIcon className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 