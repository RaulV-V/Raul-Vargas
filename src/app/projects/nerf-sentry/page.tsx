"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaCrosshairs,
  FaMicrochip,
  FaCode,
  FaDraftingCompass,
  FaCube,
} from "react-icons/fa";
import { SiOpencv, SiCplusplus } from "react-icons/si";
import { GiWireCoil } from "react-icons/gi";

export default function NerfSentryProjectPage() {
  const title = "Nerf Sentry Gun (in progress)";
  const image = "/nerf-sentry.svg";
  const description = `Prototyping an automated Nerf turret that can detect, track, and fire at moving targets. Using OpenCV for color/shape tracking, mapping pixel error to pan/tilt commands, and controlling flywheel + pusher motors through a microcontroller. Designing the mount and gearbox in CAD and 3D-printing brackets for the pan/tilt assembly. Building a PID loop to smooth tracking and a safety interlock to avoid firing outside a configured zone.`;

  const technologies = [
    { name: "OpenCV", icon: <SiOpencv /> },
    { name: "C++ / Microcontroller", icon: <SiCplusplus /> },
    { name: "Embedded Control", icon: <FaMicrochip /> },
    { name: "Target Tracking", icon: <FaCrosshairs /> },
    { name: "CAD Design", icon: <FaDraftingCompass /> },
    { name: "3D Printing", icon: <FaCube /> },
    { name: "PID Tuning", icon: <GiWireCoil /> },
    { name: "Rapid Prototyping", icon: <FaCode /> },
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
          Technologies & Focus
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
      </div>
    </main>
  );
}
