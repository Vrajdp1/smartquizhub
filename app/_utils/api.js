const API_URL = 'https://quizapi.io/api/v1/questions';
const API_KEY = process.env.NEXT_PUBLIC_QUIZ_API_KEY; // Ensure your API key is set

export async function fetchQuizQuestions(params = {}) {
  try {
    const queryString = new URLSearchParams(params).toString();
    const response = await fetch(`${API_URL}?${queryString}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': API_KEY,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data; // Return quiz questions
  } catch (error) {
    console.error('Error fetching quiz questions:', error);
    throw error;
  }
}
