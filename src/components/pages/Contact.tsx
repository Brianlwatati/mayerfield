import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hardcoded submission simulation
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="py-16 bg-amber-50/50 border-t border-amber-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-amber-800 text-xs font-bold uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-950 mt-3 tracking-tight">
            We’d Love to Hear From You
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Have questions about our beans, catering services, or private
            events? Drop us a message!
          </p>
        </div>

        {/* 2-Column Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Column: Contact Details & Info Cards */}
          <div className="space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-amber-100 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-amber-950">
                Visit or Contact Us
              </h3>

              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <strong className="block text-amber-950 font-semibold">
                      Location
                    </strong>
                    123 Artisan Roasters Way, Coffee District, NY 10001
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <strong className="block text-amber-950 font-semibold">
                      Phone
                    </strong>
                    +1 (555) 123-4567
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <strong className="block text-amber-950 font-semibold">
                      Email
                    </strong>
                    hello@brewandbeancoffee.com
                  </div>
                </div>
              </div>

              {/* Decorative mini badge or note */}
              <div className="pt-4 border-t border-amber-100 text-xs text-amber-800 bg-amber-50 p-4 rounded-xl">
                💡 **Note:** Walk-ins are always welcome for both seating and
                fresh pastry orders!
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-amber-100 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <span className="text-4xl">🎉</span>
                <h3 className="text-xl font-bold text-amber-950">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-gray-600">
                  Thank you for reaching out. We will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-amber-950 mb-4">
                  Send Us a Message
                </h3>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold text-gray-700 uppercase mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2.5 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-700 text-sm text-gray-800"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-gray-700 uppercase mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="jane@example.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-700 text-sm text-gray-800"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-gray-700 uppercase mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Write your message or inquiry here..."
                    className="w-full px-4 py-2.5 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-700 text-sm text-gray-800 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-900 hover:bg-amber-950 text-white font-medium py-3 rounded-lg transition-colors text-sm shadow-sm"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
