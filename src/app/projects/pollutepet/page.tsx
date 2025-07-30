"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaReact } from "react-icons/fa";
import {
  SiExpo,
  SiNasa,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

export default function PollutePetPage({
  title = "PollutePet",
  image = "/Pollute.png",
  description = "PollutePet is a hackathon project designed to raise awareness about pollution and climate change. The app was built with Expo Go to run seamlessly on mobile devices. It pulls real-time data from NASA APIs to simulate environmental conditions, adjusting in-game temperatures and pollution levels. Players care for a virtual pet whose health is directly tied to environmental stats like pollution levels, CO₂ emissions, and global temperature trends.",
  link = "https://github.com/s1rcapalott/PollutePet", // Replace if you have a live link
}) {
  const router = useRouter();

  const technologies = [
    { name: "React Native", icon: <FaReact /> },
    { name: "Expo Go", icon: <SiExpo /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Tailwind CSS (NativeWind)", icon: <SiTailwindcss /> },
    { name: "NASA API Data", icon: <SiNasa /> },
  ];

  return (
    <main className="min-h-screen bg-white px-6 py-12 font-sans">
      <h1 className="text-4xl font-bold text-center mb-6 text-stone-700">
        {title}
      </h1>

      <div className="relative w-full max-w-4xl mx-auto h-[600px] rounded-xl overflow-hidden shadow-lg mb-8">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <p className="text-lg text-stone-700 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
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
          View Code
        </a>
      </div>
    </main>
  );
}
