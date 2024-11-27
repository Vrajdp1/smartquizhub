"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpenIcon, BeakerIcon, CalculatorIcon, GlobeAltIcon, AcademicCapIcon } from "@heroicons/react/24/solid";

export default function TopicsPage() {
  const allTopics = [
    { name: "Maths", icon: <CalculatorIcon className="w-12 h-12 text-blue-500" /> },
    { name: "Science", icon: <BeakerIcon className="w-12 h-12 text-green-500" /> },
    { name: "Chemistry", icon: <BeakerIcon className="w-12 h-12 text-yellow-500" /> },
    { name: "Biology", icon: <AcademicCapIcon className="w-12 h-12 text-teal-500" /> },
    { name: "General Knowledge", icon: <GlobeAltIcon className="w-12 h-12 text-purple-500" /> },
  ];

  const [search, setSearch] = useState("");
  const filteredTopics = allTopics.filter((topic) =>
    topic.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-extrabold text-white drop-shadow-lg mb-8">
        Explore Quiz Topics
      </h1>

      {/* Search Bar */}
      <div className="w-full max-w-md mb-10">
        <input
          type="text"
          placeholder="Search topics..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {filteredTopics.map((topic) => (
          <motion.div
            key={topic.name}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center justify-center mb-4">
              {topic.icon}
            </div>
            <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">{topic.name}</h2>
            <p className="text-gray-500 text-center mb-6">
              Test your knowledge on {topic.name} with our curated quizzes!
            </p>
            <a
              href={`/topics/${topic.name.toLowerCase()}`}
              className="block text-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Start Quiz
            </a>
          </motion.div>
        ))}
        {filteredTopics.length === 0 && (
          <p className="text-white text-center text-xl col-span-full">
            No topics found. Try searching for something else!
          </p>
        )}
      </div>
    </div>
  );
}
