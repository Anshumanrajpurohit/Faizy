import React, { useState, useEffect } from "react";
import { FaGithub, FaInstagram, FaTwitter, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import '../style/about.css';

const words = ["developer", "engineer", "crazy dev"];

function AboutUs() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 120;
    const currentWord = words[wordIndex];

    const timer = setTimeout(() => {
      setText((prevText) => {
        if (!isDeleting) {
          return currentWord.slice(0, prevText.length + 1);
        } else {
          return currentWord.slice(0, prevText.length - 1);
        }
      });

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 800);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <div className="about-container">
      <h1 className="typewriter">This is the <span>{text}</span><span className="cursor">|</span></h1>

      <div className={`card ${active ? "shift" : "center"}`} onClick={() => setActive(!active)}>
        <img
          src="https://avatars.githubusercontent.com/u/1?v=4"
          alt="profile"
          className="profile-img"
        />
        <div className="card-text">
          <h2>Your Name</h2>
          <p>Full-stack web developer with a passion for building cool projects and solving real-world problems. Skilled in React, Node.js, Express, MongoDB, and more.</p>
        </div>
      </div>

      <div className="tech-stack">
        <h3>Tech Stack</h3>
        <div className="stack-list">
          <span>React</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>Express</span>
          <span>Tailwind</span>
          <span>Firebase</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
        </div>
      </div>

      <div className="social-icons">
        <a href="https://github.com/" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://instagram.com/" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FaTwitter /></a>
        <a href="https://wa.me/" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      </div>
    </div>
  );
}

export default AboutUs;
