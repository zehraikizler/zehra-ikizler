import Education from "@/components/education";
import Experience from "@/components/experience";
import Title from "@/components/ui/title";
import React from "react";

const AboutPage = () => {
  return (
    <div className="mx-56">
      <Title>About</Title>
      <Experience />
      <Education />
    </div>
  );
};

export default AboutPage;
