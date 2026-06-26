import { useState } from "react"
import type { IconType } from "react-icons"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaServer,
  FaPaintBrush,
  FaVideo,
  FaBullhorn,
  FaPenNib,
  FaMagic,
  FaImage,
  FaLaptopCode,
  FaChartLine,
  FaCalendarAlt,
  FaUsers,
  FaLightbulb,
  FaInstagram,
  FaPhotoVideo,
  FaTags,
  FaPalette,
  FaStore,
  FaCommentDots,
} from "react-icons/fa"

const navItems = [
  "About",
  "Skills",
  "Experience",
  "Education",
  "Projects",
  "Marketing",
  "Volunteering",
  "Certifications",
  "Contact",
]

const developerSkills = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "TypeScript", icon: FaCode },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: FaLaptopCode },
  { name: "Tailwind CSS", icon: FaPaintBrush },
  { name: "Vite", icon: FaCode },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: FaServer },
  { name: "Python", icon: FaPython },
  { name: "Java", icon: FaJava },
  { name: "MySQL", icon: FaDatabase },
  { name: "MongoDB", icon: FaDatabase },
  { name: "Firebase", icon: FaDatabase },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
]

const marketingSkills = [
  { name: "Social Media Marketing", icon: FaInstagram },
  { name: "Content Creation", icon: FaPenNib },
  { name: "E-Commerce Listings", icon: FaStore },
  { name: "Campaign Support", icon: FaBullhorn },
  { name: "Canva Designs", icon: FaPalette },
  { name: "AI Creative Tools", icon: FaMagic },
  { name: "Poster Design", icon: FaImage },
  { name: "Video Content", icon: FaPhotoVideo },
  { name: "Brand Growth", icon: FaChartLine },
  { name: "Product Visuals", icon: FaTags },
  { name: "Content Planning", icon: FaCalendarAlt },
  { name: "Audience Engagement", icon: FaUsers },
  { name: "Creative Ideas", icon: FaLightbulb },
  { name: "Reels & Shorts", icon: FaVideo },
  { name: "Marketing Copy", icon: FaCommentDots },
]

const experiences = [
  {
    role: "Social Media & E-Commerce Marketer",
    company: "E-Commerce / Digital Marketing Role",
    year: "Sep 2025 – Jan 2026",
    description:
      "Created social media posts including videos, images, posters, and promotional visuals using Canva, Ideogram, and other AI tools. Managed product listings, visual design, content updates, and supported online marketing activities for e-commerce platforms.",
  },
  {
    role: "Secondary School Teacher",
    company: "The Educational World School",
    year: "2022 – 2024",
    description:
      "Taught subject-specific lessons, prepared assessments, evaluated student performance, and maintained academic records.",
  },
  {
    role: "Primary School Teacher",
    company: "New Montina School",
    year: "2021 – 2022",
    description:
      "Delivered foundational instruction to primary students, supported classroom management, lesson planning, and student learning activities.",
  },
]

const projects = [
  {
    title: "TripNest",
    type: "Tour & Travel Web App",
    description:
      "A responsive tour and travel web app with packages, mood-based recommendations, booking flow, authentication, and modern UI.",
    tech: "React, Vite, CSS",
  },
  {
    title: "Mini Habit Tracker",
    type: "React App",
    description:
      "A habit tracking app with signup/login flow, dashboard, habit filters, progress tracking, and local storage.",
    tech: "React, JavaScript, CSS",
  },
  {
    title: "Crime Record Management System",
    type: "Database Project",
    description:
      "A database-focused system for managing police stations, users, officers, investigators, FIRs, cases, suspects, victims, and evidence.",
    tech: "MySQL, phpMyAdmin, XAMPP",
  },
  {
    title: "LanguageBuddy",
    type: "Language Learning App",
    description:
      "An academic language learning application focused on learning flow, user interaction, and beginner-friendly practice.",
    tech: "Java / Frontend Concepts",
  },
  {
    title: "Notes App",
    type: "Productivity App",
    description:
      "A notes management app designed for creating, organizing, and managing personal notes with a clean interface.",
    tech: "Frontend / JavaScript",
  },
  {
    title: "Food Delivery App",
    type: "App Prototype",
    description:
      "A food delivery app concept with user-friendly screens, product listings, cart flow, and ordering experience.",
    tech: "Frontend / UI Design",
  },
  {
    title: "Blood Bank App",
    type: "Emergency Service App",
    description:
      "A blood bank application concept designed to help users find blood donors and emergency support more easily.",
    tech: "Frontend / Database Concept",
  },
  {
    title: "CodeCobra",
    type: "Python Game",
    description:
      "A Snake Game with score tracking, timer, leaderboard, levels, pause/resume, and player name saving.",
    tech: "Python, Pygame",
  },
  {
    title: "Restaurant Website",
    type: "Frontend Website",
    description:
      "A responsive restaurant website with clean layout, menu presentation, and user-friendly interface.",
    tech: "HTML, CSS, JavaScript",
  },
]

const marketingWork = [
  {
    title: "Social Media Content Creation",
    description:
      "Created social media posts, videos, images, posters, and promotional content to support online marketing and brand visibility.",
  },
  {
    title: "AI-Assisted Creative Design",
    description:
      "Used Canva, Ideogram, and other AI tools to design visuals, generate creative ideas, and improve digital content quality.",
  },
  {
    title: "E-Commerce Content Management",
    description:
      "Managed product listings, product visuals, descriptions, content updates, and platform improvements for e-commerce pages.",
  },
  {
    title: "Content Planning & Brand Growth",
    description:
      "Planned content ideas, organized creative assets, supported brand consistency, and helped improve online audience engagement.",
  },
  {
    title: "Campaign & Promotion Support",
    description:
      "Supported digital campaigns through promotional posts, event highlights, product-focused visuals, and marketing content updates.",
  },
  {
    title: "Community & Event Content Coverage",
    description:
      "Captured event moments, supported testimonials, encouraged attendees to share stories, and helped improve social media activity.",
  },
]

const volunteering = [
  {
    title: "IxDF Pakistan",
    role: "Volunteer / Community Support",
    description:
      "Supported community activities, event coordination, content coverage, attendee engagement, testimonials, and social media story promotion.",
  },
  {
    title: "TeknoFest",
    role: "Volunteer / Event Participation",
    description:
      "Participated in community and technology-focused activities, supporting event learning, networking, and professional exposure.",
  },
  {
    title: "JTech",
    role: "Volunteer / Community Participation",
    description:
      "Engaged in technology community activities and contributed to event support, coordination, and participation.",
  },
]

const certifications = [
  {
    title: "Google Digital Marketing & E-commerce Professional Certificate",
    provider: "Google / Coursera",
    year: "2025",
    category: "Digital Marketing",
    description:
      "Completed an 8-course professional certificate focused on digital marketing, e-commerce, customer engagement, online stores, and marketing analytics.",
  },
  {
    title: "Google UX Design Professional Certificate",
    provider: "Google / Coursera",
    year: "2025",
    category: "Design",
    description:
      "Completed an 8-course professional certificate covering UX research, wireframing, prototyping, usability testing, and user-centered design.",
  },
  {
    title: "Google Data Analytics Professional Certificate",
    provider: "Google / Coursera",
    year: "2025",
    category: "Data Analytics",
    description:
      "Completed a 9-course professional certificate focused on data analysis, spreadsheets, SQL basics, dashboards, and data-driven decision making.",
  },
  {
    title: "Google AI Essentials",
    provider: "Google / Coursera",
    year: "2025",
    category: "Artificial Intelligence",
    description:
      "Completed a 5-course specialization focused on practical AI concepts, productivity, prompting, and responsible use of AI tools.",
  },
  {
    title: "Google IT Automation with Python Certificate",
    provider: "Google / Coursera",
    year: "2025",
    category: "Python & Automation",
    description:
      "Completed a 7-course professional certificate focused on Python, automation, troubleshooting, and practical scripting skills.",
  },
  {
    title: "Google Cybersecurity Professional Certificate",
    provider: "Google / Coursera",
    year: "2025",
    category: "Cybersecurity",
    description:
      "Completed a 9-course professional certificate covering cybersecurity foundations, security tools, risk management, and threat awareness.",
  },
  {
    title: "Google IT Support Professional Certificate",
    provider: "Google / Coursera",
    year: "2025",
    category: "IT Support",
    description:
      "Completed a 6-course professional certificate covering IT fundamentals, troubleshooting, networking, operating systems, and customer support.",
  },
  {
    title: "Google Project Management Certificate",
    provider: "Google / Coursera",
    year: "2025",
    category: "Project Management",
    description:
      "Completed a 7-course professional certificate focused on project planning, execution, communication, documentation, and team coordination.",
  },
  {
    title: "Google Prompting Essentials",
    provider: "Google / Coursera",
    year: "2025",
    category: "AI Prompting",
    description:
      "Completed a 4-course specialization focused on writing better prompts, improving AI outputs, and using AI tools effectively.",
  },
  {
    title: "AI Seekho 2026 Google Antigravity National Hackathon",
    provider:
      "Google for Developers, Tech Destination Pakistan, Telenor, Innovista",
    year: "2026",
    category: "Hackathon",
    description:
      "Certificate of participation for AI Seekho 2026 Google Antigravity National Hackathon, focused on vibe coding, AI orchestration, and product thinking.",
  },
  {
    title: "JIDEA Figma Competition 2026",
    provider: "JIDEA",
    year: "2026",
    category: "UI/UX Competition",
    description:
      "Certificate of participation for the JIDEA Figma Competition 2026, recognizing creativity, innovation, and design skills.",
  },
  {
    title: "Generative AI for Video Creation",
    provider: "DataCrumbs",
    year: "2026",
    category: "Generative AI",
    description:
      "Successfully participated in a masterclass focused on generative AI for video creation and career skill development.",
  },
  {
    title: "Certificate of Appreciation – IxDF Pakistan",
    provider: "Interaction Design Foundation Pakistan",
    year: "2026",
    category: "Community Contribution",
    description:
      "Recognized by IxDF Pakistan for outstanding contribution, dedication, and consistent effort toward achieving excellence.",
  },
  {
    title: "Build with AI – Workshop & Certificate of Appreciation",
    provider: "Google Developer Groups On Campus JUW",
    year: "2025",
    category: "AI Workshop",
    description:
      "Participated in a GDG On Campus JUW workshop focused on building with AI and practical exposure to AI concepts.",
  },
  {
    title: "ScaleX Workshop",
    provider: "Google Developer Groups On Campus JUW",
    year: "2025",
    category: "Workshop",
    description:
      "Certificate of participation for attending the ScaleX workshop organized by GDG On Campus JUW.",
  },
  {
    title: "Flutter Workshop",
    provider: "Google Developer Groups On Campus JUW",
    year: "2025",
    category: "Mobile Development",
    description:
      "Certificate of participation for attending a Flutter workshop and learning mobile development fundamentals.",
  },
  {
    title: "2nd International Conference on Cybersecurity & Digital Defense",
    provider: "Jinnah University for Women",
    year: "2025",
    category: "Cybersecurity",
    description:
      "Participated in ICyDD, focused on cybersecurity, digital defense, and awareness of modern security challenges.",
  },
  {
    title: "CTF Cybersecurity Workshop",
    provider: "Workshop / Cybersecurity Training",
    year: "2025",
    category: "Cybersecurity",
    description:
      "Participated in a Capture The Flag cybersecurity workshop focused on practical security problem-solving.",
  },
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#111111] px-3 py-4 text-white sm:px-5 md:px-8">
      <div className="mx-auto grid w-full max-w-7xl items-start gap-6 lg:grid-cols-[340px_minmax(0,1fr)] xl:grid-cols-[360px_minmax(0,1fr)]">
        <aside className="h-fit w-full rounded-[1.5rem] border border-white/10 bg-[#202020] p-5 shadow-2xl sm:p-6 md:rounded-[2rem] md:p-8 lg:sticky lg:top-6 lg:self-start">
          <div className="flex flex-col items-center text-center">
            <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-[#facc15] bg-[#111111] shadow-2xl sm:h-40 sm:w-40 md:h-44 md:w-44">
              <img
                src="/malaika-profile.PNG"
                alt="Malaika Tariq"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Malaika Tariq
            </h1>

            <p className="mt-3 rounded-full border border-[#facc15]/40 bg-[#facc15]/10 px-4 py-2 text-xs font-semibold text-[#facc15] sm:px-5 sm:text-sm">
              Web Developer & Digital Marketer
            </p>
          </div>

          <div className="my-7 h-px bg-white/10 sm:my-8" />

          <div className="space-y-5 sm:space-y-6">
            <InfoBlock
              label="Email"
              value="malaikasheikh2210@gmail.com"
              link="mailto:malaikasheikh2210@gmail.com"
            />
            <InfoBlock label="Phone" value="+92 3273710311" />
            <InfoBlock label="Location" value="Karachi, Pakistan" />
            <InfoBlock label="Education" value="BS Software Engineering" />
          </div>

          <div className="my-7 h-px bg-white/10 sm:my-8" />

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href="https://github.com/malaikaa-tariq"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-[#facc15] hover:text-[#facc15]"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/malaika-tariq-b36155354/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-[#facc15] hover:text-[#facc15]"
            >
              LinkedIn
            </a>
          </div>
        </aside>

        <section className="min-w-0 w-full max-w-full rounded-[1.5rem] border border-white/10 bg-[#202020] p-4 shadow-2xl sm:p-6 md:rounded-[2rem] md:p-10">
          <nav className="sticky top-3 z-50 mb-10">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#111111]/95 px-4 py-3 shadow-xl backdrop-blur md:hidden">
              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-2xl text-white/80"
                aria-label="Open menu"
              >
                ☰
              </button>

              <p className="text-sm font-bold text-[#facc15]">
                Malaika Portfolio
              </p>
            </div>

            {isMenuOpen && (
              <div className="fixed inset-0 z-[999] md:hidden">
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute inset-0 bg-black/70"
                  aria-label="Close menu overlay"
                />

                <aside className="relative h-full w-[82%] max-w-[320px] border-r border-white/10 bg-[#151515] p-6 shadow-2xl">
                  <div className="mb-8 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">Menu</h3>

                    <button
                      type="button"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-xl text-white/70"
                      aria-label="Close menu"
                    >
                      ×
                    </button>
                  </div>

                  <div className="space-y-3">
                    {navItems.map((item) => (
                      <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#202020] px-5 py-4 text-sm font-bold text-white/75 transition hover:border-[#facc15] hover:text-[#facc15]"
                      >
                        <span className="text-[#facc15]">◆</span>
                        {item}
                      </a>
                    ))}
                  </div>
                </aside>
              </div>
            )}

            <div className="hidden rounded-3xl border border-white/10 bg-[#111111]/95 p-3 shadow-xl backdrop-blur md:block">
              <div className="grid grid-cols-5 gap-2 xl:grid-cols-9">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="rounded-2xl px-3 py-3 text-center text-xs font-bold text-white/65 transition hover:bg-[#facc15] hover:text-black"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          <section id="about" className="scroll-mt-28">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#facc15] sm:text-sm sm:tracking-[0.3em]">
              Software Engineering Student
            </p>

            <h2 className="mt-5 max-w-full break-words text-2xl font-extrabold leading-tight sm:text-4xl md:text-5xl xl:text-6xl">
              Building digital experiences through{" "}
              <span className="text-[#facc15]">code</span> and{" "}
              <span className="text-[#60a5fa]">creative marketing</span>.
            </h2>

            <p className="mt-6 max-w-full break-words text-sm leading-7 text-white/65 sm:text-lg sm:leading-8">
              I am a Software Engineering undergraduate at Jinnah University for
              Women, focused on web development, problem-solving, and practical
              software projects. Along with development, I also work on social
              media and e-commerce marketing, including content creation,
              product listings, visual design, campaign support, and digital
              updates.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#projects"
                className="w-full rounded-full bg-[#facc15] px-5 py-3 text-center text-sm font-bold text-black transition hover:bg-[#eab308] sm:w-auto sm:px-7"
              >
                View Developer Work
              </a>

              <a
                href="#marketing"
                className="w-full rounded-full border border-white/15 px-5 py-3 text-center text-sm font-bold text-white transition hover:border-[#60a5fa] hover:text-[#60a5fa] sm:w-auto sm:px-7"
              >
                View Marketing Work
              </a>
            </div>
          </section>

          <section id="skills" className="mt-20 scroll-mt-28 md:mt-24">
            <SectionHeading title="My Skills" />

            <div className="mt-10 grid items-start gap-8 xl:grid-cols-2">
              <SkillCard
                title="Developer Skills"
                skills={developerSkills}
                color="blue"
              />

              <SkillCard
                title="Marketing & Creative Skills"
                skills={marketingSkills}
                color="yellow"
              />
            </div>
          </section>

          <section id="experience" className="mt-20 scroll-mt-28 md:mt-24">
            <SectionHeading title="Experience" />

            <div className="mt-10 space-y-5 sm:space-y-6">
              {experiences.map((item) => (
                <div
                  key={item.role}
                  className="rounded-3xl border border-white/10 bg-[#181818] p-5 transition hover:border-[#facc15]/50 sm:p-7"
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold sm:text-2xl">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-sm text-white/50 sm:text-base">
                        {item.company}
                      </p>
                    </div>

                    <p className="w-fit rounded-full bg-[#facc15]/10 px-4 py-2 text-xs font-semibold text-[#facc15] sm:text-sm">
                      {item.year}
                    </p>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="education" className="mt-20 scroll-mt-28 md:mt-24">
            <SectionHeading title="Education" />

            <div className="mt-10 space-y-8">
              <TimelineItem
                year="Expected Graduation: 2028"
                title="Bachelor of Science in Software Engineering"
                place="Jinnah University for Women, Karachi"
                description="Currently studying software engineering with focus on programming fundamentals, web development, databases, and real-world projects."
              />

              <TimelineItem
                year="2019 – 2020"
                title="Higher Secondary Certificate"
                place="Shaheed-e-Millat Govt. Degree College"
                description="Completed higher secondary education with a strong academic foundation."
              />

              <TimelineItem
                year="2017 – 2018"
                title="Secondary School Certificate"
                place="Govt. Zia Girls High School, Faisalabad"
                description="Completed secondary education."
              />
            </div>
          </section>

          <section id="projects" className="mt-20 scroll-mt-28 md:mt-24">
            <SectionHeading title="Developer Projects" />

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="rounded-3xl border border-white/10 bg-[#181818] p-5 transition hover:-translate-y-2 hover:border-[#60a5fa]/50 sm:p-7"
                >
                  <p className="text-sm font-semibold text-[#60a5fa]">
                    {project.type}
                  </p>

                  <h3 className="mt-3 text-xl font-bold sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/60">
                    {project.description}
                  </p>

                  <p className="mt-5 text-sm font-semibold text-[#facc15]">
                    {project.tech}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="marketing" className="mt-20 scroll-mt-28 md:mt-24">
            <SectionHeading title="Marketing & Creative Work" />

            <p className="mt-6 max-w-3xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              This section highlights my social media, e-commerce, AI-assisted
              design, content planning, and campaign support experience.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {marketingWork.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-[#181818] p-5 transition hover:-translate-y-2 hover:border-[#facc15]/50 sm:p-7"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#facc15]/10 text-xl text-[#facc15] sm:h-14 sm:w-14 sm:text-2xl">
                    ✦
                  </div>

                  <h3 className="text-xl font-bold sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/60">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="volunteering" className="mt-20 scroll-mt-28 md:mt-24">
            <SectionHeading title="Volunteering & Community" />

            <p className="mt-6 max-w-3xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              My volunteering experience reflects teamwork, community
              involvement, event support, communication, and content coverage
              for technology and design-focused communities.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {volunteering.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-[#181818] p-5 transition hover:-translate-y-2 hover:border-[#facc15]/50 sm:p-7"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#facc15]/10 text-xl text-[#facc15] sm:h-14 sm:w-14 sm:text-2xl">
                    ★
                  </div>

                  <h3 className="text-xl font-bold sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-[#60a5fa]">
                    {item.role}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-white/60">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="certifications" className="mt-20 scroll-mt-28 md:mt-24">
            <SectionHeading title="Certifications" />

            <p className="mt-6 max-w-3xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              My certifications cover digital marketing, e-commerce, AI, UX
              design, data analytics, cybersecurity, IT support, Python
              automation, project management, workshops, competitions, and
              community participation.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {certifications.map((certificate) => (
                <div
                  key={certificate.title}
                  className="rounded-3xl border border-white/10 bg-[#181818] p-5 transition hover:-translate-y-1 hover:border-[#60a5fa]/50 sm:p-6"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-[#facc15]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#facc15]">
                      {certificate.category}
                    </span>

                    <span className="rounded-full bg-[#60a5fa]/10 px-4 py-2 text-xs font-bold text-[#93c5fd]">
                      {certificate.year}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold leading-7 text-white sm:text-xl sm:leading-8">
                    {certificate.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-[#60a5fa]">
                    {certificate.provider}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-white/60">
                    {certificate.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="contact" className="mt-20 scroll-mt-28 md:mt-24">
            <div className="rounded-3xl border border-white/10 bg-[#181818] p-5 sm:p-8 md:p-10">
              <SectionHeading title="Let’s Work Together" />

              <p className="mt-8 max-w-3xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                I am open to web development, frontend projects, social media
                marketing, e-commerce updates, content creation, and creative
                digital work.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href="mailto:malaikasheikh2210@gmail.com"
                  className="rounded-full bg-[#facc15] px-7 py-3 text-center text-sm font-bold text-black transition hover:bg-[#eab308]"
                >
                  Email Me
                </a>

                <a
                  href="https://www.linkedin.com/in/malaika-tariq-b36155354/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 px-7 py-3 text-center text-sm font-bold text-white transition hover:border-[#60a5fa] hover:text-[#60a5fa]"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/malaikaa-tariq"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 px-7 py-3 text-center text-sm font-bold text-white transition hover:border-[#60a5fa] hover:text-[#60a5fa]"
                >
                  GitHub
                </a>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  )
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div>
      <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <div className="mt-5 h-1.5 w-20 rounded-full bg-[#facc15] sm:w-24" />
    </div>
  )
}

function InfoBlock({
  label,
  value,
  link,
}: {
  label: string
  value: string
  link?: string
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-white/40 sm:text-sm">
        {label}
      </p>

      {link ? (
        <a
          href={link}
          className="mt-1 block break-all text-base font-medium text-white transition hover:text-[#facc15] sm:text-lg"
        >
          {value}
        </a>
      ) : (
        <p className="mt-1 text-base font-medium text-white sm:text-lg">
          {value}
        </p>
      )}
    </div>
  )
}

function SkillCard({
  title,
  skills,
  color,
}: {
  title: string
  skills: { name: string; icon: IconType }[]
  color: "blue" | "yellow"
}) {
  const isBlue = color === "blue"

  return (
    <div className="rounded-3xl border border-white/10 bg-[#181818] p-5 sm:p-6">
      <h3 className="text-lg font-bold sm:text-xl">{title}</h3>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {skills.map((skill) => {
          const Icon = skill.icon

          return (
            <div
              key={skill.name}
              className={`flex min-h-[100px] flex-col items-center justify-center rounded-2xl border p-3 text-center transition hover:-translate-y-1 sm:min-h-[112px] sm:p-4 ${
                isBlue
                  ? "border-[#60a5fa]/20 bg-[#60a5fa]/10 text-[#93c5fd]"
                  : "border-[#facc15]/20 bg-[#facc15]/10 text-[#fde68a]"
              }`}
            >
              <Icon className="mb-3 text-2xl sm:text-3xl" />
              <span className="text-[11px] font-bold leading-5 sm:text-xs">
                {skill.name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function TimelineItem({
  year,
  title,
  place,
  description,
}: {
  year: string
  title: string
  place: string
  description: string
}) {
  return (
    <div className="relative border-l border-white/10 pl-7 sm:pl-8">
      <div className="absolute -left-3 top-1 h-6 w-6 rounded-full border-4 border-[#facc15] bg-[#202020]" />
      <p className="text-sm font-semibold text-[#facc15]">{year}</p>
      <h3 className="mt-2 text-xl font-bold sm:text-2xl">{title}</h3>
      <p className="mt-1 text-sm italic text-white/50 sm:text-base">{place}</p>
      <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base">
        {description}
      </p>
    </div>
  )
}

export default App