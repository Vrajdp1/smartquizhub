"use client";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
          Welcome to <span className="text-yellow-300">SmartQuizHub</span>
        </h1>
        <p className="text-lg mb-8 max-w-2xl">
          Explore a wide range of quiz topics, challenge yourself with varying difficulties, 
          and enhance your knowledge in a fun way!
        </p>
        <a
          href="/topics"
          className="px-6 py-3 bg-yellow-300 text-blue-800 font-bold rounded-lg shadow-lg hover:shadow-xl"
        >
          Explore Topics
        </a>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 text-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose SmartQuizHub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg">
              <span className="text-blue-500 text-4xl">📘</span>
              <h3 className="text-xl font-bold mt-4">Diverse Topics</h3>
              <p className="mt-2 text-gray-600">
                Learn and test yourself in Maths, Science, Chemistry, and more.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg">
              <span className="text-purple-500 text-4xl">⭐</span>
              <h3 className="text-xl font-bold mt-4">Multiple Difficulties</h3>
              <p className="mt-2 text-gray-600">
                Choose from Easy, Medium, and Hard levels to match your expertise.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg">
              <span className="text-green-500 text-4xl">📈</span>
              <h3 className="text-xl font-bold mt-4">Track Progress</h3>
              <p className="mt-2 text-gray-600">
                See your results and watch your knowledge grow over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-blue-100 text-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <p className="text-gray-600 italic">
                "SmartQuizHub has made learning so much fun and interactive. Highly recommend!"
              </p>
              <h4 className="font-bold mt-4">- Alex</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <p className="text-gray-600 italic">
                "The variety of topics and difficulties keeps me engaged every day."
              </p>
              <h4 className="font-bold mt-4">- Maria</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50 text-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-4xl font-bold text-blue-500">10,000+</h3>
              <p className="mt-2 text-gray-600">Quizzes Completed</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-4xl font-bold text-purple-500">5,000+</h3>
              <p className="mt-2 text-gray-600">Active Users</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-4xl font-bold text-green-500">20+</h3>
              <p className="mt-2 text-gray-600">Quiz Topics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; 2024 SmartQuizHub. All rights reserved.</p>
      </footer>
    </div>
  );
}
