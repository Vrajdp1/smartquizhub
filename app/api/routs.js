export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const topic = searchParams.get("topic");

  // Mock quiz data
  const quizzes = {
    maths: [
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5"],
        correct: "4",
      },
      {
        question: "What is 10 / 2?",
        options: ["2", "5", "10"],
        correct: "5",
      },
    ],
    science: [
      {
        question: "What planet is known as the Red Planet?",
        options: ["Mars", "Earth", "Venus"],
        correct: "Mars",
      },
      {
        question: "What is H2O?",
        options: ["Water", "Oxygen", "Hydrogen"],
        correct: "Water",
      },
    ],
  };

  // Find quiz for the given topic
  const quizData = quizzes[topic?.toLowerCase()] || { error: "Topic not found" };

  return new Response(JSON.stringify(quizData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
