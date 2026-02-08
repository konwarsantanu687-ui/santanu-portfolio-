"use client";
import React from "react";

export default function Home() {
  // Hero Component
  const Hero = () => (
    <section className="hero">
      <div>
        <h1>Hi, I’m <span>Santanu Konwar</span></h1>
        <p>I design and build calm, meaningful web experiences.</p>
      </div>
    </section>
  );

  // Skills Component
  const Skills = () => {
    const skills = [
      { title: "Web Development", desc: "HTML, CSS, responsive layouts, modern standards." },
      { title: "UI / UX Design", desc: "Minimal interfaces focused on clarity and flow." },
      { title: "Problem Solving", desc: "Turning ideas into usable, real solutions." },
      { title: "Independent Builder", desc: "From concept to execution with care." },
    ];
    return (
      <section id="skills" className="container">
        <h2>Skills</h2>
        <div className="grid">
          {skills.map((s, i) => (
            <div key={i} className="card">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };

  // About Component
  const About = () => (
    <section id="about" className="container">
      <h2>About</h2>
      <div className="card">
        <p>
          I’m Santanu Konwar — a self-driven developer who enjoys building thoughtful,
          simple, and useful digital products.
        </p>
        <p>
          I learn by building and care deeply about clean design.
        </p>
      </div>
    </section>
  );

  // Contact Component
  const Contact = () => (
    <section id="contact" className="container contact">
      <h2>Contact</h2>
      <div className="card">
        Want to collaborate or just say hi?
        <br />
        <a href="mailto:your@email.com">Email Me</a>
      </div>
    </section>
  );

  // Footer Component
  const Footer = () => (
    <footer>
      © 2026 · Santanu Konwar
    </footer>
  );

  return (
    <>
      <nav className="navbar">
        <div className="nav-inner">
          <div className="logo">Santanu</div>
          <div>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <Hero />
      <Skills />
      <About />
      <Contact />
      <Footer />

      {/* Global Styles */}
      <style jsx>{`
        :root{
          --bg:#0b0f19;
          --fg:#e5e7eb;
          --muted:#9ca3af;
          --accent:#7dd3fc;
          --card:rgba(255,255,255,.05);
          --border:rgba(255,255,255,.12);
        }

        *{ margin:0; padding:0; box-sizing:border-box; font-family:Inter,system-ui; }
        html{ scroll-behavior:smooth; }
        body{ background:radial-gradient(60% 40% at 50% 0%, #1e293b 0%, transparent 70%), var(--bg); color:var(--fg); }

        /* NAV */
        .navbar{ position:fixed; top:0; width:100%; z-index:100; backdrop-filter:blur(12px); background:rgba(11,15,25,.6); border-bottom:1px solid var(--border); }
        .nav-inner{ max-width:1100px; margin:auto; padding:16px 24px; display:flex; justify-content:space-between; align-items:center; }
        .nav-inner a{ color:var(--muted); text-decoration:none; margin-left:24px; font-weight:500; }
        .nav-inner a:hover{ color:var(--accent); }
        .logo{ font-weight:600; letter-spacing:.3px; }

        /* HERO */
        .hero{ min-height:100vh; display:flex; align-items:center; justify-content:center; text-align:center; padding:120px 24px; }
        .hero h1{ font-size:64px; font-weight:700; letter-spacing:-1.6px; }
        .hero span{ color:var(--accent); }
        .hero p{ margin-top:18px; font-size:20px; color:var(--muted); }

        /* CONTAINER */
        .container{ max-width:1100px; margin:auto; padding:120px 24px; }
        h2{ font-size:32px; margin-bottom:28px; letter-spacing:-.5px; }

        /* GRID */
        .grid{ display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:24px; }
        .card{
          background:linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.02));
          border:1px solid var(--border);
          border-radius:18px;
          padding:26px;
          backdrop-filter:blur(14px);
          transition:.35s ease;
        }
        .card:hover{ transform:translateY(-6px); border-color:var(--accent); }
        .card h3{ font-size:18px; margin-bottom:10px; }
        .card p{ font-size:14px; line-height:1.7; color:var(--muted); }

        /* CONTACT */
        .contact a{
          display:inline-block;
          margin-top:14px;
          padding:12px 24px;
          border-radius:8px;
          background:var(--accent);
          color:#020617;
          font-weight:600;
          text-decoration:none;
        }

        /* FOOTER */
        footer{ text-align:center; padding:100px 20px; font-size:14px; color:#6b7280; }

        /* RESPONSIVE */
        @media(max-width:768px){ .hero h1{ font-size:44px; } }
      `}</style>
    </>
  );
}