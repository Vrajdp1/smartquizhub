export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const topic = searchParams.get("topic");
  
    const quizzes = {
      maths: [
        { question: "What is 2 + 2?", options: ["3", "4", "5"], correct: "4" },
        { question: "What is 10 / 2?", options: ["2", "5", "10"], correct: "5" },
      ],
      science: [
        { question: "What planet is known as the Red Planet?", options: ["Mars", "Earth", "Venus"], correct: "Mars" },
        { question: "What is H2O?", options: ["Water", "Oxygen", "Hydrogen"], correct: "Water" },
      ],
      chemistry: [
        { question: "What is the chemical symbol for Sodium?", options: ["Na", "S", "O"], correct: "Na" },
        { question: "What is the pH of pure water?", options: ["7", "5", "10"], correct: "7" },
      ],
      biology: [
        { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome"], correct: "Mitochondria" },
        { question: "What is the basic unit of life?", options: ["Cell", "Atom", "Molecule"], correct: "Cell" },
      ],
      "general knowledge": [
        { question: "Who is the current president of the USA?", options: ["Joe Biden", "Donald Trump", "Barack Obama"], correct: "Joe Biden" },
        { question: "What is the capital of France?", options: ["Paris", "London", "Berlin"], correct: "Paris" },
      ],
    };
  
    const quiz = quizzes[topic?.toLowerCase()] || { error: "Topic not found" };
  
    return new Response(JSON.stringify(quiz), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  