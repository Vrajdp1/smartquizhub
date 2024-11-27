import Link from "next/link";

export default function TopicList({ topics }) {
  return (
    <ul className="mt-6 space-y-4">
      {topics.map((topic) => (
        <li key={topic}>
          <Link href={`/topics/${topic.toLowerCase()}`}>
           {topic}
          </Link>
        </li>
      ))}
    </ul>
  );
}
