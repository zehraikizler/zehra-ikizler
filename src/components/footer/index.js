import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <footer className="py-2 text-xs flex items-center justify-between px-4 flex-col lg:flex-row gap-y-1">
      <div className="text-center">
        Copyright © {new Date().getFullYear()} All rights reserved
      </div>
      <div className="flex justify-center items-center flex-col lg:flex-row gap-x-8">
        <div className="text-center">
          This template is made with ❤️ by Zehra
        </div>
        <div className="flex items-center justify-center flex-row gap-x-3">
          <Link
            href="https://www.linkedin.com/in/zehraikizler/"
            className="flex items-center gap-1"
            target="_blank"
          >
            <FaLinkedinIn size={14} />
            LinkedIn
          </Link>
          <Link
            href="https://github.com/zehraikizler"
            className="flex items-center gap-1"
            target="_blank"
          >
            <FaGithub size={14} />
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;