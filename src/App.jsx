import React from 'react';
import { useEffect, useState } from "react";
import {
  Github, Linkedin, Menu, X, Download, ArrowUpRight, Mail,
  BriefcaseBusiness, Code2, BrainCircuit, ChartNoAxesCombined,
  Clapperboard, Globe, Sparkles, Database, Wrench, Users
} from "lucide-react";
import Contact from "./components/Contact.jsx";

const github = "https://github.com/tanyapl-17";
const linkedin = "https://www.linkedin.com/in/tanya-patel-632153352/";

const skills = [
  { title: "Programming", icon: Code2, tags: ["Python", "SQL basics", "C++", "Java basics"] },
  { title: "AI & Machine Learning", icon: BrainCircuit, tags: ["Machine Learning", "NLP basics", "Scikit-learn", "Model evaluation"] },
  { title: "Data & Visualization", icon: ChartNoAxesCombined, tags: ["Pandas", "NumPy", "Matplotlib", "Data analysis"] },
  { title: "Web & Applications", icon: Globe, tags: ["Streamlit", "HTML", "CSS", "JavaScript basics"] },
  { title: "Tools", icon: Wrench, tags: ["Git", "GitHub", "VS Code", "Jupyter"] },
  { title: "Professional Skills", icon: Users, tags: ["Problem-solving", "Communication", "Teamwork", "Continuous learning"] }
];

const projects = [
  {
    icon: ChartNoAxesCombined,
    type: "DATA ANALYTICS",
    title: "Sales IQ — Sales Intelligence",
    description: "An interactive sales analytics dashboard for exploring sales trends, prediction results, customer segments, and business insights.",
    tags: ["Python", "Streamlit", "Machine Learning", "Data Visualization"],
    demo: "https://salesdemo.streamlit.app/",
    repo: "https://github.com/tanyapl-17/cognevance_sales_prediction",
    demoLabel: "Live Demo",
    repoLabel: "Source Code"
  },
  {
    icon: BrainCircuit,
    type: "AI APPLICATION",
    title: "Nexa AI Chatbot",
    description: "An interactive learning chatbot that responds to common questions using an intent-based NLP approach and a simple web interface.",
    tags: ["Python", "NLP", "Scikit-learn", "Streamlit"],
    demo: "https://nexaaibot.streamlit.app/",
    repo: "https://github.com/tanyapl-17/cognevance_ai_chatbot",
    demoLabel: "Live Demo",
    repoLabel: "Source Code"
  },
  {
    icon: Clapperboard,
    type: "RECOMMENDATION SYSTEM",
    title: "Movie Recommendation System",
    description: "A Python project that explores movie ratings and generates recommendations from a movie and ratings dataset.",
    tags: ["Python", "Pandas", "Recommendation Logic", "Data Analysis"],
    repo: "https://github.com/tanyapl-17/cognevance_movie_recommendation",
    demo: "https://movie-recommendation26.streamlit.app/",
    demoLabel: "Live Demo",
    repoLabel: "Source Code"
  },
  {
    icon: Globe,
    type: "PERSONAL WEBSITE",
    title: "Developer Portfolio",
    description: "A responsive personal website presenting my skills, projects, and experience in a dark neon design.",
    tags: ["React", "CSS", "JavaScript", "Responsive Design"],
    demo: "https://tanya-patel-portfolio.vercel.app/",
    repo: "https://github.com/tanyapl-17/tanya-portfolio",
    demoLabel: "Live Demo",
    repoLabel: "Source Code"
  }
];

function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const navItems = [
    ["about", "About"], ["skills", "Skills"], ["projects", "Projects"],
    ["experience", "Experience"], ["contact", "Contact"]
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="logo" href="#home" onClick={() => setOpen(false)}>Tanya<span>.</span></a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="navLinks"
          onClick={() => setOpen(!open)}
        >{open ? <X size={21} /> : <Menu size={21} />}</button>
        <div className={`nav-links ${open ? "open" : ""}`} id="navLinks">
          {navItems.map(([id, label]) => (
            <a key={id} className={active === id ? "active" : ""} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function SectionHeading({ eyebrow, title, highlight, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title} <span className="gradient-text">{highlight}</span></h2>
      <div className="underline" />
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-content reveal">
          <div className="availability"><span className="dot" />Open to internships &amp; freelance opportunities</div>
          <h1>Hi, I’m Tanya.<br /><span className="gradient-text">Aspiring AI/ML Engineer</span><br />&amp; Python Developer.</h1>
          <p className="hero-copy">Turning ideas into intelligent solutions with Python &amp; AI/ML. I build practical applications and explore machine learning, NLP, and data-driven tools to solve real-world problems.</p>
          <a className="btn btn-primary resume-button" href="/Tanya_Patel_resume.pdf" download="Tanya_Patel_resume.pdf">
            <Download size={17} /> Download Resume
          </a>
          <div className="follow-row">
            <span>Follow Me</span>
            <a className="social-icon" href={github} target="_blank" rel="noreferrer" aria-label="Tanya Patel on GitHub"><Github size={20} /></a>
            <a className="social-icon" href={linkedin} target="_blank" rel="noreferrer" aria-label="Tanya Patel on LinkedIn"><Linkedin size={20} /></a>
          </div>
        </div>
        <aside className="profile-card reveal">
          <div className="avatar">
            <img src="/tanya-photo.jpeg" alt="Tanya Patel" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://github.com/tanyapl-17/tanya-portfolio/raw/main/tanya-photo.jpeg"; }} />
          </div>
          <h2>Tanya Patel</h2>
          <p>B.Tech CSE (AI &amp; ML) · Third Year</p>
          <div className="profile-role"><Sparkles size={16} /><span>Aspiring AI/ML Engineer | Python Developer</span></div>
          <div className="mini-grid">
            <div className="mini-box"><strong>Python</strong><span>Development</span></div>
            <div className="mini-box"><strong>AI / ML</strong><span>Applied projects</span></div>
            <div className="mini-box"><strong>Data</strong><span>Analysis &amp; insights</span></div>
            <div className="mini-box"><strong>Web Apps</strong><span>Interactive tools</span></div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <div className="container reveal">
        <SectionHeading eyebrow="01. About Me" title="A little about" highlight="my journey" />
        <div className="about-grid">
          <div className="about-copy">
            <p>I’m a third-year <strong>B.Tech Computer Science student specializing in Artificial Intelligence and Machine Learning</strong>. I enjoy building projects that help me apply programming and data concepts to practical problems.</p>
            <p>My current interests include <strong>Python development, machine learning, NLP, data analysis, and AI-powered applications</strong>. I learn by building, testing, improving, and documenting projects.</p>
            <p>I’m looking for internships and suitable freelance opportunities where I can contribute, strengthen my skills, and work on real-world problems.</p>
            <blockquote className="about-quote">“Dream big, keep learning, and build things that make a difference.”<span>— Tanya Patel</span></blockquote>
          </div>
          <div className="stat-grid">
            <div className="stat"><strong>Python</strong><span>Core development skill</span></div>
            <div className="stat"><strong>AI / ML</strong><span>Learning through projects</span></div>
            <div className="stat"><strong>Streamlit</strong><span>Interactive web apps</span></div>
            <div className="stat"><strong>GitHub</strong><span>Project version control</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills">
      <div className="container reveal">
        <SectionHeading eyebrow="02. Technical Skills" title="Tools I" highlight="work with" description="A selection of technologies used in my learning and projects. I continue to improve these skills through hands-on practice." />
        <div className="skills-grid">
          {skills.map(({ title, icon: Icon, tags }) => (
            <article className="skill-card" key={title}>
              <h3><Icon size={18} />{title}</h3>
              <div className="skill-list">{tags.map((tag) => <span className="skill-tag" key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects">
      <div className="container reveal">
        <SectionHeading eyebrow="03. Featured Work" title="Projects built with" highlight="purpose" description="Explore my Python, machine learning, and data-focused projects. Open the live demos to try the deployed applications." />
        <div className="projects-grid">
          {projects.map(({ icon: Icon, type, title, description, tags, demo, repo, demoLabel, repoLabel }) => (
            <article className="project-card" key={title}>
              <div className="project-top"><div className="project-icon"><Icon size={23} /></div><span className="project-type">{type}</span></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="project-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className="project-links">
                {demo && <a href={demo} target="_blank" rel="noreferrer">{demoLabel || "Live Demo"} <ArrowUpRight size={15} /></a>}
                <a href={repo} target="_blank" rel="noreferrer">{repoLabel || "Source Code"} <ArrowUpRight size={15} /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience">
      <div className="container reveal">
        <SectionHeading eyebrow="04. Experience" title="Learning through" highlight="experience" description="Internship experience and project-based learning." />
        <div className="timeline">
          <article className="timeline-card">
            <div className="timeline-head"><h3>Frontend Development Intern</h3><span className="timeline-date">7 February 2026 – 11 March 2026</span></div>
            <p className="timeline-company">CodeAlpha</p>
            <ul>
              <li>Worked on frontend development tasks as part of an internship.</li>
              <li>Practiced building and improving user-facing web interfaces.</li>
              <li>Developed practical experience with web development workflows.</li>
            </ul>
          </article>
          <article className="timeline-card">
            <div className="timeline-head"><h3>AI/ML Intern <span className="ongoing-pill">Ongoing</span></h3><span className="timeline-date">October 2026 – Present</span></div>
            <p className="timeline-company">Cognevance Technologies</p>
            <ul>
              <li>Building AI/ML learning projects, including a chatbot and a movie recommendation system.</li>
              <li>Practicing Python-based data processing and machine learning concepts.</li>
              <li>Documenting project work and code in GitHub repositories.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("visible"));
      return;
    }
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  
useEffect(() => {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const handleScroll = () => {
    const scrolled = window.scrollY > 40;
    header.classList.toggle("header-scrolled", scrolled);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer>
        <div className="container">
          <p>© {new Date().getFullYear()} <strong>Tanya Patel</strong></p>
          <span>Aspiring AI/ML Engineer | Python Developer</span>
        </div>
      </footer>
    </>
  );
}
