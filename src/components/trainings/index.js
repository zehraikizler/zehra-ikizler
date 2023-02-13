import React from "react";

const Trainings = () => {
  return (
    <div className="mb-16">
      <h2 className="text-xl font-semibold text-danger underline my-3">
        Trainings I Have Taken
      </h2>
      <ol className="relative border-l border-secondary">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-danger rounded-full mt-1.5 -left-1.5 border border-secondary"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            26/03/2022 – 30/04/2022
          </time>
          <h3 className="text-lg font-semibold text-dark">
            Kodla, Kariyerine başla Javascript & React Bootcamp
          </h3>
          <p className="mb-1 text-base font-normal text-primary">Kodluyoruz</p>
          <p className="mb-4 font-normal text-gray-500 text-sm">Remote</p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-danger rounded-full mt-1.5 -left-1.5 border border-secondary"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            25/12/2021 – 30/01/2022
          </time>
          <h3 className="text-lg font-semibold text-dark">
            Condensed Web Development Training
          </h3>
          <p className="mb-1 text-base font-normal text-primary">
            Eastern Black Sea Development Agency
          </p>
          <p className="mb-4 font-normal text-gray-500 text-sm">
            Trabzon, Turkey
          </p>
        </li>
        <li className="ml-4">
          <div className="absolute w-3 h-3 bg-danger rounded-full mt-1.5 -left-1.5 border border-secondary"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            12/10/2021 – 31/01/2022
          </time>
          <h3 className="text-lg font-semibold text-dark">
            Hi Kod Frontend Web Development
          </h3>
          <p className="mb-1 text-base font-normal text-primary">Kodluyoruz</p>
          <p className="mb-4 font-normal text-gray-500 text-sm">Remote</p>
        </li>
      </ol>
    </div>
  );
};

export default Trainings;
