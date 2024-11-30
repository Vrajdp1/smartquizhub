"use client";

import { useRouter } from "next/navigation";

export default function ResultsPage() {
  const router = useRouter();
  const state = router.location?.state || {};
  const { selectedAnswers, score, total } = state;

  if (!selectedAnswers) return <div>No results found. Take a quiz first!</div>;

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">Quiz Results</h1>
      <p className="mb-4">You scored {score} out of {total}!</p>
      <ul>
        {selectedAnswers.map((item, idx) => (
          <li key={idx} className="mb-4">
            <p className="font-medium">{item.question.question}</p>
            <p>Your Answer: {item.selected}</p>
            <p>
              Correct Answer: <span className="font-bold">{item.question.correct}</span>
            </p>
          </li>
        ))}
      </ul>
      <button onClick={() => router.push("/")} className="bg-green-500 text-white px-4 py-2 rounded">
        Go Home
      </button>
    </div>
  );
}
