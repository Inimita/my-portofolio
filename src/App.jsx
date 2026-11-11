import { useState } from "react";
import { Mail, Code2, BriefcaseBusiness, Camera, Menu, X } from "lucide-react";
// import gambar from "../public/assets/profile.jpeg";



const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Skill", href: "#skill" },
  { label: "Projects", href: "#project" },
];

const projects = [
  {
    title: "Landing Page Travel",
    image: "/assets/Travel.jpeg",
    link: "https://inimita.github.io/TugasLandingPage.github.io/",
  },
  {
    title: "Cloning Landing Page Web W3School",
    image: "/assets/W3School.jpeg",
    link: "https://inimita.github.io/cloneW3School.github.io/",
  },
  {
    title: "Cloning Landing Page Web Zenius",
    image: "/assets/zenius.jpeg",
    link: null, // belum ada link masih bentuk zip
  },
  {
    title: "Online Shop Buku",
    image: "/assets/web3 (1).jpeg",
    link: "https://github.com/Inimita/ujikom",
  },
];

const figma = [
  {
    title: "Protoype Pencarian Lomba",
    image: "/assets/SearchLomba.png",
    link: "https://www.figma.com/proto/1OeYGKC0etRAwUg8Ffcszu/Miftah-Kamiliyah-X-RPL?node-id=1-2&starting-point-node-id=1%3A2&t=f93KB6owZiUDTHU4-1",
  },
  {
    title: "Redesign LinkAja",
    image: "/assets/LinkAja.png",
    link: "https://www.figma.com/proto/aUVIfzbKfOYlhyT187kU3V/LinkAja?node-id=4-2&starting-point-node-id=4%3A2&t=pzTxzd43QYNbRYPT-1",
  },
  {
    title: "Cloning Website Viu",
    image: "/assets/wiu.png",
    link: "https://www.figma.com/proto/byYJBmxE1POXAMWCLo4w8H/IMK-Project?node-id=13-254&starting-point-node-id=13%3A254&t=guNP03MTzSGEHL4o-1", 
  },
];

const socials = [
  {
    label: "Email",
    href: "mailto:miftahkamiiyah927@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/Inimita",
    icon: Code2,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/miftah-kamiliyah-60615137a",
    icon: BriefcaseBusiness,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/_kamlyh",
    icon: Camera,
  },
];

// Style kaca (glassmorphism) yang dipakai berulang
const glass =
  "bg-white/[0.18] backdrop-blur-[12px] shadow-[0_8px_24px_rgba(0,0,0,0.12)]";

// APP
function App() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const nama = new FormData(form).get("nama");

    setFormMessage(`Halo ${nama}, pesan Anda berhasil terkirim!`);
    form.reset();
  };

  return (
    <div className={dark ? "dark" : ""}>
      <div className="page-bg min-h-screen font-['Poppins',sans-serif] text-[#0b1d3a] dark:text-[whitesmoke]">
        {/* ================= HEADER ================= */}

        <header className="relative flex items-center justify-between border-b border-white/25 px-[8%] py-4 text-[rgb(17,19,29)] dark:text-[whitesmoke]">
          <div className="md:pl-[30px]">
            <h1 className="text-[1.6rem] font-semibold md:text-[30px]">
              MyPorto
            </h1>
          </div>

          <nav className="hidden lg:block">
            <ul className="flex items-center">
              {navLinks.map((l) => (
                <li key={l.href} className="ml-5 list-none">
                  <a
                    href={l.href}
                    className="cursor-pointer px-6 text-[17px] text-[#0b1020] transition-colors hover:text-white xl:px-10 dark:text-[whitesmoke] dark:hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center md:pr-5">
            <button
              onClick={() => setDark(!dark)}
              className="ml-3 cursor-pointer rounded-[10px] border border-white/40 bg-white/[0.12] px-[18px] py-2 text-sm text-white transition-colors hover:text-[rgb(17,19,29)] md:ml-5 md:text-base"
            >
              {dark ? "Light Mode" : "Dark Mode"}
            </button>

            <a
              href="#contact"
              className="ml-3 hidden cursor-pointer rounded-[10px] border border-white/40 bg-white/[0.12] px-[18px] py-2 text-white transition-colors hover:text-[rgb(17,19,29)] sm:inline-block md:ml-5"
            >
              Contact
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="ml-3 lg:hidden"
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {menuOpen && (
            <div
              className={`${glass} absolute left-0 right-0 top-full z-50 flex flex-col gap-4 px-[8%] py-5 lg:hidden`}
            >
              {[...navLinks, { label: "Contact", href: "#contact" }].map((l) => (
                <a key={l.href} href={l.href} onClick={closeMenu}>
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </header>

        <main>
          {/* Hero */}
          <section
            id="home"
            className="flex min-h-screen flex-col items-center justify-center px-5 pb-[200px] pt-[120px] text-center text-[#0b1020] md:pt-[180px] dark:text-[whitesmoke]"
          >
            <h1 className="font-['Inter',sans-serif] text-[2rem] font-semibold sm:text-[45px]">
              Hello, I'm Miftah Kamiliyah
            </h1>
            <p className="pt-10 text-[20px]">
              Welcome to my portfolio website!
            </p>
          </section>

          {/* About Me */}
          <section
            id="about"
            className="flex flex-col items-center gap-6 px-[5%] pt-[10px] md:flex-row md:justify-between md:gap-[100px] md:pl-[60px]"
          >
            <img
              src="/assets/profile.jpeg"
              alt="Profile Picture"
              className="h-[350px] w-[450px] shrink-0 rounded-xl object-cover"
            />

            <p className="p-5 text-center text-lg text-[rgba(11,16,32,0.75)] md:mr-[50px] md:p-10 md:text-left dark:text-[whitesmoke]">
              A beginner student exploring web development and information
              systems. Currently learning to build simple web projects using
              HTML, CSS, and JavaScript, with basic exposure to backend and
              databases. This project represents my learning journey and my
              effort to understand fundamental web development concepts through
              practice.
            </p>
          </section>

          {/* Projects */}
          <section id="project" className="px-5 py-[60px] md:px-20">
            <h2 className="mb-[30px] pb-[30px] pt-[50px] text-center text-[1.8rem] font-semibold">
              Project Website
            </h2>

            <ul className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-7">
              {projects.map((p) => {
                const content = (
                  <>
                    <img
                      src={p.image}
                      alt={p.title}
                      className="block h-[180px] w-full object-cover"
                    />
                    <p className="p-4 text-center text-sm font-medium sm:text-base">
                      {p.title}
                    </p>
                  </>
                );

                return (
                  <li
                    key={p.title}
                    className={`${glass} list-none overflow-hidden rounded-[18px] transition duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,0,0,0.18)]`}
                  >
                    {p.link ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="block no-underline"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </section>

          <section id="project" className="px-5 py-[60px] md:px-20">
            <h2 className="mb-[30px] pb-[30px] text-center text-[1.8rem] font-semibold">
              Project Figma
            </h2>

            <ul className="grid grid-cols-[repeat(auto-fit,minmax(250px,340px))] justify-center gap-7">
              {figma.map((f) => {
                const content = (
                  <>
                    <div className="p-4 pb-0">
                      <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl bg-black/5">
                        <img
                          src={f.image}
                          alt={f.title}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    </div>
                    <p className="p-4 text-center text-sm font-medium sm:text-base">
                      {f.title}
                    </p>
                  </>
                );

                return (
                  <li
                    key={f.title}
                    className={`${glass} list-none overflow-hidden rounded-[18px] transition duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,0,0,0.18)]`}
                  >
                    {f.link ? (
                      <a
                        href={f.link}
                        target="_blank"
                        rel="noreferrer"
                        className="block no-underline"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        </main>

        {/* Footer */}
        <footer className="flex flex-col items-center gap-[60px] px-5 pb-10 pt-10">
          {/* CONTACT LINKS */}

          <div className="text-center">
            <h2 className="mb-5 text-[1.2rem] font-semibold">
              You can contact me at:
            </h2>

            <ul className="mb-[30px] flex justify-center gap-[22px]">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label} className="list-none">
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={label}
                    className="block cursor-pointer text-[#1e40af] transition duration-300 hover:-translate-y-1 hover:text-[#2563eb] dark:text-[whitesmoke] dark:hover:text-[whitesmoke]"
                  >
                    <Icon size={24} />
                  </a>
                </li>
              ))}
            </ul>

            <p>&copy; 2026 MyPorto. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;