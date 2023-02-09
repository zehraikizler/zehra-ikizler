import React from "react";
import { GrMail } from "react-icons/gr";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function LeftSidebar() {
  return (
    <div className="min-h-screen bg-light text-dark fixed w-52">
      <div className="sidebar min-h-screen w-52 overflow-hidden border-r">
        <div className="flex h-screen flex-col justify-between pt-2 pb-6">
          <div className="flex items-center justify-center">
            <a
              href="#"
              className="font-bold text-5xl font-dancing tracking-wide mt-10 cursor-pointer"
            >
              Zİ
            </a>
          </div>
          <div className="flex justify-center items-center">
            <div className="h-96 w-[1px] bg-dark rounded-lg"></div>
          </div>
          <div className="flex items-center justify-center -mb-1">
            <ul className="space-y-6 tracking-wide">
              <li className="min-w-max">
                <a href="#" className="flex items-center px-4 py-3">
                  <GrMail size={32} />
                </a>
              </li>
              <li className="min-w-max">
                <a
                  href="https://www.linkedin.com/in/zehra-ikizler-831573208/"
                  className="flex items-center px-4 py-3"
                >
                  <FaLinkedinIn size={32} />
                </a>
              </li>
              <li className="min-w-max">
                <a
                  href="https://github.com/zehraikizler"
                  className="flex items-center px-4 py-3"
                >
                  <FaGithub size={32} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
