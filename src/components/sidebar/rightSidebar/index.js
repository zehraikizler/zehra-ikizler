import React from "react";

function RightSidebar() {
  return (
    <div className="min-h-screen bg-light text-dark  w-52 absolute right-0 z-10">
      <div className="sidebar min-h-screen w-52 overflow-hidden fixed">
        <div className="flex h-screen flex-col justify-between pt-2 pb-6">
          <div className="flex items-center justify-center mt-10">
            <ul className="tracking-wide border border-primary font-extrabold text-md px-4">
              <li className="min-w-max border-b-2 border-dark flex items-center justify-center">
                <a href="#" className="flex items-center px-1 py-3">
                  Work
                </a>
              </li>
              <li className="min-w-max border-b-2 border-dark  flex items-center justify-center">
                <a href="#" className="flex items-center px-1 py-3">
                  About
                </a>
              </li>
              <li className="min-w-max flex items-center justify-center">
                <a href="#" className="flex items-center px-1 py-3">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center mb-4">
            <div className="h-96 w-[1px] bg-secondary rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
