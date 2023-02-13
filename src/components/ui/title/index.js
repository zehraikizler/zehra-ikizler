import React from "react";

function Title({ children }) {
  return (
    <h3 className="pt-16 mb-10 text-3xl underline font-semibold font-mono text-primary">
      {children}
    </h3>
  );
}

export default Title;
