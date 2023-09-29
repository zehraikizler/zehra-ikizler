"use client";
import React from "react";
import Education from "../../components/education";
import Experience from "../../components/experience";
import Technologies from "../../components/technologies";
import Trainings from "../../components/trainings";
import Title from "../../components/ui/title";
import { motion } from "framer-motion";

function About() {
  return (
    <div>
      <div className="h-screen mx-8 lg:mx-16 relative flex items-center justify-center">
        <motion.h3
          className="font-bold text-6xl lg:text-9xl text-dark font-mono"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 10,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          Hello, <br /> I'm
          <br /> Zehra.
        </motion.h3>
      </div>

      <div className="mx-8 lg:mx-16">
        <Title>About Me</Title>
        <p className="text-xl font-semibold text-dark font-sans mb-20 leading-8">
          Classroom Teaching at Trabzon University as you continue reading in
          the section I started writing my first code with my interest. I
          learned HTML, CSS and Bootstrap and did a few projects in the
          Front-End area. I started learning SCSS and JavaScript to progress
          further in the software field. After being accepted to the Hi-Kod
          Atolye organized by the Kodluyoruz team, I started working on
          React.Js. I continued learning React.Js with my curiosity. I tried to
          support my development by participating in the trainings held in
          Trabzon Teknokent. I attended the React Bootcamp organized by
          Kodluyoruz. I am currently working as Frontend Developer at Kodline
          company. Detail i like to dwell on it and deal with the details. I
          never shy away from taking responsibility.
        </p>
        <Technologies />
        <Experience />
        <Education />
        <Trainings />
      </div>
    </div>
  )
}

export default About;
