"use client";
import React, { useEffect, useState } from "react";
import { GetAllData, GetReposApi } from "@/services/index";
import WorkCard from "@/components/workCard";

function WorkPage() {
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

  console.log(getRepo);

  return (
    <div className="mx-60 pt-8">
      <h1 className="text-center my-10 font-extrabold text-4xl text-dark font-sans">
        WORKS
      </h1>
      <div className="grid grid-cols-2">
        {getRepo.map((item) => (
          <div key={item.id}>
            <WorkCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkPage;
