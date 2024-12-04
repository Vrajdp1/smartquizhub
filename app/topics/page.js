"use client";

import Link from "next/link";
import { useState } from "react";

export default function TopicsPage() {
  const [topics, setTopics] = useState([
    { name: "General Knowledge", icon: "📚", description: "Trivia from all over the world.", popular: true },
    { name: "Entertainment: Books", icon: "📖", description: "Questions about famous books.", popular: false },
    { name: "Entertainment: Film", icon: "🎥", description: "Explore questions about movies.", popular: true },
    { name: "Entertainment: Music", icon: "🎵", description: "Trivia on your favorite music.", popular: false },
    { name: "Entertainment: Musicals & Theatres", icon: "🎭", description: "Dive into musicals and theatres.", popular: false },
    { name: "Entertainment: Television", icon: "📺", description: "TV shows and series trivia.", popular: false },
    { name: "Entertainment: Video Games", icon: "🎮", description: "Explore video game trivia.", popular: true },
    { name: "Entertainment: Board Games", icon: "🎲", description: "Trivia about board games.", popular: false },
    { name: "Science & Nature", icon: "🌱", description: "Discover science and nature trivia.", popular: true },
    { name: "Science: Computers", icon: "💻", description: "Learn about computers and tech.", popular: true },
    { name: "Science: Mathematics", icon: "➗", description: "Improve your math skills.", popular: false },
    { name: "Mythology", icon: "⚡", description: "Explore myths and legends.", popular: true },
    { name: "Sports", icon: "🏀", description: "Sports trivia for fans.", popular: true },
    { name: "Geography", icon: "🌍", description: "Trivia about countries and places.", popular: false },
    { name: "History", icon: "📜", description: "Discover historical events.", popular: true },
    { name: "Politics", icon: "🏛️", description: "Dive into political trivia.", popular: false },
    { name: "Art", icon: "🎨", description: "Learn about famous artworks.", popular: false },
    { name: "Celebrities", icon: "🌟", description: "Trivia about popular figures.", popular: false },
    { name: "Animals", icon: "🐾", description: "Learn fun facts about animals.", popular: false },
    { name: "Vehicles", icon: "🚗", description: "Trivia about cars and vehicles.", popular: false },
    { name: "Entertainment: Comics", icon: "🦸", description: "Dive into the world of comics.", popular: false },
    { name: "Science: Gadgets", icon: "📱", description: "Trivia about modern gadgets.", popular: false },
    { name: "Entertainment: Japanese Anime & Manga", icon: "🎌", description: "Trivia for anime and manga fans.", popular: true },
    { name: "Entertainment: Cartoon & Animations", icon: "🎥", description: "Trivia about cartoons and animations.", popular: false },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [filter, setFilter] = useState("all");
  const [numQuestions, setNumQuestions] = useState(10); // Default: 10 questions
  const [type, setType] = useState("any"); // Default: Any type

  const filteredTopics = topics
    .filter((topic) => {
      if (filter === "popular") return topic.popular;
      return true;
    })
    .filter((topic) => topic.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="text-center py-12">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          Explore <span className="text-blue-500">Quiz Topics</span>
        </h1>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Discover a variety of topics, pick your preferred difficulty level, and customize your quiz!
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
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring focus:ring-blue-400"
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
                  ? "bg-blue-400 text-white"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
            >
              All Topics
            </button>
            <button
              onClick={() => setFilter("popular")}
              className={`px-4 py-2 rounded-lg font-medium ${
                filter === "popular"
                  ? "bg-blue-400 text-white"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
            >
              Popular
            </button>
          </div>
        </div>

        {/* Additional Options */}
        <div className="mb-10 flex flex-col items-center gap-4">
          {/* Number of Questions */}
          <div className="flex flex-col items-center">
            <label className="text-lg font-medium mb-2">Number of Questions</label>
            <input
              type="number"
              min="1"
              max="50"
              value={numQuestions}
              onChange={(e) => setNumQuestions(e.target.value)}
              className="w-32 px-4 py-2 border rounded text-center"
            />
          </div>

          {/* Difficulty Selector */}
          <div className="flex flex-col items-center">
            <label className="text-lg font-medium mb-2">Select Difficulty</label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="px-4 py-2 border rounded text-center"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          {/* Type Selector */}
          <div className="flex flex-col items-center">
            <label className="text-lg font-medium mb-2">Select Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="px-4 py-2 border rounded text-center"
            >
              <option value="any">Any Type</option>
              <option value="multiple">Multiple Choice</option>
              <option value="boolean">True / False</option>
            </select>
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
                className={`relative bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition-all ${
                  topic.popular ? "border-4 border-blue-400" : ""
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
                      query: {
                        topic: topic.name.toLowerCase(),
                        difficulty,
                        type,
                        numQuestions,
                      },
                    }}
                  >
                    <button className="bg-blue-500 text-white mt-4 px-4 py-2 rounded hover:bg-blue-600">
                      Start Quiz
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 text-lg font-medium">
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
