"use client";

import { useState } from "react";

export default function TopicsPage() {
  const topics = ["Maths", "Science", "Chemistry", "Biology", "General Knowledge"];
  const [searchTerm, setSearchTerm] = useState("");

  // Filter topics based on the search term
  const filteredTopics = topics.filter((topic) =>
    topic.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-extrabold text-white drop-shadow-lg mb-8">
        Explore Quiz Topics
      </h1>

      {/* Search Bar with Clear Button */}
      <div className="flex items-center mb-8 w-full max-w-md">
        <input
          type="text"
          placeholder="Search for a subject..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            className="ml-3 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
          >
            Clear
          </button>
        )}
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {filteredTopics.length > 0 ? (
          filteredTopics.map((topic) => (
            <div
              key={topic}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                <span className="text-4xl text-blue-500">📘</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">
                {topic}
              </h2>
              <p className="text-gray-500 text-center mb-6">
                Test your knowledge on {topic} with our curated quizzes!
              </p>
              <a
                href={`/topics/${topic.toLowerCase()}`}
                className="block text-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                Start Quiz
              </a>
            </div>
          ))
        ) : (
          <p className="text-gray-300 text-lg font-medium">No topics found. Try a different search!</p>
        )}
      </div>
    </div>
  );
}
