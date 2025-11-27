"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-100 to-base-200 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl mix-blend-screen animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl font-medium text-primary mb-4 tracking-widest uppercase">
            Hello, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Christopher
            <br />
            Mobley
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-xl md:text-2xl text-base-content/80 max-w-2xl mx-auto mb-10 font-light">
            Building digital experiences that merge <span className="text-secondary font-semibold">art</span> and <span className="text-primary font-semibold">technology</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <a href="#portfolio" className="btn btn-primary btn-lg rounded-full px-8 group">
            View My Work
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="btn btn-outline btn-lg rounded-full px-8">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
