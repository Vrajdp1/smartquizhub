"use client";

import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [currentPage, setCurrentPage] = useState("home");

  const topics = ["Maths", "Science", "Chemistry", "Biology", "General Knowledge"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-center text-3xl font-bold">SmartQuizHub</h1>
      </header>

      {/* Navigation */}
      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={() => setCurrentPage("home")}
          className={`px-4 py-2 rounded ${
            currentPage === "home" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Home
        </button>
        <button
          onClick={() => setCurrentPage("topics")}
          className={`px-4 py-2 rounded ${
            currentPage === "topics" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Topics
        </button>
      </div>

      {/* Dynamic Page Content */}
      <main className="mt-10">
        {currentPage === "home" && (
          <div className="text-center">
            <h1 className="text-5xl font-bold text-blue-600">Welcome to SmartQuizHub</h1>
            <p className="text-lg mt-4 text-gray-700">
              Your learning journey starts here!
            </p>
            <Link href="/topics">
              <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Explore Topics
              </button>
            </Link>
          </div>
        )}

        {currentPage === "topics" && (
          <div className="text-center">
            <h1 className="text-3xl font-bold">Quiz Topics</h1>
            <ul className="mt-6 space-y-4">
              {topics.map((topic) => (
                <li key={topic}>
                  <Link href={`/topics/${topic.toLowerCase()}`}>
                    <a className="text-blue-500 hover:underline">{topic}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}
