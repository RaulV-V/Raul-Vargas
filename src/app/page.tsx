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
  SiLinux,
} from "react-icons/si";
import {
  GiRobotGolem,
  GiElectric,
  GiRadarDish,
  GiCpu,
  GiSolderingIron,
} from "react-icons/gi";

const contact = {
  email: "rvar3926@gmail.com",
  github: "https://github.com/RaulV-V",
  linkedin: "https://linkedin.com/in/raul-vargas-8428a4274/",
  resume: "/Raul_Vargas_EE.pdf",
  location: "Tulare, CA",
};

const skillsData = {
  Languages: [
    { icon: <FaCuttlefish />, name: "C" },
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaJsSquare />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiMysql />, name: "SQL" },
  ],
  "Tools & Platforms": [
    { icon: <GiRobotGolem />, name: "ROS2" },
    { icon: <SiLinux />, name: "Linux" },
    { icon: <SiGit />, name: "Git" },
    { icon: <FaTools />, name: "MATLAB / Simulink" },
    { icon: <GiElectric />, name: "LTspice" },
  ],
  "Hardware & Lab": [
    { icon: <GiRadarDish />, name: "Oscilloscope" },
    { icon: <GiCpu />, name: "Microcontrollers" },
    { icon: <FaMicrochip />, name: "PCB basics" },
    { icon: <GiSolderingIron />, name: "Soldering" },
  ],
};

const projects = [
  {
    slug: "/projects/ros2",
    title: "ROS2 Human Detection Robot",
    image: "ros2.png",
    blurb:
      "Modular ROS2 + Nav2 stack that patrols, detects people, and navigates toward them in Gazebo simulations.",
  },
  {
    slug: "/projects/nerf-sentry",
    title: "Nerf Sentry Gun (in progress)",
    image: "nerf-sentry.svg",
    blurb:
      "Vision-guided Nerf turret in CAD + 3D-printed mounts; OpenCV tracking drives pan/tilt and motor control to auto-fire.",
  },
  {
    slug: "/projects/coffee",
    title: "Susie Q's Coffee",
    image: "Coffee.png",
    blurb:
      "Full-stack ordering site for a local cafe with Stripe checkout, Supabase admin dashboard, and delivery distance logic.",
  },
  {
    slug: "/projects/pollutepet",
    title: "PollutePet",
    image: "Pollute.png",
    blurb:
      "React Native game built in 24 hours that ties a virtual pet's health to real NASA climate data.",
  },
  {
    slug: "/projects/raytrace",
    title: "Ray Tracing Renderer",
    image: "Raytrace.png",
    blurb:
      "CPU and GPU ray tracers written in C++ exploring reflections, shadows, and motion blur.",
  },
  {
    slug: "/projects/studyapp",
    title: "Study Buddy",
    image: "Appst.png",
    blurb:
      "Mobile study timer that pauses when you leave the app and tracks breaks with SQLite for accurate focus logging.",
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
          <p className="mt-4 text-lg sm:text-xl md:text-2xl drop-shadow-md max-w-2xl">
            Electrical Engineering student at UC Merced (Graduation: Jun 2027)
            building robotics, embedded systems, and practical web tools.
          </p>
          <p className="mt-2 text-base md:text-lg text-stone-700/80">
            {contact.location} &nbsp;|&nbsp; GPA 3.80 &nbsp;|&nbsp; UC Merced
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={contact.resume}
              download
              className="flex items-center gap-2 px-5 py-2 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800 transition"
            >
              <FaDownload />
              <span>Download Resume</span>
            </a>
            <Link
              href="#projects"
              className="px-5 py-2 border border-blue-800 text-blue-800 rounded-lg shadow-sm hover:bg-blue-50 transition"
            >
              View Projects
            </Link>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section
        id="about"
        className="bg-gradient-to-b from-[#87CEEB] to-[#1E40AF] px-6 py-16 md:py-24"
      >
        <div className="flex justify-start mb-12">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold relative z-10 text-white px-8 py-4 drop-shadow-lg">
              About Me
            </h2>
          </div>
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
            I am an Electrical Engineering student focused on robotics, embedded
            systems, and full-stack tools that help teams get things done. I
            enjoy designing clear system architectures, documenting tradeoffs,
            and then validating ideas with hands-on prototypes.
            <br />
            <br />
            Outside of class, I like hiking around California, teaching others
            what I am learning, and iterating on side projects, from graphics to
            mobile apps, that keep me curious and practical.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-white px-6 py-16 md:py-20">
        <div className="flex justify-start mb-6">
          <div className="relative inline-block px-6 py-3">
            <h2 className="text-3xl md:text-4xl font-semibold relative z-10 text-stone-700">
              Skills
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-gray-800">
          {Object.entries(skillsData).map(([title, skills]) => (
            <div key={title}>
              <h3 className="text-xl font-semibold mb-4 text-stone-700">
                {title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
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
        <div className="flex justify-start mb-6">
          <div className="relative inline-block px-6 py-3">
            <h2 className="text-3xl md:text-4xl font-semibold relative z-10 text-white drop-shadow-lg">
              Experience
            </h2>
          </div>
        </div>

        <div className="space-y-10 text-white text-base md:text-lg">
          <div className="bg-white/10 rounded-2xl p-6 shadow-lg border border-white/10">
            <h3 className="text-xl md:text-2xl font-semibold">
              NSF RED Project - UC Merced
            </h3>
            <p className="text-blue-100 font-medium">
              Research Assistant | Nov 2025 - Present | Merced, CA
            </p>
            <ul className="mt-2 space-y-2 list-disc list-inside text-blue-50 leading-relaxed">
              <li>
                Build department websites and progress dashboards for an
                NSF-funded curriculum redesign effort.
              </li>
              <li>
                Track milestones across faculty and staff, surfacing risks early
                with simple status tools.
              </li>
              <li>
                Review education research to guide data-informed features.
              </li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 shadow-lg border border-white/10">
            <h3 className="text-xl md:text-2xl font-semibold">
              Kingsburg Safe Food Alliance (Capstone)
            </h3>
            <p className="text-blue-100 font-medium">
              Digital Moisture Meter Design | Jan 2026 - Dec 2026 | Kingsburg,
              CA
            </p>
            <ul className="mt-2 space-y-2 list-disc list-inside text-blue-50 leading-relaxed">
              <li>
                Designed a digital moisture meter architecture to replace a
                legacy analog system while keeping accuracy high.
              </li>
              <li>
                Defined sensing chain, analog front-end, ADC choice, and digital
                processing with calibration and manufacturability in mind.
              </li>
              <li>
                Produced system block diagrams and documentation outlining risks
                and future expansion ideas.
              </li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 shadow-lg border border-white/10">
            <h3 className="text-xl md:text-2xl font-semibold">
              Delta Mosquito and Vector Control District
            </h3>
            <p className="text-blue-100 font-medium">
              Laboratory Technician | 2023 | Tulare County, CA
            </p>
            <ul className="mt-2 space-y-2 list-disc list-inside text-blue-50 leading-relaxed">
              <li>
                Performed electronics upkeep for field traps and sensors;
                frequent soldering and board-level repairs to keep gear online.
              </li>
              <li>
                Identified mosquito species and assisted with data collection to
                monitor West Nile virus vectors.
              </li>
              <li>
                Collaborated with field teams to deploy, service, and document
                equipment under tight turnaround.
              </li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 shadow-lg border border-white/10">
            <h3 className="text-xl md:text-2xl font-semibold">
              University of California, Merced
            </h3>
            <p className="text-blue-100 font-medium">
              Teaching Assistant | Jan 2025 - Jun 2025 | Merced, CA
            </p>
            <ul className="mt-2 space-y-2 list-disc list-inside text-blue-50 leading-relaxed">
              <li>
                Helped students debug data structures and algorithms during labs
                and office hours.
              </li>
              <li>
                Explained memory management and time/space tradeoffs with code
                walkthroughs.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white px-6 py-16 md:py-20">
        <div className="flex justify-start mb-12">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold relative z-10 text-stone-700 px-8 py-4">
              Projects
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={project.slug}
              className="group block rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition"
            >
              <div className="h-48 md:h-56 bg-gray-100">
                <Image
                  src={`/${project.image}`}
                  alt={`${project.title} preview`}
                  width={960}
                  height={560}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-sm">{project.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-gradient-to-b from-[#87CEEB] to-[#1E40AF] px-6 py-16 md:py-24"
      >
        <div className="flex justify-start mb-6">
          <div className="relative inline-block px-6 py-3">
            <h2 className="text-3xl md:text-4xl font-semibold relative z-10 text-white drop-shadow-lg">
              Contact
            </h2>
          </div>
        </div>
        <p className="text-blue-100 text-base md:text-lg text-center drop-shadow-sm">
          Reach out anytime-email is fastest. Resume updated Feb 11, 2026.
        </p>
        <div className="flex gap-6 text-2xl md:text-3xl text-blue-100 justify-center mt-4">
          <a
            href={`mailto:${contact.email}`}
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
