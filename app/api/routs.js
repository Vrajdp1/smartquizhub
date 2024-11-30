import { NextResponse } from "next/server";

const topicFiles = {
  maths: {
    easy: "Matheasy.json",
    medium: "Mathsmedium.json",
    hard: "Mathshard.json",
  },
  science: {
    easy: "Scienceeasy.json",
    medium: "Sciencemedium.json",
    hard: "Sciencehard.json",
  },
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const topic = searchParams.get("topic");
  const difficulty = searchParams.get("difficulty") || "easy";

  if (!topicFiles[topic] || !topicFiles[topic][difficulty]) {
    return NextResponse.json({ error: "Topic or difficulty not found" }, { status: 404 });
  }

  const fileName = topicFiles[topic][difficulty];

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${fileName}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${fileName}`);
    }
    const questions = await response.json();
    return NextResponse.json(questions, { status: 200 });
  } catch (error) {
    console.error("Error fetching JSON file:", error);
    return NextResponse.json({ error: "Failed to load quiz data" }, { status: 500 });
  }
}
