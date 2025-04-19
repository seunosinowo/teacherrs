import { useState } from 'react';
import { HeartIcon, ChatBubbleLeftIcon, ShareIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

export default function Post({ post }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
      <div className="flex items-start space-x-4">
        <img 
          src={post.authorImage} 
          alt={post.authorName} 
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900">{post.authorName}</h3>
              <p className="text-sm text-gray-500">{post.authorTitle}</p>
            </div>
            <span className="text-sm text-gray-500">{post.timestamp}</span>
          </div>
          
          <p className="mt-3 text-gray-800">{post.content}</p>
          
          {post.image && (
            <img 
              src={post.image} 
              alt="Post content" 
              className="mt-4 rounded-lg w-full max-h-96 object-cover"
            />
          )}
          
          <div className="mt-4 flex items-center space-x-6">
            <button 
              onClick={handleLike}
              className="flex items-center space-x-1 text-gray-500 hover:text-[#f49c30]"
            >
              {isLiked ? (
                <HeartIconSolid className="h-5 w-5 text-[#f49c30]" />
              ) : (
                <HeartIcon className="h-5 w-5" />
              )}
              <span>{likesCount}</span>
            </button>
            
            <button className="flex items-center space-x-1 text-gray-500 hover:text-[#f49c30]">
              <ChatBubbleLeftIcon className="h-5 w-5" />
              <span>{post.comments}</span>
            </button>
            
            <button className="flex items-center space-x-1 text-gray-500 hover:text-[#f49c30]">
              <ShareIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 