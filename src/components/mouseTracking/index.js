"use client";
import React from "react";
import { useMousePos } from "./useMousePos";
import "./style.css";

function MouseTracking() {
  const { posX, posY } = useMousePos();
  return (
    <span
      className="mouse-tracking absolute z-20"
      style={{ left: posX, top: posY }}
    ></span>
  );
}

export default MouseTracking;
