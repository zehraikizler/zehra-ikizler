import React from "react";
import { GrMail } from "react-icons/gr";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";

function LeftSidebar() {
  return (
    <div className="min-h-screen bg-white text-dark absolute left-0 w-52 z-10">
      <div className="sidebar min-h-screen w-52 overflow-hidden fixed">
        <div className="flex h-screen flex-col justify-between pt-10 pb-6">
          <div className="flex justify-center items-center">
            <div className="h-96 w-[1px] bg-dark rounded-lg"></div>
          </div>
          <div className="flex items-center justify-center -mb-1">
            <ul className="space-y-3 tracking-wide">
              <li className="min-w-max">
                <Link href="#" className="flex items-center px-4 py-3">
                  <GrMail size={28} />
                </Link>
              </li>
              <li className="min-w-max">
                <Link
                  href="https://www.linkedin.com/in/zehraikizler/"
                  className="flex items-center px-4 py-3"
                  target="_blank"
                >
                  <FaLinkedinIn size={28} />
                </Link>
              </li>
              <li className="min-w-max">
                <Link
                  href="https://github.com/zehraikizler"
                  className="flex items-center px-4 py-3"
                  target="_blank"
                >
                  <FaGithub size={28} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
