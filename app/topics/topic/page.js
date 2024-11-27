"use client";

import { useEffect, useState } from "react";

export default function DynamicQuizPage({ params }) {
  const { topic } = params; // Extract the topic from dynamic route parameters
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (topic) {
      fetch(`/api/quiz?topic=${topic}`)
        .then((res) => res.json())
        .then((data) => {
          setQuiz(data);
          setLoading(false);
        });
    }
  }, [topic]);

  if (loading) return <div>Loading...</div>;
  if (quiz.error) return <div>{quiz.error}</div>;

  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mt-10">{topic?.toUpperCase()} Quiz</h1>
      <ul className="mt-4 space-y-4">
        {quiz.map((q, index) => (
          <li key={index} className="bg-white p-4 rounded shadow">
            <p className="text-lg font-medium">{q.question}</p>
            <ul className="mt-2 space-y-2">
              {q.options.map((option, idx) => (
                <li key={idx} className="bg-gray-200 p-2 rounded">
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
