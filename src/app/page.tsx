// app/page.tsx or pages/index.tsx

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaJsSquare,
  FaPython,
  FaCuttlefish,
  FaReact,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiCplusplus,
  SiNextdotjs,
  SiWebgpu,
  SiOpengl,
  SiOpencv,
  SiMysql,
  SiGit,
} from "react-icons/si";
import {
  GiProcessor,
  GiCircuitry,
  GiWireframeGlobe,
  GiHistogram,
} from "react-icons/gi";

const skillsData = {
  "Programming & Tools": [
    { icon: <FaJsSquare />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaCuttlefish />, name: "C" },
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiMysql />, name: "SQL" },
  ],
  "Technical Areas": [
    { icon: <SiWebgpu />, name: "WebGPU & WGSL" },
    { icon: <GiWireframeGlobe />, name: "Game Development" },
    { icon: <GiCircuitry />, name: "Embedded Systems" },
    { icon: <GiProcessor />, name: "Data Structures" },
    { icon: <GiProcessor />, name: "Algorithms" },
    { icon: <GiWireframeGlobe />, name: "Physics Simulations" },
    { icon: <SiOpengl />, name: "OpenGL" },
    { icon: <SiOpencv />, name: "OpenCV" },
    { icon: <GiHistogram />, name: "Statistical Analysis" },
    { icon: <SiGit />, name: "Git" },
  ],
};


export default function HomePage() {
  return (
    <main className="min-h-screen font-sans text-gray-800">
      {/* Banner */}
      <header className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] bg-[#87CEEB]">
        <img
          src="/Cloudsbg3.png"
          alt="Clouds Banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="relative z-10 flex flex-col items-center justify-start h-full text-stone-700 text-center px-4 pt-16 md:pt-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg">
            Raul Vargas
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl drop-shadow-md">
            Software Engineer • Physics Enthusiast • Game Dev Curious • Nature Lover
          </p>
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
          <img
            src="/profile.jpg"
            alt="Raul hiking"
            className="w-full max-w-sm rounded-2xl shadow-xl border border-gray-300"
          />
          <p className="text-blue-100 max-w-2xl text-lg md:text-2xl text-center md:text-left leading-relaxed drop-shadow-md">
            My name is Raul Vargas, and I&apos;m currently a third-year student at UC Merced pursuing degrees in Computer Science and Electrical Engineering. 
            I&apos;m passionate about continuously improving my skills as a developer and thrive when learning new technologies and adapting to change. 
            I greatly value teamwork and collaboration, especially when working together leads to creating something greater than what we could achieve individually.
            <br /><br />
            When I&apos;m not coding, I love hiking and spending time in nature. 
            It helps me stay grounded and curious about the natural world. 
            Some other hobbies I enjoy include video games, basketball, wrestling, and teaching.
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto text-gray-800">
          {Object.entries(skillsData).map(([title, skills]) => (
            <div key={title}>
              <h3 className="text-xl font-semibold mb-4 text-stone-700"> {title}</h3>
              <div className="grid grid-cols-3 gap-4">
                {skills.map(({ icon, name }) => (
                  <div
                    key={name}
                    className="flex flex-col items-center justify-center text-center p-4 border rounded-lg shadow hover:shadow-lg hover:bg-amber-50 transition-all duration-300 cursor-pointer"
                  >
                    <div className="text-3xl text-amber-600 hover:scale-110 transition-transform duration-300">
                      {icon}
                    </div>
                    <span className="mt-2 text-sm font-medium">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-gradient-to-b from-[#87CEEB] to-[#1E40AF] px-6 py-16 md:py-24">
        <div className="flex justify-start mb-6">
          <div className="relative inline-block px-6 py-3">
            <h2 className="text-3xl md:text-4xl font-semibold relative z-10 text-white drop-shadow-lg">
              Experience
            </h2>
          </div>
        </div>

        <div className="space-y-10 text-white text-base md:text-lg">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">Programming Tutor & Office Hours Volunteer</h3>
            <p className="text-white font-medium">UC Merced · 2024</p>
            <p className="mt-2 leading-relaxed drop-shadow-sm">
              Worked with professors to host office hours and tutor undergraduate students in an introductory programming course. 
              Helped students debug code, understand key concepts, and improve their programming confidence.
            </p>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold">Laboratory Technician</h3>
            <p className="text-blue-200 font-medium">Delta Mosquito and Vector Control District · 2023</p>
            <p className="mt-2 leading-relaxed drop-shadow-sm">
              Gained hands-on experience identifying vectors such as mosquitoes and assisting in preventing the spread 
              of West Nile virus. Learned to operate professionally in a lab and fieldwork environment focused on public health.
            </p>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold">STEM Outreach Volunteer</h3>
            <p className="text-blue-200 font-medium">Children’s Engineering Program · 2023</p>
            <p className="mt-2 leading-relaxed drop-shadow-sm">
              Volunteered to teach children the basics of coding and engineering. Used hands-on tools like LEGO robotics 
              to help students build and program vehicles, introducing them to functions and logical thinking in a fun way.
            </p>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold">Hackathon Participant</h3>
            <p className="text-blue-200 font-medium">SASE Hacks & HackMerced X · 2024</p>
            <p className="mt-2 leading-relaxed drop-shadow-sm">
              Participated in two hackathons where I formed teams with strangers to build creative software solutions 
              under time constraints. Gained experience in collaborative problem solving, fast prototyping, and adapting to new technologies.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-white px-6 py-16 md:py-20">
        <div className="flex justify-start mb-12">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold relative z-10 text-stone-700 px-8 py-4">
              Projects
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Coffee Website */}
          <Link href="/projects/coffee" className="group block rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition">
            <div className="h-48 md:h-56 bg-gray-100">
              <img
                src="coffee.png"
                alt="Coffee Website Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Susie Q&apos;s Coffee</h3>
              <p className="text-gray-700 text-sm">
                A full-stack e-commerce site for specialty coffee built with Next.js, Supabase, Google Maps Api, Sql, and Stripe.
              </p>
            </div>
          </Link>

          {/* React Native Game */}
          <Link href="/projects/pollutepet" className="group block rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition">
            <div className="h-48 md:h-56 bg-gray-100">
              <img
                src="Pollute.png"
                alt="Game App Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Pollutpet</h3>
              <p className="text-gray-700 text-sm">
                Built this in 24 hours for the SASE hackathon. We competed in the envioronmental track where we used a game to convey the impact of climate change. 
              </p>
            </div>
          </Link>

          {/* OpenGL Ray Tracer */}
          <Link href="/projects/raytrace" className="group block rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition">
            <div className="h-48 md:h-56 bg-gray-100">
              <img
                src="Raytrace.png"
                alt="Ray Tracer Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">OpenGL Ray Tracer</h3>
              <p className="text-gray-700 text-sm">
                A real-time ray tracer built in C++ and OpenGL with reflection, shadows, and camera control.
              </p>
            </div>
          </Link>

                    {/* Study Timer App */}
          <Link href="/projects/studyapp" className="group block rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition">
            <div className="h-48 md:h-56 bg-gray-100">
              <img
                src="Appst.png"
                alt="Study App Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">In Progress: Study Timer App</h3>
              <p className="text-gray-700 text-sm">
                A productivity-focused study app that tracks focus sessions, breaks, and study statistics using SQLite and React Native.
              </p>
            </div>
          </Link>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-b from-[#87CEEB] to-[#1E40AF] px-6 py-16 md:py-24">
        <div className="flex justify-start mb-6">
          <div className="relative inline-block px-6 py-3">

            <h2 className="text-3xl md:text-4xl font-semibold relative z-10 text-white drop-shadow-lg">
              Contact
            </h2>
          </div>
        </div>
        <p className="text-blue-100 text-base md:text-lg text-center drop-shadow-sm">
          Feel free to reach out via email or follow me on socials:
        </p>
        <div className="flex gap-6 text-2xl md:text-3xl text-blue-100 justify-center mt-4">
          <a href="mailto:rvar3826@gmail.com" title="Email" className="hover:text-white transition">
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/RaulV-V"
            target="_blank"
            title="GitHub"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/raul-vargas-8428a4274/"
            target="_blank"
            title="LinkedIn"
            className="hover:text-white transition"
          >
            <FaLinkedin />
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