import Education from "@/components/education";
import Experience from "@/components/experience";
import Technologies from "@/components/technologies";
import Trainings from "@/components/trainings";
import Title from "@/components/ui/title";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="mx-80">
      <div className="mx-16 pt-20 relative mb-[550px]">
        <h3 className="font-bold text-9xl text-dark font-mono">
          Hello, <br /> I'm
          <br /> Zehra.
        </h3>
        <div className="absolute" style={{ right: 0 }}>
          <Image
            src="https://media.licdn.com/dms/image/D4D03AQEpP_jIAnIviw/profile-displayphoto-shrink_800_800/0/1670316527183?e=1681948800&v=beta&t=tGVAfswQ6c2YMnnul00B1Xk8oesV1cZ7RZj9QZ-JKLY"
            alt="profile"
            className="rounded-2xl"
            width="450"
            height="450"
          />
        </div>
      </div>

      <div className="mx-16">
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
  );
};

export default AboutPage;
