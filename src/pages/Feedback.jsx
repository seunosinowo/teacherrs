import { useState } from 'react';
import { StarIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [category, setCategory] = useState('general');

  const categories = [
    { id: 'general', label: 'General Feedback' },
    { id: 'bug', label: 'Bug Report' },
    { id: 'feature', label: 'Feature Request' },
    { id: 'support', label: 'Support' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle feedback submission
    console.log({ rating, feedback, category });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">We Value Your Feedback</h1>
        <p className="text-gray-600">
          Help us improve Teacherrs by sharing your thoughts and experiences.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How would you rate your experience?
            </label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                  className="focus:outline-none"
                >
                  {star <= (hover || rating) ? (
                    <StarIconSolid className="h-8 w-8 text-yellow-400" />
                  ) : (
                    <StarIcon className="h-8 w-8 text-gray-300" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Feedback Category
            </label>
            <div className="grid grid-cols-2 gap-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setCategory(cat.id)}
                  className={`p-3 rounded-lg border text-left ${
                    category === cat.id
                      ? 'border-[#f49c30] bg-[#f49c30]/10 text-[#f49c30]'
                      : 'border-gray-200 hover:border-[#f49c30]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Feedback Text */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Feedback
            </label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={6}
              className="w-full rounded-lg border-gray-300 focus:border-[#f49c30] focus:ring-[#f49c30]"
              placeholder="Share your thoughts, suggestions, or report any issues..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#f49c30] text-white px-6 py-2 rounded-lg hover:bg-[#e68a1a]"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>

      {/* FAQ Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              question: 'How do I book a session with a teacher?',
              answer: 'You can book a session by visiting the teacher\'s profile and clicking the "Book Session" button. Select your preferred date and time, and complete the payment process.'
            },
            {
              question: 'What payment methods are accepted?',
              answer: 'We accept various payment methods including credit/debit cards, bank transfers, and popular digital wallets.'
            },
            {
              question: 'How can I become a teacher on Teacherrs?',
              answer: 'To become a teacher, click on the "Sign Up" button and select the "Teacher" option. Complete the registration process and submit your qualifications for verification.'
            },
            {
              question: 'What happens if I need to cancel a session?',
              answer: 'You can cancel a session up to 24 hours before the scheduled time. Cancellations made within 24 hours may be subject to a cancellation fee.'
            }
          ].map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 