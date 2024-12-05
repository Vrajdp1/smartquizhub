"use client";

import Link from "next/link";
import { useState } from "react";

export default function TopicsPage() {
  const [topics, setTopics] = useState([
    { id: "9", name: "General Knowledge", icon: "📚", description: "Trivia from all over the world.", popular: true },
    { id: "10", name: "Entertainment: Books", icon: "📖", description: "Questions about famous books.", popular: false },
    { id: "11", name: "Entertainment: Film", icon: "🎥", description: "Explore questions about movies.", popular: true },
    { id: "17", name: "Science & Nature", icon: "🌱", description: "Discover science and nature trivia.", popular: true },
    { id: "18", name: "Science: Computers", icon: "💻", description: "Learn about computers and tech.", popular: true },
    { id: "21", name: "Sports", icon: "🏀", description: "Sports trivia for fans.", popular: true },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [numQuestions, setNumQuestions] = useState(10);
  const [type, setType] = useState("multiple");

  const filteredTopics = topics.filter((topic) =>
    topic.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="text-center py-12">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          Explore <span className="text-blue-500">Quiz Topics</span>
        </h1>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Customize your quiz by selecting topics, difficulty, type, and number of questions.
        </p>
      </header>

      {/* Filters */}
      <div className="container mx-auto px-4 mb-10">
        <div className="bg-gray-100 rounded-lg p-6 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Search Bar */}
            <div>
              <label className="block text-lg font-medium mb-2">Search Topics</label>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring focus:ring-blue-400"
              />
            </div>

            {/* Number of Questions */}
            <div>
              <label className="block text-lg font-medium mb-2">Number of Questions</label>
              <input
                type="number"
                min="1"
                max="50"
                value={numQuestions}
                onChange={(e) => setNumQuestions(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring focus:ring-blue-400"
              />
            </div>

            {/* Difficulty Selector */}
            <div>
              <label className="block text-lg font-medium mb-2">Select Difficulty</label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring focus:ring-blue-400"
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>

            {/* Type Selector */}
            <div>
              <label className="block text-lg font-medium mb-2">Select Type</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring focus:ring-blue-400"
              >
                <option value="multiple">Multiple Choice</option>
                <option value="boolean">True / False</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Topics Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTopics.length > 0 ? (
            filteredTopics.map((topic) => (
              <div
                key={topic.id}
                className="bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition-all"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">{topic.name}</h3>
                  <p className="text-gray-600 mb-4">{topic.description}</p>
                  <Link
                    href={{
                      pathname: "/quizpage",
                      query: {
                        amount: numQuestions,
                        category: topic.id,
                        difficulty,
                        type,
                      },
                    }}
                  >
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                      Start Quiz
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 text-lg font-medium">No topics found.</p>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 mt-12 bg-gray-800 text-white text-center">
        <p>&copy; 2024 SmartQuizHub. All rights reserved.</p>
      </footer>
    </div>
  );
}
