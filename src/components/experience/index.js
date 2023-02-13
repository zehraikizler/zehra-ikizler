import React from "react";

const Experience = () => {
  return (
    <div className="mb-16">
      <h2 className="text-lg font-semibold text-dark underline my-3">
        Experience
      </h2>
      <ol className="relative border-l border-secondary">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-secondary"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            March 2022 - On Going
          </time>
          <h3 className="text-lg font-semibold text-dark">
            Frontend Developer
          </h3>
          <p className="mb-1 text-base font-normal text-primary">
            Kodline Yazılım ve teknoloji Ltd. Şti.
          </p>
          <p className="mb-4 font-normal text-gray-500 text-sm">
            Balıkesir, Turkey - Full Time
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-secondary"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            July 2021 - October 2021
          </time>
          <h3 className="text-lg font-semibold text-dark">
            Frontend Developer
          </h3>
          <p className="mb-1 text-base font-normal text-primary">
            Bubo Creative
          </p>
          <p className="mb-4 font-normal text-gray-500 text-sm">
            Remote - Intern
          </p>
        </li>
        <li className="ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-secondary"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            June 2021 - July 2021
          </time>
          <h3 className="text-lg font-semibold text-dark">
            Frontend Developer
          </h3>
          <p className="mb-1 text-base font-normal text-primary">
            Ase Yazılım ve Bilişim Çözümleri San. Tic. Ltd. Şti.
          </p>
          <p className="mb-4 font-normal text-gray-500 text-sm">
            Remote - Intern
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Experience;
