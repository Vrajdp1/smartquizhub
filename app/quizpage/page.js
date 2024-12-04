"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function QuizPage() {
  const searchParams = useSearchParams();
  const topic = searchParams?.get("topic") || "Linux"; // Default topic
  const difficulty = searchParams?.get("difficulty") || "Easy"; // Default difficulty
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Fetch quiz questions from the API
  const fetchQuizQuestions = async () => {
    const API_URL = "https://quizapi.io/api/v1/questions";
    const API_KEY = "3lsgjMYPph1HBauH1DXErdP5POak0dhb2Mp0S060"; // Replace with your actual API key

    try {
      const response = await fetch(
        `${API_URL}?category=${topic}&difficulty=${difficulty}&limit=10`,
        {
          headers: {
            "X-Api-Key": API_KEY,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch quiz questions: ${response.statusText}`);
      }

      const data = await response.json();

      // Transform data to fit the page structure
      setQuestions(
        data.map((q) => ({
          question: q.question,
          options: Object.values(q.answers).filter(Boolean),
          correct: Object.keys(q.correct_answers).find(
            (key) => q.correct_answers[key] === "true"
          ),
        }))
      );
    } catch (err) {
      console.error("Error fetching quiz questions:", err);
      setError(err.message || "Failed to load questions.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch questions on mount
  useEffect(() => {
    fetchQuizQuestions();
  }, [topic, difficulty]);

  // Handle user answer selection
  const handleAnswerChange = (selectedOption) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: selectedOption,
    }));
  };

  // Handle quiz submission
  const handleSubmit = () => {
    let calculatedScore = 0;

    questions.forEach((question, index) => {
      if (userAnswers[index] === question.correct) {
        calculatedScore += 1;
      }
    });

    setScore(calculatedScore);
    setSubmitted(true);
  };

  // Handle navigation between questions
  const goToNextQuestion = () => {
    setCurrentQuestionIndex((prev) => Math.min(prev + 1, questions.length - 1));
  };

  const goToPreviousQuestion = () => {
    setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 via-indigo-700 to-blue-500 text-white">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-6">
          {topic.toUpperCase()} Quiz
        </h1>

        {submitted ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold">Quiz Completed!</h2>
            <p className="text-xl mt-4">
              Your Score: {score}/{questions.length}
            </p>
          </div>
        ) : (
          <>
            {/* Question Display */}
            <div className="bg-white text-gray-800 rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">
                Question {currentQuestionIndex + 1}:{" "}
                {questions[currentQuestionIndex].question}
              </h2>
              <ul>
                {questions[currentQuestionIndex].options.map((option, idx) => (
                  <li key={idx} className="mb-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name={`question-${currentQuestionIndex}`}
                        value={option}
                        className="mr-2"
                        onChange={() => handleAnswerChange(option)}
                        disabled={submitted}
                      />
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <button
                onClick={goToPreviousQuestion}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </button>
              <button
                onClick={goToNextQuestion}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                disabled={currentQuestionIndex === questions.length - 1}
              >
                Next
              </button>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-6">
              <button
                onClick={handleSubmit}
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600"
                disabled={submitted}
              >
                Submit Quiz
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
