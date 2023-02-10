import React, { useState, useEffect } from "react";

export const useMousePos = () => {
  const [mousePos, setMousePos] = useState({});
  useEffect(() => {
    const getMousePos = (e) => {
      const posX = scrollX + e.clientX - 50;
      const posY = scrollY + e.clientY - 50;
      setMousePos({ posX, posY });
    };
    document.addEventListener("mousemove", getMousePos);
    return function cleanup() {
      document.removeEventListener("mousemove", getMousePos);
    };
  });
  return mousePos;
};
