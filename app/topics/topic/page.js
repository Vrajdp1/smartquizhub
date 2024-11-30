"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function QuizPage({ params }) {
  const { topic } = params;
  const searchParams = useSearchParams();
  const difficulty = searchParams.get("difficulty") || "easy";

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await fetch(`/api/quiz?topic=${topic}&difficulty=${difficulty}`);
        if (!response.ok) {
          throw new Error("Failed to fetch questions");
        }
        const data = await response.json();
        setQuestions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchQuestions();
  }, [topic, difficulty]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">{topic.toUpperCase()} Quiz</h1>
      <ul>
        {questions.map((q, index) => (
          <li key={index}>
            <p>{q.question}</p>
            <ul>
              {q.options.map((option, idx) => (
                <li key={idx}>{option}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
