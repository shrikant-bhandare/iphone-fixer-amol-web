import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Review {
  id: string;
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
}

const CustomerReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Mock data - replace with actual Google Places API call
  const mockReviews: Review[] = [
    {
      id: '1',
      author_name: 'Rahul Sharma',
      rating: 5,
      text: 'Excellent service! Fixed my iPhone screen in just 30 minutes. Very professional and reasonable pricing. Highly recommended!',
      time: Date.now() - (7 * 24 * 60 * 60 * 1000), // 1 week ago
      relative_time_description: '1 week ago'
    },
    {
      id: '2',
      author_name: 'Priya Patel',
      rating: 5,
      text: 'Amazing work! My iPhone was completely dead and they brought it back to life. Great customer service and quick turnaround.',
      time: Date.now() - (14 * 24 * 60 * 60 * 1000), // 2 weeks ago
      relative_time_description: '2 weeks ago'
    },
    {
      id: '3',
      author_name: 'Amit Kumar',
      rating: 5,
      text: 'Best iPhone repair service in Pune! Fixed my water damaged phone perfectly. Thank you for the excellent service!',
      time: Date.now() - (21 * 24 * 60 * 60 * 1000), // 3 weeks ago
      relative_time_description: '3 weeks ago'
    },
    {
      id: '4',
      author_name: 'Sneha Joshi',
      rating: 4,
      text: 'Good service and fair pricing. Fixed my iPhone battery issue quickly. Will definitely come back for future repairs.',
      time: Date.now() - (30 * 24 * 60 * 60 * 1000), // 1 month ago
      relative_time_description: '1 month ago'
    },
    {
      id: '5',
      author_name: 'Vikram Singh',
      rating: 5,
      text: 'Professional and quick service. My iPhone camera was not working and they fixed it perfectly. Highly satisfied!',
      time: Date.now() - (35 * 24 * 60 * 60 * 1000), // 5 weeks ago
      relative_time_description: '5 weeks ago'
    },
    {
      id: '6',
      author_name: 'Neha Gupta',
      rating: 5,
      text: 'Fantastic experience! They fixed my iPhone charging port issue very quickly. Great customer service!',
      time: Date.now() - (42 * 24 * 60 * 60 * 1000), // 6 weeks ago
      relative_time_description: '6 weeks ago'
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchReviews = async () => {
      setLoading(true);
      // TODO: Replace with actual Google Places API call
      
      setTimeout(() => {
        // Sort reviews by most recent first
        const sortedReviews = mockReviews.sort((a, b) => b.time - a.time);
        setReviews(sortedReviews);
        setLoading(false);
      }, 1000);
    };

    fetchReviews();
  }, []);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 3 >= reviews.length ? 0 : prev + 3));
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 3 < 0 ? Math.max(0, reviews.length - 3) : prev - 3));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  if (loading) {
    return (
      <section className="py-16 bg-tech-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-tech-400 mx-auto"></div>
            <p className="text-tech-100 mt-4">Loading reviews...</p>
          </div>
        </div>
      </section>
    );
  }

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const currentReviews = reviews.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-16 bg-tech-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-tech-100 mb-4">
            What Our <span className="text-tech-400">Customers Say</span>
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex">{renderStars(Math.round(averageRating))}</div>
            <span className="text-tech-300 text-lg font-semibold">
              {averageRating.toFixed(1)} out of 5
            </span>
            <span className="text-tech-400">({reviews.length} reviews)</span>
          </div>
          <p className="text-tech-300 max-w-2xl mx-auto">
            Read what our satisfied customers have to say about our iPhone repair services
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {currentReviews.map((review, index) => (
                <motion.div
                  key={`${currentIndex}-${review.id}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-tech-800 rounded-xl p-6 border border-tech-700 h-full"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-tech-600 rounded-full flex items-center justify-center">
                        <span className="text-tech-100 font-semibold text-lg">
                          {review.author_name.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-tech-100 font-semibold text-lg">
                        {review.author_name}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex">{renderStars(review.rating)}</div>
                        <span className="text-tech-400 text-sm">
                          {review.relative_time_description}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-tech-200 leading-relaxed">
                    "{review.text}"
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          {reviews.length > 3 && (
            <>
              <button
                onClick={prevReview}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-tech-700 hover:bg-tech-600 text-tech-100 p-3 rounded-full transition-colors"
                disabled={currentIndex === 0}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextReview}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-tech-700 hover:bg-tech-600 text-tech-100 p-3 rounded-full transition-colors"
                disabled={currentIndex + 3 >= reviews.length}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Dots Indicator */}
        {reviews.length > 3 && (
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: Math.ceil(reviews.length / 3) }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * 3)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  Math.floor(currentIndex / 3) === index ? 'bg-tech-400' : 'bg-tech-600'
                }`}
              />
            ))}
          </div>
        )}

        {/* Google Reviews Attribution */}
        <div className="text-center mt-8">
          <p className="text-tech-400 text-sm">
            Powered by <span className="font-semibold">Google Reviews</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
