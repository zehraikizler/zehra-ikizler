import React from "react";
import "./style.css";
import { motion, Variants } from "framer-motion";
import dayjs from "dayjs";

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const WorkCard = ({ item }) => {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash bg-slate-50" />
      <motion.div className="card text-black" variants={cardVariants}>
        <h2 className="text-2xl font-bold lowercase text-center text-black mb-8">
          {item.name}
        </h2>
        {item.description ? (
          <p>{item.description}</p>
        ) : (
          <p>Kendimi geliştirmek için yaptığım çalışmadır.</p>
        )}

        <div className="my-10 text-sm flex justify-between text-secondary">
          <span>{item.language}</span>
          <span>{dayjs(item.created_at).format("DD.MM.YYYY")}</span>
        </div>
        <a
          href={item.clone_url}
          target="_blank"
          className="bg-gray-900 text-white text-center w-24 mx-auto mt-10 h-8 p-1 font-bold rounded-md z-40"
        >
          Detail
        </a>
      </motion.div>
    </motion.div>
  );
};

export default WorkCard;
