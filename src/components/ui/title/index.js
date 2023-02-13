import React from "react";

function Title({ children }) {
  return (
    <h3 className="pt-14 mb-10 text-3xl pb-3 font-semibold font-mono text-primary text-center">
      {children}
    </h3>
  );
}

export default Title;
