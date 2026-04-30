import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaJsSquare,
  FaPython,
  FaCuttlefish,
  FaTools,
  FaMicrochip,
  FaDownload,
} from "react-icons/fa";
import {
  SiTypescript,
  SiCplusplus,
  SiMysql,
  SiGit,
  SiStmicroelectronics,
  SiKicad,
} from "react-icons/si";
import {
  GiProcessor,
  GiCircuitry,
  GiWireframeGlobe,
  GiHistogram,
  GiElectric,
  GiRobotAntennas,
} from "react-icons/gi";
import { MdSensors } from "react-icons/md";

const skillsData = {
  Languages: [
    { icon: <FaCuttlefish />, name: "C" },
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaJsSquare />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiMysql />, name: "SQL" },
    { icon: <SiGit />, name: "Git" },
  ],
  "Electrical Engineering": [
    { icon: <GiCircuitry />, name: "PCB Design" },
    { icon: <SiKicad />, name: "KiCad" },
    { icon: <GiProcessor />, name: "Embedded Systems" },
    { icon: <GiElectric />, name: "Signal Conditioning" },
    { icon: <MdSensors />, name: "Analog Circuits" },
    { icon: <GiRobotAntennas />, name: "FreeRTOS" },
  ],
  "Technical Areas": [
    { icon: <SiWebgpu />, name: "WebGPU & WGSL" },
    { icon: <GiWireframeGlobe />, name: "Game Development" },
    { icon: <GiWireframeGlobe />, name: "Physics Simulations" },
    { icon: <SiOpengl />, name: "OpenGL" },
    { icon: <SiOpencv />, name: "OpenCV" },
    { icon: <GiHistogram />, name: "Statistical Analysis" },
    { icon: <GiProcessor />, name: "Algorithms" },
  ],
};

const experiences = [
  {
    title: "Electrical Engineering",
    org: "Safe Food Alliance",
    year: "Jan 2026 – Present",
    description:
      "Redesigning a legacy analog DFA moisture meter into a modern digital sensing system. Developing signal conditioning circuitry, ADC integration, and microcontroller-based measurement control while collaborating with industry partners to define requirements and validation procedures.",
  },
  {
    title: "Electrical Team Lead",
    org: "UC Merced Formula SAE",
    year: "Aug 2025 – Present",
    description:
      "Elected by the team to lead all electrical systems design and integration for our FSAE electric vehicle. Leading the design of a 400+ V battery accumulator and coordinating subsystem development across the team to meet FSAE safety standards.",
  },
  {
    title: "Undergraduate Research Assistant",
    org: "University of California, Merced",
    year: "Jan 2026 – Present",
    description:
      "Building an ESP32-based biosignal acquisition pipeline for EMG muscle sensor data. Applying convolutional neural networks to classify limb position and using continuous wavelet transform for time-frequency feature extraction.",
  },
  {
    title: "Program Research Assistant",
    org: "University of California, Merced",
    year: "Sept 2025 – Present",
    description:
      "Conducting and coding student interviews to support engineering curriculum improvement initiatives. Analyzing qualitative data and research findings to guide program development decisions.",
  },
  {
    title: "Programming Tutor & Office Hours Volunteer",
    org: "UC Merced",
    year: "2024",
    description:
      "Worked with professors to host office hours and tutor undergraduate students in an introductory programming course. Helped students debug code, understand key concepts, and build programming confidence.",
  },
  {
    title: "STEM Outreach Volunteer",
    org: "Children's Engineering Program",
    year: "2023",
    description:
      "Volunteered to teach children the basics of coding and engineering using hands-on tools like LEGO robotics to help students build and program vehicles, introducing them to logical thinking in a fun way.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen font-sans text-gray-800">
      {/* Banner */}
      <header className="relative w-full h-[55vh] sm:h-[60vh] lg:h-[70vh] bg-[#87CEEB]">
        <Image
          src="/Cloudsbg3.png"
          alt="Clouds Banner"
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="relative z-10 flex flex-col items-center justify-start h-full text-stone-700 text-center px-4 pt-16 md:pt-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg">
            Raul Vargas
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl drop-shadow-md">
            Electrical Engineer · Embedded Systems · Hardware Design · Nature Lover
          </p>
        </div>
      </header>

      {/* About Section */}
      <section
        id="about"
        className="bg-gradient-to-b from-[#87CEEB] to-[#1E40AF] px-6 py-16 md:py-24"
      >
        <div className="flex justify-start mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white px-8 py-4 drop-shadow-lg">
            About Me
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="w-full max-w-sm rounded-2xl shadow-xl border border-gray-300 overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="Raul hiking"
              width={640}
              height={800}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <p className="text-blue-100 max-w-2xl text-lg md:text-2xl text-center md:text-left leading-relaxed drop-shadow-md">
            My name is Raul Vargas, and I&apos;m a third-year Electrical Engineering
            student at UC Merced with a 3.83 GPA. I love building physical things such as circuits, sensors, embedded systems, and I
            get just as much satisfaction tracing down a noise source on a PCB as I
            do shipping a web app.
            <br /><br />
            Right now I&apos;m redesigning a real industrial instrument for the Safe Food
            Alliance and leading the electrical team for our Formula SAE electric
            vehicle. Outside of engineering, I spend a lot of time hiking, playing
            basketball, and finding any excuse to be outdoors.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-white px-6 py-16 md:py-20">
        <div className="flex justify-start mb-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-stone-700 px-6 py-3">
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-gray-800">
          {Object.entries(skillsData).map(([title, skills]) => (
            <div key={title}>
              <h3 className="text-xl font-semibold mb-4 text-stone-700">{title}</h3>
              <div className="grid grid-cols-3 gap-4">
                {skills.map(({ icon, name }) => (
                  <div
                    key={name}
                    className="flex items-center gap-3 p-4 border rounded-lg shadow hover:shadow-lg hover:bg-amber-50 transition-all duration-300 cursor-pointer"
                  >
                    <div className="text-2xl text-amber-600 hover:scale-110 transition-transform duration-300">
                      {icon}
                    </div>
                    <span className="text-sm font-medium">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="bg-gradient-to-b from-[#87CEEB] to-[#1E40AF] px-6 py-16 md:py-24"
      >
        <div className="flex justify-start mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white drop-shadow-lg px-6 py-3">
            Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {experiences.map((exp) => (
            <div
              key={exp.title + exp.org}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                {exp.title}
              </h3>
              <p className="text-amber-300 font-medium mt-1">
                {exp.org} · {exp.year}
              </p>
              <p className="mt-3 text-blue-100 leading-relaxed text-sm md:text-base">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      {/* Projects Section */}
      <section id="projects" className="bg-white px-6 py-16 md:py-20">
        <div className="flex justify-start mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-700 px-8 py-4">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Coffee Website */}
          <Link
            href="/projects/coffee"
            className="group block rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition"
          >
            <div className="h-48 md:h-56 bg-gray-100">
              <img
                src="coffee.png"
                alt="Coffee Website Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Susie Q&apos;s Coffee
              </h3>
              <p className="text-gray-700 text-sm">
                A full-stack e-commerce site for specialty coffee built with
                Next.js, Supabase, Google Maps API, SQL, and Stripe.
              </p>
            </div>
          </Link>

          {/* React Native Game */}
          <Link
            href="/projects/pollutepet"
            className="group block rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition"
          >
            <div className="h-48 md:h-56 bg-gray-100">
              <img
                src="Pollute.png"
                alt="Game App Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Pollutpet
              </h3>
              <p className="text-gray-700 text-sm">
                Built in 24 hours for the SASE hackathon. Competed in the
                environmental track using a game to convey the impact of climate
                change.
              </p>
            </div>
          </Link>

          {/* OpenGL Ray Tracer */}
          <Link
            href="/projects/raytrace"
            className="group block rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition"
          >
            <div className="h-48 md:h-56 bg-gray-100">
              <img
                src="Raytrace.png"
                alt="Ray Tracer Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                OpenGL Ray Tracer
              </h3>
              <p className="text-gray-700 text-sm">
                A real-time ray tracer built in C++ and OpenGL with reflection,
                shadows, and camera control.
              </p>
            </div>
          </Link>

          {/* Study Timer App */}
          <Link
            href="/projects/studyapp"
            className="group block rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition"
          >
            <div className="h-48 md:h-56 bg-gray-100">
              <img
                src="Appst.png"
                alt="Study App Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                In Progress: Study Timer App
              </h3>
              <p className="text-gray-700 text-sm">
                A productivity-focused study app that tracks focus sessions,
                breaks, and study statistics using SQLite and React Native.
              </p>
            </div>
          </Link>

          {/* Fruit Moisture Meter */}
          <div className="group block rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
            <div className="h-48 md:h-56 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
              <GiCircuitry className="text-8xl text-blue-300" />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                In Progress: Fruit Moisture Meter
              </h3>
              <p className="text-gray-700 text-sm">
                A commercial food-safety instrument built around an STM32F405,
                transformer-coupled Wheatstone bridge, LT1167 instrumentation
                amp, and full galvanic isolation. Targeting ~$85/unit for
                agricultural use.
              </p>
            </div>
          </div>

          {/* Nerf Turret */}
          <div className="group block rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
            <div className="h-48 md:h-56 bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center">
              <GiRobotAntennas className="text-8xl text-amber-300" />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                In Progress: Autonomous Nerf Turret
              </h3>
              <p className="text-gray-700 text-sm">
                ESP32-controlled flywheel launcher with dual RS550 motors at
                ~18,000 RPM. Integrating YOLOv8 for real-time person detection
                and autonomous targeting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-gradient-to-b from-[#87CEEB] to-[#1E40AF] px-6 py-16 md:py-24"
      >
      <section
        id="contact"
        className="bg-gradient-to-b from-[#87CEEB] to-[#1E40AF] px-6 py-16 md:py-24"
      >
        <div className="flex justify-start mb-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-white drop-shadow-lg px-6 py-3">
            Contact
          </h2>
        </div>
        <p className="text-blue-100 text-base md:text-lg text-center drop-shadow-sm">
          Reach out anytime-email is fastest. Resume updated Feb 11, 2026.
        </p>
        <div className="flex gap-6 text-2xl md:text-3xl text-blue-100 justify-center mt-4">
          <a
            href="mailto:rvar3926@gmail.com"
            title="Email"
            className="hover:text-white transition"
          >
            <FaEnvelope />
          </a>
          <a
            href={contact.github}
            target="_blank"
            title="GitHub"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            title="LinkedIn"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="flex justify-center mt-6">
          <a
            href={contact.resume}
            download
            className="inline-flex items-center gap-2 px-5 py-2 bg-white text-blue-800 font-medium rounded-lg shadow hover:bg-blue-50 transition"
          >
            <FaDownload />
            <span>Download Resume</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 pt-12 border-t border-gray-200 text-center text-sm text-gray-500">
        <p>Copyright of Raul Vargas</p>
      </footer>
    </main>
  );
}

