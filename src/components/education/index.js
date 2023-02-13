import React from "react";

const Education = () => {
  return (
    <div className="pb-16">
      <h2 className="text-xl font-semibold text-danger underline my-3">
        Education
      </h2>
      <ol className="relative border-l border-secondary">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-danger rounded-full mt-1.5 -left-1.5 border border-secondary"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            January 2023 - On Going
          </time>
          <h3 className="text-lg font-semibold text-dark">
            Balikesir University
          </h3>
          <p className="mb-1 text-base font-normal text-gray-500">
            Computer and Instructional Technology Education
          </p>
          <p className="mb-4 font-normal text-gray-500 text-sm">
            Master Degree
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-danger rounded-full mt-1.5 -left-1.5 border border-secondary"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            September 2022 - On Going
          </time>
          <h3 className="text-lg font-semibold text-dark">
            Istanbul University
          </h3>
          <p className="mb-1 text-base font-normal text-gray-500">
            Computer Programming
          </p>
          <p className="mb-4 font-normal text-gray-500 text-sm">
            Associate Degree
          </p>
        </li>
        <li className="ml-4">
          <div className="absolute w-3 h-3 bg-danger rounded-full mt-1.5 -left-1.5 border border-secondary"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            September 2018 - June 2022
          </time>
          <h3 className="text-lg font-semibold text-dark">
            Trabzon University
          </h3>
          <p className="mb-1 text-base font-normal text-gray-500">
            Classroom Teacher
          </p>
          <p className="mb-4 font-normal text-gray-500 text-sm">
            Undergraduate
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Education;
