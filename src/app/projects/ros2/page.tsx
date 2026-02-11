"use client";

import Image from "next/image";
import Link from "next/link";
import { SiCplusplus, SiLinux } from "react-icons/si";
import { GiRobotGolem, GiPathDistance } from "react-icons/gi";
import { FaRoute } from "react-icons/fa";

export default function Ros2ProjectPage() {
  const title = "ROS2 Human Detection & Navigation Robot";
  const image = "/ros2.png";
  const description = `Built a modular ROS2 stack that can patrol, detect people, and navigate toward them in simulation. Authored navigation, detection, and controller nodes, filtered detections before publishing, and tuned Nav2 parameters for smooth approach behavior. Tested behavior in Gazebo worlds to validate stable control, collision avoidance, and recovery behaviors.`;
  const link = "https://github.com/RaulV-V/ros-human-finder";

  const technologies = [
    { name: "C++", icon: <SiCplusplus /> },
    { name: "ROS2", icon: <GiRobotGolem /> },
    { name: "Nav2 Stack", icon: <FaRoute /> },
    { name: "Gazebo Simulation", icon: <GiPathDistance /> },
    { name: "Linux", icon: <SiLinux /> },
  ];

  return (
    <main className="min-h-screen bg-white px-6 py-12 font-sans">
      <h1 className="text-4xl font-bold text-center mb-6 text-stone-700">
        {title}
      </h1>

      <div className="relative w-full max-w-4xl mx-auto h-[520px] rounded-xl overflow-hidden shadow-lg mb-8 bg-slate-900">
        <Image
          src={image}
          alt={title}
          fill
          unoptimized
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
        <Link
          href="/"
          className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm font-medium text-stone-700 text-center"
        >
          Go Back
        </Link>

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
