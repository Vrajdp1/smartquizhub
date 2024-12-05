"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function QuizPage() {
  const searchParams = useSearchParams();

  // State for query parameters
  const [paramsInitialized, setParamsInitialized] = useState(false);
  const [amount, setAmount] = useState("10");
  const [category, setCategory] = useState("9"); // Default: General Knowledge
  const [difficulty, setDifficulty] = useState("easy");
  const [type, setType] = useState("multiple");

  // States for quiz logic
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Initialize query parameters
  useEffect(() => {
    if (searchParams) {
      setAmount(searchParams.get("amount") || "10");
      setCategory(searchParams.get("category") || "9");
      setDifficulty(searchParams.get("difficulty") || "easy");
      setType(searchParams.get("type") || "multiple");
      setParamsInitialized(true); // Mark parameters as initialized
    }
  }, [searchParams]);

  // Fetch quiz questions
  const fetchQuizQuestions = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch quiz questions");
      }

      const data = await response.json();

      setQuestions(
        data.results.map((q) => ({
          question: q.question,
          options: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5),
          correct: q.correct_answer,
        }))
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch questions when params are initialized
  useEffect(() => {
    if (paramsInitialized) {
      fetchQuizQuestions();
    }
  }, [paramsInitialized]);

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

  if (!paramsInitialized) return <div>Loading parameters...</div>;
  if (loading) return <div>Loading questions...</div>;
  if (error || questions.length === 0) {
    return <div>Error: {error || "No questions available."}</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 via-indigo-700 to-blue-500 text-white">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-6">Quiz</h1>

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
                <span dangerouslySetInnerHTML={{ __html: questions[currentQuestionIndex].question }} />
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
                      <span dangerouslySetInnerHTML={{ __html: option }} />
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
