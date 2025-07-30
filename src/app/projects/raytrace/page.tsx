"use client";

import Image from "next/image";
import Link from "next/link";
import {
  SiCplusplus,
  SiOpengl,
  SiWebgpu,
  SiTailwindcss,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";

export default function RaytracerProjectPage() {
  const title = "Custom Raytracing Projects";
  const image = "/Raytrace.png";
  const description = `This project showcases a series of raytracers I built from scratch during my academic journey. I implemented both CPU-based and GPU-accelerated versions to simulate realistic lighting, shadows, motion blur, reflections, and materials. The project taught me key graphics concepts like ray-sphere intersection, diffractions, recursion for reflections, and pixel shaders.

In other projects I also experimented with OpenGL where I made rasterizations instead of ray tracing. This taught me about manipulating projection matrices, using multivariable calculus, and learning about how computer graphics work.`;
  const link = "https://github.com/RaulV-V/Raytrace";

  const technologies = [
    { name: "C++", icon: <SiCplusplus /> },
    { name: "OpenGL", icon: <SiOpengl /> },
    { name: "Low-Level Rendering", icon: <FaCode /> },
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
          View Code
        </a>

        <a
          href="https://github.com/RaulV-V/GraphicsLearning"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium text-center"
        >
          View Other Graphics Projects
        </a>
      </div>
    </main>
  );
}
