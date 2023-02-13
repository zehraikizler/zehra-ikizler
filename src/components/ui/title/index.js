import React from "react";

function Title({ children }) {
  return (
    <h3 className="pt-14 mb-4 text-3xl pb-3 font-bold font-mono text-danger text-center">
      {children}
    </h3>
  );
}

export default Title;
