"use client";
import React, { useEffect, useState } from "react";
import { GetAllData } from "@/services/index";

function WorkPage() {
  const [getRepo, setGetRepo] = useState([]);

  useEffect(() => {
    const AxiosGetRepo = async () => {
      try {
        const data = await GetAllData();
        setGetRepo(await data);
      } catch (error) {
        console.log(error);
      }
    };
    AxiosGetRepo();
  }, []);

  return <div className="mx-60">{getRepo.login}</div>;
}

export default WorkPage;
