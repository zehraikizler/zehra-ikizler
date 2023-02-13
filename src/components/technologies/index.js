import React from "react";
import { BsCloud } from "react-icons/bs";

function Technologies() {
  const technologies = [
    {
      id: 1,
      name: "HTML",
    },
    {
      id: 2,
      name: "CSS",
    },
    {
      id: 3,
      name: "Bootstrap",
    },
    {
      id: 4,
      name: "Tailwind.css",
    },
    {
      id: 5,
      name: "SASS/SCSS",
    },
    {
      id: 6,
      name: "Javascript",
    },
    {
      id: 7,
      name: "React.Js",
    },
    {
      id: 8,
      name: "Vue.Js",
    },
    {
      id: 9,
      name: "Angular.Js",
    },
    {
      id: 10,
      name: "Next.Js",
    },
    {
      id: 11,
      name: "TypeScript",
    },
    {
      id: 12,
      name: "Firebase",
    },
    {
      id: 13,
      name: "Figma",
    },
  ];
  return (
    <div className="mb-14 text-dark">
      <h2 className="text-xl font-semibold text-danger underline my-3">
        Technologies I Use
      </h2>
      <ol className="space-y-2">
        {technologies.map((item) => (
          <li key={item.id} className="flex gap-x-2 items-center">
            <BsCloud className="text-danger opacity-50" size={24} />
            <span className="font-semibold">{item.name}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Technologies;
