import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-5xl font-bold text-blue-600">Welcome to SmartQuizHub</h1>
      <p className="mt-4 text-lg text-gray-700">Your learning journey starts here!</p>
      <Link href="/topics">
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Explore Topics
        </button>
      </Link>
    </div>
  );
}
