"use client";

import { useEffect, useState } from "react";

export default function DynamicQuizPage({ params }) {
  const { topic } = params; // Extract topic from URL
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuizQuestions = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/quiz?topic=${topic}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setQuizQuestions(data);
      } catch (err) {
        setError("Failed to fetch quiz data.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuizQuestions();
  }, [topic]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (quizQuestions.length === 0) {
    return <div>No questions available for this topic.</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">{topic.toUpperCase()} Quiz</h1>
      <ul className="space-y-6 w-full max-w-3xl">
        {quizQuestions.map((question, index) => (
          <li
            key={index}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all"
          >
            <p className="font-medium text-lg mb-4">{question.question}</p>
            <ul className="space-y-2">
              {question.options.map((option, idx) => (
                <li
                  key={idx}
                  className="bg-gray-200 p-2 rounded hover:bg-blue-200 cursor-pointer"
                >
                  {option}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
