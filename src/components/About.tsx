"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Layout, Server, Database, Smartphone, Zap } from "lucide-react";

const skills = [
  { name: "Frontend", icon: <Layout />, description: "React, Next.js, Tailwind CSS" },
  { name: "Backend", icon: <Server />, description: "Node.js, Express, Python" },
  { name: "Database", icon: <Database />, description: "PostgreSQL, MongoDB, Redis" },
  { name: "Mobile", icon: <Smartphone />, description: "React Native, Expo" },
  { name: "Performance", icon: <Zap />, description: "Optimization, SEO, Analytics" },
  { name: "Architecture", icon: <Code />, description: "System Design, Microservices" },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-base-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              I create digital products that solve real-world problems.
            </h3>
            <p className="text-lg text-base-content/70 mb-6 leading-relaxed">
              With over 5 years of experience in full-stack development, I specialize in building scalable, high-performance web applications. My passion lies in crafting intuitive user interfaces backed by robust architecture.
            </p>
            <p className="text-lg text-base-content/70 mb-6 leading-relaxed">
              I believe in the power of clean code and user-centric design. Whether it's a complex enterprise dashboard or a creative portfolio, I bring the same level of attention to detail and craftsmanship to every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="p-6 bg-base-200 rounded-xl hover:bg-base-300 transition-colors cursor-default"
              >
                <div className="text-primary mb-4">{skill.icon}</div>
                <h4 className="text-xl font-bold mb-2">{skill.name}</h4>
                <p className="text-sm text-base-content/60">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
