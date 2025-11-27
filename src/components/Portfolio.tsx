"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  repoUrl: string;
}

const projects: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Dashboard",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    description: "A comprehensive analytics dashboard for e-commerce businesses. Features real-time data visualization, inventory management, and sales reporting.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: "project-2",
    title: "AI Content Generator",
    category: "SaaS Platform",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    description: "An AI-powered platform that helps creators generate blog posts, social media captions, and marketing copy in seconds.",
    technologies: ["React", "OpenAI API", "Node.js", "Stripe"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: "project-3",
    title: "Finance Tracker App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
    description: "A personal finance application helping users track expenses, set budgets, and visualize spending habits.",
    technologies: ["React Native", "Firebase", "Expo", "Redux"],
    demoUrl: "#",
    repoUrl: "#",
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="py-20 bg-base-200">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Work</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative overflow-hidden rounded-2xl bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-base-content/70 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Native Dialog Modal */}
      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle backdrop:bg-black/50 backdrop:backdrop-blur-sm">
        <div className="modal-box w-11/12 max-w-4xl p-0 overflow-hidden bg-base-100 relative">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 z-50 bg-base-100/50 backdrop-blur-sm text-base-content" onClick={closeModal}>
              <X size={20} />
            </button>
          </form>
          
          {selectedProject && (
            <div className="flex flex-col md:flex-row h-full">
              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-100 to-transparent md:hidden"></div>
              </div>
              
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">
                  {selectedProject.category}
                </div>
                <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
                <p className="text-base-content/80 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-sm font-bold uppercase tracking-wider mb-3 text-base-content/50">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="badge badge-outline p-3">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4 mt-auto">
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary flex-1"
                  >
                    Live Demo <ExternalLink size={18} className="ml-2" />
                  </a>
                  <a
                    href={selectedProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline flex-1"
                  >
                    Source Code <Github size={18} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={closeModal}>close</button>
        </form>
      </dialog>
    </section>
  );
}
