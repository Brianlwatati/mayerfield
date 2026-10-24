// 1. Mock data for customer reviews
const REVIEWS = [
  {
    id: "1",
    name: "Sarah Jenkins",
    role: "Regular Customer",
    comment:
      "The Caramel Macchiato here is absolute perfection! The atmosphere is so cozy, and the staff always greets you with a warm smile.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Coffee Enthusiast",
    comment:
      "As someone who is very particular about cold brew, their 20-hour slow-steeped brew blew me away. Super smooth and rich flavor.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Local Freelancer",
    comment:
      "My favorite spot to work in the neighborhood. Great Wi-Fi, incredible butter croissants baked fresh every morning, and amazing espresso!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-16 bg-white border-y border-amber-100/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-amber-800 text-xs font-bold uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-950 mt-3 tracking-tight">
            Loved by Coffee Lovers
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Here is what our community has to say about their daily cup and cozy
            moments with us.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-amber-50/40 border border-amber-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex space-x-1 text-amber-500 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-lg">
                      ★
                    </span>
                  ))}
                </div>
                {/* Comment Text */}
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Customer Profile Info */}
              <div className="flex items-center space-x-3 mt-6 pt-4 border-t border-amber-200/40">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-amber-200"
                />
                <div>
                  <h3 className="font-bold text-amber-950 text-sm">
                    {review.name}
                  </h3>
                  <p className="text-xs text-amber-800/80 font-medium">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
