import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <a href="#about" className="link link-hover">About</a>
        <a href="#portfolio" className="link link-hover">Portfolio</a>
        <a href="#contact" className="link link-hover">Contact</a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:hello@example.com" className="hover:text-primary transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by Christopher Mobley</p>
      </div>
    </footer>
  );
}
