import React from 'react';
import { useState } from "react";
import { Mail, Linkedin, Github, ArrowUpRight, Send } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      window.alert("Please complete all fields.");
      return;
    }
    const subject = encodeURIComponent("Portfolio inquiry from " + name.trim());
    const body = encodeURIComponent(
      "Name: " + name.trim() + "\n" +
      "Email: " + email.trim() + "\n\n" +
      "Message:\n" + message.trim()
    );
    window.location.href = `mailto:pateltanya559@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact">
      <div className="container reveal">
        <div className="section-heading">
          <span className="eyebrow">06. Contact</span>
          <h2 className="section-title">Let’s build something <span className="gradient-text">useful</span></h2>
          <div className="underline" />
          <p className="section-description">Have an internship opportunity, a Python project, or an idea to discuss? Feel free to reach out.</p>
        </div>

        <div className="contact-grid">
          <div>
            <h3>Connect with me</h3>
            <p className="contact-copy">I’m interested in AI/ML internships, Python development, collaborative projects, and suitable freelance work.</p>
            <div className="contact-list">
              <a className="contact-item" href="mailto:pateltanya559@gmail.com">
                <span className="contact-icon"><Mail size={20} /></span>
                <span><strong>Email</strong><small>pateltanya559@gmail.com</small></span>
                <ArrowUpRight className="contact-arrow" size={16} />
              </a>
              <a className="contact-item" href="https://www.linkedin.com/in/tanya-patel-632153352/" target="_blank" rel="noreferrer">
                <span className="contact-icon"><Linkedin size={20} /></span>
                <span><strong>LinkedIn</strong><small>Connect professionally</small></span>
                <ArrowUpRight className="contact-arrow" size={16} />
              </a>
              <a className="contact-item" href="https://github.com/tanyapl-17" target="_blank" rel="noreferrer">
                <span className="contact-icon"><Github size={20} /></span>
                <span><strong>GitHub</strong><small>Explore my code</small></span>
                <ArrowUpRight className="contact-arrow" size={16} />
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">YOUR NAME</label>
              <input id="name" name="name" type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">YOUR EMAIL</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">MESSAGE</label>
              <textarea id="message" name="message" placeholder="Tell me about your opportunity or project..." value={message} onChange={(e) => setMessage(e.target.value)} required />
            </div>
            <button className="btn btn-primary contact-submit" type="submit"><Send size={16} /> Send Email</button>
            <p className="form-note">This opens your email application with the message prepared for you to send.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
