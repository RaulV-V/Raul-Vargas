"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaReact, FaStripe, FaCss3Alt, FaGoogle } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiSupabase, SiTwilio, SiMinutemailer, SiVercel } from "react-icons/si";

export default function ProjectPage({
  title = "Susie Q's Coffee",
  image = "/Coffee.png",
  description = "An online ordering website for a local coffee shop. Users can browse drinks, place pickup/delivery orders, and pay using Stripe. Admins manage incoming orders via a real-time dashboard with Supabase integration.",
  link = "https://susieqscoffee.cafe/",
}) {
  const router = useRouter();

const technologies = [
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Supabase", icon: <SiSupabase /> },
  { name: "Stripe", icon: <FaStripe /> },
  { name: "Google Maps API", icon: <FaGoogle /> },
  { name: "Twilio", icon: <SiTwilio /> },
  { name: "Resend", icon: <SiMinutemailer /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "CSS", icon: <FaCss3Alt /> },
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
          🧪 Technologies Used
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
           Visit Project
        </a>
      </div>
    </main>
  );
}
