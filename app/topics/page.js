export default function TopicsPage() {
  const topics = ["Maths", "Science", "Chemistry", "Biology", "General Knowledge"];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-extrabold text-white drop-shadow-lg mb-8">
        Explore Quiz Topics
      </h1>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {topics.map((topic) => (
          <div
            key={topic}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center justify-center mb-4">
              <span className="text-4xl text-blue-500">📘</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">{topic}</h2>
            <p className="text-gray-500 text-center mb-6">
              Test your knowledge on {topic} with our curated quizzes!
            </p>
            {/* <a
              href={`/topics/${topic.toLowerCase()}`}
              className="block text-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            > */}
              Start Quiz
            {/* </a> */}
          </div>
        ))}
      </div>
    </div>
  );
}
