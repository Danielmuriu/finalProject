import React from "react";

const SectionWrapper = ({ children, className }) => {
  return (
    <section className={`py-20 px-6 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
};

export default SectionWrapper;
