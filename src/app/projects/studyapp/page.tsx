"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaReact } from "react-icons/fa";
import {
  SiExpo,
  SiSqlite,
  SiJavascript,
} from "react-icons/si";
import { MdOutlineTimer } from "react-icons/md";

export default function StudyAppProjectPage({
  title = "Study Buddy Study App",
  image = "/Appst.png",
  description = `Study Buddy is a mobile study app currently in development. It helps users stay accountable by tracking how much time they spend actively studying and taking breaks. The app automatically pauses the study timer when users switch to other apps, ensuring accurate focus logging. It also records break durations to help build balanced and effective study habits.

The app is built using React Native and Expo Go for fast testing on mobile devices, with local storage powered by SQLite through expo-sqlite/next.

In future versions, the app will include social features like adding friends, studying together, and comparing study time stats to build healthy accountability and motivation.`,
  link = "https://github.com/RaulV-V/StudyApplication", 
}) {
  const router = useRouter();

  const technologies = [
    { name: "React Native", icon: <FaReact /> },
    { name: "Expo Go", icon: <SiExpo /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "SQLite (expo-sqlite)", icon: <SiSqlite /> },
    { name: "App State Tracking", icon: <MdOutlineTimer /> },
  ];

  return (
    <main className="min-h-screen bg-white px-6 py-12 font-sans">
      <h1 className="text-4xl font-bold text-center mb-6 text-stone-700">
        {title}
      </h1>

      <div className="relative w-full max-w-4xl mx-auto h-[700px] rounded-xl overflow-hidden shadow-lg mb-8">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <p className="text-lg text-stone-700 leading-relaxed mb-10 text-center max-w-3xl mx-auto whitespace-pre-line">
        {description}
      </p>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-stone-700 mb-4 text-center">
          Technologies Used
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center p-4 border rounded-lg shadow hover:shadow-md transition"
            >
              <div className="text-3xl text-blue-600">{tech.icon}</div>
              <span className="text-sm mt-2 text-stone-700">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={() => router.back()}
          className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm font-medium text-stone-700"
        >
          Go Back
        </button>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium text-center"
        >
          View Repository
        </a>
      </div>
    </main>
  );
}
