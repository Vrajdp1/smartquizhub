"use client";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Home() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 relative overflow-hidden">
      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-yellow-300 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-300 opacity-30 rounded-full blur-3xl animate-pulse"></div>

      {/* Main Content */}
      <div className="text-center z-10">
        <h1 className="text-6xl font-extrabold text-white drop-shadow-lg mb-4 animate-fadeIn">
          Welcome to <span className="text-yellow-300">SmartQuizHub</span>
        </h1>
        {user ? (
          <div className="text-center">
            <p className="text-xl text-white mb-6">
              Welcome,{" "}
              <span className="font-bold text-yellow-300">{user.displayName || "User"}</span>!
            </p>
            <div className="flex flex-col gap-4 justify-center items-center">
              <button
                onClick={firebaseSignOut}
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 shadow-md hover:shadow-lg transition transform hover:scale-105"
              >
                Logout
              </button>
              <Link
                href="/topics"
                className="px-6 py-3 bg-yellow-300 text-purple-800 font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition"
              >
                Explore Topics
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button
              onClick={gitHubSignIn}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 shadow-md hover:shadow-lg transform hover:scale-105 transition"
            >
              Login with GitHub
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
