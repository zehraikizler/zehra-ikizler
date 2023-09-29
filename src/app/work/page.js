"use client";
import React, { useEffect, useState } from "react";
import { GetAllData, GetReposApi } from "../../services/index";
import WorkCard from "../../components/workCard";

function Work() {
  const [getRepo, setGetRepo] = useState([]);

  useEffect(() => {
    const AxiosGetRepo = async () => {
      try {
        const data = await GetReposApi();
        setGetRepo(await data);
      } catch (error) {
        console.log(error);
      }
    };
    AxiosGetRepo();
  }, []);

  return (
    <div className="mx-10 pt-8 mb-20">
      <h1 className="text-center my-10 font-extrabold text-4xl text-dark font-sans">
        WORK
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1">
        {getRepo.map((item) => (
          <div key={item.id}>
            <WorkCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
