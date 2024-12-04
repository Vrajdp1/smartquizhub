"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function TopicsPage() {
  const [topics, setTopics] = useState([
    { name: "Linux", icon: "🐧", description: "Learn Linux commands and systems.", popular: true },
    { name: "DevOps", icon: "⚙️", description: "Master DevOps tools and practices.", popular: false },
    { name: "Networking", icon: "🌐", description: "Understand networks and protocols.", popular: false },
    { name: "Programming", icon: "💻", description: "Improve coding skills in various languages.", popular: true },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [filter, setFilter] = useState("all");

  const filteredTopics = topics
    .filter((topic) => {
      if (filter === "popular") return topic.popular;
      return true;
    })
    .filter((topic) => topic.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 via-indigo-700 to-blue-500 text-white">
      {/* Header */}
      <header className="text-center py-12">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          Explore <span className="text-yellow-400">Quiz Topics</span>
        </h1>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Discover a variety of topics, pick your preferred difficulty level, and challenge yourself with interactive quizzes!
        </p>
      </header>

      {/* Search and Filters */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
          {/* Search Bar */}
          <div className="flex items-center w-full max-w-md">
            <input
              type="text"
              placeholder="Search topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring focus:ring-yellow-400"
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

          {/* Filter Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg font-medium ${
                filter === "all"
                  ? "bg-yellow-400 text-gray-800"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
            >
              All Topics
            </button>
            <button
              onClick={() => setFilter("popular")}
              className={`px-4 py-2 rounded-lg font-medium ${
                filter === "popular"
                  ? "bg-yellow-400 text-gray-800"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
            >
              Popular
            </button>
          </div>

          {/* Difficulty Selector */}
          <div className="flex gap-4">
            {["easy", "medium", "hard"].map((level) => (
              <button
                key={level}
                onClick={() => setDifficulty(level)}
                className={`px-4 py-2 rounded-lg font-medium ${
                  difficulty === level
                    ? "bg-yellow-400 text-gray-800"
                    : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                }`}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Topics Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTopics.length > 0 ? (
            filteredTopics.map((topic, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-white to-gray-100 text-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition-all ${
                  topic.popular ? "border-4 border-yellow-400" : ""
                }`}
              >
                {/* Icon */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                  <span className="text-6xl">{topic.icon}</span>
                </div>

                {/* Card Content */}
                <div className="text-center mt-10">
                  <h3 className="text-2xl font-bold mb-2">{topic.name}</h3>
                  <p className="text-gray-600 mb-4">{topic.description}</p>

                  {/* Link to QuizPage */}
                  <Link
                    href={{
                      pathname: "/quizpage",
                      query: { topic: topic.name.toLowerCase(), difficulty },
                    }}
                  >
                    <button className="bg-blue-500 text-white mt-4 px-4 py-2 rounded hover:bg-blue-600">
                      Start Quiz
                    </button>
                  </Link>
                </div>

                {/* Popular Badge */}
                {topic.popular && (
                  <div className="absolute top-2 right-2 bg-yellow-400 text-xs text-white font-bold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-gray-300 text-lg font-medium">
              No topics found. Try a different search!
            </p>
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
